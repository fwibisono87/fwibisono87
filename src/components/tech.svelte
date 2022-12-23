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
</script>

<div
	class="flex-col gap-2 select-none cursor-pointer grayscale hover:grayscale-0 "
	title={tech.title}
	href={tech.url}
	on:click={handleToggleModal}
	on:keypress={handleToggleModal}
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