<script>
	import '../app.css';
	import * as animateScroll from 'svelte-scrollto';
	import MajesticonsShootingStar from '~icons/majesticons/shooting-star'

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
	<div class="flex flex-col bg-cadet border-t-2 border-text w-screen justify-center py-8">
		<MajesticonsShootingStar class="text-text mx-auto" />
				<span class="mx-auto mb-4">©Francis Wibisono 2023</span>
				<span class="mx-auto text-dove text-center px-4">Icons provided by <a class="hover:underline text-text" target="_blank" href="https://icones.js.org">icones.js</a>, profile picture by <a class="hover:underline text-text" target="_blank" href="twitter.com/ansqeepng">@ansqeepng</a>, color scheme inspired by <a class="hover:underline text-text" target="_blank" href="https://www.youtube.com/@HoshimachiSuisei">Hoshimachi Suisei</a></span>
			</div>
</div>

<svelte:window bind:scrollY />
