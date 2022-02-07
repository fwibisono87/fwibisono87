<script>
	import Experience from './experience.svelte';
	import Header from './header.svelte';
	import Hero from './hero.svelte';
	import Projects from './projects.svelte';
	let main;
</script>

<template>
	<div class="w-full min-h-screen bg-background font-noto pb-2">
		<Header />
		<Hero />
		<Experience />
		<Projects />
	</div>
</template>
