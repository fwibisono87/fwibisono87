<script lang="ts">
	import { page } from '$app/stores';
	import DocumentHeader from '../../../components/document-header.svelte';
	import DocumentFooter from '../../../components/document-footer.svelte';
	import events from '../../../data/events.json';

	type Theme = 'auto' | 'light' | 'dark';
	let theme: Theme = 'auto';
	let isDark = false;
	$: currentEvent = events.find((event) => event.slug === $page.params.slug);
</script>

<svelte:head><title>{currentEvent?.eventName ?? 'Photographs'} — Francis Wibisono</title></svelte:head>

<div class:dark={isDark} class:bg-night={isDark} class:bg-paper={!isDark} class="min-h-screen">
	<div class="mx-auto min-h-screen w-full max-w-[1760px] border-x border-ink bg-paper font-sans text-ink selection:bg-accent selection:text-white dark:border-night-ink dark:bg-night dark:text-night-ink max-[520px]:border-x-0">
		<DocumentHeader bind:theme bind:isDark active="photos" label="ANNEX A — PHOTOGRAPHS" />
		<main id="main-content" tabindex="-1">
			<section class="border-b-2 border-ink px-[clamp(20px,4vw,56px)] py-[clamp(36px,6vw,72px)] dark:border-night-ink">
				<a class="mb-6 inline-block font-mono text-xs text-accent no-underline hover:underline" href="/photos">← FOLDERS</a>
				{#if currentEvent}
					<p class="mb-4 font-mono text-xs tracking-[.2em] text-accent">A.1 — SELECTED / EDITED</p>
					<h1 class="m-0 max-w-[1000px] animate-slide-in font-display text-[clamp(28px,5vw,52px)] font-normal leading-[1.12]">{currentEvent.eventName}</h1>
					<div class="mt-6 flex flex-wrap gap-x-10 gap-y-2 font-mono text-xs text-muted dark:text-night-muted"><span>{currentEvent.location}</span><span>{currentEvent.date}</span></div>
				{/if}
			</section>
			<section class="grid grid-cols-[240px_minmax(0,1fr)] border-b-2 border-ink dark:border-night-ink max-[920px]:grid-cols-1" aria-labelledby="notice-heading">
				<h2 id="notice-heading" class="m-0 border-r border-ink p-6 font-mono text-xs font-normal tracking-[.15em] dark:border-night-ink max-[920px]:border-b max-[920px]:border-r-0"><span class="text-accent">A.2</span><br />NOTICE</h2>
				<div class="p-[24px_28px]"><p class="m-0 max-w-[680px] border border-dashed border-ink p-[18px_22px] font-mono text-[13px] leading-[1.7] text-muted dark:border-night-ink dark:text-night-muted"><strong class="text-accent">■ ARCHIVE RESTORATION IN PROGRESS —</strong> The original storage for these folders has been retired. Albums are being re-uploaded; anything marked offline is available on request by email.</p></div>
			</section>
			<DocumentFooter endLabel="END OF ANNEX A" />
		</main>
	</div>
</div>
