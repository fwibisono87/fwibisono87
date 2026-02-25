<script lang="ts">
	export let title: string;
	export let cta: string = '';
	export let ctaMobile: string = '';
</script>

<div class="space-y-2 sm:space-y-3">
	<div class="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
		<h3 class="text-xl sm:text-2xl font-semibold text-[#f7fbff]">{title}</h3>
	</div>
	{#if cta}
		<span class="hidden lg:block text-sm text-slate-300">{cta}</span>
		<span class="block lg:hidden text-center text-sm text-slate-300"
			>{ctaMobile ? ctaMobile : cta}</span
		>
	{/if}
	<div class="retro-divider" />
</div>
