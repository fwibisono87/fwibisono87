<script>
	import '../app.css';
	import * as animateScroll from 'svelte-scrollto';

	function scrollToTop() {
		console.log('nya');
		animateScroll.scrollToTop();
	}

  let scrollY=0
</script>

<div class="bg-primary text-text ">
	<div class="min-w-screen scroll-smooth min-h-[150vh] justify-between">
		<div class=" px-12">
			<slot />
		</div>
	</div>

  <!-- {#if scrollY>100}
	<div
		class="w-16 h-16 bg-dove text-primary sticky bottom-12 left-12 absolute rounded-full cursor-pointer"
		on:click={scrollToTop}
    in:fade={{ delay: 400, duration: 200 }} out:fade
	>
		nya
	</div>
  {/if} -->
</div>


<svelte:window bind:scrollY />