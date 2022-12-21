<script lang="ts">
	import Buzzword from '../components/buzzword.svelte';
	import Tech from '../components/tech.svelte';
	import MaterialSymbolsKeyboardArrowDownRounded from '~icons/material-symbols/keyboard-arrow-down-rounded';
	import { fade } from 'svelte/transition';

	import technology from '/src/data/tech.json';
	import framework from '/src/data/framework.json';
	import core from '/src/data/core.json';
	import other from '/src/data/other.json';
	import tools from '/src/data/tools.json';
	import { onMount } from 'svelte';

	let scrollY: number = 0;

	onMount(() => {
		scrollY = 0;
	});
</script>

<div
	class="min-h-screen min-w-screen flex flex-col pt-20 justify-between {scrollY !== 0 &&
		'mb-[6.5rem] lg:mb-[4rem]'}"
>
	<div class="mx-auto text-center my-auto" transition:fade>
		<div class="flex flex-col gap-2 -mt-24">
			<img src="/img/anime.webp" class="w-24 aspect-square rounded-full mx-auto" />
			<h1 class="text-4xl font-semibold">Hello!</h1>
			<span class="text-md italic">My name is</span>
			<h2 class="text-2xl font-semibold text-dove">Francis Wibisono</h2>
			<span class="text-md italic">and I make</span>
			<Buzzword />
			<span class="text-md italic">frontend applications</span>
		</div>
	</div>
	{#if scrollY <= 32}
		<div class="mx-auto mb-10 lg:mb-0" in:fade={{ delay: 500, duration: 200 }} out:fade>
			<MaterialSymbolsKeyboardArrowDownRounded class="w-16 h-16 animate-pulse animate-bounce" />
		</div>
	{/if}
</div>
{#if scrollY > 32}
	<div
		class="mx-auto -mt-[20vh] w-full lg:w-[80vw]"
		in:fade={{ delay: 500, duration: 200 }}
		out:fade
	>
		<div class="flex flex-col gap-12">
			<div>
				<h3 class="text-2xl font-semibold text-dove text-center lg:text-left">Technologies</h3>
				<span class="hidden lg:block">Hover to learn more about each tech!</span>
				<span class="block lg:hidden text-center">Tap to learn more about each tech!</span>
				<div
					class="grid grid-cols-2 lg:grid-cols-4 justify-center text-center gap-y-8 mt-6 lg:mt-12"
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
				<h3 class="text-2xl font-semibold text-dove text-center lg:text-left">Projects</h3>
				<span class="hidden lg:block">Click to learn more</span>
				<span class="block lg:hidden text-center">Tap to learn more</span>
				under construction!
			</div>
			<div>
				<h3 class="text-2xl font-semibold text-dove text-center lg:text-left">Experience</h3>
				<span class="hidden lg:block">Click to learn more</span>
				<span class="block lg:hidden text-center">Tap to learn more</span>
				under construction!
			</div>
		</div>
	</div>
{/if}

<svelte:window bind:scrollY />
