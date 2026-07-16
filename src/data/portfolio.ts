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
	readonly sourceUrl?: string;
	readonly liveUrl?: string;
}

export interface Experience {
	readonly years: string;
	readonly role: string;
	readonly org: string;
	readonly description: string;
	readonly meta: string;
}

export type Capability = readonly [number: string, name: string, items: string];
export type Interest = readonly [number: string, name: string, note: string];

export const projects: readonly Project[] = [
	{
		title: 'MinerbaOne',
		tag: 'GOVERNMENT / NDA',
		year: '2024–NOW',
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
		title: 'SIMPEL-HPE',
		tag: 'EDUCATION / NDA',
		year: '2024',
		nda: true,
		status: 'DELIVERED',
		role: 'Software Engineer',
		stack: ['Vue', 'Nuxt', 'TypeScript'],
		desc: 'Internal application for the Faculty of Engineering, UI.',
		longDesc: 'An internal application for the Faculty of Engineering, Universitas Indonesia. Scope under NDA; my role covered frontend architecture and delivery.',
		figLabel: 'REPRESENTATIVE VIEW (SANITIZED)'
	},
	{
		title: 'Matkul Tree',
		tag: 'OPEN SOURCE',
		year: '2021',
		nda: false,
		status: 'LIVE',
		role: 'Creator',
		stack: ['Nuxt', 'Vue', 'Vuetify'],
		desc: 'Course-dependency explorer for CS students at UI.',
		longDesc: 'A tool that helps computer-science students at Universitas Indonesia check course prerequisites and plan semesters. Built with Nuxt and Vuetify; still in use.',
		figLabel: 'PRODUCTION SCREENSHOT',
		sourceUrl: 'https://github.com/fwibisono87/matkul-tree',
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
		sourceUrl: 'https://github.com/fwibisono87/sui-archive',
		liveUrl: 'https://fwibisono87.github.io/sui-archive/'
	},
	{
		title: 'GoPus',
		tag: 'COURSEWORK',
		year: '2021',
		nda: false,
		status: 'ARCHIVED',
		role: 'Creator',
		stack: ['Django', 'Python'],
		desc: 'Library management application built with Django.',
		longDesc: 'A library management application — cataloguing, lending, and returns — built with Django as an exercise in full-stack fundamentals.',
		figLabel: 'ARCHIVED SCREENSHOT',
		sourceUrl: 'https://github.com/fwibisono87/GoPus'
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
		role: 'Software Engineer',
		org: 'CCS, Universitas Indonesia',
		description: "Currently engineering internal systems at Universitas Indonesia's Center for Computer Science.",
		meta: 'DEPOK, ID · FULL-TIME · 2024 — NOW'
	},
	{
		years: '2022 — 2024',
		role: 'Junior Frontend Engineer',
		org: 'Rumah Siap Kerja',
		description: 'Migrated components, libraries, and pages from Vue Options API to Nuxt 3 and the Composition API.',
		meta: 'JAKARTA, ID · FULL-TIME · 2 YRS'
	},
	{
		years: '2022',
		role: 'Frontend Developer',
		org: 'bilateralstimulation.io',
		description: 'Revamp animations, create presistent preferences for clients',
		meta: 'BERLIN, GERMANY · 4 MONTHS'
	},
	{
		years: '2021 — 2022',
		role: 'Frontend Engineer',
		org: 'SayaKaya',
		description: 'Build landing page and blog integration.',
		meta: 'JAKARTA, INDONESIA · 7 MONTHS'
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
	['A.1', 'Linux', 'Arch on the desktop, Ubuntu on servers.'],
	['A.2', 'Hoshimachi Suisei', 'Origin of the original color scheme.'],
	['A.3', 'VTubers', 'Archiving included — see Sui Archive.'],
	['A.4', 'PC Hardware', 'Building, tuning, and benchmarking.']
];
