<script>
	import Countdown from 'svelte-countdown/src/index.js';
</script>

<div class="min-h-screen min-w-screen flex flex-col pt-20 justify-between">
	<div class="mx-auto text-center my-auto">
		<div class="flex flex-col gap-2 w-full -mt-24">
			<h1 class="text-4xl font-semibold">Countdowns</h1>
			<Countdown
				from="2023-03-29 08:00:00"
				dateFormat="YYYY-MM-DD H:m:s"
				zone="Asia/Jakarta"
				let:remaining
			>
				<div class="whatever">
					{#if remaining.done === false}
						<h2 class="text-2xl font-semibold text-dove">UTS</h2>
						<span class="number">{remaining.months}</span> <span class="text"> months</span>
						<span class="number">{remaining.weeks}</span> <span class="text"> weeks</span>
						<span class="number">{remaining.days}</span> <span class="text"> days</span>
						<span class="number">{remaining.hours}</span> <span class="text"> hours</span>
						<span class="number">{remaining.seconds}</span> <span class="text"> seconds</span>
					{:else}
						<h2>UTS has come and gone!</h2>
					{/if}
				</div>
			</Countdown>
			<Countdown
				from="2023-04-17 08:00:00"
				dateFormat="YYYY-MM-DD H:m:s"
				zone="Asia/Jakarta"
				let:remaining
			>
				<div class="whatever">
					{#if remaining.done === false}
						<h2 class="text-2xl font-semibold text-dove">Belajar Online</h2>
						<span class="number">{remaining.months}</span> <span class="text"> months</span>
						<span class="number">{remaining.weeks}</span> <span class="text"> weeks</span>
						<span class="number">{remaining.days}</span> <span class="text"> days</span>
						<span class="number">{remaining.hours}</span> <span class="text"> hours</span>
						<span class="number">{remaining.seconds}</span> <span class="text"> seconds</span>
					{:else}
						<Countdown
							from="2023-04-28 08:00:00"
							dateFormat="YYYY-MM-DD H:m:s"
							zone="Asia/Jakarta"
							let:remainingz
						>
							<div class="whatever">
								{#if remainingz?.done === false}
									<h2 class="text-2xl font-semibold text-dove">Belajar Offline</h2>
									<span class="number">{remaining.months}</span> <span class="text"> months</span>
									<span class="number">{remaining.weeks}</span> <span class="text"> weeks</span>
									<span class="number">{remaining.days}</span> <span class="text"> days</span>
									<span class="number">{remaining.hours}</span> <span class="text"> hours</span>
									<span class="number">{remaining.seconds}</span> <span class="text"> seconds</span>
								{:else}
									<h2>Belajar Online has come and gone!</h2>
								{/if}
							</div>
						</Countdown>
					{/if}
				</div>
			</Countdown>
            <Countdown
				from="2023-05-29 08:00:00"
				dateFormat="YYYY-MM-DD H:m:s"
				zone="Asia/Jakarta"
				let:remaining
			>
				<div class="whatever">
					{#if remaining.done === false}
						<h2 class="text-2xl font-semibold text-dove">UAS</h2>
						<span class="number">{remaining.months}</span> <span class="text"> months</span>
						<span class="number">{remaining.weeks}</span> <span class="text"> weeks</span>
						<span class="number">{remaining.days}</span> <span class="text"> days</span>
						<span class="number">{remaining.hours}</span> <span class="text"> hours</span>
						<span class="number">{remaining.seconds}</span> <span class="text"> seconds</span>
					{:else}
						<h2>UAS has come and gone!</h2>
					{/if}
				</div>
			</Countdown>
			<Countdown
				from="2023-05-29 08:00:00"
				dateFormat="YYYY-MM-DD H:m:s"
				zone="Asia/Jakarta"
				let:remaining
			>
				<div class="whatever">
					{#if remaining.done === false}
						<h2 class="text-2xl font-semibold text-dove">UAS</h2>
						<span class="number">{remaining.months}</span> <span class="text"> months</span>
						<span class="number">{remaining.weeks}</span> <span class="text"> weeks</span>
						<span class="number">{remaining.days}</span> <span class="text"> days</span>
						<span class="number">{remaining.hours}</span> <span class="text"> hours</span>
						<span class="number">{remaining.seconds}</span> <span class="text"> seconds</span>
					{:else}
						<h2>UAS has come and gone!</h2>
					{/if}
				</div>
			</Countdown>
            <Countdown
				from="2023-10-10 08:00:00"
				dateFormat="YYYY-MM-DD H:m:s"
				zone="Asia/Jakarta"
				let:remaining
			>
				<div class="whatever">
					{#if remaining.done === false}
						<h2 class="text-2xl font-semibold text-dove">One Year @ RSK</h2>
						<span class="number">{remaining.months}</span> <span class="text"> months</span>
						<span class="number">{remaining.weeks}</span> <span class="text"> weeks</span>
						<span class="number">{remaining.days}</span> <span class="text"> days</span>
						<span class="number">{remaining.hours}</span> <span class="text"> hours</span>
						<span class="number">{remaining.seconds}</span> <span class="text"> seconds</span>
					{:else}
						<h2>One Year @ RSK!</h2>
					{/if}
				</div>
			</Countdown>
            <Countdown
				from="2024-02-15 20:30:00"
				dateFormat="YYYY-MM-DD H:m:s"
				zone="Asia/Jakarta"
				let:remaining
			>
				<div class="whatever">
					{#if remaining.done === false}
						<h2 class="text-2xl font-semibold text-dove">One Year w/ DASP</h2>
						<span class="number">{remaining.months}</span> <span class="text"> months</span>
						<span class="number">{remaining.weeks}</span> <span class="text"> weeks</span>
						<span class="number">{remaining.days}</span> <span class="text"> days</span>
						<span class="number">{remaining.hours}</span> <span class="text"> hours</span>
						<span class="number">{remaining.seconds}</span> <span class="text"> seconds</span>
					{:else}
						<h2>One Year With DASP!</h2>
					{/if}
				</div>
			</Countdown>
		</div>
	</div>
</div>

<style>
	.number {
		@apply font-semibold text-xl;
	}
	.text {
		@apply text-dove;
	}
</style>
