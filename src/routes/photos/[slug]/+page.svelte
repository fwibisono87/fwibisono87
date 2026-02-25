<script lang="ts">
	import { onMount } from 'svelte';
	import CarbonArrowLeft from '~icons/carbon/arrow-left';
	import CarbonArrowRight from '~icons/carbon/arrow-right';
	import { fade, scale } from 'svelte/transition';
	import { page } from '$app/stores';

	type Photo = {
		exportFilename: string;
		title: string;
		caption?: string;
	};

	type EventMeta = {
		slug: string;
		eventName: string;
		location: string;
		date: string;
	};

	let eventSlug = '';
	let selectedImage: Photo | null = null;
	let selectedIndex = -1;

	function selectImage(image: Photo) {
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

	let LR: { images: Photo[] } = { images: [] };
	let isLoading = true;
	let currentEvent: EventMeta | undefined;

	onMount(() => {
		const loadEventData = async () => {
			isLoading = true;
			eventSlug = $page.url.pathname.split('/').slice(-1)?.[0] ?? '';

			const eventPhotos = await fetch(`/json/events/${eventSlug}.json`);
			if (eventPhotos.ok) {
				LR.images = (await eventPhotos.json()) as Photo[];
			} else {
				console.error('Failed to fetch images data for', eventSlug);
			}

			const eventMeta = await fetch('/json/events.json');
			const events = (await eventMeta.json()) as EventMeta[];
			currentEvent = events.find((eventItem) => eventItem.slug === eventSlug);
			isLoading = false;
		};

		document.addEventListener('keydown', handleKeydown);
		void loadEventData();

		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});

	function handleKeydown(event: KeyboardEvent) {
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
<div class="grid grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4 w-[95%] mx-auto">
	{#if isLoading}
		{#each Array(12).fill(null) as _}
			<!-- Assume you want 12 skeletons -->
			<div class="relative bg-gray-600 animate-pulse aspect-square w-full h-full" transition:fade />
		{/each}
	{:else}
		{#each LR.images as image, index}
			<button
				type="button"
				class="relative cursor-pointer text-left"
				on:click={() => selectImage(image)}
				in:fade={{ delay: 70 * index }}
				out:fade
				aria-label={`Open image: ${image.title}`}
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
			</button>
		{/each}
	{/if}
</div>

<!-- Lightbox -->
{#if selectedImage}
	<div
		transition:fade
		class="fixed inset-0 bg-black bg-opacity-75 z-50"
		role="dialog"
		aria-labelledby="lightboxTitle"
		aria-modal="true"
	>
		<button
			type="button"
			class="absolute inset-0 z-0"
			aria-label="Close image preview"
			on:click={closeImage}
		/>
		<div
			class="relative z-10 flex flex-col 2xl:flex-row justify-center items-center px-6 py-6 sm:py-14 sm:px-14 gap-6 h-full"
		>
			<div class="flex flex-row">
				{#if selectedIndex > 0}
					<button
						type="button"
						aria-label="Previous Image"
						on:click={prevImage}
						class="absolute left-4 top-1/2 transform -translate-y-1/2"
					>
						<CarbonArrowLeft class="w-12 h-12" />
					</button>
				{/if}

				{#if selectedIndex < LR.images.length - 1}
					<button
						type="button"
						aria-label="Next Image"
						on:click={nextImage}
						class="absolute right-4 top-1/2 transform -translate-y-1/2"
					>
						<CarbonArrowRight class="w-12 h-12" />
					</button>
				{/if}
			</div>
			<img
				transition:scale
				src={`https://is3.cloudhost.id/francis/photos/${eventSlug}/large/${selectedImage.exportFilename}.jpg`}
				alt={selectedImage.title}
				class="lg:max-w-2/3 max-h-[75%] lg:max-h-1/2"
			/>
			<div class="flex flex-col lg:ml-6" transition:fade>
				<h2 id="lightboxTitle" class="text-white text-md md:text-md">{selectedImage.title}</h2>
				<p class="text-white text-md md:text-lg">{selectedImage.caption}</p>
				<h3 class="text-white text-lg md:text-xl mt-4 font-semibold">Need this photo in Hi Res?</h3>
				<p class="text-white text-md md:text-lg">Send an email to:</p>
				<a class="text-text text-lg md:text-2xl underline" href="mailto:photos@franciswibisono.com"
					>photos@franciswibisono.com</a
				>
				<p class="text-white text-md md:text-lg">with a screenshot of this screen!</p>
			</div>
		</div>
	</div>
{/if}
