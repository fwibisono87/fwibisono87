<script lang="ts">
	import { tick } from 'svelte';
	import DocumentFooter from '../components/document-footer.svelte';
	import DocumentHeader from '../components/document-header.svelte';
	import { capabilities, experience, interests, projects } from '../data/portfolio';

	type Theme = 'auto' | 'light' | 'dark';

	let theme: Theme = 'auto';
	let isDark = false;
	let selectedProject: number | null = null;
	let secretOpen = false;
	let openExperience: number | null = null;
	let revealedExperienceImages = new Set<number>();
	let detailHeading: HTMLHeadingElement;

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

	function toggleExperience(index: number) {
		openExperience = openExperience === index ? null : index;

		if (openExperience !== null && !revealedExperienceImages.has(index)) {
			revealedExperienceImages = new Set(revealedExperienceImages).add(index);
		}
	}

	function staticImageUrl(directory: 'experience' | 'interests', filename: string) {
		return `/${directory}/${filename}`;
	}
</script>

<svelte:head>
	<title>Francis Wibisono — Software Engineer</title>
	<meta name="description" content="Francis Wibisono builds fast, precise frontend and full-stack web applications." />
</svelte:head>

<div class:dark={isDark} class:bg-night={isDark} class:bg-paper={!isDark} class="min-h-screen">
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
					<div class="flex flex-col"><figure class="m-0"><img class="aspect-square w-full object-cover" src="/img/anime.webp" width="800" height="800" alt="Illustrated portrait of Francis Wibisono smiling and making a peace sign" /><figcaption class="flex justify-between gap-2.5 border-t border-ink px-4 py-3 font-mono text-[11px] text-muted dark:border-night-ink dark:text-night-muted"><span>PORTRAIT A/1 — @fwibisono87</span><a class="text-inherit" href="https://twitter.com/ansqeepng">ILLUS. @ANSQEEPNG</a></figcaption></figure><span class={`${imagePattern} min-h-[24px] flex-1 border-t border-ink dark:border-night-ink`} aria-hidden="true"></span></div>
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
					<div>
						{#each experience as item, index}
							<div class="border-b border-rule dark:border-night-rule">
								<button
									class="grid min-h-[52px] w-full cursor-pointer grid-cols-[170px_minmax(0,1fr)_260px_24px] items-baseline gap-3 bg-transparent px-[clamp(16px,3vw,28px)] py-[17px] text-left text-sm text-inherit hover:bg-paper-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-accent dark:hover:bg-night-2 max-[920px]:grid-cols-[1fr_24px] max-[920px]:gap-x-3 max-[920px]:gap-y-1"
									type="button"
									aria-expanded={openExperience === index}
									aria-controls={`experience-${index}`}
									on:click={() => toggleExperience(index)}
								>
									<time class="font-mono text-xs text-muted-2 dark:text-night-muted-2 max-[920px]:col-start-1">{item.years}</time>
									<strong class="max-[920px]:col-start-1">{item.role}</strong>
									<span class="text-muted dark:text-night-muted max-[920px]:col-start-1">{item.org}</span>
									<span class="col-start-4 row-start-1 text-right font-mono text-accent max-[920px]:col-start-2" aria-hidden="true">{openExperience === index ? '−' : '+'}</span>
								</button>
								<div
									id={`experience-${index}`}
									class={`grid overflow-hidden transition-all duration-300 ease-out motion-reduce:transition-none ${openExperience === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
									aria-hidden={openExperience !== index}
								>
									<div class="min-h-0 overflow-hidden">
										<div class="mx-[clamp(16px,3vw,28px)] mb-[17px] border-l-2 border-accent pl-4">
											{#if item.image && revealedExperienceImages.has(index)}
												<img
													class="mb-4 h-auto max-h-[420px] w-auto max-w-full border border-ink object-contain dark:border-night-ink"
													src={staticImageUrl('experience', item.image.filename)}
													alt={item.image.alt}
													width={item.image.width}
													height={item.image.height}
													loading="lazy"
													decoding="async"
												/>
											{/if}
											<p class="mb-3 mt-0 text-sm leading-relaxed text-muted dark:text-night-muted">{item.description}</p>
											<p class="m-0 font-mono text-[11px] tracking-[.08em] text-muted-2 dark:text-night-muted-2">{item.meta}</p>
										</div>
									</div>
								</div>
							</div>
						{/each}
					</div>
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

				{#if secretOpen}
					<section id="appendix" class="grid grid-cols-[240px_minmax(0,1fr)] border-b-2 border-ink bg-ink text-paper dark:border-night-ink dark:bg-night-ink dark:text-night max-[920px]:grid-cols-1" aria-labelledby="appendix-heading">
						<h2 id="appendix-heading" class={sectionLabel}><span class="text-accent">A.0</span><br />APPENDIX</h2>
						<div class="p-[24px_28px]">
							<p class={eyebrow}>■ DECLASSIFIED — OFF-DUTY INTERESTS</p>
							<ul class="mt-[18px] grid max-w-[900px] grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 p-0">
								{#each interests as interest}
									<li class="flex flex-col gap-1.5 border border-muted p-[18px]">
										{#if interest.image}
											<img
												class="mb-2 h-auto max-h-[240px] w-auto max-w-full self-start object-contain"
												src={staticImageUrl('interests', interest.image.filename)}
												alt={interest.image.alt}
												width={interest.image.width}
												height={interest.image.height}
												loading="lazy"
												decoding="async"
											/>
										{/if}
										<span class="font-mono text-[10px] opacity-60">{interest.number}</span>
										<strong class="font-heading">{interest.name}</strong>
										<small class="leading-normal opacity-75">{interest.note}</small>
									</li>
								{/each}
							</ul>
							<p class="mt-5 font-mono text-[11px] opacity-60">COLOR SCHEME OF DOCUMENT NO. 000 INSPIRED BY HOSHIMACHI SUISEI · ICONS BY ICONES.JS</p>
						</div>
					</section>
				{/if}
				<DocumentFooter interactive bind:expanded={secretOpen} on:click={() => (secretOpen = !secretOpen)} />
			{/if}
		</main>
	</div>
</div>
