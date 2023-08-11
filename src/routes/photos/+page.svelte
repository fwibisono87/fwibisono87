<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
    import { fade, scale } from 'svelte/transition';

	let isLoading = true;
	let eventList = [];

	onMount(async () => {
		// window.umami.track('Photos Page Open');
		const eventMeta = await fetch('/json/events.json');
		eventList = await eventMeta.json();
		isLoading = false;
	});
</script>

<head>
	<title>Francis Wibisono - Photos</title>
</head>
<div class="flex flex-col py-12 px-6">
	<h1 class="text-2xl font-semibold mx-auto">Event Pictures</h1>
	<span class="text-center"
		>Hello! Thanks for visiting my page! This page is used to distribute pictures I take in events!
		Sorry if the quality is a bit meh, it's been a long, long time ;-;
	</span>
	<span class="text-center"
		>The folders contain selected, edited pictures. If you need raw pictures/your picture is not
		here, please contact me at <a
			class="underline cursor-pointer"
			href="mailto:photos@franciswibisono.com"
			target="_blank">photos@franciswibisono.com</a
		></span
	>
	<span class="text-dove text-center mb-6"
		>If you are a cosplayer who'd be interested in a photoshoot, feel free to email me too!</span
	>

	<div class="flex flex-col gap-8">
		{#if !isLoading}
			{#each eventList as event}
				<button
					on:click={() => {
						//use this if and when umami shows custom tags
						// window.umami.track('Event Folder Open', { event: event.name });
						// window.umami.track('Event Folder Open' + event.name );
						// window.open('photos/' + event.slug);
                        goto('photos/' + event.slug);
					}}
					class="bg-cadet rounded-lg border-text border-2 px-4 py-2 w-[40%] mx-auto"
					><div class="flex flex-col font-semibold">
						{event.eventName}
						<span class="text-dove text-sm">{event.location}</span>
						<span class="text-dove text-sm italic">{event.date}</span>
					</div></button
				>
			{/each}
		{:else}
        {#each Array(12).fill() as _}
			<!-- Assume you want 12 skeletons -->
			<div class="relative bg-gray-600 animate-pulse rounded-lg border-text border-2 px-4 py-2 w-[40%] mx-auto h-12" />
		{/each}
        {/if}
	</div>
</div>
