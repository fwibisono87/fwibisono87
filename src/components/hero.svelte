<script>
	import Links from './links.svelte';
	const background = 'https://is3.cloudhost.id/francis/public/website/blobs.png';
</script>

<template>
	<div
		class="flex flex-col xl:flex-row text-white px-24"
		style="background-image: url({background}); background-repeat: no-repeat; background-position: center bottom; background-size: 100%"
	>
		<div class="flex flex-col xl:w-[60%] my-auto">
			<h1 class="font-semibold text-5xl mt-4 sm:text-7xl text-center xl:text-left">
				Hello! <br class="hidden xl:block" />I'm Francis Wibisono
			</h1>
			<span class="font-medium mt-7 text-center xl:text-left">
				Computer Science Undergraduate Student Faculty of Computer Science, Universitas Indonesia
			</span>
		</div>
		<Links addClass="xl:hidden mt-8" direction="flex-row" />
		<div class="mx-auto">
			<section>
				<img
					src="https://is3.cloudhost.id/francis/public/website/francis1.jpg"
					alt="Francis"
				/>
			</section>
		</div>
		<Links addClass="hidden xl:flex" direction="flex-col" />
	</div>
</template>
