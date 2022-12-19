<script>
	import Buzzword from '../components/buzzword.svelte';
	import MaterialSymbolsKeyboardArrowDownRounded from '~icons/material-symbols/keyboard-arrow-down-rounded';
	/**
	 * @type {any}
	 */
	let scrollY;
</script>

<div class="min-h-screen min-w-screen flex flex-col pt-20 justify-between">
	<div class="mx-auto text-center my-auto">
		<div class="flex flex-col gap-2 -mt-24">
			<img src="/img/anime.png" class="w-24 aspect-square rounded-full mx-auto" />
			<h1 class="text-4xl font-semibold">Hello!</h1>
			<span class="text-md italic">My name is</span>
			<h2 class="text-2xl font-semibold">Francis Wibisono</h2>
			<span class="text-md italic">and I make</span>
			<Buzzword />
			<span class="text-md italic">frontend applications</span>
		</div>
	</div>
	{#if scrollY === 0}
		<div class="mx-auto">
			<MaterialSymbolsKeyboardArrowDownRounded class="w-16 h-16 animate-pulse animate-bounce" />
		</div>
	{/if}
</div>

<svelte:window bind:scrollY />
