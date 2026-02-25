import { c as create_ssr_component, b as spread, e as escape_object, d as subscribe, f as escape, v as validate_component, g as add_attribute } from "../../chunks/index.js";
import { s as showSecret } from "../../chunks/stores.js";
const app = "";
const Star = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="m16 6.52l2.76 5.58l.46 1l1 .15l6.16.89l-4.38 4.3l-.75.73l.18 1l1.05 6.13l-5.51-2.89L16 23l-.93.49l-5.51 2.85l1-6.13l.18-1l-.74-.77l-4.42-4.35l6.16-.89l1-.15l.46-1L16 6.52M16 2l-4.55 9.22l-10.17 1.47l7.36 7.18L6.9 30l9.1-4.78L25.1 30l-1.74-10.13l7.36-7.17l-10.17-1.48Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
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
  let backgroundProgress;
  let dynamicSky;
  let scrollY = 0;
  backgroundProgress = Math.min(scrollY / 1200, 1);
  dynamicSky = `
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
  return `<div class="${"relative min-h-screen overflow-x-clip text-slate-100"}"><div class="${"pointer-events-none fixed inset-0 transition-all duration-300"}"${add_attribute("style", `background: ${dynamicSky};`, 0)}></div>
	<div class="${"pointer-events-none fixed inset-0 retro-grid-overlay"}"></div>
	<div class="${"pointer-events-none fixed -top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(106,171,255,0.25)_0%,rgba(106,171,255,0)_65%)] blur-3xl"}"${add_attribute("style", `opacity: ${0.28 - backgroundProgress * 0.12}; transform: translate3d(${backgroundProgress * 48}px, ${backgroundProgress * 24}px, 0);`, 0)}></div>
	<div class="${"pointer-events-none fixed -bottom-44 -left-28 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(255,132,46,0.2)_0%,rgba(255,132,46,0)_68%)] blur-3xl"}"${add_attribute("style", `opacity: ${0.18 + backgroundProgress * 0.1}; transform: translate3d(${-backgroundProgress * 34}px, ${-backgroundProgress * 20}px, 0);`, 0)}></div>
	<div class="${"relative z-10 min-w-screen scroll-smooth min-h-[101vh] justify-between pb-8"}"><div class="${"px-4 sm:px-8 lg:px-12"}">${slots.default ? slots.default({}) : ``}</div></div>
	<div class="${"relative z-10"}">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div>

`;
});
export {
  Layout as default
};
