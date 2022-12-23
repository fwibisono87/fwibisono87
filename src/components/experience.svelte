<script lang="ts">
	import MajesticonsComet from '~icons/majesticons/comet';
	import CarbonView from '~icons/carbon/view';
	import IcBaselineLink from '~icons/ic/baseline-link';
	import CarbonViewOff from '~icons/carbon/view-off';
	import IcBaselineLinkOff from '~icons/ic/baseline-link-off';
	import MajesticonsCupLine from '~icons/majesticons/cup-line';

	type Experience = {
		company: string;
		position: string;
		duration: string;
		location: string;
		description?: string;
	};

	export let experience: Experience;
</script>

<li class="mb-10 last:mb-0 ml-6 text-text">
	<span
		class="flex absolute -left-3 mt-1 justify-center items-center w-6 h-6 rounded-full ring-8 ring-gunmetal bg-cadet text-text"
	>
		<MajesticonsCupLine class="text-text" />
	</span>
	<h3 class="flex items-center text-lg font-semibold">
		{experience.company}
	</h3>

	<span class="flex items-center  text-md font-semibold">
		{experience.position}
	</span>
	<span class="flex items-center mb-1 text-md font-semibold">
		{experience.location}
	</span>
	<time class="block mb-2 text-sm font-normal leading-none text-dove">{experience.duration}</time>
	<p class="mb-4 text-base font-normal text-dove">
		{experience.description}
	</p>
</li>
