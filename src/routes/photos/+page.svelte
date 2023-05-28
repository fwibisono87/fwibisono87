<script>
	import { goto } from '$app/navigation';

	let eventList = [
		{
			name: 'Comic Frontier 16',
			location: 'ICE BSD, 2023',
			link: 'https://drive.google.com/drive/folders/1-QeC0MVD0k-x2ilYAgux25QO4q8HcByv?usp=share_link'
		},
		{
			name: 'TOY FANATIC VOL. 5 Tokyo Summer Edition',
			location: 'Neo Soho 23/05/28',
			link: 'https://drive.google.com/drive/folders/1tp6gV8MvWwrR5qrB4E5lfZBsEjDIsx4O?usp=drive_link'
		}
	];
</script>

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
		{#each eventList as event}
			<button
				on:click={() => {
					goto(event.link);
				}}
				class="bg-cadet rounded-lg border-text border-2 px-4 py-2 w-[40%] mx-auto"
				><div class="flex flex-col">
					{event.name}
					<span class="text-dove text-sm">{event.location}</span>
				</div></button
			>
		{/each}
	</div>
</div>
