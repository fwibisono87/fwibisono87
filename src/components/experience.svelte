<script lang="ts">
	import ExperienceCard from './experienceCard.svelte';

	interface Exp {
		startDate: string;
		endDate: string;
		badge: string;
		org: string;
		pos: string;
	}

	const expList: Exp[] = [
		{
			startDate: 'December 2021',
			endDate: 'Sekarang',
			badge: 'semi',
			org: 'SayaKaya.id',
			pos: 'Frontend Engineer Intern'
		},
		{
			startDate: 'May 2021',
			endDate: 'December 2021',
			badge: 'full',
			org: 'MyRobin.ID',
			pos: 'Frontend Engineer Intern'
		},
		{
			startDate: 'July 2021',
			endDate: 'December 2021',
			badge: 'full',
			org: 'Faculty of Computer Science UI',
			pos: 'Operating Systems TA'
		}
	];

	const eduList: Exp[] = [
		{
			startDate: '2019',
			endDate: 'Sekarang',
			badge: 'semi',
			org: 'Universitas Indonesia',
			pos: 'Computer Science Major'
		},
		{
			startDate: '2016',
			endDate: '2019',
			badge: 'full',
			org: 'SMAN 2 KS Cilegon',
			pos: 'Science Course'
		}
	];
</script>

<template>
	<div class="flex flex-col xl:flex-row text-white mx-8 mt-16 justify-center">
		<h2 class="text-4xl font-semibold mb-2 xl:w-48" id="experience">Experience</h2>
		<hr class="-mx-3 xl:hidden" />
		<div class="flex flex-col mt-6 xl:mt-0">
			{#each expList as exp}
				<ExperienceCard
					startDate={exp.startDate}
					endDate={exp.endDate}
					badge={exp.badge}
					org={exp.org}
					pos={exp.pos}
				/>
			{/each}
		</div>
		<h2 class="text-4xl font-semibold mb-2 mt-7 xl:mt-0 xl:ml-7 xl:w-48" id="education">
			Education
		</h2>
		<hr class="-mx-3 xl:hidden" />
		<div class="flex flex-col mt-6 xl:mt-0">
			{#each eduList as exp}
				<ExperienceCard
					startDate={exp.startDate}
					endDate={exp.endDate}
					badge={exp.badge}
					org={exp.org}
					pos={exp.pos}
				/>
			{/each}
		</div>
	</div>
</template>
