<script>
	import '../app.css';
	import * as animateScroll from 'svelte-scrollto';

	function scrollToTop() {
		console.log('nya');
		animateScroll.scrollToTop();
	}

	let scrollY = 0;
</script>

<div>
	<div class="min-w-screen scroll-smooth min-h-[101vh] justify-between pb-8">
		<div class="px-12">
			<slot />
		</div>
	</div>
</div>

<svelte:window bind:scrollY />
