<script lang="ts">
	import CarbonRocket from '~icons/carbon/rocket';
	import CarbonView from '~icons/carbon/view';
	import CarbonLink from '~icons/carbon/link';
	import CarbonViewOff from '~icons/carbon/view-off';
	import CarbonUnlink from '~icons/carbon/unlink';

	type Project = {
		title: string;
		date: string;
		details: string;
		link: string;
		source: string;
		img?: string;
	};

	export let project: Project;

	type DateParts = {
		range: string;
		duration: string | null;
	};

	const splitDateLabel = (label: string): DateParts => {
		const trimmed = label.trim();
		const match = trimmed.match(/^(.*?)(?:\s*\(([^()]*)\))\s*$/);
		if (!match) {
			return { range: trimmed, duration: null };
		}

		const range = match[1].trim();
		const duration = match[2].trim();
		return {
			range: range || trimmed,
			duration: duration || null
		};
	};

	$: dateParts = splitDateLabel(project.date);
</script>

<li class="mb-8 ml-8 text-slate-100 last:mb-0">
	<span
		class="absolute -left-[1.05rem] top-6 flex h-8 w-8 items-center justify-center rounded-full border border-[#83bdfc]/70 bg-[#0b2f63] text-[#d9ebff] shadow-[0_0_12px_rgba(98,171,255,0.45)]"
	>
		<CarbonRocket class="rotate-180" />
	</span>
	<article class="retro-card px-4 py-4 sm:px-5 sm:py-5">
		<div class="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
			<h3 class="text-base font-semibold uppercase tracking-[0.08em] text-[#f7fbff] sm:text-lg">
				{project.title}
			</h3>
			<time class="retro-date-badge xl:ml-4 xl:items-end xl:text-right">
				<span class="retro-date-range">{dateParts.range}</span>
				{#if dateParts.duration}
					<span class="retro-date-duration">{dateParts.duration}</span>
				{/if}
			</time>
		</div>
		<p class="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
			{project.details}
		</p>
		<div class="mt-4 flex flex-row flex-wrap gap-2">
			{#if project.source}
				<a
					title="View source of {project.title}"
					href={project.source}
					target="_blank"
					rel="noreferrer"
					class="retro-button inline-flex w-[8.5rem] items-center justify-center gap-1 px-2 py-2 text-sm font-medium focus:z-10 focus:outline-none focus:ring-2 focus:ring-[#88d3ff]/60"
					><CarbonView /> <span>View Source</span></a
				>
			{:else}
				<span
					class="retro-button-muted inline-flex w-[8.5rem] cursor-not-allowed items-center justify-center gap-1 px-2 py-2 text-sm font-medium"
					><CarbonViewOff /> <span>Closed Source</span></span
				>
			{/if}
			{#if project.link}
				<a
					title="View {project.title}"
					href={project.link}
					target="_blank"
					rel="noreferrer"
					class="retro-button inline-flex w-[8.5rem] items-center justify-center gap-1 px-2 py-2 text-sm font-medium focus:z-10 focus:outline-none focus:ring-2 focus:ring-[#88d3ff]/60"
					><CarbonLink /> <span>Open Link</span></a
				>
			{:else}
				<span
					class="retro-button-muted inline-flex w-[8.5rem] cursor-not-allowed items-center justify-center gap-1 px-2 py-2 text-sm font-medium"
					><CarbonUnlink /> <span>Not Available</span></span
				>
			{/if}
		</div>
	</article>
</li>
