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
	let hover = false;

	const handleToggleModal = () => {
		showModal = !showModal;
	};

	const handleMouseEnter = () => {
		hover=true
	}
	const handleMouseLeave = () => {
		hover=false
	}

	let showDescription = false;
</script>

<div
	class="flex-col gap-2 select-none cursor-pointer "
	title={tech.title}
	on:click={handleToggleModal}
	on:keypress={handleToggleModal}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
>
	<div class="flex w-16 mx-auto h-16">
		<img src={tech.img} class="w-full my-auto max-w-16 max-h-16 mx-auto sepia {hover && 'sepia-0'}" alt={tech.title} />
	</div>

	<span class="font-semibold">
		{tech.title}
	</span>
	<Modal title={tech.title} open={showModal} on:close={() => handleToggleModal()}
		><svelte:fragment slot="body">
			<div class="flex flex-row w-full gap-6">
				<img src={tech.img} alt={tech.title} class="w-24 max-h-24 my-auto">
				<p class="text-left">
					{@html tech.desc}
				</p>
			
			</div>
		</svelte:fragment></Modal
	>
</div>