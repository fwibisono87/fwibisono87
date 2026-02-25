<script>
	import '../app.css';
	import Footer from '../components/footer.svelte';
</script>

<div class="relative min-h-screen overflow-x-clip text-slate-100">
	<div class="pointer-events-none fixed inset-0 retro-grid-overlay" />
	<div
		class="pointer-events-none fixed -top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(106,171,255,0.25)_0%,rgba(106,171,255,0)_65%)] blur-3xl"
	/>
	<div
		class="pointer-events-none fixed -bottom-44 -left-28 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(255,132,46,0.2)_0%,rgba(255,132,46,0)_68%)] blur-3xl"
	/>
	<div class="relative z-10 min-w-screen scroll-smooth min-h-[101vh] justify-between pb-8">
		<div class="px-4 sm:px-8 lg:px-12">
			<slot />
		</div>
	</div>
	<div class="relative z-10">
		<Footer />
	</div>
</div>
