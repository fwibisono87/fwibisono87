<script>
	import '../app.css';
	import * as animateScroll from 'svelte-scrollto';
	import MajesticonsShootingStar from '~icons/majesticons/shooting-star';
	import Footer from '../components/footer.svelte';
	import { showSecret } from '../stores';

	function handleSecret() {
		showSecret.update((b) => !b);
	}

	let scrollY = 0;
</script>

<div>
	<div class="min-w-screen scroll-smooth min-h-[101vh] justify-between pb-8">
		<div class="px-12">
			<slot />
		</div>
	</div>
	<Footer />
</div>

<svelte:window bind:scrollY />
