<script lang="ts">
	let characterName = '';
	let franchaise = '';
	let cosplayer = '';
	let eventName = '';
	let eventAccount = '';
	let eventYear = '';

	type THashtagPreset = {
		title: string;
		hashtags: string[];
	};

	const cameras = ['Canon 600D', 'Canon 350D', 'Canon 6D', 'Canon 6D MK 2'];
	const lenses = [
		'Canon EF 50mm f/1.8 STM',
		'Tamron 18-200mm 18-200mm F/3.5-6.3',
		'Canon EF-S 24mm f/2.8 USM'
	];

	let selectedLens = lenses[0];
	let selectedCamera = cameras[0];

	const presetHashtags: THashtagPreset[] = [
		{
			title: 'cosplay',
			hashtags: [
				'cosplayphotography',
				'cosplayindonesia',
				'portraitphotography',
				'cosplayphotography',
				'photooftheday'
			]
		},
		{
			title: 'canon',
			hashtags: ['canonphotography', 'canonindonesia', 'shotoncanon']
		},
		{
			title: 'hoyoverse',
			hashtags: ['hoyoverse', 'hoyoversecosplay', 'hoyogames']
		},
		{
			title: 'star rail',
			hashtags: ['hsr', 'hsrcosplay']
		},
		{
			title: 'genshin',
			hashtags: ['genshin', 'genshincosplay']
		},
		{
			title: 'hololive',
			hashtags: ['hololive', 'hololivecosplay', 'ホロライブ']
		}
	];

	let selectedCategories = new Set<string>();
	let selectedHashtags: string[] = [];

	function toggleCategory(category: THashtagPreset) {
		if (selectedCategories.has(category.title)) {
			selectedCategories.delete(category.title);
		} else {
			selectedCategories.add(category.title);
		}
		updateSelectedHashtags();
	}

	function updateSelectedHashtags() {
		selectedHashtags = presetHashtags
			.filter((cat) => selectedCategories.has(cat.title))
			.flatMap((cat) => cat.hashtags)
			.map((hashtag) => `#${hashtag}`);
	}

	$: processedCharacterName =
		(characterName ? '#' : '') + characterName.replace(/\s/g, '').toLowerCase();
	$: processedFranchaise = (franchaise ? '#' : '') + franchaise.replace(/\s/g, '').toLowerCase();
	$: processedCosplayer = cosplayer.startsWith('@')
		? cosplayer.replace(/\s/g, '').toLowerCase()
		: '@' + cosplayer.replace(/\s/g, '').toLowerCase();
	$: processedEventAccount = eventAccount.startsWith('@')
		? eventAccount.replace(/\s/g, '').toLowerCase()
		: '@' + eventAccount.replace(/\s/g, '').toLowerCase();
	$: processedEventString = (() => {
		if (eventName && eventAccount) {
			return `${eventName} by ${processedEventAccount}${eventYear ? ` (${eventYear})` : ''}`;
		} else if (eventName) {
			return `${eventName}${eventYear ? ` (${eventYear})` : ''}`;
		} else if (eventAccount) {
			return `${processedEventAccount}${eventYear ? ` (${eventYear})` : ''}`;
		} else {
			return '';
		}
	})();

	$: allHashtags = selectedHashtags.join(' ');

	let customHashtags = '';

	$: finalCaption = `#cosplay of ${processedCharacterName} from ${processedFranchaise} by ${processedCosplayer}

📅: ${processedEventString}
📸: ${selectedCamera} | ${selectedLens}

${allHashtags} ${customHashtags}`;

	async function copyToClipboard(text: string) {
		await navigator.clipboard.writeText(text);
	}
</script>

<div class="py-8 flex flex-col gap-4">
	<h2>fwibisono87's</h2>
	<h1 class="text-2xl font-semibold">IG Caption Generator</h1>
	<input
		type="text"
		bind:value={characterName}
		placeholder="Character Name"
		class="border-2 border-black bg-gunmetal rounded-lg px-4 py-2 active:border-text"
	/>
	<input
		type="text"
		bind:value={franchaise}
		placeholder="Franchaise"
		class="border-2 border-black bg-gunmetal rounded-lg px-4 py-2 active:border-text"
	/>
	<input
		type="text"
		bind:value={cosplayer}
		placeholder="Cosplayer"
		class="border-2 border-black bg-gunmetal rounded-lg px-4 py-2 active:border-text"
	/>
	<input
		type="text"
		bind:value={eventName}
		placeholder="Event Name"
		class="border-2 border-black bg-gunmetal rounded-lg px-4 py-2 active:border-text"
	/>
	<input
		type="text"
		bind:value={eventAccount}
		placeholder="Event Account"
		class="border-2 border-black bg-gunmetal rounded-lg px-4 py-2 active:border-text"
	/>
	<input
		type="text"
		bind:value={eventYear}
		placeholder="Event Year"
		class="border-2 border-black bg-gunmetal rounded-lg px-4 py-2 active:border-text"
	/>
	<select
		bind:value={selectedCamera}
		class="border-2 border-black bg-gunmetal rounded-lg px-4 py-2 active:border-text"
	>
		{#each cameras as camera}
			<option value={camera}>{camera}</option>
		{/each}
	</select>
	<select
		bind:value={selectedLens}
		class="border-2 border-black bg-gunmetal rounded-lg px-4 py-2 active:border-text"
	>
		{#each lenses as lens}
			<option value={lens}>{lens}</option>
		{/each}
	</select>

	<div class="grid lg:grid-cols-4 grid-cols-2 items-center">
		{#each presetHashtags as category}
			<label>
				<input type="checkbox" on:change={() => toggleCategory(category)} />
				{category.title}
			</label>
		{/each}
	</div>
	<input
		type="text"
		bind:value={customHashtags}
		placeholder="Custom Hashtags"
		class="border-2 border-black bg-gunmetal rounded-lg px-4 py-2 active:border-text"
	/>

	<code class="block whitespace-pre overflow-x-scroll w-4/5 mx-auto">{finalCaption} </code>
	<button on:click={() => copyToClipboard(finalCaption)}>Copy to Clipboard</button>
</div>
