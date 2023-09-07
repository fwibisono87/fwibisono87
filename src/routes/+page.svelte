<script lang="ts">
	import Buzzword from '../components/buzzword.svelte';
	import Tech from '../components/tech.svelte';
	import Socials from '../components/socials.svelte';
	import Project from '../components/project.svelte';
	import Header from '../components/header.svelte';
	import Experience from '../components/experience.svelte';
	import { showSecret } from '../stores';

	import MaterialSymbolsKeyboardArrowDownRounded from '~icons/material-symbols/keyboard-arrow-down-rounded';
	import MdiLoading from '~icons/mdi/loading';
	import { fade } from 'svelte/transition';

	import experience from '/src/data/experience.json';
	import framework from '/src/data/framework.json';
	import core from '/src/data/core.json';
	import other from '/src/data/other.json';
	import tools from '/src/data/tools.json';
	import projects from '/src/data/projects.json';
	import secrets from '/src/data/secret.json';
	import { onMount } from 'svelte';

	let scrollY: number = 0;
	let height: number;
	let loadTime: number = 0;

	onMount(() => {
		scrollY = 0;
		showSecret.set(false);
		window.umami.track('Main Page Open');
	});
</script>

<div
	class="min-h-screen min-w-screen flex flex-col pt-20 justify-between {scrollY !== 0 &&
		'mb-[6.5rem] lg:mb-[4rem]'}"
>
	<div class="mx-auto text-center my-auto" transition:fade>
		<div class="flex flex-col gap-2 w-[15rem] -mt-24">
			<img
				src="https://storage.cloud.google.com/fws-b-2/static/img/anime.webp"
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
			<div in:fade={{ delay: 700, duration: 200 }}>
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
			<div in:fade={{ delay: 900, duration: 200 }} class="flex flex-col gap-4">
				<Header title="Projects" cta="Click to learn more." ctaMobile="Tap to learn more." />

				<ol class="relative border-l border-gunmetal ml-4 gap-24">
					{#each projects as project}
						<Project {project} />
					{/each}
				</ol>
			</div>
			<div in:fade={{ delay: 1200, duration: 200 }} class="flex flex-col gap-4">
				<Header title="Experience" />
				<ol class="relative border-l border-gunmetal ml-4 gap-24">
					{#each experience as exp}
						<Experience experience={exp} />
					{/each}
				</ol>
			</div>
			{#if $showSecret}
				<div in:fade={{ delay: 0, duration: 200 }} class="flex flex-col gap-4">
					<Header title="Interests" />
					<div
						class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-around text-center gap-y-8 mt-6 lg:mt-12"
					>
						{#each secrets as secret}
							<Tech tech={secret} />
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}

<svelte:window bind:scrollY bind:innerHeight={height} />
