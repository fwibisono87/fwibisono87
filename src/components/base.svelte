<script>
	import Experience from './experience.svelte';
	import Footer from './footer.svelte';
	import Header from './header.svelte';
	import Hero from './hero.svelte';
	import Projects from './projects.svelte';
	import Skills from './skills.svelte';
</script>

<template>
	<div class="w-full min-h-screen bg-background font-noto">
		<Header />
		<Hero />
		<Experience />
		<Projects />
		<Skills />
		<Footer />
	</div>
</template>
