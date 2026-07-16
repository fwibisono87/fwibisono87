<script lang="ts">
	import { onMount } from 'svelte';

	export let label = 'FRANCIS WIBISONO — REFERENCE DOCUMENT NO. 001';
	export let active: 'home' | 'photos' | 'hashtag' = 'home';
	export let theme: 'auto' | 'light' | 'dark' = 'auto';
	export let isDark = false;

	let mediaDark = false;
	const themes: Array<'auto' | 'light' | 'dark'> = ['auto', 'light', 'dark'];

	$: isDark = theme === 'dark' || (theme === 'auto' && mediaDark);

	onMount(() => {
		const query = window.matchMedia('(prefers-color-scheme: dark)');
		const updateMedia = () => (mediaDark = query.matches);
		const saved = localStorage.getItem('fw-theme');
		if (saved === 'auto' || saved === 'light' || saved === 'dark') theme = saved;
		updateMedia();
		query.addEventListener('change', updateMedia);
		return () => query.removeEventListener('change', updateMedia);
	});

	function cycleTheme() {
		theme = themes[(themes.indexOf(theme) + 1) % themes.length];
		localStorage.setItem('fw-theme', theme);
	}

	const itemClass = 'flex min-h-[52px] items-center border-l border-ink px-5 font-mono text-[13px] text-ink no-underline hover:bg-ink hover:text-paper focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-accent dark:border-night-ink dark:text-night-ink dark:hover:bg-night-ink dark:hover:text-night';
</script>

<header class="sticky top-0 z-50 flex min-h-[54px] flex-wrap items-stretch border-b-2 border-ink bg-paper/95 backdrop-blur dark:border-night-ink dark:bg-night/95">
	<a class="flex items-center border-r border-ink px-5 font-display text-[15px] tracking-[.08em] text-ink no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-accent dark:border-night-ink dark:text-night-ink max-[580px]:px-3.5" href="/" aria-label="Francis Wibisono — home">FW</a>
	<p class="m-0 flex min-w-[180px] flex-1 items-center px-5 font-mono text-xs tracking-[.14em] text-muted dark:text-night-muted max-[920px]:hidden">{label}</p>
	<nav class="ml-auto flex items-stretch" aria-label="Primary navigation">
		<button class={`${itemClass} bg-transparent max-[580px]:px-3 max-[580px]:text-[0]`} type="button" on:click={cycleTheme} aria-label={`Color theme: ${theme}. Activate to change theme.`}><span class="mr-2 text-base max-[580px]:mr-0" aria-hidden="true">◐</span>{theme.toUpperCase()}</button>
		{#if active === 'home'}
			<a class={`${itemClass} max-[580px]:px-3 max-[580px]:text-[11px]`} href="/#work">WORK</a>
			<a class={`${itemClass} max-[580px]:px-3 max-[580px]:text-[11px]`} href="/#experience">CV</a>
			<a class={`${itemClass} bg-accent text-white hover:bg-ink max-[580px]:px-3 max-[580px]:text-[11px] dark:text-white`} href="/#contact">CONTACT</a>
		{:else}
			<a class={`${itemClass} max-[580px]:px-3 max-[580px]:text-[11px]`} href="/">← DOC. 001</a>
			{#if active === 'photos'}
				<a class={`${itemClass} max-[580px]:px-3 max-[580px]:text-[11px]`} href="/hashtag">ANNEX B</a>
				<a class={`${itemClass} bg-accent text-white hover:bg-ink max-[700px]:hidden dark:text-white`} href="mailto:photos@franciswibisono.com">CONTACT</a>
			{:else}
				<a class={`${itemClass} max-[580px]:px-3 max-[580px]:text-[11px]`} href="/photos">ANNEX A</a>
			{/if}
		{/if}
	</nav>
</header>
