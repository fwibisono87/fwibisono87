<script lang="ts">
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
</script>

<div class="w-full">
	<button
		type="button"
		class="group retro-card flex h-full min-h-[10rem] w-full flex-col items-center justify-center gap-3 px-3 py-4 text-center transition duration-200 hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fd0ff]/70"
		title={tech.title}
		on:click={handleToggleModal}
		aria-label={`Open ${tech.title} details`}
	>
		<div class="flex h-16 w-16 items-center justify-center">
			<img
				src={tech.img}
				class="mx-auto my-auto max-h-16 max-w-16 sepia transition duration-300 group-hover:sepia-0 group-focus-visible:sepia-0"
				alt={tech.title}
			/>
		</div>

		<span class="text-sm font-semibold uppercase tracking-[0.08em] text-slate-100"
			>{tech.title}</span
		>
	</button>
	<Modal title={tech.title} open={showModal} on:close={handleToggleModal}
		><svelte:fragment slot="body">
			<div
				class="flex flex-col items-center gap-4 text-slate-200 sm:flex-row sm:items-start sm:gap-6"
			>
				<img src={tech.img} alt={tech.title} class="my-auto max-h-24 w-24" />
				<p class="text-left leading-relaxed">
					{@html tech.desc}
				</p>
			</div>
		</svelte:fragment></Modal
	>
</div>
