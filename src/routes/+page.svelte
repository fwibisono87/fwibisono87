<script>
	const buzzwords = ['Blazing Fast', 'Modern', 'Reactive', 'Beautiful', 'Functional', 'Serverless'];
	let buzzword = '';
	let buzzwordSemaphore = true;
	let previousBuzzwordIndex = -1;

	function handleBuzzwordMouseIn() {
		buzzwordSemaphore = false;
	}
	function handleBuzzwordMouseOut() {
		buzzwordSemaphore = true;
	}

	setInterval(function () {
		if (buzzwordSemaphore) {
			let randomIndex = Math.floor(Math.random() * buzzwords.length);
			while (randomIndex === previousBuzzwordIndex) {
				randomIndex = Math.floor(Math.random() * buzzwords.length);
			}
			previousBuzzwordIndex = randomIndex;
			buzzword = buzzwords[randomIndex];
		}
	}, 250);
</script>

<div class="flex flex-col gap-2">
	<h1 class="text-5xl font-semibold">Hello!</h1>
	<span class="text-lg italic">My name is</span>
	<h2 class="text-3xl font-semibold">Francis Wibisono</h2>
	<span class="text-lg italic">and I make</span>
	<h3
		class="text-3xl font-semibold"
		on:mouseover={handleBuzzwordMouseIn}
		on:mouseleave={handleBuzzwordMouseOut}
	>
		{buzzword}
	</h3>
	<span class="text-lg italic">frontend applications</span>
</div>
