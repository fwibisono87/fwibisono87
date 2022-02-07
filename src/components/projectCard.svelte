<script>
	export let title = '';
	export let date = '';
	export let details = '';
	export let link = '';
	export let source = '';
</script>

<div class="flex flex-row mb-4">
	<section class="mr-4 w-10 xl:mt-0">
		<img src="/img/full-circle.svg" alt="badge" />
	</section>
	<div class="flex flex-col w-96">
		<h3 class="font-bold text-orange">{title}</h3>
		<span class="text-orange">{date}</span>
		<p>
			{details}
		</p>
		<div class="flex flex-row flex-wrap w-full gap-x-6 gap-y-2 mt-2">
			{#if link !== ''}
				<a href={link}>
					<div class="flex flex-row text-orange">
						<img class="w-6 h-6" src="/img/link.svg" alt="link" />
						<span class="nowrap ml-2">Visit Link</span>
					</div>
				</a>
			{/if}
			{#if source !== ''}
				<a href={source}>
					<div class="flex flex-row">
						<img class="w-6 h-6" src="/img/github.svg" alt="github" />
						<span class="nowrap ml-2">View Source</span>
					</div>
				</a>
			{/if}
		</div>
	</div>
</div>

<style>
	.nowrap {
		white-space: nowrap;
	}
</style>
