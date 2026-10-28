(() => {
  const root = document.documentElement;

  const toggle = document.querySelector("[data-theme-toggle]");
  if (toggle) {
    const apply = (theme) => {
      root.dataset.theme = theme;
      toggle.setAttribute("aria-label", theme === "dark" ? "Helle Darstellung" : "Dunkle Darstellung");
      document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#050f2e" : "#fffdf8");
    };
    apply(root.dataset.theme === "light" ? "light" : "dark");
    toggle.hidden = false;
    toggle.addEventListener("click", () => {
      const theme = root.dataset.theme === "light" ? "dark" : "light";
      apply(theme);
      try { localStorage.setItem("theme", theme); } catch (e) {}
    });
  }

  const areaData = document.getElementById("areas");
  if (areaData) {
    const areas = JSON.parse(areaData.textContent);
    const panel = document.getElementById("panel");
    const field = (key) => panel.querySelector(`[data-p="${key}"]`);
    const nodes = Array.from(document.querySelectorAll(".node"));
    const scope = document.querySelector(".scope");
    const step = 360 / areas.length;
    let selected = Math.max(0, nodes.findIndex((n) => n.hasAttribute("aria-current")));
    const select = (i) => {
      const area = areas[i];
      selected = i;
      nodes.forEach((n, j) => { if (i === j) n.setAttribute("aria-current", "true"); else n.removeAttribute("aria-current"); });
      field("t").textContent = area.title;
      field("n").textContent = `Bereich ${i + 1} von ${areas.length}`;
      field("w").textContent = area.why;
      field("c").replaceChildren(...area.items.map((x) => Object.assign(document.createElement("li"), { textContent: x })));
    };

    const sweep = document.querySelector(".sweep");
    const pause = document.querySelector(".scope-pause");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const period = 36000;
    let running = false, paused = false, angle = selected * step + 1, last = null;
    const frame = (t) => {
      if (reduced.matches) { running = false; return; }
      if (last !== null && !paused) angle = (angle + ((t - last) / period) * 360) % 360;
      last = t;
      sweep.style.transform = `rotate(${angle}deg)`;
      const i = Math.floor(angle / step) % areas.length;
      if (i !== selected) select(i);
      requestAnimationFrame(frame);
    };
    const list = () => {
      if (scope.querySelector(".area-list")) return;
      const ul = Object.assign(document.createElement("ul"), { className: "area-list" });
      areas.forEach((a) => { const li = document.createElement("li"); const b = document.createElement("b"); b.textContent = a.title + ": "; li.append(b, a.why); ul.append(li); });
      scope.append(ul);
    };
    const mode = () => {
      const still = reduced.matches;
      scope.classList.toggle("still", still);
      sweep.hidden = still;
      pause.hidden = still;
      nodes.forEach((n) => n.removeAttribute("aria-current"));
      if (still) { list(); return; }
      scope.querySelector(".area-list")?.remove();
      select(selected);
      last = null;
      if (!running) { running = true; requestAnimationFrame(frame); }
    };
    pause.addEventListener("click", () => {
      paused = !paused;
      pause.textContent = paused ? "Fortsetzen" : "Anhalten";
      pause.setAttribute("aria-pressed", String(paused));
    });
    panel.parentElement.addEventListener("pointerenter", () => { paused = true; });
    panel.parentElement.addEventListener("pointerleave", () => { paused = pause.getAttribute("aria-pressed") === "true"; });
    reduced.addEventListener?.("change", mode);
    mode();
  }

  const appKnoepfe = Array.from(document.querySelectorAll(".shot-app"));
  if (appKnoepfe.length && typeof HTMLDialogElement === "function") {
    let dialog;
    const bauen = () => {
      dialog = document.createElement("dialog");
      dialog.className = "app-dialog";
      dialog.setAttribute("aria-labelledby", "app-dialog-titel");
      dialog.innerHTML = '<div class="app-dialog-kopf"><div><h2 id="app-dialog-titel">So sieht das in der App aus</h2><p class="app-dialog-ort"></p></div><button type="button" class="app-dialog-zu" aria-label="Schließen">&times;</button></div>' +
        '<div class="app-dialog-flaeche"><div class="app-dialog-bild"><img alt="" decoding="async"><div class="app-dialog-mark" aria-hidden="true"><span></span></div></div></div>' +
        '<p class="app-dialog-fuss"></p>';
      document.body.appendChild(dialog);
      dialog.querySelector(".app-dialog-zu").addEventListener("click", () => dialog.close());
      dialog.addEventListener("click", (e) => { if (e.target === dialog || e.target.classList.contains("app-dialog-flaeche")) dialog.close(); });
      dialog.addEventListener("close", () => { document.documentElement.classList.remove("app-dialog-offen"); dialog.opener?.focus(); });
    };
    appKnoepfe.forEach((knopf) => {
      knopf.hidden = false;
      knopf.addEventListener("click", () => {
        if (!dialog) bauen();
        const a = JSON.parse(knopf.dataset.app);
        const bild = dialog.querySelector(".app-dialog-bild");
        const img = bild.querySelector("img");
        bild.style.setProperty("--ar", String(a.w / a.h));
        img.width = a.w; img.height = a.h;
        img.alt = "Ganze Ansicht der App mit Navigation. Der markierte Bereich ist der Ausschnitt, den die Abbildung auf der Seite zeigt: " + a.ort + ".";
        img.src = a.src;
        const m = dialog.querySelector(".app-dialog-mark");
        m.style.cssText = "left:" + a.mark.x * 100 + "%;top:" + a.mark.y * 100 + "%;width:" + a.mark.w * 100 + "%;height:" + a.mark.h * 100 + "%";
        m.classList.toggle("weiter", Boolean(a.weiter));
        m.querySelector("span").textContent = a.weiter ? "Ausschnitt, setzt sich nach unten fort" : "Ausschnitt der Abbildung";
        dialog.querySelector(".app-dialog-ort").textContent = a.ort;
        dialog.querySelector(".app-dialog-fuss").textContent = "Fiktive Demo-Daten aus der Pre-Alpha. Die Navigation links ist zum angezeigten Eintrag gerollt.";
        dialog.opener = knopf;
        document.documentElement.classList.add("app-dialog-offen");
        dialog.showModal();
        dialog.querySelector(".app-dialog-flaeche").scrollTop = 0;
      });
    });
  }

  document.querySelectorAll(".story-slides").forEach((reihe) => {
    const links = Array.from(reihe.querySelectorAll(".slide-open"));
    if (!links.length || typeof HTMLDialogElement !== "function") return;
    const pdf = reihe.querySelector(".hint a");
    const quelle = (link) => link.querySelector("img").getAttribute("src");
    const svg = (id) => '<svg class="ico" aria-hidden="true"><use href="#' + id + '"/></svg>';
    const dialog = document.createElement("dialog");
    dialog.className = "folien-dialog";
    dialog.setAttribute("aria-label", "Folien in voller Größe");
    dialog.innerHTML = '<div class="folien-kopf"><p class="folien-zahl" aria-live="polite"></p><p class="folien-titel"></p>' +
      (pdf ? '<a class="folien-pdf" href="' + pdf.getAttribute("href") + '" rel="noopener">PDF</a>' : "") +
      '<button type="button" class="folien-knopf folien-zu" aria-label="Schließen">' + svg("i-x") + '</button></div>' +
      '<div class="folien-buehne"><button type="button" class="folien-knopf folien-zurueck" aria-label="Vorherige Folie">' + svg("i-prev") + '</button>' +
      '<img alt="" decoding="async" width="1080" height="1350">' +
      '<button type="button" class="folien-knopf folien-weiter" aria-label="Nächste Folie">' + svg("i-next") + '</button></div>' +
      '<ol class="folien-punkte">' + links.map((_, i) => '<li><button type="button" aria-label="Folie ' + (i + 1) + '"></button></li>').join("") + "</ol>";
    document.body.appendChild(dialog);
    const img = dialog.querySelector("img");
    const punkte = Array.from(dialog.querySelectorAll(".folien-punkte button"));
    let aktuell = 0;
    let opener = null;
    const zeigen = (i) => {
      aktuell = (i + links.length) % links.length;
      const link = links[aktuell];
      img.src = quelle(link);
      img.alt = link.querySelector("img").alt;
      dialog.querySelector(".folien-zahl").textContent = (aktuell + 1) + " / " + links.length;
      dialog.querySelector(".folien-titel").textContent = link.dataset.titel || "";
      punkte.forEach((p, j) => p.setAttribute("aria-current", String(j === aktuell)));
      [aktuell - 1, aktuell + 1].forEach((j) => { const n = links[(j + links.length) % links.length]; if (n) new Image().src = quelle(n); });
    };
    dialog.querySelector(".folien-zu").addEventListener("click", () => dialog.close());
    dialog.querySelector(".folien-zurueck").addEventListener("click", () => zeigen(aktuell - 1));
    dialog.querySelector(".folien-weiter").addEventListener("click", () => zeigen(aktuell + 1));
    punkte.forEach((p, i) => p.addEventListener("click", () => zeigen(i)));
    dialog.addEventListener("click", (e) => { if (e.target === dialog || e.target.classList.contains("folien-buehne")) dialog.close(); });
    dialog.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); zeigen(aktuell - 1); }
      else if (e.key === "ArrowRight") { e.preventDefault(); zeigen(aktuell + 1); }
      else if (e.key === "Home") { e.preventDefault(); zeigen(0); }
      else if (e.key === "End") { e.preventDefault(); zeigen(links.length - 1); }
    });
    let startX = null;
    img.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
    img.addEventListener("touchend", (e) => {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      startX = null;
      if (Math.abs(dx) > 40) zeigen(aktuell + (dx < 0 ? 1 : -1));
    });
    dialog.addEventListener("close", () => {
      document.documentElement.classList.remove("app-dialog-offen");
      links[aktuell].scrollIntoView({ block: "nearest", inline: "nearest" });
      opener?.focus();
    });
    const oeffnen = (i, link) => {
      opener = link;
      zeigen(i);
      document.documentElement.classList.add("app-dialog-offen");
      dialog.showModal();
      dialog.querySelector(".folien-weiter").focus();
    };
    links.forEach((link, i) => link.addEventListener("click", (e) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      try {
        oeffnen(i, link);
        e.preventDefault();
      } catch (fehler) {}
    }));
  });

  document.querySelectorAll(".shot-set").forEach((set) => {
    const buttons = Array.from(set.querySelectorAll(".shot-switch button"));
    const shots = Array.from(set.querySelectorAll(":scope > .shot"));
    const show = (i) => {
      buttons.forEach((b, j) => b.setAttribute("aria-pressed", String(i === j)));
      shots.forEach((f, j) => { f.hidden = i !== j; });
    };
    buttons.forEach((b, i) => b.addEventListener("click", () => show(i)));
    set.querySelector(".shot-switch").hidden = false;
    show(0);
  });

  const menu = document.querySelector("details.menu");
  if (menu) {
    const close = () => { menu.open = false; };
    menu.addEventListener("click", (e) => { if (e.target.closest("a")) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && menu.open) { close(); menu.querySelector("summary").focus(); } });
    document.addEventListener("click", (e) => { if (menu.open && !menu.contains(e.target)) close(); });
    window.matchMedia("(min-width: 1181px)").addEventListener?.("change", close);
  }

  const navGroups = Array.from(document.querySelectorAll("details.nav-group"));
  if (navGroups.length) {
    const closeGroups = (except) => navGroups.forEach((group) => { if (group !== except) group.open = false; });
    navGroups.forEach((group) => group.addEventListener("toggle", () => { if (group.open) closeGroups(group); }));
    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      const open = navGroups.find((group) => group.open);
      if (open) { open.open = false; open.querySelector("summary").focus(); }
    });
    document.addEventListener("click", (e) => { if (!e.target.closest(".nav-group")) closeGroups(); });
  }

  const narrow = window.matchMedia("(max-width: 900px)");
  const folds = Array.from(document.querySelectorAll("details.more"));
  const fold = () => folds.forEach((d) => { d.open = !narrow.matches; });
  if (folds.length) { fold(); narrow.addEventListener?.("change", fold); }

  const tablist = document.querySelector('[role="tablist"]');
  if (tablist) {
    const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
    const show = (tab, focus) => {
      tabs.forEach((t) => {
        const active = t === tab;
        t.setAttribute("aria-selected", String(active));
        t.tabIndex = active ? 0 : -1;
        document.getElementById(t.getAttribute("aria-controls")).hidden = !active;
      });
      if (focus) tab.focus();
    };
    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => { show(tab); history.replaceState(null, "", "#" + tab.getAttribute("aria-controls")); });
      tab.addEventListener("keydown", (e) => {
        const target = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
        if (target === undefined) return;
        e.preventDefault();
        show(tabs[(target + tabs.length) % tabs.length], true);
      });
    });
    tabs.forEach((t) => {
      const p = document.getElementById(t.getAttribute("aria-controls"));
      p.setAttribute("role", "tabpanel");
      p.setAttribute("aria-labelledby", t.id);
      p.tabIndex = 0;
    });
    tablist.hidden = false;
    const fromHash = () => show(tabs.find((t) => "#" + t.getAttribute("aria-controls") === location.hash) ?? tabs[0]);
    fromHash();
    window.addEventListener("hashchange", fromHash);
  }
})();
