<script>
	import { createEventDispatcher } from 'svelte';
	import { slide, fade } from 'svelte/transition';

	import CarbonClose from '~icons/carbon/close';

	export let open = false;
	export let title = '';

	const dispatch = createEventDispatcher();

	function closeModal() {
		dispatch('close');
	}
</script>

{#if open}
	<div class="modal z-50 fixed inset-0 flex items-center justify-center p-4 sm:p-8">
		<button
			type="button"
			class="modal-overlay fixed inset-0 bg-[#020611]/80 backdrop-blur-sm rounded-2xl"
			transition:fade
			on:click={closeModal}
			aria-label="Close modal"
		/>
		<div
			transition:slide
			class="retro-frame z-50 mx-auto max-h-[85vh] w-full overflow-y-auto lg:h-max lg:w-1/2"
		>
			<div
				class="head flex items-center justify-between border-b border-[#5f86bd]/50 px-5 py-4 text-lg font-extrabold text-[#f7fbff] sm:px-8 sm:text-2xl"
			>
				{title}
				<button
					type="button"
					class="retro-icon-link p-2"
					on:click={closeModal}
					aria-label="Close modal"
				>
					<CarbonClose class="h-5 w-5" />
				</button>
			</div>
			<div class="content p-5 sm:p-8">
				<slot name="body" />
			</div>
		</div>
	</div>
{/if}
