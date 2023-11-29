<script>
	import '../app.css';
	import * as animateScroll from 'svelte-scrollto';
	import MajesticonsShootingStar from '~icons/majesticons/shooting-star';
	import { showSecret } from '../stores';

	function handleSecret() {
		showSecret.update((b) => !b);
	}

	let scrollY = 0;
</script>

<div class="flex flex-col bg-cadet border-t-2 border-text w-full justify-center px-0 py-8 transition ">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        on:click={handleSecret}
        class="text-text mx-auto animate-pulse cursor-pointer transition {$showSecret && 'rotate-90'}"
    >
        <MajesticonsShootingStar />
    </div>
    <span class="mx-auto underline cursor-pointer"><a href="/">Francis Wibisono</a></span>
    <span class="mx-auto mb-4">©Francis Wibisono 2023</span>
    <span class="mx-auto text-dove text-center px-4"
        >Icons provided by <a
            class="hover:underline text-text"
            target="_blank"
            rel="noreferrer"
            href="https://icones.js.org">icones.js</a
        >, profile picture by
        <a
            class="hover:underline text-text"
            target="_blank"
            href="https://twitter.com/ansqeepng"
            rel="noreferrer">@ansqeepng</a
        >, color scheme inspired by
        <a
            class="hover:underline text-text"
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/@HoshimachiSuisei">Hoshimachi Suisei</a
        >.</span
    >
</div>