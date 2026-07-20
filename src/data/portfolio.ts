export interface Project {
	readonly title: string;
	readonly tag: string;
	readonly year: string;
	readonly nda: boolean;
	readonly status: string;
	readonly role: string;
	readonly stack: readonly string[];
	readonly desc: string;
	readonly longDesc: string;
	readonly figLabel: string;
	readonly image?: StaticImage;
	readonly sourceUrl?: string;
	readonly liveUrl?: string;
}

export type StaticImageFilename = `${string}.${'avif' | 'webp'}`;

export interface StaticImage {
	readonly filename: StaticImageFilename;
	readonly alt: string;
	readonly width: number;
	readonly height: number;
}

export interface Experience {
	readonly years: string;
	readonly role: string;
	readonly org: string;
	readonly description: string;
	readonly bullets?: readonly string[];
	readonly meta: string;
	readonly image?: StaticImage;
}

export type Capability = readonly [number: string, name: string, items: string];

export interface Interest {
	readonly number: string;
	readonly name: string;
	readonly note: string;
	readonly image?: StaticImage;
}

export const projects: readonly Project[] = [
	{
		title: 'MinerbaOne',
		tag: 'GOVERNMENT / NDA',
		year: '2024-NOW',
		nda: true,
		status: 'IN PRODUCTION',
		role: 'Software Engineer',
		stack: ['Vue', 'Nuxt', 'TypeScript', 'Tailwind'],
		desc: 'Management platform for the Ministry of Energy and Mineral Resources.',
		longDesc: 'A large-scale management application for Indonesia’s Ministry of Energy and Mineral Resources, built at the Center for Computer Science, Universitas Indonesia. I work across the frontend: complex forms, role-driven workflows, and data-heavy views.',
		figLabel: 'REPRESENTATIVE VIEW (SANITIZED)'
	},
	{
		title: 'SLCM UI',
		tag: 'EDUCATION / NDA',
		year: '2025',
		nda: true,
		status: 'IN PRODUCTION',
		role: 'Software Engineer',
		stack: ['Vue', 'Nuxt', 'TypeScript'],
		desc: 'Student lifecycle management for Universitas Indonesia.',
		longDesc: 'Student lifecycle management for Universitas Indonesia — admissions through graduation. I build frontend modules used daily by staff and students across faculties.',
		figLabel: 'REPRESENTATIVE VIEW (SANITIZED)'
	},
	{
		title: 'SILABIE',
		tag: 'EDUCATION / CLOSED SOURCE',
		year: '2024',
		nda: true,
		status: 'DELIVERED',
		role: 'Software Engineer',
		stack: ['Vue', 'Nuxt', 'TypeScript'],
		desc: 'Internal application for the Faculty of Engineering, UI.',
		longDesc: 'An internal application for the Faculty of Engineering, Universitas Indonesia, used to order equipment rentals and experimentation bookings. ',
		figLabel: 'REPRESENTATIVE VIEW (SANITIZED)',
		image: {
			filename: 'silabie-preview.webp',
			alt: 'SILABIE application interface',
			width: 1914,
			height: 1166
		}
	},
	{
		title: 'Matkul Tree (legacy)',
		tag: 'OPEN SOURCE',
		year: '2021',
		nda: false,
		status: 'ARCHIVED',
		role: 'Creator',
		stack: ['Nuxt', 'Vue', 'Vuetify'],
		desc: 'The original course-dependency explorer for CS students at UI.',
		longDesc: 'The original Matkul Tree helps computer-science students at Universitas Indonesia check course prerequisites and plan semesters. Built with Nuxt and Vuetify.',
		figLabel: 'LEGACY SCREENSHOT',
		image: {
			filename: 'matkul-tree-preview.webp',
			alt: 'Legacy Matkul Tree course dependency explorer',
			width: 1280,
			height: 1089
		},
		sourceUrl: 'https://github.com/fwibisono87/matkul-tree',
		liveUrl: 'https://legacy-matkul-tree.netlify.app/'
	},
	{
		title: 'Matkul Tree (K24)',
		tag: 'OPEN SOURCE',
		year: '2024-NOW',
		nda: false,
		status: 'LIVE',
		role: 'Creator',
		stack: ['TypeScript'],
		desc: 'Course-planning tool for the 2024 UI CS curriculum.',
		longDesc: 'A redesigned Matkul Tree for the 2024 curriculum, helping Universitas Indonesia computer-science students map prerequisites and plan their studies.',
		figLabel: 'PRODUCTION SCREENSHOT',
		image: {
			filename: 'matkul-tree-k24-preview.webp',
			alt: 'Matkul Tree course planner for the 2024 curriculum',
			width: 1909,
			height: 1046
		},
		liveUrl: 'https://matkul.franciswibisono.com/'
	},
	{
		title: 'Sui Archive',
		tag: 'OPEN SOURCE',
		year: '2022',
		nda: false,
		status: 'LIVE',
		role: 'Creator',
		stack: ['HTML', 'CSS', 'JavaScript'],
		desc: 'Wiki of instructions for archiving YouTube videos and streams.',
		longDesc: 'A small, focused wiki documenting how to archive YouTube videos and livestreams — tooling, formats, and step-by-step instructions.',
		figLabel: 'PRODUCTION SCREENSHOT',
		image: {
			filename: 'sui-archive-preview.webp',
			alt: 'Sui Archive Guide homepage',
			width: 1280,
			height: 1154
		},
		sourceUrl: 'https://github.com/fwibisono87/sui-archive',
		liveUrl: 'https://fwibisono87.github.io/sui-archive/'
	},
	{
		title: 'GoPus',
		tag: 'COMMERCIAL / OPEN SOURCE',
		year: '2021',
		nda: false,
		status: 'ARCHIVED DEMO',
		role: 'Implementor',
		stack: ['Django', 'Python'],
		desc: 'Library management application built with Django.',
		longDesc: 'A library management application — cataloguing, lending, and returns — built with Django as an exercise in full-stack fundamentals.',
		figLabel: 'ARCHIVED SCREENSHOT',
		image: {
			filename: 'gopus-catalog-preview.webp',
			alt: 'GoPus book catalogue page',
			width: 1280,
			height: 851
		},
		sourceUrl: 'https://github.com/fwibisono87/GoPus',
		liveUrl: 'https://gopus.irys.franciswibisono.com/'
	}
];

export const capabilities: readonly Capability[] = [
	['2.1', 'CORE', 'TypeScript · JavaScript · HTML / CSS'],
	['2.2', 'FRAMEWORKS', 'Vue / Nuxt · Svelte · Tailwind'],
	['2.3', 'BACKEND', 'Go / Fiber · Node / Elysia · Django'],
	['2.4', 'INFRA', 'Docker · Nginx · Keycloak · MinIO']
];

export const experience: readonly Experience[] = [
	{
		years: '2024 — NOW',
		role: 'Software Engineer (Programmer Staff)',
		org: 'Pusilkom, Universitas Indonesia',
		description: 'The academic venture and IT-consultancy arm of the Faculty of Computer Science, Universitas Indonesia, building software, data, and systems for Indonesian government agencies and enterprises since 1972.',
		bullets: [
			'Built a secure full-stack document-processing and review system using Nuxt/Vue, TypeScript, Python/Flask, Redis, Elasticsearch, object storage, OIDC SSO, Docker, and local LLM services. Focused on secure intake, semantic retrieval, human-in-the-loop review, export generation, testing, and deployment automation.',
			"Architected a dynamic Form Generator (Vue 3, TypeScript, Vuetify) for MinerbaOne, a government platform used by Indonesia's Directorate-General for Minerals and Coal. The system generates arbitrary form types with domain-specific auto-calculations, functioning as a purpose-built alternative to Google Forms for mining regulation workflows.",
			'Developed a Document Generator microservice (Node.js) that programmatically populates Word templates from JSON data, replacing a manual process where government staff typed 100+ page documents by hand, reducing weeks of preparation time per document cycle.',
			'Pioneered TypeScript adoption and the frontend Repository Pattern across the MinerbaOne codebase, establishing standards the wider team adopted. Conducted code reviews and mentored junior developers on these patterns, reducing bugs and enabling faster IDE-assisted development.',
			"Designed the frontend architecture for the university's Student Lifecycle Management system, introducing Vue Query, i18n, Pinia, and shared tooling that improved maintainability and accelerated feature development for the team.",
			'Implemented API endpoints in Go/Fiber for the SLCM project and contributed backend features in PHP/Laravel, including Keycloak SSO authentication that unified login across frontend and backend services.'
		],
		meta: 'DEPOK, ID · FULL-TIME · SEP 2024 — NOW'
	},
	{
		years: '2022 — 2024',
		role: 'Frontend Developer',
		org: 'Rumah Siap Kerja',
		description: "An Indonesian edtech platform and official training provider for Prakerja, the government's national pre-employment skilling programme, serving tens of thousands of learners.",
		bullets: [
			'Led the migration of the company homepage and three landing pages from Vue 2 to Nuxt/Vue 3, achieving ~300ms First Contentful Paint on a platform serving tens of thousands of users; tracked Core Web Vitals with Lighthouse and monitored production errors and performance with Sentry.',
			'Optimized frontend data fetching and API usage patterns, reducing query times by approximately 50%.',
			'Drove standardization across the frontend codebase by introducing TypeScript, Composition API, TanStack Query, Storybook, and consistent Tailwind/SCSS patterns, improving developer velocity and component maintainability after the migration period, based on existing and new designs from Figma.',
			'Led a Vue-to-React migration to improve performance and align with the product roadmap, establishing TypeScript conventions and best practices for the new React codebase.'
		],
		meta: 'JAKARTA, ID · FULL-TIME · OCT 2022 — OCT 2024'
	},
	{
		years: '2022',
		role: 'Frontend Engineer Intern',
		org: 'bilateralstimulation.io',
		description: "A Berlin-based startup building an online tool for EMDR (Eye Movement Desensitization and Reprocessing) therapy, since grown into the world's largest online EMDR platform used by tens of thousands of therapists worldwide.",
		bullets: [
			'Built the client-facing UI in SvelteKit and Tailwind CSS, translating Figma designs into production code.',
			"Built the company's first automated client-onboarding pipeline (Stripe payments, Twilio welcome emails) and a Redis-backed system for saving and reloading therapist session configurations."
		],
		meta: 'BERLIN, GERMANY · INTERNSHIP · JUN — SEP 2022'
	},
	{
		years: '2021 — 2022',
		role: 'Frontend Engineer Intern',
		org: 'sayakaya.id',
		description: 'An Indonesian fintech app for retail mutual-fund investing, focused on financial literacy for first-time investors.',
		bullets: [
			"Built the company's landing page, investment calculator, career pages, and a headless-WordPress blog (Svelte frontend consuming the WordPress REST API) in SvelteKit."
		],
		meta: 'JAKARTA, ID · INTERNSHIP · DEC 2021 — JUN 2022'
	},
	{
		years: '2021 — 2022',
		role: 'Frontend Engineer Intern',
		org: 'MyRobin Indonesia',
		description: "Indonesia's largest on-demand blue-collar staffing platform, connecting enterprises with pre-screened frontline workers across B2B and worker-facing apps (later acquired by BetterPlace).",
		bullets: [
			'Delivered features across the B2B staffing app and a worker-facing B2C app in Vuetify/Nuxt.js, including a community feed with photo posts, and rebuilt the next-generation app from scratch in Tailwind CSS/Nuxt.js.'
		],
		meta: 'JAKARTA, ID · INTERNSHIP · MAY — DEC 2021'
	},
	{
		years: '2021 — 2022',
		role: 'Teaching Assistant (OS)',
		org: 'Fasilkom, Universitas Indonesia',
		description: 'Teaching Assistant for the Operating Systems course. Responsible for creating weekly quizzes and help troubleshoot student issues.',
		meta: 'DEPOK, WEST JAVA, INDONESIA · 1 YEAR 2 MONTHS'
	}
];

export const interests: readonly Interest[] = [
	{ number: 'A.1', name: 'Linux', note: 'Arch on the desktop, Ubuntu on servers.' },
	{ number: 'A.2', name: 'Hoshimachi Suisei', note: 'Origin of the original color scheme.' },
	{ number: 'A.3', name: 'VTubers', note: 'Archiving included — see Sui Archive.' },
	{ number: 'A.4', name: 'PC Hardware', note: 'Building, tuning, and benchmarking.' }
];
