<script lang="ts">
	import DocumentFooter from '../../components/document-footer.svelte';
	import DocumentHeader from '../../components/document-header.svelte';

	type Theme = 'auto' | 'light' | 'dark';
	type TagKey = 'cosplay' | 'canon' | 'hoyoverse' | 'starrail' | 'genshin' | 'hololive';
	let theme: Theme = 'auto';
	let isDark = false;
	let character = '', series = '', cosplayer = '', date = '';
	let camera = 'Canon 600D', lens = 'Canon EF 50mm f/1.8 STM';
	let copied = false;
	let tags: Record<TagKey, boolean> = { cosplay: true, canon: true, hoyoverse: false, starrail: false, genshin: false, hololive: false };
	const tagDefinitions: Array<{ key: TagKey; label: string; output: string }> = [
		{ key: 'cosplay', label: 'cosplay', output: 'cosplay' }, { key: 'canon', label: 'canon', output: 'canon' },
		{ key: 'hoyoverse', label: 'hoyoverse', output: 'hoyoverse' }, { key: 'starrail', label: 'starrail', output: 'honkaistarrail' },
		{ key: 'genshin', label: 'genshin', output: 'genshinimpact' }, { key: 'hololive', label: 'hololive', output: 'hololive' }
	];
	const field = 'w-full box-border rounded-none border border-ink bg-paper px-3.5 py-[11px] font-mono text-sm text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-accent dark:border-night-ink dark:bg-night dark:text-night-ink';
	$: activeTags = tagDefinitions.filter((tag) => tags[tag.key]).map((tag) => `#${tag.output}`).join(' ');
	$: caption = `#cosplay of ${character || '…'} from ${series || '…'} by @${cosplayer.replace(/^@/, '') || '…'}\n\n📅: ${date || '…'}\n📸: ${camera} | ${lens}${activeTags ? `\n\n${activeTags}` : ''}`;
	function toggleTag(key: TagKey) { tags = { ...tags, [key]: !tags[key] }; copied = false; }
	async function copyCaption() { try { await navigator.clipboard.writeText(caption); copied = true; } catch { copied = false; } }
</script>

<svelte:head><title>Caption Generator — Francis Wibisono</title><meta name="description" content="Generate a formatted cosplay photography caption and hashtag set." /></svelte:head>

<div class:dark={isDark} class:bg-night={isDark} class:bg-paper={!isDark} class="min-h-screen">
	<div class="mx-auto min-h-screen w-full max-w-[1760px] border-x border-ink bg-paper font-sans text-ink selection:bg-accent selection:text-white dark:border-night-ink dark:bg-night dark:text-night-ink max-[520px]:border-x-0">
		<DocumentHeader bind:theme bind:isDark active="hashtag" label="ANNEX B — CAPTION GENERATOR" />
		<main id="main-content" tabindex="-1">
			<section class="border-b-2 border-ink px-[clamp(20px,4vw,56px)] py-[clamp(36px,6vw,64px)] dark:border-night-ink" aria-labelledby="tool-heading"><p class="font-mono text-xs tracking-[.2em] text-accent">ANNEX B — FIELD TOOL</p><h1 id="tool-heading" class="my-6 animate-slide-in font-display text-[clamp(30px,5vw,54px)] font-normal leading-[1.12]">CAPTION<br />GENERATOR</h1><p class="m-0 max-w-[580px] text-[clamp(15px,2vw,18px)] leading-[1.65] text-muted dark:text-night-muted">Fill in the shot data; the caption assembles itself. One copy button, no retyping camera specs.</p></section>

			<div class="grid grid-cols-2 border-b-2 border-ink dark:border-night-ink max-[920px]:grid-cols-1">
				<form class="flex flex-col gap-[22px] border-r border-ink px-[clamp(20px,4vw,56px)] py-[clamp(28px,4vw,48px)] dark:border-night-ink max-[920px]:border-b max-[920px]:border-r-0" aria-labelledby="input-heading" on:submit|preventDefault={copyCaption}>
					<h2 id="input-heading" class="m-0 font-mono text-[11px] font-normal tracking-[.2em] text-accent">B.1 — INPUT</h2>
					<div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
						<label class="flex flex-col gap-[7px]"><span class="font-mono text-[11px] text-muted-2 dark:text-night-muted-2">CHARACTER</span><input class={field} bind:value={character} on:input={() => (copied = false)} placeholder="e.g. Hoshimachi Suisei" autocomplete="off" /></label>
						<label class="flex flex-col gap-[7px]"><span class="font-mono text-[11px] text-muted-2 dark:text-night-muted-2">SERIES</span><input class={field} bind:value={series} on:input={() => (copied = false)} placeholder="e.g. hololive" autocomplete="off" /></label>
						<label class="flex flex-col gap-[7px]"><span class="font-mono text-[11px] text-muted-2 dark:text-night-muted-2">COSPLAYER (@)</span><input class={field} bind:value={cosplayer} on:input={() => (copied = false)} placeholder="handle, without @" autocomplete="off" /></label>
						<label class="flex flex-col gap-[7px]"><span class="font-mono text-[11px] text-muted-2 dark:text-night-muted-2">DATE</span><input class={field} bind:value={date} on:input={() => (copied = false)} placeholder="e.g. 12 JUL 2026" autocomplete="off" /></label>
						<label class="flex flex-col gap-[7px]"><span class="font-mono text-[11px] text-muted-2 dark:text-night-muted-2">CAMERA BODY</span><select class={field} bind:value={camera} on:change={() => (copied = false)}><option>Canon 600D</option><option>Canon 350D</option><option>Canon 6D</option><option>Canon 6D MK 2</option></select></label>
						<label class="flex flex-col gap-[7px]"><span class="font-mono text-[11px] text-muted-2 dark:text-night-muted-2">LENS</span><select class={field} bind:value={lens} on:change={() => (copied = false)}><option>Canon EF 50mm f/1.8 STM</option><option>Tamron 18-200mm F/3.5-6.3</option><option>Canon EF-S 24mm f/2.8 USM</option></select></label>
					</div>
					<fieldset class="m-0 border-0 p-0"><legend class="mb-2.5 font-mono text-[11px] text-muted-2 dark:text-night-muted-2">HASHTAG MODULES — TOGGLE</legend><div class="flex flex-wrap gap-2">{#each tagDefinitions as tag}<button class="border border-ink px-3.5 py-[7px] font-mono text-xs dark:border-night-ink" class:bg-ink={tags[tag.key] && !isDark} class:text-paper={tags[tag.key] && !isDark} class:bg-night-ink={tags[tag.key] && isDark} class:text-night={tags[tag.key] && isDark} class:bg-transparent={!tags[tag.key]} type="button" aria-pressed={tags[tag.key]} on:click={() => toggleTag(tag.key)}>#{tag.label}</button>{/each}</div></fieldset>
				</form>

				<section class="flex flex-col gap-5 px-[clamp(20px,4vw,56px)] py-[clamp(28px,4vw,48px)]" aria-labelledby="output-heading">
					<div class="flex items-baseline justify-between gap-3"><h2 id="output-heading" class="m-0 font-mono text-[11px] font-normal tracking-[.2em] text-accent">B.2 — OUTPUT</h2><span class="font-mono text-[11px] text-muted-2 dark:text-night-muted-2">{caption.length} CHARS</span></div>
					<pre class="m-0 min-h-[220px] whitespace-pre-wrap break-words border border-ink bg-paper-2 p-[22px] font-mono text-sm leading-[1.8] text-inherit dark:border-night-ink dark:bg-night-2" aria-label="Generated caption">{caption}</pre>
					<button class="min-h-[44px] self-start border border-ink bg-ink px-6 py-2.5 font-mono text-[13px] text-paper hover:border-accent hover:bg-accent hover:text-white dark:border-night-ink dark:bg-night-ink dark:text-night" type="button" on:click={copyCaption} aria-live="polite">{copied ? '✓ COPIED TO CLIPBOARD' : 'COPY TO CLIPBOARD'}</button>
				</section>
			</div>
			<DocumentFooter endLabel="END OF ANNEX B" />
		</main>
	</div>
</div>
