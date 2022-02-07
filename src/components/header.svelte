<script>
	let links = [
		{
			title: 'Home',
			link: ''
		},
		{
			title: 'Experience',
			link: 'experience'
		},
        {
			title: 'Education',
			link: 'education'
		},
		{
			title: 'Projects',
			link: 'projects'
		},
		{
			title: 'Skills',
			link: ''
		}
	];

	function handleScroll(target) {
		document.getElementById(target).scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<template>
	<div class="flex flex-row bg-background text-white font-medium px-14 pt-8">
		<div class="mr-auto text-lg my-auto">
			<h1>Francis<br />Wibisono</h1>
		</div>
		<div class="flex flex-col sm:flex-row right-0 font-normal my-auto border-l ml-4">
			{#each links as link}
				<span
					on:click={() => {
						handleScroll(link.link);
					}}
					class="mx-5 h-min my-auto cursor-pointer"
				>
					{link.title}
				</span>
			{/each}
		</div>
	</div>
</template>
