<script>
	import '../app.css';
	import CarbonStar from '~icons/carbon/star';
	import { showSecret } from '../stores';

	function handleSecret() {
		showSecret.update((b) => !b);
	}
</script>

<div class="mx-auto w-full max-w-6xl px-4 pb-6 sm:px-8 lg:px-12">
	<div
		class="retro-frame flex flex-col items-center justify-center gap-2 px-4 py-6 text-center sm:px-8"
	>
		<button
			type="button"
			on:click={handleSecret}
			aria-label="Toggle hidden interests"
			class="retro-icon-link p-2 transition-transform duration-200 {$showSecret ? 'rotate-90' : ''}"
		>
			<CarbonStar class="h-5 w-5" />
		</button>
		<span class="font-semibold uppercase tracking-[0.08em] text-[#f4f9ff]"
			><a class="hover:underline" href="/">Francis Wibisono</a></span
		>
		<span class="mb-3 text-xs text-slate-300">©Francis Wibisono 2023</span>
		<span class="max-w-3xl px-2 text-center text-sm text-slate-300"
			>Icons provided by <a
				class="hover:underline"
				target="_blank"
				rel="noreferrer"
				href="https://icones.js.org">icones.js</a
			>, profile picture by
			<a
				class="hover:underline"
				target="_blank"
				href="https://twitter.com/ansqeepng"
				rel="noreferrer">@ansqeepng</a
			>, color scheme inspired by
			<a
				class="hover:underline"
				target="_blank"
				rel="noreferrer"
				href="https://www.youtube.com/@HoshimachiSuisei">Hoshimachi Suisei</a
			>.</span
		>
	</div>
</div>
