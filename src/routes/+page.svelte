<script lang="ts">
	import Buzzword from '../components/buzzword.svelte';
	import Tech from '../components/tech.svelte';
	import Socials from '../components/socials.svelte';
	import Project from '../components/project.svelte';
	import Header from '../components/header.svelte';

	import MaterialSymbolsKeyboardArrowDownRounded from '~icons/material-symbols/keyboard-arrow-down-rounded';
	import MdiLoading from '~icons/mdi/loading';
	import { fade } from 'svelte/transition';
	import { navigating } from '$app/stores';

	import technology from '/src/data/tech.json';
	import framework from '/src/data/framework.json';
	import core from '/src/data/core.json';
	import other from '/src/data/other.json';
	import tools from '/src/data/tools.json';
	import projects from '/src/data/projects.json';
	import { onMount } from 'svelte';

	let scrollY: number = 0;
	let height: number;
	let loadTime: number = 0;

	onMount(() => {
		console.log('ini mounted');
		scrollY = 0;
	});
</script>

<div
	class="min-h-screen min-w-screen flex flex-col pt-20 justify-between {scrollY !== 0 &&
		'mb-[6.5rem] lg:mb-[4rem]'}"
>
	<div class="mx-auto text-center my-auto" transition:fade>
		<div class="flex flex-col gap-2 w-[12.5rem] -mt-24">
			<img
				src="/img/anime.webp"
				class="w-24 aspect-square rounded-full mx-auto"
				alt="Francis Wibisono"
			/>
			<h1 class="text-4xl font-semibold">Hello!</h1>
			<span class="text-md italic">My name is</span>
			<h2 class="text-2xl font-semibold text-dove">Francis Wibisono</h2>
			<span class="text-md italic">and I make</span>
			<Buzzword />
			<span class="text-md italic">frontend applications</span>
			<Socials />
		</div>
	</div>
	{#if scrollY <= 32}
		<div class="mx-auto mb-10 lg:mb-0" in:fade={{ delay: 500, duration: 200 }} out:fade>
			{#if height}
				<MaterialSymbolsKeyboardArrowDownRounded class="w-16 h-16 animate-pulse" />
			{:else}
				<MdiLoading class="w-8 h-8 mb-8 animate-spin" />
			{/if}
		</div>
	{/if}
</div>
{#if scrollY > 32}
	<div
		class="mx-auto -mt-[32vh] w-full lg:w-[80vw]"
		in:fade={{ delay: 500, duration: 200 }}
		out:fade
	>
		<div class="flex flex-col gap-12">
			<div>
				<Header title="Technologies" cta="Click to learn more." ctaMobile="Tap to learn more." />
				<div
					class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-around text-center gap-y-8 mt-6 lg:mt-12"
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
			</div>
			<div>
				<div class="mb-8">
					<Header title="Projects" cta="Click to learn more." ctaMobile="Tap to learn more." />
				</div>

				<ol class="relative border-l border-gunmetal ml-4 gap-24">
					{#each projects as project}
						<Project {project} />
					{/each}
				</ol>
			</div>
			<div>
				<Header title="Experience" cta="Click to learn more." ctaMobile="Tap to learn more." />
				under construction!
			</div>
		</div>
	</div>
{/if}

<svelte:window bind:scrollY bind:innerHeight={height} />
