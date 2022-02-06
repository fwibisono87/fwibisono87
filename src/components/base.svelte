<script>
	import { page } from '$app/stores';
import Header from './header.svelte';
import Hero from './hero.svelte';
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

<template>
	<div class="w-full min-h-screen bg-background font-noto">
		<Header></Header>	
		<Hero></Hero>
	</div>
</template>

