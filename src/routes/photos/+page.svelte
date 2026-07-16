<script lang="ts">
	import DocumentFooter from '../../components/document-footer.svelte';
	import DocumentHeader from '../../components/document-header.svelte';
	import events from '../../../static/json/events.json';

	type Theme = 'auto' | 'light' | 'dark';
	let theme: Theme = 'auto';
	let isDark = false;

	const counts: Record<string, number> = { gjui: 164, 'astral-express': 91, impactnation: 150, kompas: 91, mukashi: 125, 'neo-soho-toy': 105, 'cf-16': 194 };
	const button = 'inline-flex min-h-[44px] items-center justify-center border border-ink bg-ink px-6 py-2.5 font-mono text-[13px] text-paper no-underline hover:border-accent hover:bg-accent hover:text-white dark:border-night-ink dark:bg-night-ink dark:text-night';
	const imagePattern = 'bg-[linear-gradient(135deg,transparent_48%,#d8d5c6_49%,#d8d5c6_51%,transparent_52%),repeating-linear-gradient(45deg,#ece9dd,#ece9dd_8px,#f4f2ec_8px,#f4f2ec_16px)] dark:bg-[linear-gradient(135deg,transparent_48%,#35342b_49%,#35342b_51%,transparent_52%),repeating-linear-gradient(45deg,#1f1e17,#1f1e17_8px,#14130f_8px,#14130f_16px)]';
	function yearFrom(date: string) { return date.match(/\d{4}/)?.[0] ?? date; }
</script>

<svelte:head><title>Photographs — Francis Wibisono</title><meta name="description" content="Selected and edited event photography by Francis Wibisono." /></svelte:head>

<div class:dark={isDark}>
	<div class="mx-auto min-h-screen w-full max-w-[1760px] border-x border-ink bg-paper font-sans text-ink selection:bg-accent selection:text-white dark:border-night-ink dark:bg-night dark:text-night-ink max-[520px]:border-x-0">
		<DocumentHeader bind:theme bind:isDark active="photos" label="ANNEX A — PHOTOGRAPHS" />
		<main id="main-content" tabindex="-1">
			<section class="border-b-2 border-ink px-[clamp(20px,4vw,56px)] py-[clamp(36px,6vw,72px)] dark:border-night-ink" aria-labelledby="photos-heading">
				<p class="font-mono text-xs tracking-[.2em] text-accent">ANNEX A — EVENT PHOTOGRAPHY</p>
				<h1 id="photos-heading" class="my-6 animate-slide-in font-display text-[clamp(34px,5.5vw,60px)] font-normal leading-[1.1]">PHOTOGRAPHS</h1>
				<p class="m-0 max-w-[650px] text-[clamp(16px,2vw,19px)] leading-[1.65] text-muted dark:text-night-muted">Selected and edited pictures from events I attend. Each folder is one event. For raw files — or if your picture isn't here — email <a class="text-inherit underline decoration-accent underline-offset-4" href="mailto:photos@franciswibisono.com">photos@franciswibisono.com</a>.</p>
			</section>

			<section class="border-b-2 border-ink dark:border-night-ink" aria-labelledby="folders-heading">
				<div class="flex items-baseline justify-between gap-3 px-[clamp(20px,4vw,56px)] pt-10 max-[600px]:flex-col max-[600px]:items-start"><h2 id="folders-heading" class="m-0 font-display text-[clamp(20px,3vw,26px)] font-normal">FOLDERS</h2><span class="font-mono text-xs text-accent">A.1 — SELECTED / EDITED</span></div>
				<ul class="m-0 grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] list-none px-[clamp(20px,4vw,56px)] pb-14 pt-8">
					{#each events as event, index}
						<li class="relative -m-px border border-ink bg-paper dark:border-night-ink dark:bg-night">
							<div class={`${imagePattern} aspect-[3/2] border-b border-ink dark:border-night-ink`} role="img" aria-label="album cover"></div>
							<div class="flex flex-col gap-[5px] p-[16px_18px]"><span class="font-mono text-[11px] text-accent">A.1.{index + 1} — {yearFrom(event.date)}</span><span class="flex items-baseline justify-between gap-2.5"><strong class="font-heading text-lg">{event.eventName}</strong><small class="font-mono text-[11px] text-muted dark:text-night-muted">{counts[event.slug] ?? '—'} PHOTOS</small></span><span class="font-mono text-[11px] text-muted-2 dark:text-night-muted-2">■ ARCHIVE OFFLINE — EMAIL FOR ACCESS</span></div>
						</li>
					{/each}
				</ul>
			</section>

			<section class="grid grid-cols-[240px_minmax(0,1fr)] border-b-2 border-ink dark:border-night-ink max-[920px]:grid-cols-1" aria-labelledby="notice-heading">
				<h2 id="notice-heading" class="m-0 border-r border-ink p-6 font-mono text-xs font-normal tracking-[.15em] dark:border-night-ink max-[920px]:border-b max-[920px]:border-r-0"><span class="text-accent">A.2</span><br />NOTICE</h2>
				<div class="p-[24px_28px]"><p class="m-0 max-w-[680px] border border-dashed border-ink p-[18px_22px] font-mono text-[13px] leading-[1.7] text-muted dark:border-night-ink dark:text-night-muted"><strong class="text-accent">■ ARCHIVE RESTORATION IN PROGRESS —</strong> The original storage for these folders has been retired. Albums are being re-uploaded; anything marked offline is available on request by email.</p></div>
			</section>

			<section class="grid grid-cols-[minmax(0,1fr)_400px] border-b-2 border-ink dark:border-night-ink max-[920px]:grid-cols-1" aria-labelledby="commission-heading">
				<div class="border-r border-ink px-[clamp(20px,4vw,56px)] py-[clamp(36px,5vw,64px)] dark:border-night-ink max-[920px]:border-b max-[920px]:border-r-0"><p class="font-mono text-xs tracking-[.2em] text-accent">A.3 — COMMISSIONS</p><h2 id="commission-heading" class="my-5 font-display text-[clamp(22px,3.5vw,32px)] font-normal">COSPLAY PHOTOSHOOTS</h2><p class="mb-8 max-w-[480px] leading-relaxed text-muted dark:text-night-muted">If you're a cosplayer interested in a shoot, get in touch — availability varies by event season.</p><a class={button} href="mailto:photos@franciswibisono.com">EMAIL PHOTOS@ ↗</a></div>
				<figure class="m-0 flex min-h-[300px] flex-col"><div class={`${imagePattern} min-h-[260px] flex-1`} role="img" aria-label="sample shoot photo"></div><figcaption class="flex justify-between border-t border-ink px-4 py-3 font-mono text-[11px] text-muted dark:border-night-ink dark:text-night-muted"><span>SAMPLE C/1</span><span>PHOTOGRAPH</span></figcaption></figure>
			</section>
			<DocumentFooter endLabel="END OF ANNEX A" />
		</main>
	</div>
</div>
