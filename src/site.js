// Progressive enhancement: everything is readable without JavaScript; this only adds the theme switch, the perimeter and the tabs.
(() => {
  const root = document.documentElement;

  // Theme: dark is the default, light on request (application colours). Stored only locally in the browser.
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
      try { localStorage.setItem("theme", theme); } catch (e) { /* without storage the choice applies to this page only */ }
    });
  }

  // Perimeter: area selection and radar sweep.
  const areaData = document.getElementById("areas");
  if (areaData) {
    const areas = JSON.parse(areaData.textContent);
    const panel = document.getElementById("panel");
    const field = (key) => panel.querySelector(`[data-p="${key}"]`);
    const nodes = Array.from(document.querySelectorAll(".node"));
    const select = (i) => {
      const area = areas[i];
      nodes.forEach((n, j) => n.setAttribute("aria-pressed", String(i === j)));
      field("t").textContent = area.title;
      field("n").textContent = `Bereich ${i + 1} von ${areas.length}`;
      field("w").textContent = area.why;
      field("c").replaceChildren(...area.items.map((x) => Object.assign(document.createElement("li"), { textContent: x })));
    };
    nodes.forEach((n) => n.addEventListener("click", () => select(Number(n.dataset.i))));

    const sweep = document.querySelector(".sweep");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const period = 24000;
    let running = false;
    const frame = (t) => {
      if (reduced.matches) { running = false; sweep.hidden = true; nodes.forEach((n) => n.classList.remove("lit")); return; }
      const angle = ((t % period) / period) * 360;
      sweep.style.transform = `rotate(${angle}deg)`;
      nodes.forEach((n) => n.classList.toggle("lit", (angle - Number(n.dataset.ang) + 360) % 360 < 12));
      requestAnimationFrame(frame);
    };
    const start = () => { if (!reduced.matches && !running) { running = true; sweep.hidden = false; requestAnimationFrame(frame); } };
    reduced.addEventListener?.("change", start);
    start();
  }

  // Tabs on the community page: without JavaScript all kinds are listed one below the other.
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
