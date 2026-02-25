<script>
	import { slide, fade } from 'svelte/transition';

	import CarbonClose from '~icons/carbon/close';

	export let open = false;
	export let title = '';
</script>

{#if open}
	<div
		class="modal z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center p-8 lg:p-0"
	>
		<div class="modal-overlay fixed w-full h-full bg-gray-900 opacity-50" transition:fade />
		<div
			transition:slide
			class="bg-primary w-full lg:h-max lg:w-1/2  mx-auto rounded-lg shadow-xl z-50 overflow-y-auto"
		>
			<div
				class="flex justify-between items-center head bg-primary text-text border-b-2 border-dove py-5 px-8 text-2xl font-extrabold"
			>
				{title}
				<button class="">
					<CarbonClose class="text-text" />
				</button>
			</div>
			<div class="content p-8">
				<slot name="body" />
			</div>
		</div>
	</div>
{/if}
