<script lang="ts">
	import { tick } from 'svelte';
	import DocumentFooter from '../components/document-footer.svelte';
	import DocumentHeader from '../components/document-header.svelte';

	type Theme = 'auto' | 'light' | 'dark';
	type Project = {
		title: string; tag: string; year: string; nda: boolean; status: string; role: string;
		stack: string[]; desc: string; longDesc: string; figLabel: string; sourceUrl?: string; liveUrl?: string;
	};

	let theme: Theme = 'auto';
	let isDark = false;
	let selectedProject: number | null = null;
	let secretOpen = false;
	let detailHeading: HTMLHeadingElement;

	const projects: Project[] = [
		{ title: 'MinerbaOne', tag: 'GOVERNMENT / NDA', year: '2024–NOW', nda: true, status: 'IN PRODUCTION', role: 'Software Engineer', stack: ['Vue', 'Nuxt', 'TypeScript', 'Tailwind'], desc: 'Management platform for the Ministry of Energy and Mineral Resources.', longDesc: 'A large-scale management application for Indonesia’s Ministry of Energy and Mineral Resources, built at the Center for Computer Science, Universitas Indonesia. I work across the frontend: complex forms, role-driven workflows, and data-heavy views.', figLabel: 'REPRESENTATIVE VIEW (SANITIZED)' },
		{ title: 'SLCM UI', tag: 'EDUCATION / NDA', year: '2025', nda: true, status: 'IN PRODUCTION', role: 'Software Engineer', stack: ['Vue', 'Nuxt', 'TypeScript'], desc: 'Student lifecycle management for Universitas Indonesia.', longDesc: 'Student lifecycle management for Universitas Indonesia — admissions through graduation. I build frontend modules used daily by staff and students across faculties.', figLabel: 'REPRESENTATIVE VIEW (SANITIZED)' },
		{ title: 'SIMPEL-HPE', tag: 'EDUCATION / NDA', year: '2024', nda: true, status: 'DELIVERED', role: 'Software Engineer', stack: ['Vue', 'Nuxt', 'TypeScript'], desc: 'Internal application for the Faculty of Engineering, UI.', longDesc: 'An internal application for the Faculty of Engineering, Universitas Indonesia. Scope under NDA; my role covered frontend architecture and delivery.', figLabel: 'REPRESENTATIVE VIEW (SANITIZED)' },
		{ title: 'Matkul Tree', tag: 'OPEN SOURCE', year: '2021', nda: false, status: 'LIVE', role: 'Creator', stack: ['Nuxt', 'Vue', 'Vuetify'], desc: 'Course-dependency explorer for CS students at UI.', longDesc: 'A tool that helps computer-science students at Universitas Indonesia check course prerequisites and plan semesters. Built with Nuxt and Vuetify; still in use.', figLabel: 'PRODUCTION SCREENSHOT', sourceUrl: 'https://github.com/fwibisono87/matkul-tree', liveUrl: 'https://matkul.franciswibisono.com/' },
		{ title: 'Sui Archive', tag: 'OPEN SOURCE', year: '2022', nda: false, status: 'LIVE', role: 'Creator', stack: ['HTML', 'CSS', 'JavaScript'], desc: 'Wiki of instructions for archiving YouTube videos and streams.', longDesc: 'A small, focused wiki documenting how to archive YouTube videos and livestreams — tooling, formats, and step-by-step instructions.', figLabel: 'PRODUCTION SCREENSHOT', sourceUrl: 'https://github.com/fwibisono87/sui-archive', liveUrl: 'https://fwibisono87.github.io/sui-archive/' },
		{ title: 'GoPus', tag: 'COURSEWORK', year: '2021', nda: false, status: 'ARCHIVED', role: 'Creator', stack: ['Django', 'Python'], desc: 'Library management application built with Django.', longDesc: 'A library management application — cataloguing, lending, and returns — built with Django as an exercise in full-stack fundamentals.', figLabel: 'ARCHIVED SCREENSHOT', sourceUrl: 'https://github.com/fwibisono87/GoPus' }
	];

	const capabilities = [
		['2.1', 'CORE', 'TypeScript · JavaScript · HTML / CSS'],
		['2.2', 'FRAMEWORKS', 'Vue / Nuxt · Svelte · Tailwind'],
		['2.3', 'BACKEND', 'Go / Fiber · Node / Elysia · Django'],
		['2.4', 'INFRA', 'Docker · Nginx · Keycloak · MinIO']
	];
	const experience = [
		['2024 — NOW', 'Software Engineer', 'CCS, Universitas Indonesia'],
		['2022 — 2024', 'Junior Frontend Engineer', 'Rumah Siap Kerja'],
		['2022', 'Frontend Developer', 'bilateralstimulation.io'],
		['2021 — 2022', 'Frontend Engineer', 'SayaKaya'],
		['2021 — 2022', 'Teaching Assistant (OS)', 'Fasilkom, Universitas Indonesia']
	];
	const interests = [
		['A.1', 'Linux', 'Arch on the desktop, Ubuntu on servers.'],
		['A.2', 'Hoshimachi Suisei', 'Origin of the original color scheme.'],
		['A.3', 'VTubers', 'Archiving included — see Sui Archive.'],
		['A.4', 'PC Hardware', 'Building, tuning, and benchmarking.']
	];

	const eyebrow = 'font-mono text-xs tracking-[.2em] text-accent';
	const sectionLabel = 'm-0 border-r border-ink p-6 font-mono text-xs font-normal tracking-[.15em] dark:border-night-ink max-[920px]:border-b max-[920px]:border-r-0';
	const button = 'inline-flex min-h-[44px] items-center justify-center border border-ink px-6 py-2.5 font-mono text-[13px] text-ink no-underline hover:bg-ink hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-accent dark:border-night-ink dark:text-night-ink dark:hover:bg-night-ink dark:hover:text-night';
	const imagePattern = 'bg-[linear-gradient(135deg,transparent_48%,#d8d5c6_49%,#d8d5c6_51%,transparent_52%),repeating-linear-gradient(45deg,#ece9dd,#ece9dd_8px,#f4f2ec_8px,#f4f2ec_16px)] dark:bg-[linear-gradient(135deg,transparent_48%,#35342b_49%,#35342b_51%,transparent_52%),repeating-linear-gradient(45deg,#1f1e17,#1f1e17_8px,#14130f_8px,#14130f_16px)]';

	$: detail = selectedProject === null ? null : projects[selectedProject];
	$: previousIndex = selectedProject === null ? 0 : (selectedProject + projects.length - 1) % projects.length;
	$: nextIndex = selectedProject === null ? 0 : (selectedProject + 1) % projects.length;

	async function openProject(index: number) {
		selectedProject = index;
		await tick();
		window.scrollTo({ top: 0, behavior: 'auto' });
		detailHeading?.focus();
	}
	async function closeProject() {
		const previous = selectedProject;
		selectedProject = null;
		await tick();
		document.getElementById(`project-${previous}`)?.focus();
	}
</script>

<svelte:head>
	<title>Francis Wibisono — Software Engineer</title>
	<meta name="description" content="Francis Wibisono builds fast, precise frontend and full-stack web applications." />
</svelte:head>

<div class:dark={isDark}>
	<div class="mx-auto min-h-screen w-full max-w-[1760px] border-x border-ink bg-paper font-sans text-ink selection:bg-accent selection:text-white dark:border-night-ink dark:bg-night dark:text-night-ink max-[520px]:border-x-0">
		<DocumentHeader bind:theme bind:isDark label={detail && selectedProject !== null ? `REFERENCE DOCUMENT NO. 001 — SECTION 3.${selectedProject + 1}` : 'FRANCIS WIBISONO — REFERENCE DOCUMENT NO. 001'} />

		<main id="main-content" tabindex="-1">
			{#if detail && selectedProject !== null}
				<article class="animate-slide-in" aria-labelledby="project-title">
					<div class="flex items-center justify-between gap-3 border-b border-ink px-[clamp(20px,4vw,56px)] py-[17px] font-mono text-[13px] dark:border-night-ink">
						<button class="bg-transparent hover:text-accent" type="button" on:click={closeProject}>← BACK TO INDEX</button>
						<span class="text-muted-2 dark:text-night-muted-2">{String(selectedProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
					</div>
					<div class="grid grid-cols-[minmax(0,1fr)_400px] border-b-2 border-ink dark:border-night-ink max-[920px]:grid-cols-1">
						<div class="border-r border-ink px-[clamp(20px,4vw,56px)] py-[clamp(36px,5vw,64px)] dark:border-night-ink max-[920px]:border-b max-[920px]:border-r-0">
							<p class={eyebrow}>3.{selectedProject + 1} — {detail.tag}</p>
							<h1 id="project-title" class="my-6 font-display text-[clamp(30px,4.5vw,52px)] font-normal leading-[1.1] focus:outline-none" tabindex="-1" bind:this={detailHeading}>{detail.title}</h1>
							<p class="m-0 max-w-[560px] text-[clamp(16px,2vw,18px)] leading-[1.7] text-muted dark:text-night-muted">{detail.longDesc}</p>
							{#if detail.nda}<p class="mt-9 max-w-[560px] border border-dashed border-ink p-[18px_22px] font-mono text-[13px] leading-relaxed text-muted dark:border-night-ink dark:text-night-muted"><strong class="text-accent">■ RESTRICTED —</strong> This project is under NDA. Screens and identifying details are withheld; scope and role described in general terms.</p>{/if}
							{#if detail.sourceUrl}<div class="mt-10 flex flex-wrap"><a class={`${button} bg-ink text-paper hover:border-accent hover:bg-accent hover:text-white dark:bg-night-ink dark:text-night`} href={detail.sourceUrl}>VIEW SOURCE ↗</a>{#if detail.liveUrl}<a class={`${button} -ml-px`} href={detail.liveUrl}>OPEN LIVE ↗</a>{/if}</div>{/if}
						</div>
						<dl class="m-0 font-mono text-[13px]">
							<div class="flex justify-between gap-3 border-b border-rule p-[16px_22px] dark:border-night-rule"><dt class="text-muted-2 dark:text-night-muted-2">ROLE</dt><dd class="m-0">{detail.role}</dd></div>
							<div class="flex justify-between gap-3 border-b border-rule p-[16px_22px] dark:border-night-rule"><dt class="text-muted-2 dark:text-night-muted-2">YEAR</dt><dd class="m-0">{detail.year}</dd></div>
							<div class="flex justify-between gap-3 border-b border-rule p-[16px_22px] dark:border-night-rule"><dt class="text-muted-2 dark:text-night-muted-2">STATUS</dt><dd class="m-0 text-accent">{detail.status}</dd></div>
							<div class="border-b border-rule p-[16px_22px] dark:border-night-rule"><dt class="text-muted-2 dark:text-night-muted-2">STACK</dt><dd class="mt-2.5 flex flex-wrap gap-2">{#each detail.stack as item}<span class="border border-ink px-2.5 py-1 dark:border-night-ink">{item}</span>{/each}</dd></div>
						</dl>
					</div>
					<figure class="m-0 border-b-2 border-ink px-[clamp(20px,4vw,56px)] py-12 dark:border-night-ink">
						<figcaption class="mb-4 font-mono text-[11px] text-muted-2 dark:text-night-muted-2">FIG. {selectedProject + 2} — {detail.figLabel}</figcaption>
						<div class={`${imagePattern} h-[clamp(280px,45vw,560px)] border border-ink dark:border-night-ink`} role="img" aria-label={detail.nda ? 'sanitized or representative screenshot' : 'full-width screenshot'}></div>
					</figure>
					<nav class="flex border-b-2 border-ink font-mono text-[13px] dark:border-night-ink max-[600px]:flex-col" aria-label="Project navigation">
						<button class="flex-1 border-r border-ink bg-transparent px-[clamp(20px,4vw,56px)] py-[22px] text-left hover:bg-ink hover:text-paper dark:border-night-ink dark:hover:bg-night-ink dark:hover:text-night max-[600px]:border-b max-[600px]:border-r-0" type="button" on:click={() => openProject(previousIndex)}>← PREV: {projects[previousIndex].title}</button>
						<button class="flex-1 bg-transparent px-[clamp(20px,4vw,56px)] py-[22px] text-right hover:bg-ink hover:text-paper dark:hover:bg-night-ink dark:hover:text-night max-[600px]:text-left" type="button" on:click={() => openProject(nextIndex)}>NEXT: {projects[nextIndex].title} →</button>
					</nav>
					<DocumentFooter />
				</article>
			{:else}
				<section class="grid grid-cols-[minmax(0,1fr)_400px] border-b-2 border-ink dark:border-night-ink max-[920px]:grid-cols-1" aria-labelledby="intro-heading">
					<div class="relative min-h-[480px] border-r border-ink px-[clamp(20px,4vw,56px)] pb-[72px] pt-[clamp(36px,6vw,72px)] dark:border-night-ink max-[920px]:min-h-[430px] max-[920px]:border-b max-[920px]:border-r-0 max-[600px]:min-h-[510px]">
						<p class={eyebrow}>FIG. 1 — SOFTWARE ENGINEER</p>
						<h1 id="intro-heading" class="my-7 animate-slide-in font-display text-[clamp(38px,6.5vw,72px)] font-normal leading-[1.08] tracking-[-.01em]">FRANCIS<br />WIBISONO</h1>
						<p class="m-0 max-w-[560px] text-[clamp(16px,2vw,19px)] leading-[1.65] text-muted dark:text-night-muted">I build fast, precise web applications. Currently engineering internal systems at Universitas Indonesia's Center for Computer Science.</p>
						<div class="mt-12 flex flex-wrap"><a class={`${button} bg-ink text-paper hover:border-accent hover:bg-accent hover:text-white dark:bg-night-ink dark:text-night`} href="#work">VIEW WORK ↗</a><a class={`${button} -ml-px`} href="https://www.github.com/fwibisono87">GITHUB</a><a class={`${button} -ml-px`} href="https://www.linkedin.com/in/francis-wibisono/">LINKEDIN</a></div>
						<div class="absolute bottom-3.5 left-[clamp(20px,4vw,56px)] right-[clamp(20px,4vw,56px)] flex justify-between gap-3 font-mono text-[10px] tracking-[.15em] text-faint dark:text-night-muted-2"><span class="max-[600px]:hidden">DEPOK, ID — 6.4025° S, 106.7942° E</span><span class="animate-blink text-accent motion-reduce:animate-none">● AVAILABLE FOR WORK</span></div>
					</div>
					<div class="flex flex-col"><figure class="m-0"><img class="aspect-square w-full object-cover" src="/img/anime.webp" alt="Illustrated portrait of Francis Wibisono smiling and making a peace sign" /><figcaption class="flex justify-between gap-2.5 border-t border-ink px-4 py-3 font-mono text-[11px] text-muted dark:border-night-ink dark:text-night-muted"><span>PORTRAIT A/1 — @fwibisono87</span><a class="text-inherit" href="https://twitter.com/ansqeepng">ILLUS. @ANSQEEPNG</a></figcaption></figure><span class={`${imagePattern} min-h-[24px] flex-1 border-t border-ink dark:border-night-ink`} aria-hidden="true"></span></div>
				</section>

				<section class="grid grid-cols-[240px_repeat(4,1fr)] border-b-2 border-ink dark:border-night-ink max-[1100px]:grid-cols-2 max-[600px]:grid-cols-1" aria-labelledby="capabilities-heading">
					<h2 id="capabilities-heading" class={`${sectionLabel} max-[1100px]:col-span-full max-[1100px]:border-b max-[1100px]:border-r-0`}><span class="text-accent">2.0</span><br />CAPABILITIES</h2>
					{#each capabilities as capability}<div class="border-r border-ink p-6 text-sm leading-[1.8] hover:bg-paper-2 dark:border-night-ink dark:hover:bg-night-2"><p class="mb-2 mt-0 font-mono text-[11px] text-muted-2 dark:text-night-muted-2">{capability[0]} {capability[1]}</p><span>{capability[2]}</span></div>{/each}
				</section>

				<section id="work" class="border-b-2 border-ink dark:border-night-ink" aria-labelledby="work-heading">
					<div class="flex items-baseline justify-between gap-3 px-[clamp(20px,4vw,56px)] pt-10"><h2 id="work-heading" class="m-0 font-display text-[clamp(22px,3vw,30px)] font-normal">SELECTED WORK</h2><span class="font-mono text-xs text-accent">3.0 — {String(projects.length).padStart(2, '0')} ENTRIES</span></div>
					<div class="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] px-[clamp(20px,4vw,56px)] pb-14 pt-8 max-[600px]:grid-cols-1">
						{#each projects as project, index}
							<button id={`project-${index}`} class="group relative -m-px flex flex-col border border-ink bg-paper p-0 text-left text-ink hover:z-10 hover:bg-ink hover:text-paper focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent dark:border-night-ink dark:bg-night dark:text-night-ink dark:hover:bg-night-ink dark:hover:text-night" type="button" on:click={() => openProject(index)} aria-label={`Open project: ${project.title}`}>
								<span class={`${imagePattern} block h-[180px] w-full border-b border-ink dark:border-night-ink`} role="img" aria-label={project.nda ? 'sanitized screenshot' : 'screenshot'}></span>
								<span class="relative flex flex-1 flex-col p-[18px_20px_20px]"><span class="mb-[7px] font-mono text-[11px] text-accent">3.{index + 1} — {project.tag}</span><span class="flex items-baseline justify-between gap-3"><strong class="font-heading text-[19px]">{project.title}</strong><small class="font-mono text-[11px] opacity-[.65]">{project.year}</small></span><span class="mt-[7px] text-[13px] leading-[1.55] opacity-[.85]">{project.desc}</span>{#if project.nda}<span class="absolute -top-[170px] right-2.5 bg-accent px-2.5 py-1 font-mono text-[10px] tracking-[.12em] text-white">RESTRICTED</span>{/if}</span>
							</button>
						{/each}
					</div>
				</section>

				<section id="experience" class="grid grid-cols-[240px_minmax(0,1fr)] border-b-2 border-ink dark:border-night-ink max-[920px]:grid-cols-1" aria-labelledby="experience-heading">
					<h2 id="experience-heading" class={sectionLabel}><span class="text-accent">4.0</span><br />EXPERIENCE</h2>
					<div>{#each experience as item}<div class="grid grid-cols-[170px_1fr_260px] items-baseline gap-3 border-b border-rule px-[clamp(16px,3vw,28px)] py-[17px] text-sm hover:bg-paper-2 dark:border-night-rule dark:hover:bg-night-2 max-[920px]:grid-cols-1 max-[920px]:gap-1"><time class="font-mono text-xs text-muted-2 dark:text-night-muted-2">{item[0]}</time><strong>{item[1]}</strong><span class="text-muted dark:text-night-muted">{item[2]}</span></div>{/each}</div>
				</section>

				<section id="contact" class="grid grid-cols-[minmax(0,1fr)_400px] border-b-2 border-ink dark:border-night-ink max-[920px]:grid-cols-1" aria-labelledby="contact-heading">
					<div class="border-r border-ink px-[clamp(20px,4vw,56px)] py-[clamp(36px,5vw,64px)] dark:border-night-ink max-[920px]:border-b max-[920px]:border-r-0"><p class={eyebrow}>5.0 — CONTACT</p><h2 id="contact-heading" class="my-5 font-display text-[clamp(24px,3.5vw,34px)] font-normal">GET IN TOUCH</h2><p class="mb-9 max-w-[460px] leading-relaxed text-muted dark:text-night-muted">Open to interesting frontend and full-stack work. The fastest channel is email.</p>
						<div class="flex max-w-[480px] flex-col font-mono text-[clamp(12px,1.5vw,14px)]">{#each [['EMAIL','code@franciswibisono.com','mailto:code@franciswibisono.com'],['GITHUB','fwibisono87','https://www.github.com/fwibisono87'],['LINKEDIN','francis-wibisono','https://www.linkedin.com/in/francis-wibisono/'],['INSTAGRAM','@fwibisono87','https://www.instagram.com/fwibisono87']] as contact}<a class="-mt-px flex justify-between gap-2.5 border border-ink px-[18px] py-[13px] text-inherit no-underline hover:bg-ink hover:text-paper dark:border-night-ink dark:hover:bg-night-ink dark:hover:text-night" href={contact[2]}><span>{contact[0]}</span><span>{contact[1]}</span></a>{/each}</div>
					</div>
					<figure class="m-0 flex min-h-[320px] flex-col"><div class={`${imagePattern} min-h-[280px] flex-1`} role="img" aria-label="real photo — bottom of page"></div><figcaption class="flex justify-between border-t border-ink px-4 py-3 font-mono text-[11px] text-muted dark:border-night-ink dark:text-night-muted"><span>PORTRAIT B/2</span><span>PHOTOGRAPH</span></figcaption></figure>
				</section>

				<section class="grid grid-cols-[240px_1fr_1fr] border-b-2 border-ink dark:border-night-ink max-[920px]:grid-cols-2 max-[600px]:grid-cols-1" aria-labelledby="annex-heading">
					<h2 id="annex-heading" class={`${sectionLabel} max-[920px]:col-span-full`}><span class="text-accent">6.0</span><br />ANNEXES</h2>
					<a class="flex flex-col gap-2 border-r border-ink p-[24px_28px] text-inherit no-underline hover:bg-ink hover:text-paper dark:border-night-ink dark:hover:bg-night-ink dark:hover:text-night" href="/photos"><span class="font-mono text-[11px] text-accent">ANNEX A — /photos</span><strong class="font-heading text-lg">Photographs ↗</strong><small class="text-[13px] opacity-80">Event photography — selected and edited records.</small></a>
					<a class="flex flex-col gap-2 p-[24px_28px] text-inherit no-underline hover:bg-ink hover:text-paper dark:hover:bg-night-ink dark:hover:text-night" href="/hashtag"><span class="font-mono text-[11px] text-accent">ANNEX B — /hashtag</span><strong class="font-heading text-lg">Caption Generator ↗</strong><small class="text-[13px] opacity-80">IG caption tool for cosplay photography posts.</small></a>
				</section>

				{#if secretOpen}<section id="appendix" class="grid grid-cols-[240px_minmax(0,1fr)] border-b-2 border-ink bg-ink text-paper dark:border-night-ink dark:bg-night-ink dark:text-night max-[920px]:grid-cols-1" aria-labelledby="appendix-heading"><h2 id="appendix-heading" class={sectionLabel}><span class="text-accent">A.0</span><br />APPENDIX</h2><div class="p-[24px_28px]"><p class={eyebrow}>■ DECLASSIFIED — OFF-DUTY INTERESTS</p><ul class="mt-[18px] grid max-w-[900px] grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 p-0">{#each interests as interest}<li class="flex flex-col gap-1.5 border border-muted p-[18px]"><span class="font-mono text-[10px] opacity-60">{interest[0]}</span><strong class="font-heading">{interest[1]}</strong><small class="leading-normal opacity-75">{interest[2]}</small></li>{/each}</ul><p class="mt-5 font-mono text-[11px] opacity-60">COLOR SCHEME OF DOCUMENT NO. 000 INSPIRED BY HOSHIMACHI SUISEI · ICONS BY ICONES.JS</p></div></section>{/if}
				<DocumentFooter interactive bind:expanded={secretOpen} on:click={() => (secretOpen = !secretOpen)} />
			{/if}
		</main>
	</div>
</div>
