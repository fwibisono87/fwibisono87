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
</script>

<li class="mb-10 last:mb-0 ml-6 text-text">
	<span
		class="flex absolute -left-3 mt-1 justify-center items-center w-6 h-6 rounded-full ring-8 ring-gunmetal bg-cadet text-text"
	>
		<CarbonRocket class="text-text rotate-180" />
	</span>
	<h3 class="flex items-center mb-1 text-lg font-semibold">
		{project.title}
	</h3>
	<time class="block mb-2 text-sm font-normal leading-none text-dove">{project.date}</time>
	<p class="mb-4 text-base font-normal text-dove">
		{project.details}
	</p>
	<div class="flex flex-row flex-wrap gap-2">
		{#if project.source}
			<a
				title="View source of {project.title}"
				href={project.source}
				target="_blank"
				rel="noreferrer"
				class="w-[8rem] inline-flex items-center py-2 px-2 text-sm font-medium rounded-lg border focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 bg-cadet text-text border-text hover:bg-gray-700 focus:ring-gray-700"
				><CarbonView /> <span class="ml-2">View Source</span></a
			>
		{:else}
			<span
				disabled
				class="w-[8rem] inline-flex items-center py-2 px-2 text-sm font-medium rounded-lg border focus:z-10 cursor-not-allowed focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 bg-gunmetal text-text border-text "
				><CarbonViewOff /> <span class="ml-1">Closed Source</span></span
			>
		{/if}
		{#if project.link}
			<a
				title="View {project.title}"
				href={project.link}
				target="_blank"
				rel="noreferrer"
				class="w-[8rem] inline-flex items-center py-2 px-2 text-sm font-medium rounded-lg border focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 bg-cadet text-text border-text hover:bg-gray-700 focus:ring-gray-700"
				><CarbonLink /> <span class="ml-1">Open Link</span></a
			>
		{:else}
			<span
				disabled
				class="w-[8rem] inline-flex items-center py-2 px-2 text-sm font-medium rounded-lg border focus:z-10 cursor-not-allowed focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 bg-gunmetal text-text border-text "
				><CarbonUnlink /> <span class="ml-1">Not Available</span></span
			>
		{/if}
	</div>
</li>
