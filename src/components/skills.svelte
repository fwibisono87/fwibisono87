<script>
	import Skillcard from './skillcard.svelte';

	let techSkills = {
		tabName: 'Technical Skills',
		columns: [
			{
				name: 'Programming',
				cards: [
					{
						title: 'Python',
						imageName: 'python'
					},
					{
						title: 'Java',
						imageName: 'java'
					},
					{
						title: 'HTML',
						imageName: 'html'
					},
					{
						title: 'CSS',
						imageName: 'css'
					},
					{
						title: 'JavaScript',
						imageName: 'js'
					}
				]
			},
			{
				name: 'Framework',
				cards: [
					{
						title: 'Django',
						imageName: 'django'
					},
					{
						title: 'Nuxt.js',
						imageName: 'nuxt'
					},
					{
						title: 'Svelte.js',
						imageName: 'svelte'
					},
					{
						title: 'Node.js',
						imageName: 'node'
					}
				]
			},
			{
				name: 'Developer Tools',
				cards: [
					{
						title: 'Git',
						imageName: 'git'
					},
					{
						title: 'Gitlab',
						imageName: 'gitlab'
					},
					{
						title: 'GitHub',
						imageName: 'github'
					},
					{
						title: 'Visual Studio Code',
						imageName: 'code'
					},
					{
						title: 'Jetbrains IDE',
						imageName: 'jetbrains'
					}
				]
			}
		]
	};
	let languages = [
		{
			title: 'Indonesian',
			imageName: 'id'
		},
		{
			title: 'English',
			imageName: 'en'
		}
	];
	// {
	// 	tabName: 'Languages'
	// }
	let tab = 0;
</script>

<template>
	<div class="mx-8 text-white flex flex-col xl:flex-row pb-4">
		<h2 class="text-4xl font-semibold mb-2 xl:w-48" id="skills">Skills</h2>
		<div class="flex flex-col">
			<div class="flex flex-row gap-9 mb-3">
				<h3
					class="text-2xl lg:text-3xl cursor-pointer"
					on:click={() => {
						tab = 0;
					}}
					class:active={tab == 0}
				>
					Technical Skills
				</h3>
				<h3
					class="text-2xl lg:text-3xl cursor-pointer"
					on:click={() => {
						tab = 1;
					}}
					class:active={tab == 1}
				>
					Languages
				</h3>
			</div>
			<div
				class="flex flex-col md:flex-row gap-x-24 gap-y-2"
				class:justify-center={tab == 0}
				class:justify-start={tab == 1}
			>
				{#if tab === 0}
					{#each techSkills.columns as column}
						<div class="flex flex-col transition-all">
							<h4 class="text-2xl text-orange">{column.name}</h4>
							{#each column.cards as card}
								<Skillcard title={card.title} imageName={card.imageName} />
							{/each}
						</div>
					{/each}
				{:else}
					<div class="flex flex-col">
						{#each languages as card}
							<Skillcard title={card.title} imageName={card.imageName} />
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
</template>

<style>
	.active {
		@apply underline;
		@apply decoration-orange;
		@apply decoration-2;
	}
</style>
