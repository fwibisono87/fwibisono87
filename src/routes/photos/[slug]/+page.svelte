<script>
	import { onMount } from 'svelte';
	import MaterialSymbolsArrowCircleLeft from '~icons/material-symbols/arrow-circle-left';
	import MaterialSymbolsArrowCircleRight from '~icons/material-symbols/arrow-circle-right';
	import { fade, scale } from 'svelte/transition';
	import { page } from '$app/stores';

	let eventSlug = '';
	let selectedImage = null;
	let selectedIndex = -1;

	function selectImage(image) {
		selectedIndex = LR.images.indexOf(image);
		selectedImage = image;
	}

	function nextImage() {
		if (selectedIndex < LR.images.length - 1) {
			selectedIndex++;
			selectedImage = LR.images[selectedIndex];
		}
	}

	function prevImage() {
		if (selectedIndex > 0) {
			selectedIndex--;
			selectedImage = LR.images[selectedIndex];
		}
	}

	function closeImage() {
		selectedImage = null;
	}

	let LR = { images: [] }; // Initialize LR with an empty images array
	let isLoading = true;
	let currentEvent;

	onMount(async () => {
		isLoading = true;
		eventSlug = $page.url.pathname.split('/').slice(-1)?.[0];

		// Fetch the images data for the event
		const eventPhotos = await fetch(`/json/events/${eventSlug}.json`);
		if (eventPhotos.ok) {
			const data = await eventPhotos.json();
			LR.images = data; // Assuming the fetched JSON has an "images" property
			console.log(data);
		} else {
			console.error('Failed to fetch images data for', eventSlug);
		}

		const eventMeta = await fetch('/json/events.json');
		const events = await eventMeta.json();
		currentEvent = events.find((event) => event.slug === eventSlug);

		document.addEventListener('keydown', handleKeydown);

		console.log(currentEvent);
		isLoading = false;
		return () => {
			// Cleanup the event listener on component destroy
			document.removeEventListener('keydown', handleKeydown);
		};
	});

	function handleKeydown(event) {
		if (selectedImage) {
			switch (event.key) {
				case 'ArrowLeft':
				case 'a':
					prevImage();
					break;
				case 'ArrowRight':
				case 'd':
					nextImage();
					break;
				case 'Escape':
					closeImage();
					break;
			}
		}
	}
</script>

<div class="flex flex-col md:flex-row justify-between my-6 py-2 top-0 sticky bg-primary z-20 px-2">
	<div class="flex flex-col gap-1">
		{#if isLoading}
			<div class="w-64 bg-text h-6  animate-pulse" />
			<div class="w-64 bg-gray-600 h-6  animate-pulse" />
			<div class="w-64 bg-gray-600 h-6  animate-pulse" />
		{:else}
			<h1 class="text-2xl font-bold">{currentEvent?.eventName}</h1>
			<span class="text-md italic text-dove">{currentEvent?.location}</span>
			<span class="italic text-dove">{currentEvent?.date}</span>
		{/if}
	</div>
	<div class="flex flex-col md:my-auto">
		<a class=" underline" target="_blank" href="/">@fwibisono87</a>
		<a href="/photos" class="underline">Back</a>
	</div>
</div>

<!-- Gallery Grid -->
<div class="grid grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4 w-[95%] mx-auto" role="list">
	{#if isLoading}
		{#each Array(12).fill() as _}
			<!-- Assume you want 12 skeletons -->
			<div class="relative bg-gray-600 animate-pulse aspect-square w-full h-full" transition:fade />
		{/each}
	{:else}
		{#each LR.images as image, index}
			<div
				class="relative cursor-pointer"
				on:click={() => selectImage(image)}
				role="listitem"
				in:fade={{ delay: 70 * index }}
				out:fade
				tabindex="0"
				on:keydown={(e) => {
					if (e.key === 'Enter') selectImage(image);
				}}
			>
				<img
					src={`https://is3.cloudhost.id/francis/photos/${eventSlug}/thumbnails/${image.exportFilename}.jpg`}
					alt={image.title}
					class="w-full h-full aspect-square object-cover"
					loading="lazy"
				/>

				<div
					class="absolute w-full bottom-0 bg-black bg-opacity-50 text-white p-1 text-sm sm:p-2 overflow-hidden"
					aria-hidden="true"
				>
					{image.title}
				</div>
			</div>
		{/each}
	{/if}
</div>

<!-- Lightbox -->
{#if selectedImage}
	<div
		transition:fade
		class="fixed inset-0 bg-black bg-opacity-75 flex flex-col 2xl:flex-row justify-center items-center px-6 py-6 sm:py-14 sm:px-14 gap-6 z-50"
		on:click={closeImage}
		role="dialog"
		aria-labelledby="lightboxTitle"
		aria-modal="true"
	>
		<div class="flex flex-row">
			{#if selectedIndex > 0}
				<button
					aria-label="Previous Image"
					on:click={prevImage}
					class="absolute left-4 top-1/2 transform -translate-y-1/2"
					on:click={(e) => e.stopPropagation()}
				>
					<MaterialSymbolsArrowCircleLeft class="w-12 h-12" />
				</button>
			{/if}

			{#if selectedIndex < LR.images.length - 1}
				<button
					aria-label="Next Image"
					on:click={nextImage}
					class="absolute right-4 top-1/2 transform -translate-y-1/2"
					on:click={(e) => e.stopPropagation()}
				>
					<MaterialSymbolsArrowCircleRight class="w-12 h-12" />
				</button>
			{/if}
		</div>
		<img
			transition:scale
			src={`https://is3.cloudhost.id/francis/photos/${eventSlug}/large/${selectedImage.exportFilename}.jpg`}
			alt={selectedImage.title}
			class="lg:max-w-2/3 max-h-[75%] lg:max-h-1/2"
			on:click={(e) => e.stopPropagation()}
		/>
		<div class="flex flex-col lg:ml-6" transition:fade>
			<h2 id="lightboxTitle" class="text-white text-md md:text-md">{selectedImage.title}</h2>
			<p class="text-white text-md md:text-lg">{selectedImage.caption}</p>
			<h3 class="text-white text-lg md:text-xl mt-4 font-semibold">Need this photo in Hi Res?</h3>
			<p class="text-white text-md md:text-lg">Send an email to:</p>
			<a
				class="text-text text-lg md:text-2xl underline"
				href="mailto:photos@franciswibisono.com"
				on:click={(e) => e.stopPropagation()}>photos@franciswibisono.com</a
			>
			<p class="text-white text-md md:text-lg">with a screenshot of this screen!</p>
		</div>
	</div>
{/if}
