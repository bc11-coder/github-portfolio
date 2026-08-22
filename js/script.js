// Basic interactivity: mobile nav toggle, smooth scroll, reveal on scroll with IntersectionObserver
(function(){
	'use strict';

	const translations = {
		de: {
			'skip': 'Zum Inhalt springen', 'nav.open': 'Navigation öffnen', 'nav.close': 'Navigation schließen', 'profile.alt': 'Profilbild',
			'nav.home': 'Startseite', 'nav.about': 'Über mich', 'nav.skills': 'Kenntnisse', 'nav.projects': 'Projekte', 'nav.contact': 'Kontakt',
			'hero.eyebrow': 'Moin, ich bin', 'hero.sub': 'Wirtschaftsinformatik-Student mit Begeisterung für moderne Softwarelösungen, Mobile Apps, Backends und KI-Anwendungen.',
			'hero.projects': 'Projekte ansehen', 'hero.contact': 'Kontakt aufnehmen', 'about.title': 'Über mich',
			'about.sub': 'Moin! Ich bin Wirtschaftsinformatik-Student mit Begeisterung für die Entwicklung moderner Softwarelösungen. Mein Schwerpunkt lag bisher auf der Fullstack-Entwicklung von Mobile Apps mit Flutter und Dart sowie von Backends mit Java Spring Boot, SQL und Docker. Ich bin offen für neue Themenfelder, lerne motiviert andere Tech-Stacks kennen und interessiere mich stark für KI-Anwendungen.',
			'about.short': 'Über mich', 'about.short.text': 'Wirtschaftsinformatik-Student mit Begeisterung für moderne Softwarelösungen und Fullstack-Entwicklung.', 'about.background': 'Ausbildung',
			'about.background.text': 'Wirtschaftsinformatik B.Sc. an der Universität Hamburg, aktuell im 6. Semester.',
			'about.focus': 'Stärken', 'about.focus.text': 'Kommunikation, Zeitmanagement, Organisation, Programmierung, Kreativität und Teamfähigkeit. Außerdem bringe ich verlässliches Zeitmanagement, hohe Lernbereitschaft und echte Freude an der Teamarbeit mit.',
			'skills.title': 'Tech-Stack', 'skills.sub': 'Technologien, Entwicklungsumgebungen und Methoden, mit denen ich arbeite.',
			'stack.one': 'Java (Spring Boot)', 'stack.two': 'Dart (Flutter)', 'stack.three': 'SQL', 'stack.four': 'HTML/CSS/JavaScript (Basics)',
			'stack.five': 'REST-APIs, Spring Data JPA (Backend)', 'stack.six': 'Docker', 'stack.seven': 'Git, GitHub, GitLab',
			'stack.eight': 'Postman', 'stack.nine': 'PostgreSQL', 'stack.ten': 'Figma, Canva (UI/UX &amp; Design)',
			'stack.eleven': 'LucidChart', 'stack.twelve': 'IntelliJ, VS Code, Android Studio, Eclipse (IDEs)',
			'stack.thirteen': 'Word, Excel, PowerPoint', 'stack.fourteen': 'MS Teams, Zoom, Slack (Kommunikation)',
			'projects.title': 'Schlüsselprojekte', 'projects.sub': 'Eine Auswahl meiner bisherigen Projekte und Studienarbeiten.',
			'detail.projectType': 'Projektart', 'detail.semester': 'Semester', 'detail.description.heading': 'Beschreibung', 'detail.innovation': 'Innovation & Kundennutzen', 'detail.roadmap': 'Produkt-Roadmap', 'detail.context': 'Kontext & Zielsetzung', 'detail.components': 'Systemkomponenten', 'detail.setup': 'Getting Started', 'detail.pending': 'Weitere Details werden ergänzt.', 'detail.link': 'Projektlink (wird ergänzt)',
			'project.one': 'Monetrack', 'project.one.description': 'Fullstack-Finanzanwendung mit Flutter, Spring Boot und PostgreSQL.', 'project.two': 'MySight', 'project.two.description': 'KI-gestützter persönlicher Tourguide zur individuellen Planung von Stadterlebnissen.',
			'project.three': 'DevEcho', 'project.three.description': 'VS-Code-Extension, mobile App und Backend für strukturiertes Developer-Experience-Feedback bei SAP.',
			'project.four': 'Tetris', 'project.four.description': 'Java-/Swing-Tetris mit MVC-Architektur, Tests, Highscores, Animationen und Musik.',
			'project.two.tag2': 'Flutter / KI', 'project.three.tag2': 'IDE Extension / KI', 'project.view': 'Projekt ansehen',
			'contact.title': 'Kontakt', 'contact.sub': 'Nimm gerne Kontakt mit mir auf.', 'contact.email': 'E-Mail',
			'contact.note': 'Kontaktformular:', 'contact.name': 'Dein Name',
			'contact.message': 'Nachricht', 'contact.message.placeholder': 'Hier kannst du eine Nachricht schreiben...', 'contact.send': 'Senden',
			'project.back': '← Zurück zur Startseite', 'project.description.title': 'Projektbeschreibung',
			'project.placeholder.description': '[Hier später eine Beschreibung des Projekts einfügen.]', 'project.problem': 'Problem / Ziel',
			'project.placeholder.problem': 'Weitere Details werden ergänzt.', 'project.solution': 'Lösung',
			'project.placeholder.solution': 'Weitere Details werden ergänzt.', 'project.technologies': 'Verwendete Technologien',
			'project.placeholder.technologies': 'Weitere Details werden ergänzt.', 'project.features': 'Wichtige Features',
			'project.feature1': 'Weitere Details werden ergänzt.', 'project.feature2': 'Weitere Details werden ergänzt.', 'project.technical': 'Technische Details',
			'project.placeholder.technical': 'Weitere Details werden ergänzt.', 'project.challenges': 'Herausforderungen',
			'project.placeholder.challenges': 'Weitere Details werden ergänzt.', 'project.lessons': 'Lessons Learned',
			'project.placeholder.lessons': 'Weitere Details werden ergänzt.', 'project.screenshots': 'Screenshots',
			'project.placeholder.screenshots': 'Weitere Details werden ergänzt.', 'project.repository': 'Repository:',
			'project.demo': 'Projektlink (wird ergänzt)', 'detail.description': 'Weitere Details werden ergänzt.',
			'detail.technologies': 'Weitere Details werden ergänzt.', 'page.about': 'About — Batuhan Can',
			'page.contact': 'Kontakt — Batuhan Can', 'page.projects': 'Projekte — Batuhan Can', 'page.description': 'Portfolio von Batuhan Can, Wirtschaftsinformatik-Student mit Fokus auf Fullstack-Entwicklung, Mobile Apps und KI-Anwendungen.', 'page.og': 'Wirtschaftsinformatik-Student mit Schwerpunkt auf Fullstack-Entwicklung, Mobile Apps und KI-Anwendungen.',
			'project.page.one': 'Monetrack — Batuhan Can', 'project.page.two': 'MySight — Batuhan Can', 'project.page.three': 'DevEcho — Batuhan Can', 'project.page.four': 'Tetris — Batuhan Can'
			, 'detail.one.title': 'Monetrack', 'detail.one.pageTitle': 'Monetrack — Batuhan Can', 'detail.one.description': 'Mobile Expense-Tracker-App als Hobbyprojekt.', 'detail.one.type': 'Hobbyprojekt', 'detail.one.link': 'GitHub-Repository (wird ergänzt)',
			'detail.two.title': 'MySight', 'detail.two.pageTitle': 'MySight — Batuhan Can', 'detail.two.description': 'Mobile App als persönlicher Tourguide mit KI-Integration.', 'detail.two.semester': '6. Semester', 'detail.two.link': 'Projektlink (wird ergänzt)',
			'detail.three.title': 'DevEcho', 'detail.three.pageTitle': 'DevEcho — Batuhan Can', 'detail.three.description': 'Mobile App und IDE Extension zur Optimierung der Developer Experience bei SAP mit KI-Integration.', 'detail.three.semester': '5. Semester', 'detail.three.link': 'Projektlink (wird ergänzt)',
			'detail.four.title': 'Tetris', 'detail.four.pageTitle': 'Tetris — Batuhan Can', 'detail.four.description': 'Bekanntes Spiel mit Animationen, Musik, Score und weiteren Spielelementen.', 'detail.four.semester': '4. Semester', 'detail.four.link': 'Projektlink (wird ergänzt)',
			'detail.documents': 'Dokumente & Medien', 'detail.open': 'Öffnen', 'detail.trailer': 'DevEcho Trailer', 'detail.poster': 'DevEcho Poster', 'detail.presentation': 'DevEcho Präsentation (Kurzfassung)', 'detail.businessPlan': 'Business Plan MySight', 'detail.tetrisDocumentation': 'Projektdokumentation Tetris',
			'monetrack.overview': 'Monetrack ist eine Fullstack-Anwendung zur strukturierten und intuitiven Verwaltung von Einnahmen, Ausgaben und Budgets.', 'monetrack.architecture': 'Das Projekt zeigt eine modulare Flutter-Oberfläche, eine RESTful-Backend-Integration mit Spring Boot und eine klar getrennte, wartbare Systemstruktur.', 'monetrack.stack': 'Flutter (Dart), Java Spring Boot (REST API), PostgreSQL', 'monetrack.structure': 'Layered Backend sowie modulare Flutter-Struktur mit Models, Widgets und Screens.', 'monetrack.features': 'Wallets mit optionalem Startguthaben, Einnahmen und Ausgaben, automatische Kontostandsberechnung, monatliche Finanzübersicht sowie eine responsive Benutzeroberfläche.', 'monetrack.focus': 'Clean-Code-Prinzipien, Separation of Concerns, wiederverwendbare Komponenten, Feature-Branch-Git-Workflow und strukturierte Fullstack-Architektur.', 'monetrack.purpose': 'Als Hobbyprojekt verbindet Monetrack einen realistischen Finanzmanagement-Anwendungsfall mit modernen Software-Engineering-Praktiken und einem auf Wartbarkeit und Skalierbarkeit ausgelegten Entwicklungsworkflow.', 'monetrack.files': 'frontend/ für die Flutter-Anwendung, backend/ für die Spring-Boot-REST-API und README.md für die Projektdokumentation.',
			'mysight.intro': 'MySight ist eine KI-gestützte mobile Anwendung zur personalisierten Planung und Durchführung individueller Stadterlebnisse. Sie reduziert den Rechercheaufwand und erstellt auf Basis von Interessen, Zeitrahmen, Budget, Standort und Reisedatum passende Stadttouren.', 'mysight.value': 'Die Anwendung verbindet personalisierte Tourengenerierung, Navigation, Text- und Audioguides sowie perspektivisch Ticketbuchungen und Reservierungen in einem durchgängigen Nutzungserlebnis.', 'mysight.innovation': 'Der besondere Ansatz liegt in der Integration bislang getrennter Schritte der Customer Journey: von der individuellen Planung über die Navigation bis zur Durchführung und Buchung touristischer Angebote.', 'mysight.scope': 'Der Markteintritt ist zunächst in Hamburg vorgesehen. Die Produkt-Roadmap umfasst unter anderem eine größere Datenbasis, externe Ticketing-APIs, KI-gestützte Audioguides, eine AR-Live-Ansicht sowie ein Portal für touristische Geschäftspartner.',
			'devecho.overview': 'DevEcho ist ein System aus VS-Code-Extension, mobiler App und zentralem Backend. Entwickler können direkt in ihrer IDE und ohne Unterbrechung ihres Workflows Feedback zu ihrer Developer Experience geben.', 'devecho.report': 'Die mobile App ermöglicht Team Leads anschließend, die in einer Woche eingegangenen Rückmeldungen in einem kompakten Wochenbericht zu betrachten und daraus verwertbare Erkenntnisse abzuleiten.', 'devecho.context': 'Das Projekt entstand im M-Lab-Kurs 2025/26 an der Universität Hamburg für den Kunden SAP. Ziel des initialen Prototyps war es, die technische Machbarkeit und den praktischen Nutzen eines solchen Systems zur Verbesserung der Developer Experience zu untersuchen.', 'devecho.components': 'VS-Code-Extension für Feedback im Entwicklungsprozess, mobile App für Wochenberichte und ein zentrales Backend als verbindende Systemkomponente.', 'devecho.setup': 'Für die Nutzung der Extension wird VS Code benötigt. Für das Backend werden Docker und Maven vorausgesetzt. Grundkenntnisse in Git und CLI-Befehlen erleichtern den Zugriff auf das Repository; Docker-Kenntnisse sind für die Bereitstellung des Backends hilfreich.',
			'tetris.overview': 'Im Rahmen des programmiertechnischen Praktikums entstand eine eigene Java-/Swing-Implementierung des klassischen Tetris. Der Fokus lag auf sauberer Architektur, testbarer Spiellogik und einer flüssigen, intuitiven Spielerfahrung.', 'tetris.features': 'Das Spiel umfasst unter anderem 7-Bag-Zufall, SRS-Rotationen mit Wallkicks, Ghost-Mino, Next-Vorschau, Scoring, Levelaufstieg, steigende Gravitation, Highscores, Pause, Musik und Animationen.', 'tetris.engineering': 'Die Dokumentation zeigt die Umsetzung mit MVC-Trennung, modularisierten Services, JUnit-5-Tests für zentrale Logik, robuster Highscore-Persistenz sowie einer tastaturbasierten Bedienung.', 'tetris.result': 'Das Ergebnis ist ein vollständig spielbares Singleplayer-Tetris mit dauerhaft gespeicherten Highscores, Start- und Game-Over-Screens, Partikeleffekten und einer klar strukturierten Java-Codebasis.'
		},
		en: {
			'skip': 'Skip to content', 'nav.open': 'Open navigation', 'nav.close': 'Close navigation', 'profile.alt': 'Profile image placeholder',
			'nav.home': 'Home', 'nav.about': 'About', 'nav.skills': 'Skills', 'nav.projects': 'Projects', 'nav.contact': 'Contact',
			'hero.eyebrow': "Hi, I'm", 'hero.sub': 'Business informatics student passionate about modern software solutions, mobile apps, backends and AI applications.',
			'hero.projects': 'View Projects', 'hero.contact': 'Contact Me', 'about.title': 'About me',
			'about.sub': 'Hi! I am a business informatics student passionate about developing modern software solutions. My focus so far has been fullstack development of mobile apps with Flutter and Dart as well as backends with Java Spring Boot, SQL and Docker. I am open to new fields, motivated to learn other tech stacks and strongly interested in AI applications.', 'about.short': 'About me',
			'about.short.text': 'Business informatics student passionate about modern software solutions and fullstack development.', 'about.background': 'Education',
			'about.background.text': 'B.Sc. Business Informatics at Universität Hamburg, currently in the 6th semester.',
			'about.focus': 'Strengths', 'about.focus.text': 'Communication, time management, organization, programming, creativity and teamwork. I also bring reliable time management, a strong willingness to learn and genuine enjoyment of teamwork.',
			'skills.title': 'Tech Stack', 'skills.sub': 'Technologies, development environments and methods I work with.',
			'stack.one': 'Programming languages & frameworks: Java (Spring Boot)', 'stack.two': 'Dart (Flutter)', 'stack.three': 'SQL', 'stack.four': 'HTML/CSS/JavaScript (basics)',
			'stack.five': 'Backend & DevOps: REST APIs, Spring Data JPA', 'stack.six': 'Docker, Git, GitHub, GitLab, Postman', 'stack.seven': 'PostgreSQL',
			'stack.eight': 'UI/UX & design: Figma, Canva', 'stack.nine': 'IDEs: IntelliJ IDEA, VS Code, Android Studio, Eclipse', 'stack.ten': 'Tools & methodology: MS Office, Zoom, Slack, Scrum',
			'projects.title': 'Key Projects', 'projects.sub': 'A selection of my previous projects and university work.',
			'detail.projectType': 'Project type', 'detail.semester': 'Semester', 'detail.description.heading': 'Description', 'detail.innovation': 'Innovation & user value', 'detail.roadmap': 'Product roadmap', 'detail.context': 'Context & objective', 'detail.components': 'System components', 'detail.setup': 'Getting started', 'detail.pending': 'More details will be added.', 'detail.link': 'Project link (to be added)',
			'project.one': 'Monetrack', 'project.one.description': 'Fullstack personal-finance application with Flutter, Spring Boot and PostgreSQL.', 'project.two': 'MySight', 'project.two.description': 'AI-powered personal tour guide for planning individual city experiences.',
			'project.three': 'DevEcho', 'project.three.description': 'VS Code extension, mobile app and backend for structured developer-experience feedback at SAP.',
			'project.four': 'Tetris', 'project.four.description': 'Java/Swing Tetris with MVC architecture, tests, highscores, animations and music.',
			'project.two.tag2': 'Flutter / AI', 'project.three.tag2': 'IDE Extension / AI', 'project.view': 'View Project',
			'contact.title': 'Contact', 'contact.sub': 'Feel free to get in touch.', 'contact.email': 'Email',
			'contact.note': 'Contact form:', 'contact.name': 'Your name',
			'contact.message': 'Message', 'contact.message.placeholder': 'You can write a message here...', 'contact.send': 'Send',
			'project.back': '← Back to homepage', 'project.description.title': 'Project description',
			'project.placeholder.description': '[Project description will be added here later.]', 'project.problem': 'Problem / Goal',
			'project.placeholder.problem': 'More details will be added.', 'project.solution': 'Solution',
			'project.placeholder.solution': 'More details will be added.', 'project.technologies': 'Technologies used',
			'project.placeholder.technologies': 'More details will be added.', 'project.features': 'Key features',
			'project.feature1': 'More details will be added.', 'project.feature2': 'More details will be added.', 'project.technical': 'Technical details',
			'project.placeholder.technical': 'More details will be added.', 'project.challenges': 'Challenges',
			'project.placeholder.challenges': 'More details will be added.', 'project.lessons': 'Lessons learned',
			'project.placeholder.lessons': 'More details will be added.', 'project.screenshots': 'Screenshots',
			'project.placeholder.screenshots': 'More details will be added.', 'project.repository': 'Repository:',
			'project.demo': 'Project link (to be added)', 'detail.description': 'More details will be added.',
			'detail.technologies': 'More details will be added.', 'page.about': 'About — Batuhan Can',
			'page.contact': 'Contact — Batuhan Can', 'page.projects': 'Projects — Batuhan Can', 'page.description': 'Portfolio of Batuhan Can, a business informatics student focused on fullstack development, mobile apps and AI applications.', 'page.og': 'Business informatics student focused on fullstack development, mobile apps and AI applications.',
			'project.page.one': 'Monetrack — Batuhan Can', 'project.page.two': 'MySight — Batuhan Can', 'project.page.three': 'DevEcho — Batuhan Can', 'project.page.four': 'Tetris — Batuhan Can'
			, 'detail.one.title': 'Monetrack', 'detail.one.pageTitle': 'Monetrack — Batuhan Can', 'detail.one.description': 'Mobile expense tracker app as a hobby project.', 'detail.one.type': 'Hobby project', 'detail.one.link': 'GitHub repository (to be added)',
			'detail.two.title': 'MySight', 'detail.two.pageTitle': 'MySight — Batuhan Can', 'detail.two.description': 'Mobile app serving as a personal tour guide with AI integration.', 'detail.two.semester': '6th semester', 'detail.two.link': 'Project link (to be added)',
			'detail.three.title': 'DevEcho', 'detail.three.pageTitle': 'DevEcho — Batuhan Can', 'detail.three.description': 'Mobile app and IDE extension improving the developer experience at SAP with AI integration.', 'detail.three.semester': '5th semester', 'detail.three.link': 'Project link (to be added)',
			'detail.four.title': 'Tetris', 'detail.four.pageTitle': 'Tetris — Batuhan Can', 'detail.four.description': 'Classic game with animations, music, score and other game elements.', 'detail.four.semester': '4th semester', 'detail.four.link': 'Project link (to be added)',
			'detail.documents': 'Documents & media', 'detail.open': 'Open', 'detail.trailer': 'DevEcho trailer', 'detail.poster': 'DevEcho poster', 'detail.presentation': 'DevEcho presentation (short)', 'detail.businessPlan': 'MySight business plan', 'detail.tetrisDocumentation': 'Tetris project documentation',
			'monetrack.overview': 'Monetrack is a fullstack application for managing income, expenses and budgets in a structured and intuitive way.', 'monetrack.architecture': 'The project demonstrates a modular Flutter interface, RESTful backend integration with Spring Boot and a clearly separated, maintainable system structure.', 'monetrack.stack': 'Flutter (Dart), Java Spring Boot (REST API), PostgreSQL', 'monetrack.structure': 'Layered backend and modular Flutter structure with models, widgets and screens.', 'monetrack.features': 'Wallets with optional initial balance, income and expense tracking, automatic balance calculation, monthly financial overview and a responsive user interface.', 'monetrack.focus': 'Clean-code principles, separation of concerns, reusable components, feature-branch Git workflow and structured fullstack architecture.', 'monetrack.purpose': 'As a hobby project, Monetrack combines a realistic financial-management use case with modern software-engineering practices and a maintainable, scalable development workflow.', 'monetrack.files': 'frontend/ for the Flutter application, backend/ for the Spring Boot REST API and README.md for project documentation.',
			'mysight.intro': 'MySight is an AI-powered mobile application for planning and experiencing personalised city activities. It reduces research effort and creates city tours based on interests, time frame, budget, location and travel date.', 'mysight.value': 'The application connects personalised tour generation, navigation, text and audio guides, and future ticket bookings and reservations in one continuous experience.', 'mysight.innovation': 'Its central idea is to integrate previously separate steps of the customer journey: from individual planning through navigation to experiencing and booking tourist activities.', 'mysight.scope': 'The initial market entry is planned for Hamburg. The roadmap includes a broader data base, external ticketing APIs, AI-powered audio guides, an AR live view and a portal for tourism partners.',
			'devecho.overview': 'DevEcho is a system consisting of a VS Code extension, a mobile app and a central backend. Developers can give feedback on their developer experience directly inside their IDE without disrupting their workflow.', 'devecho.report': 'The mobile app then enables team leads to view concise weekly reports of the feedback submitted during that week and derive actionable insights.', 'devecho.context': 'The project was created during the M-Lab course 2025/26 at the University of Hamburg for SAP. The initial prototype was designed to evaluate whether such a system is technically feasible and effective for improving developer experience.', 'devecho.components': 'VS Code extension for feedback during development, mobile app for weekly reports and a central backend connecting the system components.', 'devecho.setup': 'Using the extension requires VS Code. Running the backend requires Docker and Maven. Basic Git and CLI knowledge is helpful for cloning the repository; Docker knowledge is beneficial for backend deployment.',
			'tetris.overview': 'As part of the programming practicum, a custom Java/Swing implementation of the classic game Tetris was created. The focus was on clean architecture, testable game logic and a smooth, intuitive player experience.', 'tetris.features': 'The game includes seven-bag randomisation, SRS rotations with wall kicks, ghost piece, next preview, scoring, level progression, increasing gravity, highscores, pause, music and animations.', 'tetris.engineering': 'The documentation covers MVC separation, modular services, JUnit 5 tests for core logic, robust highscore persistence and keyboard-based controls.', 'tetris.result': 'The result is a fully playable single-player Tetris with persistent highscores, start and game-over screens, particle effects and a clearly structured Java codebase.'
		}
	};

	function setupLanguage() {
		const stored = localStorage.getItem('portfolio-language');
		let language = stored === 'en' || stored === 'de' ? stored : (document.documentElement.lang === 'en' ? 'en' : 'de');
		const switcher = document.createElement('div');
		switcher.className = 'language-switcher';
		switcher.setAttribute('aria-label', 'Language');
		switcher.innerHTML = '<button type="button" data-language="de">DE</button><button type="button" data-language="en">EN</button>';
		document.body.appendChild(switcher);

		const applyLanguage = (nextLanguage) => {
			language = nextLanguage;
			const strings = translations[language];
			document.documentElement.lang = language;
			document.querySelectorAll('[data-i18n]').forEach((element) => {
				const value = strings[element.dataset.i18n];
				if (value !== undefined) element.textContent = value;
			});
			document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
				const value = strings[element.dataset.i18nPlaceholder];
				if (value !== undefined) element.placeholder = value;
			});
			document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
				const value = strings[element.dataset.i18nAriaLabel];
				if (value !== undefined) element.setAttribute('aria-label', value);
			});
			const titleKey = document.body.dataset.titleKey;
			if (titleKey && strings[titleKey]) document.title = strings[titleKey];
			document.querySelectorAll('meta[data-i18n]').forEach((meta) => {
				if (strings[meta.dataset.i18n]) meta.content = strings[meta.dataset.i18n];
			});
			switcher.querySelectorAll('button').forEach((button) => button.classList.toggle('active', button.dataset.language === language));
			localStorage.setItem('portfolio-language', language);
		};

		switcher.addEventListener('click', (event) => {
			const button = event.target.closest('button[data-language]');
			if (button) applyLanguage(button.dataset.language);
		});
		applyLanguage(language);
	}

	setupLanguage();

	// Year in footer
	const yearEl = document.getElementById('year');
	if(yearEl) yearEl.textContent = new Date().getFullYear();

	// Mobile nav toggle
	const navToggle = document.querySelector('.nav-toggle');
	const nav = document.getElementById('primary-navigation');
	if(navToggle && nav){
		navToggle.addEventListener('click', ()=>{
			const visible = nav.getAttribute('data-visible') === 'true';
			nav.setAttribute('data-visible', String(!visible));
			navToggle.setAttribute('aria-expanded', String(!visible));
		});
	}

	// Smooth scroll for internal links
	document.addEventListener('click', (e)=>{
		const a = e.target.closest('a');
		if(!a) return;
		const href = a.getAttribute('href');
		if(href && href.startsWith('#')){
			const id = href.slice(1);
			const target = document.getElementById(id);
			if(target){
				e.preventDefault();
				target.scrollIntoView({behavior:'smooth',block:'start'});
				if(window.innerWidth <= 540 && nav){nav.setAttribute('data-visible','false');navToggle.setAttribute('aria-expanded','false');}
			}
		}
	});

	// SCROLL REVEAL SETUP
	document.addEventListener('DOMContentLoaded', ()=>{
		const prefersReduced = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

		// selectors to reveal
		const selectors = [
			'.hero-left h1',
			'.hero-left .hero-sub',
			'.hero-ctas .btn',
			'.section-header h2',
			'.section-sub',
			'.about-card',
			'.skill-card',
			'.project-card',
			'.contact-card'
		];

		// gather elements and mark initial state
		let revealElems = [];
		selectors.forEach(sel=>{
			document.querySelectorAll(sel).forEach((el)=>{
				// add base class so CSS hides them initially
				el.classList.add('reveal');
				revealElems.push(el);
			});
		});

		// assign ordering for groups for stagger (project cards use data-index if present)
		document.querySelectorAll('.skill-card').forEach((el,i)=>el.dataset.order = String(i));
		document.querySelectorAll('.contact-card').forEach((el,i)=>el.dataset.order = String(i));
		document.querySelectorAll('.project-card').forEach((el,i)=>{ if(!el.dataset.index) el.dataset.index = String(i+1); });

		if(prefersReduced){
			// make everything visible immediately
			revealElems.forEach(el=>{ el.classList.add('visible'); el.style.transitionDelay = '' });
			return;
		}

		const io = new IntersectionObserver((entries, obs)=>{
			entries.forEach(entry=>{
				if(!entry.isIntersecting) return;
				const el = entry.target;
				// compute delay
				let delay = 0;
				if(el.classList.contains('project-card')){
					const idx = Number(el.dataset.index || 0) - 1; // data-index starts at 1
					delay = Math.max(0, idx) * 120;
				} else if(el.dataset.order){
					delay = Number(el.dataset.order) * 100;
				}
				el.style.transitionDelay = `${delay}ms`;
				el.classList.add('visible');
				obs.unobserve(el);
				// clear delay after animation completes to avoid side-effects
				setTimeout(()=>{ el.style.transitionDelay = ''; }, 1200 + delay);
			});
		}, {threshold: 0.12});

		revealElems.forEach(el => io.observe(el));
	});

	// Enhance keyboard accessibility for project cards (make whole card focusable)
	document.querySelectorAll('.project-card').forEach(card=>{
		card.setAttribute('tabindex','0');
		card.addEventListener('keydown', (ev)=>{
			if(ev.key==='Enter' || ev.key===' '){
				const link = card.getAttribute('href');
				if(link) location.href = link;
			}
		});
	});

})();
