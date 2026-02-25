import { c as create_ssr_component, j as each } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<head><title>Francis Wibisono - Photos</title></head>

<div class="${"flex flex-col py-12 px-6"}"><h1 class="${"text-2xl font-semibold mx-auto"}">Event Pictures</h1>
	<p class="${"text-center"}">Hello! Thanks for visiting my page! This page is used to distribute pictures I take in events!
		Sorry if the quality is a bit meh, it&#39;s been a long, long time ;-;
	</p>
	<p class="${"text-center"}">The folders contain selected, edited pictures. If you need raw pictures/your picture is not
		here, please contact me at
		<a class="${"underline cursor-pointer"}" href="${"mailto:photos@franciswibisono.com"}" target="${"_blank"}" aria-label="${"Send an email (opens in a new window)"}">photos@franciswibisono.com</a></p>
	<p class="${"text-dove text-center mb-6"}">If you are a cosplayer who&#39;d be interested in a photoshoot, feel free to email me too!
	</p>

	<div class="${"flex flex-col gap-8"}" aria-live="${"polite"}">${`${each(Array(12).fill(null), (_) => {
    return `<div class="${"relative bg-gray-600 animate-pulse rounded-lg border-text border-2 px-4 py-2 w-full md:w-[40%] mx-auto h-12"}"></div>`;
  })}`}</div></div>`;
});
export {
  Page as default
};
