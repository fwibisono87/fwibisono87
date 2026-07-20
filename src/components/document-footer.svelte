<script lang="ts">
	export let endLabel = 'END OF DOCUMENT';
	export let interactive = false;
	export let expanded = false;
	const year = new Date().getFullYear();
</script>

<footer class="flex items-center justify-between gap-3 px-[clamp(20px,4vw,56px)] py-[18px] font-mono text-xs text-muted dark:text-night-muted max-[520px]:flex-col max-[520px]:items-start">
	<span>© {year} FRANCIS WIBISONO</span>
	{#if interactive}
		<button class="border-0 bg-transparent p-0 text-accent hover:underline" type="button" aria-expanded={expanded} aria-controls="appendix" on:click>{expanded ? '■ APPENDIX DECLASSIFIED — END OF DOCUMENT' : endLabel}</button>
	{:else}
		<span class="text-accent">{endLabel}</span>
	{/if}
</footer>
