/* =========================
   Portfolio interactions
   Typing · theme · nav · projects · a11y
========================= */

(() => {
    "use strict";

    /* ---------- Project data (from CV / LinkedIn / Play Store) ---------- */
    const projects = [
        {
            id: "yap-pk",
            title: "YAP Pakistan",
            description:
                "Smart digital wallet for families in Pakistan—secure pay, save, and transfer with KYC onboarding.",
            longDescription:
                "At YAP Mobile Wallet I engineered fintech Android features for the Pakistan market: Flutter SDK–based CNIC scanning and liveness detection inside the native app, token lifecycle management, secure customer data storage, and reusable Jetpack Compose components used across teams.",
            icon: "💳",
            image: "assets/images/projects/yap-pakistan.jpg",
            accent: "#6750A4",
            tech: ["Kotlin", "Jetpack Compose", "MVVM", "Hilt", "Firebase", "Flutter SDK"],
            responsibilities: [
                "Integrated Flutter SDK for CNIC scanning and liveness detection in the native Android app",
                "Built token lifecycle management and secure storage with zero-trust privacy enforcement",
                "Shipped reusable Compose UI (persistent bottom sheets, custom dialogs)—UI crash rates down ~25%",
                "Collaborated on REST API and Firebase real-time flows with backend engineers",
            ],
            links: {
                playStore: "https://play.google.com/store/apps/details?id=com.yappakistan.app&hl=en",
                live: "https://yap.com/",
                github: null,
            },
        },
        {
            id: "yap-uae",
            title: "YAP UAE",
            description:
                "Fintech wallet for the UAE—KYC onboarding, identity verification SDKs, and localized wallet flows.",
            longDescription:
                "At Digitify I delivered Android features for YAP UAE focused on customer KYC onboarding and Flutter SDK–based identity verification, helping reduce onboarding time by ~30% while integrating financial APIs and compliance workflows.",
            icon: "🏦",
            image: "assets/images/projects/yap-uae.svg",
            accent: "#0D9488",
            tech: ["Kotlin", "MVVM", "Jetpack Navigation", "Hilt", "Financial APIs", "KYC SDKs"],
            responsibilities: [
                "Delivered KYC onboarding and liveness verification for the UAE wallet",
                "Integrated financial APIs and third-party identity verification SDKs",
                "Implemented MVVM with Jetpack Navigation for maintainable navigation graphs",
                "Mentored developers within Agile/Scrum delivery across regional milestones",
            ],
            links: {
                playStore: null,
                live: "https://yap.com/",
                github: null,
            },
        },
        {
            id: "yap-ksa",
            title: "YAP KSA",
            description:
                "Saudi Arabia digital wallet with Arabic-ready KYC, identity verification, and regulated fintech flows.",
            longDescription:
                "Built and shipped YAP KSA Android features alongside the UAE variant—customer KYC, CNIC/ID scanning via Flutter SDK, and market-specific compliance workflows that cut onboarding time by ~30%.",
            icon: "🇸🇦",
            image: "assets/images/projects/yap-ksa.svg",
            accent: "#0F766E",
            tech: ["Kotlin", "MVVM", "Clean Architecture", "KYC", "Jetpack", "RTL"],
            responsibilities: [
                "Shipped KYC and liveness verification for the KSA market",
                "Streamlined regulatory compliance workflows with identity SDKs",
                "Reduced onboarding time by ~30% across regional fintech deliveries",
                "Improved maintainability and cut regression bugs by ~20% via Navigation Component",
            ],
            links: {
                playStore: null,
                live: "https://yap.com/",
                github: null,
            },
        },
        {
            id: "dirxi",
            title: "Dirxi",
            description:
                "Ride-booking Android app—Compose UI from scratch, Clean Architecture migration, and faster data fetching.",
            longDescription:
                "As a freelance Android developer I delivered end-to-end work on Dirxi: designed and implemented the complete ride-booking UI in Kotlin and Jetpack Compose, led a Clean Architecture / MVVM revamp (~40% less technical debt), and optimized networking with Coroutines and Flow (screen loads ~35% faster) while holding a ~98% crash-free rate.",
            icon: "🚗",
            image: "assets/images/projects/dirxi.svg",
            accent: "#2563EB",
            tech: ["Kotlin", "Jetpack Compose", "Clean Architecture", "MVVM", "Coroutines", "Flow"],
            responsibilities: [
                "Designed and implemented the full ride-booking UI with Jetpack Compose",
                "Migrated legacy code to Clean Architecture and MVVM",
                "Integrated REST APIs with Coroutines and Flow for faster screen loads",
                "Maintained ~98% crash-free rate through performance testing and bug resolution",
            ],
            links: {
                playStore: null,
                live: "https://dirxi.com",
                github: null,
            },
        },
        {
            id: "ticketlake",
            title: "TicketLake",
            description:
                "Event ticketing platform—browse, purchase, and scan QR tickets with smooth list and image pipelines.",
            longDescription:
                "At Synavos I developed core Android features for TicketLake including ticket browsing, purchase flows, and QR code scanning. I optimized RecyclerView and image-loading pipelines (~30% smoother UI), and added Firebase Analytics plus FCM for re-engagement (+18%).",
            icon: "🎫",
            image: "assets/images/projects/ticketlake.svg",
            accent: "#DB2777",
            tech: ["Kotlin", "Android SDK", "RecyclerView", "QR Scanning", "Firebase Analytics", "FCM"],
            responsibilities: [
                "Built ticket browsing, purchase, and QR scanning experiences",
                "Optimized RecyclerView and image-loading pipelines (scroll jank down ~30%)",
                "Implemented Firebase Analytics and Cloud Messaging",
                "Resolved production bugs that improved stability and Play Store ratings",
            ],
            links: {
                playStore: null,
                live: "https://ticketlake.com",
                github: null,
            },
        },
        {
            id: "ikram",
            title: "Ikram",
            description:
                "GPS-based cemetery locator for Saudi Arabia—help families find graves with maps and real-time location.",
            longDescription:
                "At AcclivousByte I developed Ikram (إكرام), a GPS-based cemetery locator enabling Muslims to locate graves of loved ones across organized cemeteries using real-time GPS and map integrations—built and published on Google Play.",
            icon: "📍",
            image: "assets/images/projects/ikram.jpg",
            accent: "#C026D3",
            tech: ["Kotlin", "Maps", "GPS", "MVVM", "REST APIs"],
            responsibilities: [
                "Built GPS and map-based cemetery search and locator flows",
                "Delivered end-to-end Android features from requirements to Play Store",
                "Integrated location services for real-time navigation experiences",
                "Collaborated on multilingual Arabic / English UX",
            ],
            links: {
                playStore: "https://play.google.com/store/apps/details?id=com.ime.alikram&hl=en",
                live: null,
                github: null,
            },
        },
        {
            id: "al-kazi",
            title: "Al-Kazi",
            description:
                "Arabic family social platform—content sharing, image posts, family news feeds, and in-app chat.",
            longDescription:
                "Built Al-Kazi (القاضي), an Arabic family social platform delivering content sharing, image posts, family news feeds, and in-app chat for Arabic-speaking families—implemented with Kotlin and Firebase and published on Google Play.",
            icon: "👨‍👩‍👧‍👦",
            image: "assets/images/projects/al-kazi.jpg",
            accent: "#7C3AED",
            tech: ["Kotlin", "Firebase", "Chat", "MVVM", "RTL / Arabic"],
            responsibilities: [
                "Delivered content sharing, feeds, and image posting features",
                "Built in-app chat experiences for family communication",
                "Implemented Arabic RTL-first layouts and localization",
                "Shipped a production Play Store release with Firebase backends",
            ],
            links: {
                playStore: "https://play.google.com/store/apps/details?id=com.ime.alkadi&hl=en",
                live: null,
                github: null,
            },
        },
        {
            id: "al-jumaih",
            title: "Al Jumaih",
            description:
                "Saudi family networking app—digital family database, document preservation, and cohesion tools.",
            longDescription:
                "Developed Al-Jumaih (الجميح), a Saudi family networking app featuring a comprehensive digital database of family members, document and manuscript preservation, and tools that connect Al-Jumaih members across all regions of Saudi Arabia.",
            icon: "📜",
            image: "assets/images/projects/al-jumaih.jpg",
            accent: "#CA8A04",
            tech: ["Kotlin", "Firebase", "RTL", "MVVM", "REST APIs"],
            responsibilities: [
                "Built family member database and discovery experiences",
                "Implemented document and manuscript preservation features",
                "Delivered Arabic-first networking tools for regional cohesion",
                "Shipped production builds to Google Play",
            ],
            links: {
                playStore: "https://play.google.com/store/apps/details?id=com.ime.aljumaih",
                live: null,
                github: null,
            },
        },
        {
            id: "al-rais",
            title: "Al Rais",
            description:
                "Family heritage and genealogy app for the Al-Rais family—lineage records for 700,000+ members.",
            longDescription:
                "Built Al-Rais (الريس), a family heritage and genealogy reference app delivering documented family history, lineage records, and notable personalities for the Al-Rais family (700,000+ members worldwide), with roots in Hajar al-Yamamah, central Saudi Arabia.",
            icon: "🌳",
            image: "assets/images/projects/al-rais.jpg",
            accent: "#EA580C",
            tech: ["Kotlin", "Firebase", "MVVM", "RTL / Arabic", "REST APIs"],
            responsibilities: [
                "Delivered genealogy browsing and lineage record experiences",
                "Presented documented family history and notable personalities",
                "Built scalable content structures for a very large member base",
                "Published and maintained the Google Play release",
            ],
            links: {
                playStore: "https://play.google.com/store/apps/details?id=com.ime.alrais",
                live: null,
                github: null,
            },
        },
        {
            id: "german-kitchen",
            title: "German Kitchen App",
            description:
                "Restaurant kitchen order system—Received → Preparing → Delivered lifecycle for order machines.",
            longDescription:
                "Developed a German-language kitchen order management app for restaurant order-taking machines—similar to a chef-side food delivery system—where staff punch orders that flow through Received, Preparing, and Delivered states in real time, built end-to-end in Kotlin with a custom order lifecycle.",
            icon: "🍳",
            image: "assets/images/projects/german-kitchen.svg",
            accent: "#4F46E5",
            tech: ["Kotlin", "Order Lifecycle", "German L10n", "Real-time State", "MVVM"],
            responsibilities: [
                "Built end-to-end kitchen order management for restaurant machines",
                "Implemented Received → Preparing → Delivered real-time order states",
                "Localized the experience for German-speaking staff workflows",
                "Owned delivery from client requirements through production handover",
            ],
            links: {
                playStore: null,
                live: null,
                github: null,
            },
        },
    ];

    /* ---------- Typing animation ---------- */
    const roles = [
        "Fintech Applications",
        "Digital Wallets",
        "Ride Booking Apps",
        "Consumer Applications",
    ];

    const typingEl = document.getElementById("typing");
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function type() {
        if (!typingEl) return;
        if (reduceMotion) {
            typingEl.textContent = roles[0];
            return;
        }

        const current = roles[roleIndex];

        if (!deleting) {
            typingEl.textContent = current.slice(0, charIndex++);
            if (charIndex > current.length) {
                deleting = true;
                setTimeout(type, 1600);
                return;
            }
        } else {
            typingEl.textContent = current.slice(0, charIndex--);
            if (charIndex < 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                charIndex = 0;
            }
        }

        setTimeout(type, deleting ? 36 : 78);
    }

    type();

    /* ---------- Theme ---------- */
    const themeBtn = document.getElementById("themeToggle");
    const themeIcon = themeBtn?.querySelector(".theme-icon");
    const storedTheme = localStorage.getItem("theme");

    function applyTheme(isDark) {
        document.body.classList.toggle("dark", isDark);
        if (themeIcon) themeIcon.textContent = isDark ? "☀️" : "🌙";
        if (themeBtn) {
            themeBtn.setAttribute(
                "aria-label",
                isDark ? "Switch to light mode" : "Switch to dark mode"
            );
        }
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }

    if (storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        applyTheme(true);
    }

    themeBtn?.addEventListener("click", () => {
        applyTheme(!document.body.classList.contains("dark"));
    });

    /* ---------- Header glass on scroll ---------- */
    const header = document.getElementById("siteHeader");

    function onScrollHeader() {
        header?.classList.toggle("scrolled", window.scrollY > 24);
    }

    onScrollHeader();
    window.addEventListener("scroll", onScrollHeader, { passive: true });

    /* ---------- Mobile nav ---------- */
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");

    function closeNav() {
        navLinks?.classList.remove("open");
        navToggle?.setAttribute("aria-expanded", "false");
        navToggle?.setAttribute("aria-label", "Open menu");
    }

    navToggle?.addEventListener("click", () => {
        const open = navLinks?.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", String(!!open));
        navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    navLinks?.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeNav);
    });

    /* ---------- Active section highlighting ---------- */
    const sectionIds = ["about", "experience", "projects", "skills", "contact"];
    const navAnchors = document.querySelectorAll(".nav-links a[data-section]");

    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const id = entry.target.id;
                navAnchors.forEach((a) => {
                    a.classList.toggle("active", a.dataset.section === id);
                });
            });
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) sectionObserver.observe(el);
    });

    /* ---------- Reveal on scroll ---------- */
    const reveals = document.querySelectorAll(".reveal");

    if (reduceMotion) {
        reveals.forEach((el) => el.classList.add("visible"));
    } else {
        const revealObserver = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add("visible");
                    obs.unobserve(entry.target);
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );
        reveals.forEach((el) => revealObserver.observe(el));
    }

    /* ---------- Timeline: tap-to-expand on coarse pointers ---------- */
    const timelineItems = document.querySelectorAll(".timeline-item");
    const coarse = window.matchMedia("(hover: none)").matches;

    if (coarse) {
        timelineItems.forEach((item) => {
            item.addEventListener("click", () => {
                const wasOpen = item.classList.contains("is-open");
                timelineItems.forEach((i) => i.classList.remove("is-open"));
                if (!wasOpen) item.classList.add("is-open");
            });
        });
    }

    /* ---------- Render projects ---------- */
    const grid = document.getElementById("projectsGrid");

    function linkButton(href, label, className = "btn-sm") {
        if (!href) {
            return `<span class="${className} is-disabled" aria-disabled="true">${label}</span>`;
        }
        return `<a class="${className}" href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    }

    function renderProjects() {
        if (!grid) return;
        grid.innerHTML = projects
            .map(
                (p, index) => `
            <article class="project-card reveal" data-id="${p.id}" data-accent="${p.accent}" data-delay="${(index % 3) * 0.08}">
                <div class="project-visual">
                    <img
                        class="project-image"
                        src="${p.image}"
                        alt="${p.title} preview"
                        loading="lazy"
                        decoding="async"
                        width="800"
                        height="500">
                    <span class="project-icon-badge" aria-hidden="true">${p.icon}</span>
                </div>
                <div class="project-body">
                    <h3>${p.title}</h3>
                    <p>${p.description}</p>
                    <div class="tech-row">
                        ${p.tech.slice(0, 4).map((t) => `<span>${t}</span>`).join("")}
                    </div>
                    <div class="project-actions">
                        <button type="button" class="btn-sm accent" data-details="${p.id}">View Details</button>
                        ${linkButton(p.links.live, "Live App")}
                        ${linkButton(p.links.playStore, "Play Store")}
                        ${linkButton(p.links.github, "GitHub")}
                    </div>
                </div>
            </article>`
            )
            .join("");

        grid.querySelectorAll(".project-card").forEach((card) => {
            const accent = card.dataset.accent;
            const delay = card.dataset.delay;
            if (accent) card.style.setProperty("--accent", accent);
            if (delay) card.style.setProperty("--delay", `${delay}s`);
        });

        if (!reduceMotion) {
            const revealObserver = new IntersectionObserver(
                (entries, obs) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) return;
                        entry.target.classList.add("visible");
                        obs.unobserve(entry.target);
                    });
                },
                { threshold: 0.12 }
            );
            grid.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
        } else {
            grid.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
        }
    }

    renderProjects();

    /* ---------- Modal ---------- */
    const modal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalTech = document.getElementById("modalTech");
    const modalResponsibilities = document.getElementById("modalResponsibilities");
    const modalActions = document.getElementById("modalActions");
    const modalAccent = document.getElementById("modalAccent");
    const modalVisual = document.getElementById("modalVisual");
    let lastFocus = null;

    function openModal(project) {
        if (!modal || !project) return;
        lastFocus = document.activeElement;

        modalAccent.style.background = project.accent;
        modalVisual.style.setProperty("--accent", project.accent);
        modalVisual.className = "modal-visual";
        modalVisual.innerHTML = `
            <img
                class="modal-image"
                src="${project.image}"
                alt="${project.title} screenshot"
                loading="lazy"
                decoding="async"
                width="640"
                height="360">
            <span class="project-icon-badge modal-badge" aria-hidden="true">${project.icon}</span>
        `;
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.longDescription;
        modalTech.innerHTML = project.tech.map((t) => `<span>${t}</span>`).join("");
        modalResponsibilities.innerHTML = project.responsibilities
            .map((r) => `<li>${r}</li>`)
            .join("");
        modalActions.innerHTML = [
            linkButton(project.links.live, "Live App", "btn-sm"),
            linkButton(project.links.playStore, "Play Store", "btn-sm accent"),
            linkButton(project.links.github, "GitHub", "btn-sm"),
        ].join("");

        modal.hidden = false;
        document.body.classList.add("modal-open");
        modal.querySelector(".modal-close")?.focus();
    }

    function closeModal() {
        if (!modal || modal.hidden) return;
        modal.hidden = true;
        document.body.classList.remove("modal-open");
        if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
    }

    document.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-details]");
        if (btn) {
            const project = projects.find((p) => p.id === btn.dataset.details);
            openModal(project);
            return;
        }
        if (e.target.closest("[data-close-modal]")) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });

    /* ---------- Copy email ---------- */
    const copyBtn = document.getElementById("copyEmail");
    const emailEl = document.getElementById("emailAddress");
    const copyFeedback = document.getElementById("copyFeedback");

    copyBtn?.addEventListener("click", async () => {
        const email = emailEl?.textContent?.trim();
        if (!email) return;

        try {
            await navigator.clipboard.writeText(email);
            if (copyFeedback) copyFeedback.textContent = "Email copied to clipboard";
            copyBtn.textContent = "Copied";
            setTimeout(() => {
                copyBtn.textContent = "Copy";
                if (copyFeedback) copyFeedback.textContent = "";
            }, 2000);
        } catch {
            if (copyFeedback) copyFeedback.textContent = "Could not copy — select the email manually";
        }
    });

    /* ---------- Footer year ---------- */
    const yearEl = document.getElementById("footerYear");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
