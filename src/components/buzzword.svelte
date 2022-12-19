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
	class="text-4xl font-semibold cursor-wait animate-pulse-slow text-dove"
	on:mouseover={handleBuzzwordMouseIn}
	on:mouseleave={handleBuzzwordMouseOut}
>
	{buzzword}
</h3>
