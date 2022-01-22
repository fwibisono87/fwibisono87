<script>
	import { page } from '$app/stores';
	import Links from './links.svelte';
	const navLink = [
		{
			name: 'Education',
			link: '/'
		},
		{
			name: 'Experience',
			link: '/experience'
		},
		{
			name: 'Projects',
			link: '/projects'
		},
		{
			name: 'Skills',
			link: '/skills'
		}
	];
	let main;
	export let additionalClass;
</script>

<head />
<div class="w-full min-h-screen bg-background px-12 py-8 font-noto">
	<div class="flex flex-col">
		<div
			class="flex flex-row bg-light w-min right-0 ml-auto text-lg text-white px-4 py-5 rounded-xl gap-4 mb-8"
		>
			{#each navLink as nav}
				{#if $page.url.pathname === nav.link}
					<a href={nav.link} class="text-stabilo underline decoration-4 font-medium">
						{nav.name}
					</a>
				{:else}
					<a href={nav.link}>
						{nav.name}
					</a>
				{/if}
			{/each}
		</div>
		<main bind:this={main} class="font-noto {additionalClass}">
			<slot name="main" />
		</main>
		<div
			class="bg-light bottom-0 mt-auto -mx-12 px-12 flex flex-row border-t-2 border-white justify-between text-white py-8"
		>
			<span>©2022 Francis Wibisono. All rights reserved.</span>
			<span class="font-semibold">Connect With Me!</span>
			<Links />
		</div>
	</div>
</div>
