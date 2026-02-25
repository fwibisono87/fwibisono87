<script>
	import '../app.css';
	import Footer from '../components/footer.svelte';
</script>

<div>
	<div class="min-w-screen scroll-smooth min-h-[101vh] justify-between pb-8">
		<div class="px-12">
			<slot />
		</div>
	</div>
	<Footer />
</div>
