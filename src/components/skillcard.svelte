<script lang="ts">
	export let imageName: string;
	export let title: string;
</script>

<template>
	<div class="flex flex-row mb-2">
		<section class="w-10 my-auto">
			<img src="/img/skills/{imageName}.svg" alt={title} />
		</section>
		<span class="font-semibold text-lg my-auto ml-5">{title}</span>
	</div>
</template>
