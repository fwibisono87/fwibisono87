<script>
	import ProjectCard from './projectCard.svelte';
	let projects = [
		{
			title: 'PRF UI',
			date: 'August 2021',
			details:
				'A page for Pesta Rakyat Fisika, held by the Physics Department, Faculty of Math and Sciences, Universitas Indonesia. Deployed with Netlify, built with Nuxt.js/Vue, Vuetify.js, and Firebase.',
			link: 'https://www.prfui.com/',
			source: ''
		},
		{
			title: 'Matkul Tree',
			date: 'August 2021',
			details:
				'A page to help students at CSUI check course dependencies. Deployed with Netlify, built with Nuxt.js/Vue and Vuetify.js',
			link: 'https://matkul.franciswibisono.com/',
			source: 'https://github.com/fwibisono87/matkul-tree'
		},
		{
			title: 'GoPus',
			date: 'July 2021',
			details: 'A library management application. Deployed with Heroku, built with Django',
			link: 'https://go-pus.herokuapp.com/',
			source: 'https://github.com/fwibisono87/GoPus'
		},
		{
			title: 'KEC 2021',
			date: 'Febuary 2021',
			details:
				'A page for Krakatau English Competition 2021, feturing authentication and grading. Deployed with Heroku, built with Django',
			link: 'http://kec-2021.herokuapp.com/',
			source: ''
		},
		{
			title: 'FightCorona',
			date: 'January 2021',
			details:
				'A group project for the Web Programming and Design Course. Deployed with Heroku, built with Django',
			link: 'https://fight-corona.herokuapp.com/',
			source: 'https://gitlab.com/fwibisono87/tk-2-electric-boogaloo/'
		},
		{
			title: 'YoutubeDL',
			date: 'July 2020',
			details: 'A CLI batch YouTube Downloader. Built with Python',
			link: '',
			source: 'https://github.com/fwibisono87/youtubedl'
		}
	];
</script>

<template>
	<div class="mx-8 text-white flex flex-col xl:flex-row justify-center">
		<h2 class="text-4xl font-semibold mb-2 xl:w-48" id="projects">Projects</h2>
		<hr class="-mx-3 xl:hidden" />
		<div class="flex flex-col mt-6 xl:mt-0">
			{#each projects as project}
				<ProjectCard
					title={project.title}
					date={project.date}
					details={project.details}
					link={project.link}
					source={project.source}
				/>
			{/each}
		</div>
		<div class="xl:w-[39.5rem] xl:ml-7" />
	</div>
</template>
