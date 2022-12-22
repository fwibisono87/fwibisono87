<script lang="ts">
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import Modal from '../components/modal.svelte';

	type Tech = {
		desc: string;
		title: string;
		img: string;
		url: string;
	};

	export let tech: Tech;

	let showModal = false;
	const handleToggleModal = () => {
		showModal = !showModal;
	};
	let showDescription = false;

	const toggleDescription = () => {
		showDescription = !showDescription;
	};
</script>

<div
	class="flex-col gap-2 select-none cursor-pointer"
	title={tech.desc}
	href={tech.url}
	on:click={handleToggleModal}
>
	<div class="flex w-16 mx-auto h-16">
		<img src={tech.img} class="w-full my-auto max-w-16 max-h-16 mx-auto" alt={tech.title} />
	</div>

	<span class="font-semibold">
		{tech.title}
	</span>
	<Modal title={tech.title} open={showModal} on:close={() => handleToggleModal()}
		><svelte:fragment slot="body">{tech.desc}</svelte:fragment></Modal
	>
</div>
<!-- <div
	class="flex lg:hidden flex-col gap-2"
	title={tech.desc}
	on:click={toggleDescription}
	transition:slide
>
	<div class="flex w-16 mx-auto h-16">
		<img src={tech.img} class="w-full h-full my-auto max-w-16 max-h-16  mx-auto" alt={tech.title} />
	</div>
	<span class="font-semibold">
		{tech.title}
	</span>
	{#if showDescription}
		<span transition:scale>
			{tech.desc}
		</span>
	{/if}
</div> -->
