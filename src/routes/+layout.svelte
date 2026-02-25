<script>
	import '../app.css';
	import Footer from '../components/footer.svelte';

	let scrollY = 0;

	$: backgroundProgress = Math.min(scrollY / 1200, 1);
	$: dynamicSky = `
		radial-gradient(
			circle at ${18 + backgroundProgress * 10}% ${8 + backgroundProgress * 16}%,
			rgba(111, 176, 255, ${0.2 - backgroundProgress * 0.08}) 0%,
			rgba(111, 176, 255, 0) 42%
		),
		radial-gradient(
			circle at ${82 - backgroundProgress * 10}% ${2 + backgroundProgress * 12}%,
			rgba(255, 143, 65, ${0.13 + backgroundProgress * 0.08}) 0%,
			rgba(255, 143, 65, 0) 34%
		)
	`;
</script>

<div class="relative min-h-screen overflow-x-clip text-slate-100">
	<div
		class="pointer-events-none fixed inset-0 transition-all duration-300"
		style={`background: ${dynamicSky};`}
	/>
	<div class="pointer-events-none fixed inset-0 retro-grid-overlay" />
	<div
		class="pointer-events-none fixed -top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(106,171,255,0.25)_0%,rgba(106,171,255,0)_65%)] blur-3xl"
		style={`opacity: ${0.28 - backgroundProgress * 0.12}; transform: translate3d(${
			backgroundProgress * 48
		}px, ${backgroundProgress * 24}px, 0);`}
	/>
	<div
		class="pointer-events-none fixed -bottom-44 -left-28 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(255,132,46,0.2)_0%,rgba(255,132,46,0)_68%)] blur-3xl"
		style={`opacity: ${0.18 + backgroundProgress * 0.1}; transform: translate3d(${
			-backgroundProgress * 34
		}px, ${-backgroundProgress * 20}px, 0);`}
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

<svelte:window bind:scrollY />
