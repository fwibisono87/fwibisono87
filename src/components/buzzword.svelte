<script>
	const buzzwords = ['Blazing Fast', 'Modern', 'Reactive', 'Beautiful', 'Functional', 'Serverless'];
	let buzzword = buzzwords[0];
	let buzzwordSemaphore = true;
	let previousBuzzwordIndex = 0;

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
	}, 750);
</script>

<h3
	class="animate-pulse-slow cursor-wait text-xl font-semibold text-[#ffbf77] drop-shadow-[0_0_14px_rgba(255,164,81,0.35)] sm:text-4xl"
	on:mouseover={handleBuzzwordMouseIn}
	on:mouseleave={handleBuzzwordMouseOut}
	on:focus={handleBuzzwordMouseIn}
	on:blur={handleBuzzwordMouseOut}
>
	{buzzword}
</h3>
