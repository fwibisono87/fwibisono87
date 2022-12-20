<script lang="ts">
	import Buzzword from '../components/buzzword.svelte';
	import Tech from '../components/tech.svelte';
	import MaterialSymbolsKeyboardArrowDownRounded from '~icons/material-symbols/keyboard-arrow-down-rounded';
	import { fade } from 'svelte/transition';

	import technology from '/src/tech.json';

	let scrollY: number = 0;
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
	{#if scrollY === 0}
		<div class="mx-auto mb-10 lg:mb-0" in:fade={{ delay: 500, duration: 200 }} out:fade>
			<MaterialSymbolsKeyboardArrowDownRounded class="w-16 h-16 animate-pulse animate-bounce" />
		</div>
	{/if}
</div>
{#if scrollY !== 0}
	<div
		class="mx-auto -mt-60 lg:-mt-80 w-full lg:w-[80vw]"
		in:fade={{ delay: 350, duration: 200 }}
		out:fade
	>
		<div class="flex flex-col">
			<h3 class="text-2xl font-semibold text-dove text-center lg:text-left">Technologies</h3>
			<span class="hidden lg:block">Hover to learn more about each tech!</span>
			<span class="block lg:hidden text-center">Tap to learn more about each tech!</span>
			<div class="grid grid-cols-2 lg:grid-cols-4 justify-center text-center gap-y-8 mt-6 lg:mt-2">
				{#each technology as tech}
					<Tech {tech} />
				{/each}
			</div>
		</div>
	</div>
{/if}

<svelte:window bind:scrollY />
