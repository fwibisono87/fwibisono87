<script lang="ts">
	let characterName = '';
	let franchaise = '';
	let cosplayer = '';
	let eventName = '';
	let eventAccount = '';
	let eventYear = '';

	const cameraString = 'Canon 600D';
	const lenses = ['Canon 50mm f/1.8 STM', 'Tamron 18-200mm 18-200mm F/3.5-6.3'];
	type THastagPresets = {
		title: string;
		hashtags: string[];
	};

	let selectedLens = lenses[0];

	const presetHashtags = [
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
			hashtags: ['canon600d', 'canonphotography', 'canonindonesia', 'shotoncanon']
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
		}
	];

	let selectedCategories = new Set();
	let selectedHashtags = [];

	function toggleCategory(category) {
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

	$: finalCaption = `Cosplay of ${processedCharacterName} from ${processedFranchaise} by ${processedCosplayer}

📅: ${processedEventString}
📸: ${cameraString} | ${selectedLens}

${allHashtags} ${customHashtags}`;

function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
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

	<code class="block whitespace-pre overflow-x-scroll">{finalCaption} </code>
    <button on:click={() => copyToClipboard(finalCaption)}>Copy to Clipboard</button>
</div>
