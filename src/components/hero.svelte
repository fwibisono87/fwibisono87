<script>
import Links from "./links.svelte";
const background = "https://s3.ap-northeast-1.wasabisys.com/fws-public/website/blobs.png"

</script>

<template>
	<div class="flex flex-col lg:flex-row text-white px-24" style="background-image: url({background}); background-repeat: no-repeat; background-position: center bottom; background-size: 100%">
		<div class="flex flex-col lg:w-[60%] my-auto">
			<h1 class="font-semibold text-7xl text-center lg:text-left">Hello! <br class="hidden lg:block">I'm Francis Wibisono</h1>
			<span class="font-medium mt-7 text-center lg:text-left">
                Computer Science Undergraduate Student Faculty of Computer Science, Universitas Indonesia
            </span>
		</div>
        <Links addClass='lg:hidden mt-8' direction="flex-row"></Links>
        <div class="mx-auto">
            <section >
                <img src="https://s3.ap-northeast-1.wasabisys.com/fws-public/website/francis1.jpg">
            </section>
        </div>
        <Links addClass='hidden lg:flex' direction="flex-col"></Links>
	</div>
</template>
