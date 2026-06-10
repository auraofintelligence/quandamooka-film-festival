(function () {
  const STORE_KEY = "qff-markdown-builder-v1";

  const statusOptions = ["idea", "draft", "ready for review", "needs help", "parked"];
  const stageOptions = ["story seed", "outline", "planning", "filming", "editing", "submission prep", "community review"];
  const boundaryOptions = ["private working note", "mixed - review before public use", "public-safe summary", "not sure yet"];
  const culturalOptions = ["not sure - ask", "no cultural material", "review needed", "review completed by appropriate person"];

  const sharedFields = [
    select("status", "Status", statusOptions, "draft"),
    text("title", "Project title"),
    text("creator", "Creator / team"),
    date("date", "Date"),
    select("projectStage", "Project stage", stageOptions, "story seed"),
    select("publicPrivateBoundary", "Public/private boundary", boundaryOptions, "mixed - review before public use"),
    select("culturalReviewNeeded", "Cultural review needed", culturalOptions, "not sure - ask"),
    area("permissions", "Permissions and consent notes", "People, places, music, images, voices, footage, youth permissions, and anything that needs a yes before use."),
    area("sourceLinks", "Source links or references", "URLs, archive labels, people to ask, notes, or leave blank until you know."),
    area("nextAction", "Next useful action", "One practical next step.")
  ];

  const builders = [
    builder({
      key: "story-seed",
      label: "Story Seed",
      page: "story-seed.html",
      prefix: "story-seed",
      title: "Story seed builder",
      intro: "Start with the spark, then name what is yours, what needs permission, and what help comes next.",
      art: "../assets/img/story-builder-hero.webp",
      fields: [
        ...sharedFields,
        area("spark", "What is the story spark?", "A moment, question, memory, problem, place, person, or image."),
        area("whyMatters", "Why does it matter to you?"),
        area("audience", "Who might this help, move, or speak to?"),
        area("peoplePlaces", "People and places involved"),
        area("tone", "Tone or feeling", "Gentle, funny, urgent, reflective, joyful, serious, experimental, documentary, fiction, mixed."),
        area("privateLine", "What should stay private for now?")
      ],
      sections: [
        sec("Story Spark", "spark"),
        sec("Why It Matters", "whyMatters"),
        sec("Audience", "audience"),
        sec("People And Places", "peoplePlaces"),
        sec("Tone Or Feeling", "tone"),
        sec("Private Line", "privateLine")
      ]
    }),
    builder({
      key: "film-profile",
      label: "Film Profile",
      page: "film-profile.html",
      prefix: "film-profile",
      title: "Film profile builder",
      intro: "Turn an idea into a plain profile that another person or AI assistant can understand quickly.",
      art: "../assets/img/festival-hero.webp",
      fields: [
        ...sharedFields,
        text("format", "Format", "Short film, documentary, phone film, interview piece, animation, hybrid."),
        text("runtime", "Rough runtime"),
        area("logline", "One-line logline"),
        area("summary", "Plain summary"),
        area("audienceFit", "Audience or screening fit"),
        area("materials", "Existing materials", "Footage, photos, interviews, location access, music, script draft, sketches."),
        area("aiUse", "Where AI may help", "Structure, prompts, captions, draft ideas, rough storyboard, edit notes.")
      ],
      sections: [
        sec("Format", ["format", "runtime"]),
        sec("Logline", "logline"),
        sec("Plain Summary", "summary"),
        sec("Audience Or Screening Fit", "audienceFit"),
        list("Existing Materials", "materials"),
        sec("Possible AI Help", "aiUse")
      ]
    }),
    builder({
      key: "character-place",
      label: "Character / Place",
      page: "character-place.html",
      prefix: "character-place",
      title: "Character and place builder",
      intro: "Describe a person, group, place, or object with care before using them in a story.",
      art: "../assets/img/community-workshop-hero.webp",
      fields: [
        ...sharedFields,
        text("subjectName", "Person, group, place, or object"),
        area("role", "Role in the story"),
        area("voiceAgency", "Voice and agency", "Who speaks? Who decides? Who gets to approve public use?"),
        area("details", "Concrete details"),
        area("risk", "Dignity, safety, privacy, or cultural risks"),
        area("questions", "Questions to ask before filming")
      ],
      sections: [
        sec("Subject", "subjectName"),
        sec("Role In The Story", "role"),
        sec("Voice And Agency", "voiceAgency"),
        list("Concrete Details", "details"),
        sec("Risks To Handle With Care", "risk"),
        list("Questions To Ask", "questions")
      ]
    }),
    builder({
      key: "script-outline",
      label: "Script Outline",
      page: "script-outline.html",
      prefix: "script-outline",
      title: "Script outline builder",
      intro: "Shape the beginning, middle, and ending without letting the outline boss the story around.",
      art: "../assets/img/story-builder-hero.webp",
      fields: [
        ...sharedFields,
        area("opening", "Opening image or moment"),
        area("turningPoints", "Key turning points", "One per line is fine."),
        area("ending", "Ending or landing place"),
        area("scenes", "Scene outline"),
        area("dialogue", "Dialogue or voice notes"),
        area("reviewQuestions", "Review questions")
      ],
      sections: [
        sec("Opening", "opening"),
        list("Turning Points", "turningPoints"),
        sec("Ending", "ending"),
        list("Scene Outline", "scenes"),
        sec("Dialogue Or Voice Notes", "dialogue"),
        list("Review Questions", "reviewQuestions")
      ]
    }),
    builder({
      key: "storyboard-prompt",
      label: "Storyboard Prompt",
      page: "storyboard-prompt.html",
      prefix: "storyboard-prompt",
      title: "Storyboard prompt builder",
      intro: "Build a prompt that keeps the human story clear while AI helps rough out visual options.",
      art: "../assets/img/ai-storyboard-hero.webp",
      fields: [
        ...sharedFields,
        text("sceneLabel", "Scene label"),
        area("sceneAction", "What happens in the scene?"),
        select("emotionIntensity", "Emotion intensity", ["1 - barely visible", "2 - gentle", "3 - clear", "4 - strong", "5 - intense"], "2 - gentle"),
        area("faceEyes", "Face and eyes"),
        area("voiceBody", "Voice, posture, and movement"),
        area("camera", "Camera angle and movement"),
        area("settingMood", "Setting and mood"),
        area("imagePrompt", "Image prompt"),
        area("textVideoPrompt", "Text-to-video prompt"),
        area("imageVideoPrompt", "Image-to-video prompt")
      ],
      sections: [
        sec("Scene", ["sceneLabel", "sceneAction"]),
        sec("Emotion Intensity", "emotionIntensity"),
        sec("Face And Eyes", "faceEyes"),
        sec("Voice Body Movement", "voiceBody"),
        sec("Camera", "camera"),
        sec("Setting And Mood", "settingMood"),
        sec("Image Prompt", "imagePrompt"),
        sec("Text To Video Prompt", "textVideoPrompt"),
        sec("Image To Video Prompt", "imageVideoPrompt")
      ]
    }),
    builder({
      key: "shot-list",
      label: "Shot List",
      page: "shot-list.html",
      prefix: "shot-list",
      title: "Shot list builder",
      intro: "Plan what to capture so filming day is calmer and permissions are visible.",
      art: "../assets/img/story-builder-hero.webp",
      fields: [
        ...sharedFields,
        area("locations", "Locations"),
        area("shots", "Shots to capture", "Wide, medium, close, cutaway, detail, atmosphere, interview."),
        area("audio", "Audio to capture"),
        area("gear", "Gear and phone settings"),
        area("crew", "People helping"),
        area("safety", "Safety, weather, access, and care notes")
      ],
      sections: [
        list("Locations", "locations"),
        list("Shots To Capture", "shots"),
        list("Audio To Capture", "audio"),
        sec("Gear And Phone Settings", "gear"),
        sec("People Helping", "crew"),
        sec("Safety Weather Access And Care", "safety")
      ]
    }),
    builder({
      key: "interview-plan",
      label: "Interview Plan",
      page: "interview-plan.html",
      prefix: "interview-plan",
      title: "Interview plan builder",
      intro: "Prepare questions and consent notes before asking someone to share their voice.",
      art: "../assets/img/community-workshop-hero.webp",
      fields: [
        ...sharedFields,
        text("guestName", "Interviewee or group"),
        area("purpose", "Why interview them?"),
        area("consent", "Consent and comfort notes"),
        area("questions", "Questions", "One per line is fine."),
        area("avoid", "Topics, names, or details to avoid"),
        area("followUp", "Follow-up and review plan")
      ],
      sections: [
        sec("Interviewee Or Group", "guestName"),
        sec("Purpose", "purpose"),
        sec("Consent And Comfort Notes", "consent"),
        list("Questions", "questions"),
        list("Topics Names Or Details To Avoid", "avoid"),
        sec("Follow-Up And Review Plan", "followUp")
      ]
    }),
    builder({
      key: "production-pack",
      label: "Production Pack",
      page: "production-pack.html",
      prefix: "production-pack",
      title: "Production pack builder",
      intro: "Gather the practical details that help a small team actually make the film.",
      art: "../assets/img/community-workshop-hero.webp",
      fields: [
        ...sharedFields,
        area("schedule", "Schedule"),
        area("crewRoles", "Crew and roles"),
        area("locations", "Locations and access"),
        area("gear", "Gear, files, and backups"),
        area("releaseForms", "Release forms or approvals needed"),
        area("postProduction", "Editing, captions, music, and export plan")
      ],
      sections: [
        sec("Schedule", "schedule"),
        list("Crew And Roles", "crewRoles"),
        sec("Locations And Access", "locations"),
        sec("Gear Files And Backups", "gear"),
        sec("Release Forms Or Approvals Needed", "releaseForms"),
        sec("Post-Production Plan", "postProduction")
      ]
    }),
    builder({
      key: "asset-share",
      label: "Asset Share",
      page: "asset-share.html",
      prefix: "asset-share",
      title: "Asset sharing builder",
      intro: "Map what one person has, what the team can share, who stewards it, and what should stay private.",
      art: "../assets/img/community-workshop-hero.webp",
      fields: [
        ...sharedFields,
        text("teamName", "Team, club, or project name"),
        text("steward", "Asset steward or coordinator"),
        area("assetPurpose", "Shared purpose", "What can the group create together that one person cannot do alone?"),
        area("personalAssets", "Personal assets people may offer", "Gear, skills, locations, software, vehicles, files, contacts, or workflows. Keep storage locations private."),
        area("sharedAssets", "Shared assets or team kit", "One per line is fine. Include condition and care notes where useful."),
        area("borrowRules", "Borrowing or check-out rules", "Who approves, how gear comes back, batteries/cards/cables, weather, power, pack-down, and repair notes."),
        area("fileWorkflow", "Files, backups, and release notes", "Where public-safe files live, how names are handled, where release notes are tracked."),
        area("wishList", "Borrow, buy, sponsor, or delay list"),
        area("privateAssets", "Private or permission-needed assets", "Contact details, expensive gear locations, logins, protected places, cultural permissions, raw contacts, and safety-sensitive notes."),
        area("openQuestions", "Open sharing questions")
      ],
      sections: [
        sec("Team Or Project", ["teamName", "steward"]),
        sec("Shared Purpose", "assetPurpose"),
        list("Personal Assets People May Offer", "personalAssets"),
        list("Shared Assets Or Team Kit", "sharedAssets"),
        list("Borrowing Or Check-Out Rules", "borrowRules"),
        sec("Files Backups And Release Notes", "fileWorkflow"),
        list("Borrow Buy Sponsor Or Delay", "wishList"),
        list("Private Or Permission-Needed Assets", "privateAssets"),
        list("Open Sharing Questions", "openQuestions")
      ]
    }),
    builder({
      key: "source-trail",
      label: "Source Trail",
      page: "source-trail.html",
      prefix: "source-trail",
      title: "Source trail builder",
      intro: "Keep track of where claims, images, music, quotes, and permissions came from.",
      art: "../assets/img/ai-storyboard-hero.webp",
      fields: [
        ...sharedFields,
        text("sourceTitle", "Source title"),
        select("sourceType", "Source type", ["person", "place", "website", "archive", "image", "music", "footage", "book/article", "other"], "website"),
        area("sourceLocation", "URL, archive label, or contact"),
        area("summary", "Plain summary"),
        area("claims", "Claims or details it supports"),
        area("limits", "What not to overclaim"),
        area("checkNext", "What still needs checking")
      ],
      sections: [
        sec("Source", ["sourceTitle", "sourceType", "sourceLocation"]),
        sec("Plain Summary", "summary"),
        list("Claims Or Details It Supports", "claims"),
        sec("What Not To Overclaim", "limits"),
        sec("What Still Needs Checking", "checkNext")
      ]
    }),
    builder({
      key: "ai-handoff",
      label: "AI Handoff",
      page: "ai-handoff.html",
      prefix: "ai-handoff",
      title: "AI handoff builder",
      intro: "Prepare a clean note for AI help without handing over ownership of the story.",
      art: "../assets/img/ai-storyboard-hero.webp",
      fields: [
        ...sharedFields,
        area("humanIntent", "Human intent"),
        area("aiCanHelp", "AI can help with"),
        area("aiMustNot", "AI should not decide"),
        area("prompt", "Prompt to use"),
        area("reviewLoop", "Human review loop"),
        area("outputs", "Outputs wanted"),
        area("limits", "Limits, uncertainties, or red lines")
      ],
      sections: [
        sec("Human Intent", "humanIntent"),
        list("AI Can Help With", "aiCanHelp"),
        list("AI Should Not Decide", "aiMustNot"),
        sec("Prompt To Use", "prompt"),
        sec("Human Review Loop", "reviewLoop"),
        list("Outputs Wanted", "outputs"),
        sec("Limits Uncertainties Or Red Lines", "limits")
      ]
    })
  ];

  window.QFFBuilders = { builders, slugify, dateStamp };

  renderBuilderIndex();
  renderActiveBuilder();

  function renderBuilderIndex() {
    const list = document.getElementById("builderList");
    if (!list) return;
    list.innerHTML = builders.map((item) => `
      <a class="builder-card" href="${item.page}">
        <h3>${escapeHtml(item.label)}</h3>
        <p>${escapeHtml(item.intro)}</p>
        <p class="card-meta">${escapeHtml(item.prefix)}-${dateStamp()}-project-title.md</p>
      </a>
    `).join("");
  }

  function renderActiveBuilder() {
    const activeKey = document.body.dataset.builder;
    if (!activeKey) return;
    const config = builders.find((item) => item.key === activeKey);
    if (!config) return;

    const state = loadState();
    const form = document.getElementById("builderForm");
    const preview = document.getElementById("markdownPreview");
    const filename = document.getElementById("filename");
    const status = document.getElementById("statusLine");

    setText("builderTitle", config.title);
    setText("builderIntro", config.intro);
    setText("builderLabel", config.label);
    const art = document.getElementById("builderArt");
    if (art) {
      art.src = config.art;
      art.alt = `${config.label} visual`;
    }

    renderSideNav(config);
    renderFooterNav(config);
    renderForm();
    updatePreview();

    document.getElementById("copyButton").addEventListener("click", copyMarkdown);
    document.getElementById("downloadButton").addEventListener("click", downloadMarkdown);
    document.getElementById("clearButton").addEventListener("click", clearForm);

    function renderForm() {
      const data = getData();
      form.innerHTML = "";
      config.fields.forEach((fieldConfig) => {
        const wrapper = document.createElement("div");
        wrapper.className = `field ${fieldConfig.type === "textarea" ? "full" : ""}`;

        const label = document.createElement("label");
        label.htmlFor = fieldConfig.id;
        label.textContent = fieldConfig.label;
        wrapper.appendChild(label);

        const input = createInput(fieldConfig, data[fieldConfig.id]);
        input.addEventListener("input", () => updateField(fieldConfig.id, input.value));
        input.addEventListener("change", () => updateField(fieldConfig.id, input.value));
        wrapper.appendChild(input);

        if (fieldConfig.hint) {
          const hint = document.createElement("p");
          hint.className = "hint";
          hint.textContent = fieldConfig.hint;
          wrapper.appendChild(hint);
        }

        form.appendChild(wrapper);
      });
    }

    function createInput(fieldConfig, savedValue) {
      const value = savedValue || fieldConfig.defaultValue || (fieldConfig.type === "date" ? dateStamp() : "");
      if (fieldConfig.type === "textarea") {
        const textarea = document.createElement("textarea");
        textarea.id = fieldConfig.id;
        textarea.value = value;
        return textarea;
      }
      if (fieldConfig.type === "select") {
        const selectElement = document.createElement("select");
        selectElement.id = fieldConfig.id;
        fieldConfig.options.forEach((option) => {
          const element = document.createElement("option");
          element.value = option;
          element.textContent = option;
          selectElement.appendChild(element);
        });
        selectElement.value = value || fieldConfig.options[0];
        updateField(fieldConfig.id, selectElement.value, false);
        return selectElement;
      }
      const input = document.createElement("input");
      input.id = fieldConfig.id;
      input.type = fieldConfig.type === "date" ? "date" : "text";
      input.value = value;
      if (fieldConfig.placeholder) input.placeholder = fieldConfig.placeholder;
      return input;
    }

    function updateField(id, value, shouldPreview = true) {
      const data = getData();
      data[id] = value;
      state.forms[activeKey] = data;
      state.activeBuilder = activeKey;
      persistState(state);
      if (shouldPreview) updatePreview();
    }

    function updatePreview() {
      const markdown = renderMarkdown(config, getData());
      preview.value = markdown;
      filename.textContent = filenameFor(config, getData());
      status.textContent = "Autosaved in this browser.";
    }

    async function copyMarkdown() {
      updatePreview();
      try {
        await navigator.clipboard.writeText(preview.value);
        status.textContent = "Markdown copied.";
      } catch (error) {
        preview.focus();
        preview.select();
        document.execCommand("copy");
        status.textContent = "Markdown selected and copied.";
      }
    }

    function downloadMarkdown() {
      updatePreview();
      const blob = new Blob([preview.value], { type: "text/markdown;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename.textContent;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 0);
      status.textContent = "Markdown download started.";
    }

    function clearForm() {
      state.forms[activeKey] = {};
      persistState(state);
      renderForm();
      updatePreview();
      status.textContent = "Form reset.";
    }

    function getData() {
      if (!state.forms[activeKey]) state.forms[activeKey] = {};
      return state.forms[activeKey];
    }
  }

  function renderMarkdown(config, data) {
    return doc([
      `# ${data.title || config.label}`,
      "",
      "## Builder Metadata",
      line("Builder", config.label),
      line("Status", data.status),
      line("Creator / team", data.creator),
      line("Date", data.date || dateStamp()),
      line("Project stage", data.projectStage),
      line("Public/private boundary", data.publicPrivateBoundary),
      line("Cultural review needed", data.culturalReviewNeeded),
      "",
      ...config.sections.flatMap((sectionConfig) => renderSection(sectionConfig, data)),
      "## Permissions And Consent",
      clean(data.permissions),
      "",
      "## Source Links Or References",
      listify(data.sourceLinks),
      "",
      "## Next Useful Action",
      clean(data.nextAction),
      "",
      "## Human-Led Reminder",
      "AI can help with structure, prompts, planning, captions, and rough ideas. Humans hold the story.",
      ""
    ]);
  }

  function renderSection(sectionConfig, data) {
    const value = Array.isArray(sectionConfig.field)
      ? sectionConfig.field.map((fieldId) => line(labelFor(fieldId), data[fieldId])).filter(Boolean).join("\n")
      : data[sectionConfig.field];
    return [`## ${sectionConfig.title}`, sectionConfig.list ? listify(value) : clean(value), ""];
  }

  function renderSideNav(active) {
    const side = document.querySelector(".side-nav");
    if (!side) return;
    side.innerHTML = builders.map((item) => `
      <a class="${item.key === active.key ? "active" : ""}" href="${item.page}">
        <strong>${escapeHtml(item.label)}</strong><br>
        <span class="small">${escapeHtml(item.prefix)}.md</span>
      </a>
    `).join("");
  }

  function renderFooterNav(active) {
    const nav = document.querySelector(".footer-nav");
    if (!nav) return;
    const index = builders.findIndex((item) => item.key === active.key);
    const previous = builders[(index - 1 + builders.length) % builders.length];
    const next = builders[(index + 1) % builders.length];
    nav.innerHTML = `
      <a href="${previous.page}"><span class="small">Previous builder</span><br><strong>${escapeHtml(previous.label)}</strong></a>
      <a href="${next.page}"><span class="small">Next builder</span><br><strong>${escapeHtml(next.label)}</strong></a>
    `;
  }

  function builder(config) {
    return {
      titleField: "title",
      ...config
    };
  }

  function text(id, label, placeholder) {
    return { id, label, type: "text", placeholder };
  }

  function date(id, label) {
    return { id, label, type: "date" };
  }

  function area(id, label, hint) {
    return { id, label, type: "textarea", hint };
  }

  function select(id, label, options, defaultValue) {
    return { id, label, type: "select", options, defaultValue };
  }

  function sec(title, field) {
    return { title, field, list: false };
  }

  function list(title, field) {
    return { title, field, list: true };
  }

  function line(label, value) {
    const text = String(value || "").trim();
    return `- **${label}:** ${text || "_Not filled yet._"}`;
  }

  function clean(value) {
    return String(value || "_Not filled yet._").trim();
  }

  function listify(value) {
    const lines = String(value || "").split(/\r?\n/).map((item) => item.trim()).filter(Boolean);
    return lines.length ? lines.map((item) => `- ${item}`).join("\n") : "_Not filled yet._";
  }

  function doc(parts) {
    return parts.filter((part) => part !== null && part !== undefined).join("\n").replace(/\n{4,}/g, "\n\n\n");
  }

  function filenameFor(config, data) {
    const title = data[config.titleField] || config.label;
    return `${config.prefix}-${dateStamp()}-${slugify(title)}.md`;
  }

  function labelFor(id) {
    const match = sharedFields.find((field) => field.id === id);
    return match ? match.label : id.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase());
  }

  function loadState() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORE_KEY));
      if (parsed && parsed.forms) return parsed;
    } catch (error) {
      console.warn("Could not load QFF builder state", error);
    }
    return { activeBuilder: "", forms: {} };
  }

  function persistState(state) {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
  }

  function dateStamp() {
    return new Date().toISOString().slice(0, 10);
  }

  function slugify(value) {
    return String(value || "untitled")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 70) || "untitled";
  }

  function setText(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value || "";
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
})();
