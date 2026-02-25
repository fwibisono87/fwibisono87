<script lang="ts">
	import CarbonTrophy from '~icons/carbon/trophy';

	type Experience = {
		company: string;
		position: string;
		duration: string;
		location?: string;
		description?: string;
	};

	export let experience: Experience;
</script>

<li class="mb-8 ml-8 text-slate-100 last:mb-0">
	<span
		class="absolute -left-[1.05rem] top-6 flex h-8 w-8 items-center justify-center rounded-full border border-[#83bdfc]/70 bg-[#0b2f63] text-[#d9ebff] shadow-[0_0_12px_rgba(98,171,255,0.45)]"
	>
		<CarbonTrophy />
	</span>
	<article class="retro-card px-4 py-4 sm:px-5 sm:py-5">
		<div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
			<h3 class="text-base font-semibold uppercase tracking-[0.08em] text-[#f7fbff] sm:text-lg">
				{experience.company}
			</h3>
			<time class="retro-chip inline-flex w-fit rounded-full px-3 py-1 text-[0.62rem] leading-none"
				>{experience.duration}</time
			>
		</div>

		<span class="mt-3 block text-sm font-semibold text-[#e5f0ff] sm:text-base">
			{experience.position}
		</span>
		{#if experience.location}
			<span class="mt-1 block text-sm text-slate-300">
				{experience.location}
			</span>
		{/if}
		<p class="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
			{experience.description}
		</p>
	</article>
</li>
