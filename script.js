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
            role: "Mobile Application Engineer",
            description:
                "Digital wallet for Pakistan families: transfers, beneficiaries, virtual cards, and onboarding in a regulated fintech product.",
            longDescription:
                "Problem: families needed a reliable way to pay, save, and transfer money on mobile. I helped build YAP Pakistan from scratch with Kotlin, financial APIs, MVVM, and Firebase. Key work included local, international, and YAP-to-YAP transfers, beneficiaries, virtual cards, and customer onboarding. Impact: faster, more stable payment journeys for production users on Google Play.",
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
                "Built local, international, and YAP-to-YAP money transfers",
                "Shipped Add Beneficiary and virtual card flows",
                "Delivered customer onboarding for wallet activation",
                "Integrated financial APIs for secure payment operations",
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
            role: "Mobile Application Engineer",
            description:
                "Vertical short-video feed with HLS streaming, auto-play, buffering, and lifecycle-aware playback.",
            longDescription:
                "Problem: the product needed a TikTok-style feed that stays smooth on mid-range devices. I built the Android app with Kotlin, Jetpack Compose, and Media3 ExoPlayer using MVVM, Clean Architecture, Hilt, Retrofit, Coroutines, and Room. Key work covered HLS adaptive streaming, auto-play, preloading, and lifecycle-aware playback. Impact: a backend-ready streaming client with maintainable architecture for future growth.",
            icon: "🎬",
            image: "assets/images/projects/short-video.jpg",
            images: ["assets/images/projects/short-video-1.jpg"],
            imageFit: "contain",
            accent: "#111827",
            tech: ["Kotlin", "Jetpack Compose", "Media3 ExoPlayer", "HLS", "MVVM", "Hilt", "Room"],
            responsibilities: [
                "Built the vertical video feed in Jetpack Compose",
                "Integrated Media3 ExoPlayer with HLS adaptive streaming",
                "Implemented auto-play, preloading, and lifecycle-aware playback",
                "Structured the app with MVVM, Clean Architecture, Hilt, and Room",
            ],
            links: { playStore: null, live: null, github: null },
        },
        {
            id: "al-jumaih",
            featured: true,
            title: "Al-Jumaih",
            subtitle: "Arabic Family Management & Social Platform",
            role: "Mobile Application Engineer",
            description:
                "Private family networking app with directory, family tree, document archive, and Arabic RTL support.",
            longDescription:
                "Problem: a large Saudi family needed one private app for lineage, documents, and member connection. I developed Al-Jumaih in Kotlin with MVVM, REST APIs, and Firebase, including full Arabic RTL. Key work covered the digital directory, family tree, manuscript preservation, and social tools. Impact: a production Play Store app that keeps family records and engagement in one place.",
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
                "Delivered social features with Arabic RTL layouts",
                "Shipped a scalable production release on Google Play",
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
            role: "Mobile Application Engineer",
            description:
                "Arabic family social app with news, gallery, directory, chat, and notification controls.",
            longDescription:
                "Problem: Arabic-speaking families needed a private space for news, photos, and member discovery. I built Al-Kazi (القاضي) with Kotlin and Firebase, full RTL support, and Play Store publishing. Key work covered home navigation, news feed, gallery, lineage, directory search, and notification settings. Impact: a live family platform that keeps members informed and connected.",
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
                "Delivered home, news, gallery, and lineage experiences",
                "Built family directory search and profile browsing",
                "Implemented notification settings with Arabic RTL layouts",
                "Published and maintained the Google Play release",
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
            role: "Mobile Application Engineer",
            description:
                "Genealogy and heritage app for the Al-Rais family: lineage, news, library, and directory.",
            longDescription:
                "Problem: a family of 700,000+ members needed a digital home for history and lineage. I built Al-Rais (الريس) with Kotlin, Firebase, MVVM, REST APIs, and Arabic RTL. Key work covered dashboard, news, lineage, library, directory, and personalities. Impact: a branded Play Store app that preserves family records at scale.",
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
                "Delivered dashboard, news, lineage, and library screens",
                "Built family tree, directory, and personality browsing",
                "Implemented Arabic RTL layouts with a consistent brand system",
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
            role: "Mobile Application Engineer",
            description:
                "Charitable GPS app that helps families find graves in organised cemeteries with map navigation.",
            longDescription:
                "Problem: visitors struggled to locate graves in large organised cemeteries. I developed Ikram with Kotlin, GPS, and Google Maps API. Key work covered real-time location search, map navigation, and a clear, accessible UI. Impact: a published Play Store tool that makes cemetery visits easier for families.",
            icon: "📍",
            image: "assets/images/projects/ikram.jpg",
            images: ["assets/images/projects/ikram-1.jpg"],
            imageFit: "cover",
            accent: "#0D9488",
            tech: ["Kotlin", "Android", "GPS", "Google Maps API"],
            responsibilities: [
                "Built GPS-based grave search with real-time location",
                "Integrated map navigation for cemetery exploration",
                "Optimised performance for a smooth, reliable experience",
                "Designed an accessible, easy-to-use interface",
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
            role: "Mobile Application Engineer",
            description:
                "Ride-booking module and Compose UI for a commercial ride-hailing app with Maps and live location.",
            longDescription:
                "Problem: Dirxi needed a dependable booking experience for riders in production. I built the booking module and UI with Kotlin and Jetpack Compose, integrating Google Maps, REST APIs, and real-time location under MVVM and Clean Architecture. Impact: smoother booking flows and a maintainable codebase for ongoing product releases.",
            icon: "🚗",
            image: "assets/images/projects/dirxi.jpg",
            images: ["assets/images/projects/dirxi-1.jpg"],
            imageFit: "cover",
            accent: "#2563EB",
            tech: ["Kotlin", "Jetpack Compose", "Google Maps API", "Clean Architecture", "Android SDK"],
            responsibilities: [
                "Built the ride booking module and responsive Compose screens",
                "Integrated Google Maps, REST APIs, and real-time location",
                "Applied MVVM and Clean Architecture with product and backend teams",
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
            role: "Mobile Application Engineer",
            description:
                "Event ticketing app for browsing events, details, interests, and cinema schedules.",
            longDescription:
                "Problem: users needed one place to discover events, tickets, and movies. At Synavos I built core Android features for TicketLake: event listing, detail pages, interest onboarding, and movie tracking with Kotlin, RecyclerView, Firebase, and FCM. Impact: smoother lists (~30% better UI smoothness) and higher re-engagement (+18%) through push notifications.",
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
                "Built event listing, detail pages, and interest onboarding",
                "Implemented movie browsing with cinema location and schedules",
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
            role: "Mobile Application Engineer",
            description:
                "Flutter expense tracker for iOS and Android: categories, charts, and local persistence.",
            longDescription:
                "Problem: users needed a simple way to track daily spending on both platforms. I built a Flutter and Dart app from one codebase with Material UI, category filtering, charts, and local persistence. Key work covered add/edit/delete expenses and visual spending breakdowns. Impact: a polished cross-platform demo of my growing Flutter skills alongside native Android work.",
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
                "Shipped add, edit, and delete expense flows with categories",
                "Built category filtering for Food, Travel, Work, Leisure, and more",
                "Added visual spending breakdown with charts",
                "Delivered responsive Material UI with local data persistence",
            ],
            links: {
                playStore: null,
                live: null,
                github: "https://github.com/MehreenAhmed8/expense_tracker",
            },
        },
        {
            id: "trading-view",
            featured: false,
            title: "Trading View",
            subtitle: "Flutter · Clean Architecture · Market Dashboard",
            role: "Mobile Application Engineer",
            description:
                "Flutter market dashboard for gold, silver, Bitcoin, and Ethereum with charts, signals, and news.",
            longDescription:
                "Problem: traders needed a clear mobile view of live prices and simple technical signals. I built a Flutter dashboard with Clean Architecture and BLoC using CoinGecko for live prices, sparkline charts, trading signals, and an RSS news feed. Impact: a dark-first market app that shows my Flutter growth with clean architecture and offline-friendly caching.",
            icon: "📈",
            image: "assets/images/projects/trading-view.jpg",
            images: [
                "assets/images/projects/trading-view-1.jpg",
                "assets/images/projects/trading-view-2.jpg",
                "assets/images/projects/trading-view-3.jpg",
            ],
            imageFit: "contain",
            accent: "#C9A227",
            tech: ["Flutter", "Dart", "BLoC", "Clean Architecture", "CoinGecko API", "google_fonts"],
            responsibilities: [
                "Designed Clean Architecture layers with BLoC for markets and news",
                "Built live asset cards with sparkline charts and detail sheets",
                "Implemented technical signal analysis with clear reasoning",
                "Shipped dark-first UI with auto-refresh, offline cache, and RSS news",
            ],
            links: {
                playStore: null,
                live: null,
                github: "https://github.com/MehreenAhmed8/trading_view",
            },
        },
        {
            id: "yap-uae",
            featured: false,
            title: "YAP UAE",
            subtitle: "Regional Digital Wallet",
            role: "Mobile Application Engineer",
            description:
                "UAE digital wallet features focused on KYC onboarding and identity verification.",
            longDescription:
                "Problem: the UAE wallet needed faster, compliant customer onboarding. I delivered Android features for YAP UAE with Kotlin, MVVM, Navigation, KYC SDKs, and financial APIs, including Flutter SDK–based identity verification. Impact: onboarding time reduced by ~30% while meeting regional compliance needs.",
            icon: "🏦",
            image: "assets/images/projects/yap-uae.svg",
            images: ["assets/images/projects/yap-uae.svg"],
            imageFit: "cover",
            accent: "#0D9488",
            tech: ["Kotlin", "MVVM", "Jetpack Navigation", "KYC SDKs", "Financial APIs"],
            responsibilities: [
                "Delivered KYC onboarding and liveness verification for the UAE wallet",
                "Integrated financial APIs and third-party identity SDKs",
                "Implemented MVVM with Jetpack Navigation",
                "Supported Agile milestones across regional fintech releases",
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
            role: "Mobile Application Engineer",
            description:
                "Saudi digital wallet with Arabic-ready KYC, ID scanning, and compliance workflows.",
            longDescription:
                "Problem: the KSA market required Arabic-ready onboarding and identity checks. I shipped YAP KSA Android features with Kotlin, MVVM, Clean Architecture, KYC, and RTL support, including ID scanning via Flutter SDK. Impact: onboarding time cut by ~30% for the Saudi wallet release.",
            icon: "🇸🇦",
            image: "assets/images/projects/yap-ksa.svg",
            images: ["assets/images/projects/yap-ksa.svg"],
            imageFit: "cover",
            accent: "#0F766E",
            tech: ["Kotlin", "MVVM", "Clean Architecture", "KYC", "RTL"],
            responsibilities: [
                "Shipped KYC and liveness verification for the KSA market",
                "Streamlined compliance workflows with identity SDKs",
                "Reduced onboarding time by ~30% across regional deliveries",
                "Improved maintainability with Navigation Component and MVVM",
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
            role: "Mobile Application Engineer",
            description:
                "German kitchen order system with Received, Preparing, and Delivered states for restaurant machines.",
            longDescription:
                "Problem: kitchen staff needed a clear order board on restaurant machines. I built an end-to-end Kotlin app with a custom order lifecycle and German localisation. Key work covered real-time Received → Preparing → Delivered states. Impact: faster kitchen coordination for German-speaking restaurant teams.",
            icon: "🍳",
            image: "assets/images/projects/german-kitchen.svg",
            images: ["assets/images/projects/german-kitchen.svg"],
            imageFit: "cover",
            accent: "#4F46E5",
            tech: ["Kotlin", "Order Lifecycle", "German L10n", "Real-time State", "MVVM"],
            responsibilities: [
                "Built end-to-end kitchen order management for restaurant machines",
                "Implemented Received → Preparing → Delivered real-time states",
                "Localised the experience for German-speaking staff",
                "Owned delivery from requirements through production handover",
            ],
            links: { playStore: null, live: null, github: null },
        },
    ];

    /* ---------- Typing animation ---------- */
    const roles = [
        "Fintech Mobile Apps",
        "Digital Wallets",
        "Ride-Hailing Apps",
        "Kotlin Android Apps",
        "Flutter Mobile Apps",
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
