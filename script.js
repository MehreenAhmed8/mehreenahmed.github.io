/* =========================
   Portfolio interactions
   Typing · theme · nav · projects · a11y
========================= */

(() => {
    "use strict";

    /* ---------- Project data (CV + shared portfolio content) ---------- */
    const projects = [
        {
            id: "yap-pk",
            featured: true,
            title: "YAP Pakistan",
            subtitle: "The Digital Family Wallet",
            role: "Android Developer",
            description:
                "Cutting-edge fintech app offering digital wallets, secure transactions, and financial services tailored for users in Pakistan.",
            longDescription:
                "Developed YAP Pakistan from scratch—a fintech app offering digital wallets, secure transactions, and financial services for users in Pakistan. Integrated financial APIs for fast, secure payments and optimised app stability for a seamless experience.",
            icon: "💳",
            image: "assets/images/projects/yap-pakistan.jpg",
            images: [
                "assets/images/projects/yap-pakistan-1.jpg",
                "assets/images/projects/yap-pakistan-2.jpg",
                "assets/images/projects/yap-pakistan-3.jpg",
            ],
            imageFit: "cover",
            accent: "#6750A4",
            tech: ["Kotlin", "Android", "Financial APIs", "MVVM", "Firebase"],
            responsibilities: [
                "Worked on local, international, and YAP-to-YAP money transfers",
                "Built Add Beneficiary flows",
                "Implemented virtual card features",
                "Delivered customer onboarding experiences",
            ],
            links: {
                playStore: "https://play.google.com/store/apps/details?id=com.yappakistan.app&hl=en",
                live: "https://yappakistan.com/",
                github: null,
            },
        },
        {
            id: "short-video",
            featured: true,
            title: "Short Video Streaming App",
            subtitle: "Kotlin · Media3 ExoPlayer · HLS",
            role: "Android Developer",
            description:
                "TikTok-style vertical video feed with HLS adaptive streaming, auto-play, intelligent buffering, and lifecycle-aware playback.",
            longDescription:
                "Developed a high-performance short video streaming Android app using Kotlin, Jetpack Compose, and Media3 ExoPlayer. Features include a vertical video feed, HLS adaptive streaming, auto-play, intelligent buffering, video preloading, and lifecycle-aware playback—built with MVVM, Clean Architecture, Hilt, Retrofit, Coroutines, and Room. Backend-ready for a custom streaming server.",
            icon: "🎬",
            image: "assets/images/projects/short-video.jpg",
            images: ["assets/images/projects/short-video-1.jpg"],
            imageFit: "contain",
            accent: "#111827",
            tech: ["Kotlin", "Jetpack Compose", "Media3 ExoPlayer", "HLS", "MVVM", "Hilt", "Room"],
            responsibilities: [
                "Built TikTok-style vertical feed with Compose",
                "Integrated Media3 ExoPlayer with HLS adaptive streaming",
                "Implemented auto-play, preloading, and lifecycle-aware playback",
                "Architected with MVVM, Clean Architecture, Hilt, Retrofit, Coroutines, and Room",
            ],
            links: { playStore: null, live: null, github: null },
        },
        {
            id: "al-jumaih",
            featured: true,
            title: "Al-Jumaih",
            subtitle: "Arabic Family Management & Social Platform",
            role: "Native Android Developer",
            description:
                "Private family networking app with digital directory, family tree, document preservation, and social tools—full Arabic RTL support.",
            longDescription:
                "Developed Al-Jumaih, a private family networking app for one of Saudi Arabia's leading family groups. Built a digital family directory, family tree, document & manuscript preservation, and social engagement tools using Kotlin, MVVM, REST APIs, and Firebase, with full Arabic (RTL) and multilingual support. Focused on performance, scalability, and clean architecture.",
            icon: "📜",
            image: "assets/images/projects/al-jumaih.jpg",
            images: [
                "assets/images/projects/al-jumaih-1.jpg",
                "assets/images/projects/al-jumaih-2.jpg",
                "assets/images/projects/al-jumaih-3.jpg",
                "assets/images/projects/al-jumaih-4.jpg",
            ],
            imageFit: "contain",
            accent: "#9A6B4F",
            tech: ["Kotlin", "MVVM", "REST APIs", "Firebase", "RTL / Arabic"],
            responsibilities: [
                "Built digital family directory and family tree features",
                "Implemented document and manuscript preservation tools",
                "Delivered social engagement experiences with Arabic RTL layouts",
                "Ensured performance and scalability with clean architecture",
            ],
            links: {
                playStore: "https://play.google.com/store/apps/details?id=com.ime.aljumaih",
                live: null,
                github: null,
            },
        },
        {
            id: "al-kazi",
            featured: true,
            title: "Al-Kazi",
            subtitle: "Arabic Family Social Platform",
            role: "Android Developer",
            description:
                "Arabic family social app—content sharing, image posts, family news feeds, and in-app chat.",
            longDescription:
                "Built Al-Kazi (القاضي), an Arabic family social platform delivering content sharing, image posts, family news feeds, directory search, notification preferences, and in-app chat for Arabic-speaking families—implemented with Kotlin and Firebase, full RTL support, and published on Google Play.",
            icon: "👨‍👩‍👧‍👦",
            image: "assets/images/projects/al-kazi.jpg",
            images: [
                "assets/images/projects/al-kazi-ps-1.jpg",
                "assets/images/projects/al-kazi-ps-2.jpg",
                "assets/images/projects/al-kazi-ps-3.jpg",
                "assets/images/projects/al-kazi-ps-4.jpg",
                "assets/images/projects/al-kazi-ps-5.jpg",
                "assets/images/projects/al-kazi-collage.jpg",
                "assets/images/projects/al-kazi-icon.jpg",
            ],
            imageFit: "contain",
            accent: "#A67C52",
            tech: ["Kotlin", "Firebase", "Chat", "MVVM", "RTL / Arabic"],
            responsibilities: [
                "Delivered home navigation, news feed, gallery, and lineage experiences",
                "Built family directory search and profile browsing",
                "Implemented notification settings and Arabic RTL-first layouts",
                "Shipped a production Play Store release with Firebase backends",
            ],
            links: {
                playStore: "https://play.google.com/store/apps/details?id=com.ime.alkadi&hl=en",
                live: null,
                github: null,
            },
        },
        {
            id: "al-rais",
            featured: true,
            title: "Al-Rais",
            subtitle: "Family Heritage & Genealogy",
            role: "Android Developer",
            description:
                "Genealogy reference app for the Al-Rais family—lineage records for 700,000+ members worldwide.",
            longDescription:
                "Built Al-Rais (الريس), a family heritage and genealogy reference app delivering documented family history, lineage records, news, library, directory, and notable personalities for the Al-Rais family (700,000+ members worldwide), with roots in Hajar al-Yamamah, central Saudi Arabia—full Arabic RTL with a forest-green branded UI.",
            icon: "🌳",
            image: "assets/images/projects/al-rais.jpg",
            images: [
                "assets/images/projects/al-rais-ps-1.jpg",
                "assets/images/projects/al-rais-ps-2.jpg",
                "assets/images/projects/al-rais-ps-3.jpg",
                "assets/images/projects/al-rais-ps-4.jpg",
                "assets/images/projects/al-rais-collage.jpg",
                "assets/images/projects/al-rais-icon.jpg",
            ],
            imageFit: "contain",
            accent: "#1B4332",
            tech: ["Kotlin", "Firebase", "MVVM", "RTL / Arabic", "REST APIs"],
            responsibilities: [
                "Delivered dashboard, news feed, lineage, and library experiences",
                "Built family tree, directory, and personality browsing",
                "Implemented Arabic RTL layouts with a cohesive green brand system",
                "Published and maintained the Google Play release",
            ],
            links: {
                playStore: "https://play.google.com/store/apps/details?id=com.ime.alrais",
                live: null,
                github: null,
            },
        },
        {
            id: "ikram",
            featured: true,
            title: "Ikram",
            subtitle: "GPS-Based Grave Locator App",
            role: "Android Developer",
            description:
                "Charitable GPS app that helps users locate graves of loved ones in organised cemeteries worldwide.",
            longDescription:
                "Developed Ikram, a charitable initiative designed to help users locate graves of loved ones in organised cemeteries worldwide using GPS technology—with map-based navigation, performance optimisation, and an accessible, intuitive UI.",
            icon: "📍",
            image: "assets/images/projects/ikram.jpg",
            images: ["assets/images/projects/ikram-1.jpg"],
            imageFit: "cover",
            accent: "#0D9488",
            tech: ["Kotlin", "Android", "GPS", "Google Maps API"],
            responsibilities: [
                "Built GPS-based grave search with real-time location",
                "Integrated map-based navigation for cemetery exploration",
                "Optimised performance for a smooth, reliable experience",
                "Designed an accessible and intuitive UI/UX",
            ],
            links: {
                playStore: "https://play.google.com/store/apps/details?id=com.ime.alikram&hl=en",
                live: null,
                github: null,
            },
        },
        {
            id: "dirxi",
            featured: true,
            title: "Dirxi",
            subtitle: "Ride Booking Android Application",
            role: "Native Android Developer",
            description:
                "Ride-booking module and Compose UI for a commercial ride-hailing app—Maps, REST APIs, and real-time location.",
            longDescription:
                "Developed the ride booking module and UI for Dirxi, a commercial ride-hailing app, using Kotlin and Jetpack Compose. Built responsive Android screens and integrated Google Maps, REST APIs, and real-time location services. Collaborated with backend and UI/UX teams while following MVVM and Clean Architecture, focusing on maintainable code and a smooth production experience.",
            icon: "🚗",
            image: "assets/images/projects/dirxi.jpg",
            images: ["assets/images/projects/dirxi-1.jpg"],
            imageFit: "cover",
            accent: "#2563EB",
            tech: ["Kotlin", "Jetpack Compose", "Google Maps API", "Clean Architecture", "Android SDK"],
            responsibilities: [
                "Built the ride booking module and responsive Compose screens",
                "Integrated Google Maps, REST APIs, and real-time location services",
                "Followed MVVM and Clean Architecture with the backend / design teams",
                "Optimised performance for a smooth production booking flow",
            ],
            links: {
                playStore: null,
                live: "https://dirxi.com/",
                github: null,
            },
        },
        {
            id: "ticketlake",
            featured: true,
            title: "TicketLake",
            subtitle: "Event Ticketing Platform",
            role: "Android Developer",
            description:
                "Event ticketing app—browse events, explore details, personalise interests, and track movies with a bold red UI.",
            longDescription:
                "At Synavos I developed core Android features for TicketLake including event listing, detailed event pages (maps, celebs, ticket classes), interest onboarding, and movie tracking. Optimised RecyclerView and image-loading pipelines (~30% smoother UI) and added Firebase Analytics plus FCM for re-engagement.",
            icon: "🎫",
            image: "assets/images/projects/ticketlake.jpg",
            images: [
                "assets/images/projects/ticketlake-1.jpg",
                "assets/images/projects/ticketlake-2.jpg",
                "assets/images/projects/ticketlake-3.jpg",
                "assets/images/projects/ticketlake-4.jpg",
            ],
            imageFit: "contain",
            accent: "#DC2626",
            tech: ["Kotlin", "Android SDK", "RecyclerView", "QR Scanning", "Firebase", "FCM"],
            responsibilities: [
                "Built event listing, detail pages, and interest personalisation flows",
                "Implemented movie browsing with cinema location and schedule data",
                "Optimised RecyclerView and image-loading pipelines",
                "Added Firebase Analytics and Cloud Messaging for engagement",
            ],
            links: {
                playStore: null,
                live: "https://ticketlake.com",
                github: null,
            },
        },
        {
            id: "expense-tracker",
            featured: true,
            title: "Personal Expense Tracker",
            subtitle: "Flutter · Dart · Cross-platform",
            role: "Application Developer",
            description:
                "Full-featured Flutter expense tracker for iOS and Android—categories, charts, and local persistence.",
            longDescription:
                "Built a full-featured personal expense tracker with Flutter and Dart for both iOS and Android from a single codebase. Users manage daily spending with an intuitive UI, visual analytics, and category-based tracking—including add/edit/delete expenses, filtering, charts, Material Design UI, and local data persistence.",
            icon: "💰",
            image: "assets/images/projects/expense-tracker.jpg",
            images: [
                "assets/images/projects/expense-tracker-1.jpg",
                "assets/images/projects/expense-tracker-2.jpg",
                "assets/images/projects/expense-tracker-3.jpg",
                "assets/images/projects/expense-tracker-4.jpg",
            ],
            imageFit: "contain",
            accent: "#059669",
            tech: ["Flutter", "Dart", "Material Design", "Local Persistence", "Testing"],
            responsibilities: [
                "Shipped add, edit, and delete expense flows with categories and dates",
                "Built category filtering (Food, Travel, Work, Leisure, and more)",
                "Added visual spending breakdown with charts and graphs",
                "Delivered responsive Material UI with local data persistence",
            ],
            links: {
                playStore: null,
                live: null,
                github: "https://github.com/MehreenAhmed8/expense_tracker",
            },
        },
        {
            id: "yap-uae",
            featured: false,
            title: "YAP UAE",
            subtitle: "Regional Digital Wallet",
            role: "Android Developer",
            description:
                "Fintech wallet for the UAE—KYC onboarding, identity verification SDKs, and localized wallet flows.",
            longDescription:
                "Delivered Android features for YAP UAE focused on customer KYC onboarding and Flutter SDK–based identity verification, helping reduce onboarding time by ~30% while integrating financial APIs and compliance workflows across the UAE market.",
            icon: "🏦",
            image: "assets/images/projects/yap-uae.svg",
            images: ["assets/images/projects/yap-uae.svg"],
            imageFit: "cover",
            accent: "#0D9488",
            tech: ["Kotlin", "MVVM", "Jetpack Navigation", "KYC SDKs", "Financial APIs"],
            responsibilities: [
                "Delivered KYC onboarding and liveness verification for the UAE wallet",
                "Integrated financial APIs and third-party identity verification SDKs",
                "Implemented MVVM with Jetpack Navigation",
                "Contributed to Agile milestones across regional fintech deliveries",
            ],
            links: {
                playStore: null,
                live: "https://yap.com/",
                github: null,
            },
        },
        {
            id: "yap-ksa",
            featured: false,
            title: "YAP KSA",
            subtitle: "Saudi Digital Wallet",
            role: "Android Developer",
            description:
                "Saudi Arabia wallet with Arabic-ready KYC, identity verification, and regulated fintech flows.",
            longDescription:
                "Built and shipped YAP KSA Android features—customer KYC, ID scanning via Flutter SDK, and market-specific compliance workflows that cut onboarding time by ~30% for the Saudi market.",
            icon: "🇸🇦",
            image: "assets/images/projects/yap-ksa.svg",
            images: ["assets/images/projects/yap-ksa.svg"],
            imageFit: "cover",
            accent: "#0F766E",
            tech: ["Kotlin", "MVVM", "Clean Architecture", "KYC", "RTL"],
            responsibilities: [
                "Shipped KYC and liveness verification for the KSA market",
                "Streamlined regulatory compliance workflows with identity SDKs",
                "Reduced onboarding time by ~30% across regional deliveries",
                "Improved maintainability via Navigation Component and MVVM",
            ],
            links: {
                playStore: null,
                live: "https://yap.com/",
                github: null,
            },
        },
        {
            id: "german-kitchen",
            featured: false,
            title: "German Kitchen App",
            subtitle: "Restaurant Order Lifecycle",
            role: "Android Developer",
            description:
                "German-language kitchen order system—Received → Preparing → Delivered for restaurant machines.",
            longDescription:
                "Developed a German-language kitchen order management app for restaurant order-taking machines—similar to a chef-side food delivery system—where staff punch orders that flow through Received, Preparing, and Delivered states in real time, built end-to-end in Kotlin with a custom order lifecycle.",
            icon: "🍳",
            image: "assets/images/projects/german-kitchen.svg",
            images: ["assets/images/projects/german-kitchen.svg"],
            imageFit: "cover",
            accent: "#4F46E5",
            tech: ["Kotlin", "Order Lifecycle", "German L10n", "Real-time State", "MVVM"],
            responsibilities: [
                "Built end-to-end kitchen order management for restaurant machines",
                "Implemented Received → Preparing → Delivered real-time order states",
                "Localised the experience for German-speaking staff workflows",
                "Owned delivery from client requirements through production handover",
            ],
            links: { playStore: null, live: null, github: null },
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
    const featuredGrid = document.getElementById("featuredGrid");
    const moreGrid = document.getElementById("moreGrid");

    function linkButton(href, label, className = "btn-sm") {
        if (!href) {
            return `<span class="${className} is-disabled" aria-disabled="true">${label}</span>`;
        }
        return `<a class="${className}" href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    }

    function projectCardHTML(p, index, compact = false) {
        return `
            <article class="project-card reveal${compact ? " is-compact" : ""}" data-id="${p.id}" data-accent="${p.accent}" data-delay="${(index % 3) * 0.08}" data-fit="${p.imageFit || "cover"}">
                <div class="project-visual ${p.imageFit === "contain" ? "is-contain" : ""}">
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
                    <p class="project-role">${p.role || "Android Developer"}</p>
                    <h3>${p.title}</h3>
                    ${p.subtitle ? `<p class="project-subtitle">${p.subtitle}</p>` : ""}
                    <p>${p.description}</p>
                    <div class="tech-row">
                        ${p.tech.slice(0, compact ? 3 : 4).map((t) => `<span>${t}</span>`).join("")}
                    </div>
                    <div class="project-actions">
                        <button type="button" class="btn-sm accent" data-details="${p.id}">View Details</button>
                        ${linkButton(p.links.live, "Live App")}
                        ${linkButton(p.links.playStore, "Play Store")}
                        ${linkButton(p.links.github, "GitHub")}
                    </div>
                </div>
            </article>`;
    }

    function observeReveals(root) {
        if (!root) return;
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
            root.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
        } else {
            root.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
        }
    }

    function bindCardStyles(root) {
        root?.querySelectorAll(".project-card").forEach((card) => {
            const accent = card.dataset.accent;
            const delay = card.dataset.delay;
            if (accent) card.style.setProperty("--accent", accent);
            if (delay) card.style.setProperty("--delay", `${delay}s`);
        });
    }

    function renderProjects() {
        const featured = projects.filter((p) => p.featured);
        const more = projects.filter((p) => !p.featured);

        if (featuredGrid) {
            featuredGrid.innerHTML = featured.map((p, i) => projectCardHTML(p, i, false)).join("");
            bindCardStyles(featuredGrid);
            observeReveals(featuredGrid);
        }

        if (moreGrid) {
            moreGrid.innerHTML = more.map((p, i) => projectCardHTML(p, i, true)).join("");
            bindCardStyles(moreGrid);
            observeReveals(moreGrid);
        }

        observeReveals(document.getElementById("projects"));
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

        const gallery = project.images && project.images.length ? project.images : [project.image];
        const fitClass = project.imageFit === "contain" ? "is-contain" : "";

        modalAccent.style.background = project.accent;
        modalVisual.style.setProperty("--accent", project.accent);
        modalVisual.className = `modal-visual ${fitClass}`;
        modalVisual.innerHTML = `
            <div class="modal-gallery" role="region" aria-label="${project.title} screenshots">
                <img
                    class="modal-image"
                    id="modalMainImage"
                    src="${gallery[0]}"
                    alt="${project.title} screenshot 1"
                    decoding="async"
                    width="640"
                    height="360">
                ${
                    gallery.length > 1
                        ? `<div class="modal-thumbs" role="list">
                        ${gallery
                            .map(
                                (src, i) => `
                            <button type="button" class="modal-thumb${i === 0 ? " is-active" : ""}" role="listitem"
                                data-gallery-src="${src}" aria-label="View screenshot ${i + 1}">
                                <img src="${src}" alt="" loading="lazy" decoding="async" width="72" height="72">
                            </button>`
                            )
                            .join("")}
                       </div>`
                        : ""
                }
            </div>
            <span class="project-icon-badge modal-badge" aria-hidden="true">${project.icon}</span>
        `;

        const roleEl = document.getElementById("modalRole");
        const subtitleEl = document.getElementById("modalSubtitle");
        if (roleEl) roleEl.textContent = project.role || "";
        if (subtitleEl) subtitleEl.textContent = project.subtitle || "";

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
        const thumb = e.target.closest("[data-gallery-src]");
        if (thumb) {
            const main = document.getElementById("modalMainImage");
            if (main) {
                main.src = thumb.dataset.gallerySrc;
                main.alt = `Screenshot`;
            }
            document.querySelectorAll(".modal-thumb").forEach((t) => t.classList.remove("is-active"));
            thumb.classList.add("is-active");
            return;
        }

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
