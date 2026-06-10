(function () {
  const inBuilders = window.location.pathname.replace(/\\/g, "/").includes("/builders/");
  const base = inBuilders ? "../" : "";
  const page = document.body.dataset.page || "";

  const navItems = [
    ["home", "Home", "index.html"],
    ["start", "Start", "start.html"],
    ["builders", "Builders", "builders/index.html"],
    ["assets", "Assets", "asset-sharing.html"],
    ["storyboarding", "AI storyboard", "ai-storyboarding.html"],
    ["assistant", "Film assistant", "ai-film-assistant.html"],
    ["readiness", "Readiness", "submission-readiness.html"],
    ["boundaries", "Boundaries", "boundaries.html"],
    ["sources", "Sources", "sources.html"]
  ];

  const order = [
    ["home", "Home", "index.html"],
    ["start", "Start a film idea", "start.html"],
    ["builders", "Markdown builders", "builders/index.html"],
    ["assets", "Asset sharing", "asset-sharing.html"],
    ["storyboarding", "AI storyboarding", "ai-storyboarding.html"],
    ["assistant", "AI film assistant", "ai-film-assistant.html"],
    ["recognition", "Recognition ideas", "recognition.html"],
    ["readiness", "Submission readiness", "submission-readiness.html"],
    ["screenings", "Screenings", "screenings.html"],
    ["boundaries", "Boundaries", "boundaries.html"],
    ["sources", "Sources", "sources.html"]
  ];

  const header = document.querySelector(".site-header");
  if (header) {
    header.innerHTML = `
      <a class="skip-link" href="#main">Skip to content</a>
      <div class="site-header-inner">
        <a class="brand" href="${base}index.html" aria-label="Quandamooka Film Festival home">
          <span class="brand-mark" aria-hidden="true">Q</span>
          <span>Quandamooka Film Festival</span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="siteNav">Menu</button>
        <nav class="site-nav" id="siteNav" aria-label="Main navigation">
          ${navItems.map((item) => `<a class="${item[0] === page ? "active" : ""}" href="${base}${item[2]}">${item[1]}</a>`).join("")}
        </nav>
      </div>
    `;
  }

  const toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const footer = document.querySelector(".site-footer");
  if (footer) {
    footer.innerHTML = `
      <div class="site-footer-inner">
        <div>
          <strong>Quandamooka Film Festival</strong>
          <p>Bring your story. Use the tools if they help. Keep what is yours. Ask before using what belongs to others.</p>
        </div>
        <div>
          <a href="${base}boundaries.html">Boundaries</a><br>
          <a href="${base}asset-sharing.html">Asset sharing</a><br>
          <a href="https://auraofintelligence.github.io/civilisation-of-sand/" target="_blank" rel="noopener noreferrer">Civilisation of Sand</a><br>
          <a href="${base}sources.html">Source trail</a><br>
          <a href="${base}builders/index.html">Builder forms</a>
        </div>
      </div>
    `;
  }

  const pageNav = document.querySelector("[data-page-nav]");
  if (pageNav) {
    const index = order.findIndex((item) => item[0] === page);
    if (index >= 0) {
      const previous = order[(index - 1 + order.length) % order.length];
      const next = order[(index + 1) % order.length];
      pageNav.innerHTML = `
        <a href="${base}${previous[2]}"><span class="small">Previous</span><br><strong>${previous[1]}</strong></a>
        <a href="${base}${next[2]}"><span class="small">Next</span><br><strong>${next[1]}</strong></a>
      `;
    }
  }

  const back = document.createElement("button");
  back.className = "back-to-top";
  back.type = "button";
  back.setAttribute("aria-label", "Back to top");
  back.textContent = "^";
  document.body.appendChild(back);

  back.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", () => {
    back.classList.toggle("visible", window.scrollY > 560);
  }, { passive: true });
})();
