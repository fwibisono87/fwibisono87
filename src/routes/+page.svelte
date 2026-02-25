<script lang="ts">
	import Buzzword from '../components/buzzword.svelte';
	import Tech from '../components/tech.svelte';
	import Socials from '../components/socials.svelte';
	import Project from '../components/project.svelte';
	import Header from '../components/header.svelte';
	import Experience from '../components/experience.svelte';
	import { showSecret } from '../stores';

	import CarbonArrowDown from '~icons/carbon/arrow-down';
	import CarbonCircleDash from '~icons/carbon/circle-dash';
	import { fade } from 'svelte/transition';

	import experience from '../data/experience.json';
	import framework from '../data/framework.json';
	import core from '../data/core.json';
	import other from '../data/other.json';
	import tools from '../data/tools.json';
	import projects from '../data/projects.json';
	import secrets from '../data/secret.json';
	import { onMount } from 'svelte';

	let scrollY: number = 0;
	let height: number;

	const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

	$: revealProgress = clamp((scrollY - 18) / 128, 0, 1);
	$: heroLift = Math.min(scrollY * 0.08, 44);
	$: heroSectionStyle = `transform: translateY(-${heroLift}px); opacity: ${(
		1 -
		revealProgress * 0.35
	).toFixed(3)};`;
	$: contentSectionStyle = `opacity: ${revealProgress.toFixed(
		3
	)}; transform: translateY(${Math.round((1 - revealProgress) * 68)}px); pointer-events: ${
		revealProgress < 0.08 ? 'none' : 'auto'
	};`;

	onMount(() => {
		scrollY = 0;
		showSecret.set(false);
		window.umami?.track('Main Page Open');
	});
</script>

<div
	class="min-h-screen min-w-screen flex flex-col justify-between pt-10 sm:pt-14 {scrollY !== 0 &&
		'mb-[7rem] lg:mb-[5.5rem]'}"
>
	<section
		class="retro-frame mx-auto my-auto w-full max-w-6xl px-5 py-8 text-center transition-[opacity,transform] duration-300 ease-out sm:px-8 sm:py-10 lg:px-12 lg:py-12 lg:text-left"
		style={heroSectionStyle}
		transition:fade
	>
		<div class="grid gap-8 lg:grid-cols-[14rem,1fr] lg:gap-10">
			<div class="flex flex-col items-center gap-4 lg:items-start">
				<span class="retro-chip inline-flex rounded-full px-3 py-1 text-[0.6rem] leading-none"
					>Mission Profile</span
				>
				<img
					src="/img/anime.webp"
					class="w-28 aspect-square rounded-2xl border border-[#86c4ff]/70 ring-4 ring-[#112c5a]"
					alt="Francis Wibisono"
				/>
				<div class="retro-card w-full px-4 py-3 text-center lg:text-left">
					<p class="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-slate-300">
						Callsign
					</p>
					<p class="mt-1 text-sm font-semibold text-[#f7fbff]">@fwibisono87</p>
				</div>
			</div>
			<div class="flex flex-col justify-center gap-5">
				<p class="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[#8fc8ff]">About Me</p>
				<div class="space-y-2">
					<h1 class="text-4xl leading-tight text-[#f7fbff] sm:text-5xl lg:text-6xl">Hello!</h1>
					<span class="text-sm italic text-slate-300">My name is</span>
					<h2 class="text-3xl text-[#ffd3a4] sm:text-4xl">Francis Wibisono</h2>
					<span class="text-sm italic text-slate-300">and I make</span>
					<Buzzword />
					<span class="text-sm italic text-slate-300">web applications</span>
				</div>
				<div class="retro-divider" />
				<Socials />
			</div>
		</div>
	</section>
	{#if revealProgress < 0.96}
		<div class="mx-auto mb-8 lg:mb-2" in:fade={{ delay: 500, duration: 200 }} out:fade>
			{#if height}
				<div
					class="retro-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.6rem] leading-none"
				>
					<CarbonArrowDown class="h-4 w-4 animate-bounce" />
					Scroll For Details
				</div>
			{:else}
				<CarbonCircleDash class="h-7 w-7 animate-spin text-[#9acfff]" />
			{/if}
		</div>
	{/if}
</div>
<div
	class="mx-auto -mt-[14vh] w-full max-w-6xl transition-[opacity,transform] duration-500 ease-out"
	style={contentSectionStyle}
	aria-hidden={revealProgress < 0.08}
>
	<div class="flex flex-col gap-8 sm:gap-10">
		<section class="retro-frame px-5 py-6 sm:px-8 sm:py-8" in:fade={{ delay: 700, duration: 200 }}>
			<Header
				title="Technologies"
				cta="Click to inspect each stack module."
				ctaMobile="Tap each module."
			/>
			<div
				class="mt-6 grid grid-cols-2 gap-4 text-center sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-6"
			>
				{#each core as tech}
					<Tech {tech} />
				{/each}
				{#each framework as tech}
					<Tech {tech} />
				{/each}
				{#each other as tech}
					<Tech {tech} />
				{/each}
				{#each tools as tech}
					<Tech {tech} />
				{/each}
			</div>
		</section>

		<section
			class="retro-frame flex flex-col gap-4 px-5 py-6 sm:px-8 sm:py-8"
			in:fade={{ delay: 900, duration: 200 }}
		>
			<Header
				title="Projects"
				cta="Mission archive of shipped products."
				ctaMobile="Shipped projects."
			/>

			<ol class="relative ml-3 border-l border-[#5a80b6]/60 pl-3 sm:pl-5">
				{#each projects as project}
					<Project {project} />
				{/each}
			</ol>
		</section>

		<section
			class="retro-frame flex flex-col gap-4 px-5 py-6 sm:px-8 sm:py-8"
			in:fade={{ delay: 1200, duration: 200 }}
		>
			<Header
				title="Experience"
				cta="Career timeline across missions."
				ctaMobile="Career timeline."
			/>
			<ol class="relative ml-3 border-l border-[#5a80b6]/60 pl-3 sm:pl-5">
				{#each experience as exp}
					<Experience experience={exp} />
				{/each}
			</ol>
		</section>

		{#if $showSecret}
			<section
				class="retro-frame flex flex-col gap-4 px-5 py-6 sm:px-8 sm:py-8"
				in:fade={{ delay: 0, duration: 200 }}
			>
				<Header
					title="Interests"
					cta="Encrypted side quests unlocked."
					ctaMobile="Secret side quests."
				/>
				<div
					class="mt-2 grid grid-cols-2 gap-4 text-center sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-6"
				>
					{#each secrets as secret}
						<Tech tech={secret} />
					{/each}
				</div>
			</section>
		{/if}
	</div>
</div>

<svelte:window bind:scrollY bind:innerHeight={height} />
