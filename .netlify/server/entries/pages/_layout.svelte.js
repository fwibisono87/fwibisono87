import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component } from "../../chunks/index.js";
import { s as showSecret, S as Star } from "../../chunks/stores.js";
const app = "";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showSecret, $$unsubscribe_showSecret;
  $$unsubscribe_showSecret = subscribe(showSecret, (value) => $showSecret = value);
  $$unsubscribe_showSecret();
  return `<div class="${"mx-auto w-full max-w-6xl px-4 pb-6 sm:px-8 lg:px-12"}"><div class="${"retro-frame flex flex-col items-center justify-center gap-2 px-4 py-6 text-center sm:px-8"}"><button type="${"button"}" aria-label="${"Toggle hidden interests"}" class="${"retro-icon-link p-2 transition-transform duration-200 " + escape($showSecret ? "rotate-90" : "", true)}">${validate_component(Star, "CarbonStar").$$render($$result, { class: "h-5 w-5" }, {}, {})}</button>
		<span class="${"font-semibold uppercase tracking-[0.08em] text-[#f4f9ff]"}"><a class="${"hover:underline"}" href="${"/"}">Francis Wibisono</a></span>
		<span class="${"mb-3 text-xs text-slate-300"}">©Francis Wibisono 2023</span>
		<span class="${"max-w-3xl px-2 text-center text-sm text-slate-300"}">Icons provided by <a class="${"hover:underline"}" target="${"_blank"}" rel="${"noreferrer"}" href="${"https://icones.js.org"}">icones.js</a>, profile picture by
			<a class="${"hover:underline"}" target="${"_blank"}" href="${"https://twitter.com/ansqeepng"}" rel="${"noreferrer"}">@ansqeepng</a>, color scheme inspired by
			<a class="${"hover:underline"}" target="${"_blank"}" rel="${"noreferrer"}" href="${"https://www.youtube.com/@HoshimachiSuisei"}">Hoshimachi Suisei</a>.</span></div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"relative min-h-screen overflow-x-clip text-slate-100"}"><div class="${"pointer-events-none fixed inset-0 retro-grid-overlay"}"></div>
	<div class="${"pointer-events-none fixed -top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(106,171,255,0.25)_0%,rgba(106,171,255,0)_65%)] blur-3xl"}"></div>
	<div class="${"pointer-events-none fixed -bottom-44 -left-28 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(255,132,46,0.2)_0%,rgba(255,132,46,0)_68%)] blur-3xl"}"></div>
	<div class="${"relative z-10 min-w-screen scroll-smooth min-h-[101vh] justify-between pb-8"}"><div class="${"px-4 sm:px-8 lg:px-12"}">${slots.default ? slots.default({}) : ``}</div></div>
	<div class="${"relative z-10"}">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Layout as default
};
