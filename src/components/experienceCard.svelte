<script lang="ts">
	export let startDate: string;
	export let endDate: string;
	export let badge: string;
	export let org: string;
	export let pos: string;
</script>

<template>
	<div class="flex flex-row mb-4">
		<section class="mr-4 w-10 xl:mt-0">
			<img src="/img/{badge}-circle.svg" alt="badge" />
		</section>

		<div class="flex flex-col w-96">
			<span class="text-orange">{startDate} - {endDate}</span>
			<span class=" text-lg font-bold text-orange">{org}</span>
			<span class="italic">{pos}</span>
		</div>
	</div>
</template>
