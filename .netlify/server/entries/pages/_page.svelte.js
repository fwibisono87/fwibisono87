import { c as create_ssr_component, e as escape, d as spread, f as escape_object, v as validate_component, b as subscribe } from "../../chunks/index.js";
import { s as showSecret, S as Star } from "../../chunks/stores.js";
const Buzzword = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const buzzwords = ["Blazing Fast", "Modern", "Reactive", "Beautiful", "Functional", "Serverless"];
  let buzzword = buzzwords[0];
  let previousBuzzwordIndex = 0;
  setInterval(
    function() {
      {
        let randomIndex = Math.floor(Math.random() * buzzwords.length);
        while (randomIndex === previousBuzzwordIndex) {
          randomIndex = Math.floor(Math.random() * buzzwords.length);
        }
        previousBuzzwordIndex = randomIndex;
        buzzword = buzzwords[randomIndex];
      }
    },
    750
  );
  return `<h3 class="${"animate-pulse-slow cursor-wait text-3xl font-semibold text-[#ffbf77] drop-shadow-[0_0_14px_rgba(255,164,81,0.35)] sm:text-4xl"}">${escape(buzzword)}</h3>`;
});
const Email = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Logo_github = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" fill-rule="evenodd" d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Logo_linkedin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M26.2 4H5.8C4.8 4 4 4.8 4 5.7v20.5c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V5.7c0-.9-.8-1.7-1.8-1.7zM11.1 24.4H7.6V13h3.5v11.4zm-1.7-13c-1.1 0-2.1-.9-2.1-2.1c0-1.2.9-2.1 2.1-2.1c1.1 0 2.1.9 2.1 2.1s-1 2.1-2.1 2.1zm15.1 12.9H21v-5.6c0-1.3 0-3.1-1.9-3.1S17 17.1 17 18.5v5.7h-3.5V13h3.3v1.5h.1c.5-.9 1.7-1.9 3.4-1.9c3.6 0 4.3 2.4 4.3 5.5v6.2z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Logo_instagram = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<circle cx="22.406" cy="9.594" r="1.44" fill="currentColor"/><path fill="currentColor" d="M16 9.838A6.162 6.162 0 1 0 22.162 16A6.162 6.162 0 0 0 16 9.838ZM16 20a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z"/><path fill="currentColor" d="M16 6.162c3.204 0 3.584.012 4.849.07a6.642 6.642 0 0 1 2.228.413a3.975 3.975 0 0 1 2.278 2.278a6.642 6.642 0 0 1 .413 2.228c.058 1.265.07 1.645.07 4.85s-.012 3.583-.07 4.848a6.642 6.642 0 0 1-.413 2.228a3.975 3.975 0 0 1-2.278 2.278a6.642 6.642 0 0 1-2.228.413c-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07a6.642 6.642 0 0 1-2.228-.413a3.975 3.975 0 0 1-2.278-2.278a6.642 6.642 0 0 1-.413-2.228c-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849a6.642 6.642 0 0 1 .413-2.228a3.975 3.975 0 0 1 2.278-2.278a6.642 6.642 0 0 1 2.228-.413c1.265-.058 1.645-.07 4.849-.07M16 4c-3.259 0-3.668.014-4.948.072a8.807 8.807 0 0 0-2.912.558a6.136 6.136 0 0 0-3.51 3.51a8.807 8.807 0 0 0-.558 2.913C4.014 12.333 4 12.74 4 16s.014 3.668.072 4.948a8.807 8.807 0 0 0 .558 2.912a6.136 6.136 0 0 0 3.51 3.51a8.807 8.807 0 0 0 2.913.558c1.28.058 1.688.072 4.947.072s3.668-.014 4.948-.072a8.807 8.807 0 0 0 2.913-.558a6.136 6.136 0 0 0 3.51-3.51a8.807 8.807 0 0 0 .557-2.913C27.986 19.667 28 19.26 28 16s-.014-3.668-.072-4.948a8.807 8.807 0 0 0-.558-2.912a6.136 6.136 0 0 0-3.51-3.51a8.807 8.807 0 0 0-2.913-.557C19.667 4.013 19.26 4 16 4Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Camera = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M29 26H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h6.46l1.71-2.55A1 1 0 0 1 12 4h8a1 1 0 0 1 .83.45L22.54 7H29a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1ZM4 24h24V9h-6a1 1 0 0 1-.83-.45L19.46 6h-6.92l-1.71 2.55A1 1 0 0 1 10 9H4Z"/><path fill="currentColor" d="M16 22a6 6 0 1 1 6-6a6 6 0 0 1-6 6Zm0-10a4 4 0 1 0 4 4a4 4 0 0 0-4-4Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Hashtag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M28 12v-2h-6V4h-2v6h-8V4h-2v6H4v2h6v8H4v2h6v6h2v-6h8v6h2v-6h6v-2h-6v-8Zm-8 8h-8v-8h8Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Socials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-col gap-3 justify-around"}"><div class="${"flex flex-row flex-wrap gap-3 justify-center lg:justify-start"}"><a href="${"mailto:code@franciswibisono.com"}" target="${"_blank"}" rel="${"noreferrer"}" aria-label="${"Send email"}" class="${"retro-icon-link p-2.5"}">${validate_component(Email, "CarbonEmail").$$render($$result, { class: "h-6 w-6" }, {}, {})}</a>
		<a href="${"https://www.github.com/fwibisono87"}" target="${"_blank"}" rel="${"noreferrer"}" aria-label="${"Open GitHub"}" class="${"retro-icon-link p-2.5"}">${validate_component(Logo_github, "CarbonLogoGithub").$$render($$result, { class: "h-6 w-6" }, {}, {})}</a>
		<a href="${"https://www.linkedin.com/in/francis-wibisono/"}" target="${"_blank"}" rel="${"noreferrer"}" aria-label="${"Open LinkedIn"}" class="${"retro-icon-link p-2.5"}">${validate_component(Logo_linkedin, "CarbonLogoLinkedin").$$render($$result, { class: "h-6 w-6" }, {}, {})}</a>
		<a href="${"https://www.instagram.com/fwibisono87"}" target="${"_blank"}" rel="${"noreferrer"}" aria-label="${"Open Instagram"}" class="${"retro-icon-link p-2.5"}">${validate_component(Logo_instagram, "CarbonLogoInstagram").$$render($$result, { class: "h-6 w-6" }, {}, {})}</a></div>
	<div class="${"flex flex-row flex-wrap gap-3 justify-center lg:justify-start"}"><a href="${"/photos"}" rel="${"noreferrer"}" aria-label="${"Open photos"}" class="${"retro-icon-link p-2.5"}">${validate_component(Camera, "CarbonCamera").$$render($$result, { class: "h-6 w-6" }, {}, {})}</a>
		<a href="${"/hashtag"}" rel="${"noreferrer"}" aria-label="${"Open hashtag helper"}" class="${"retro-icon-link p-2.5"}">${validate_component(Hashtag, "CarbonHashtag").$$render($$result, { class: "h-6 w-6" }, {}, {})}</a></div></div>`;
});
const Rocket = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="m7.288 23.292l7.997-7.997l1.414 1.414l-7.997 7.997z"/><path fill="currentColor" d="M17 30a1 1 0 0 1-.37-.07a1 1 0 0 1-.62-.79l-1-7l2-.28l.75 5.27L21 24.52V17a1 1 0 0 1 .29-.71l4.07-4.07A8.94 8.94 0 0 0 28 5.86V4h-1.86a8.94 8.94 0 0 0-6.36 2.64l-4.07 4.07A1 1 0 0 1 15 11H7.48l-2.61 3.26l5.27.75l-.28 2l-7-1a1 1 0 0 1-.79-.62a1 1 0 0 1 .15-1l4-5A1 1 0 0 1 7 9h7.59l3.77-3.78A10.92 10.92 0 0 1 26.14 2H28a2 2 0 0 1 2 2v1.86a10.92 10.92 0 0 1-3.22 7.78L23 17.41V25a1 1 0 0 1-.38.78l-5 4A1 1 0 0 1 17 30Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Circle_dash = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M7.7 4.7a14.7 14.7 0 0 0-3 3.1L6.3 9a13.26 13.26 0 0 1 2.6-2.7zm-3.1 7.6l-1.9-.6A12.51 12.51 0 0 0 2 16h2a11.48 11.48 0 0 1 .6-3.7zm-1.9 8.1a14.4 14.4 0 0 0 2 3.9l1.6-1.2a12.89 12.89 0 0 1-1.7-3.3zm5.1 6.9a14.4 14.4 0 0 0 3.9 2l.6-1.9A12.89 12.89 0 0 1 9 25.7zm3.9-24.6l.6 1.9A11.48 11.48 0 0 1 16 4V2a12.51 12.51 0 0 0-4.3.7zm12.5 24.6a15.18 15.18 0 0 0 3.1-3.1L25.7 23a11.53 11.53 0 0 1-2.7 2.7zm3.2-7.6l1.9.6A15.47 15.47 0 0 0 30 16h-2a11.48 11.48 0 0 1-.6 3.7zm1.8-8.1a14.4 14.4 0 0 0-2-3.9l-1.6 1.2a12.89 12.89 0 0 1 1.7 3.3zm-5.1-7a14.4 14.4 0 0 0-3.9-2l-.6 1.9a12.89 12.89 0 0 1 3.3 1.7zm-3.8 24.7l-.6-1.9a11.48 11.48 0 0 1-3.7.6v2a21.42 21.42 0 0 0 4.3-.7z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_showSecret;
  $$unsubscribe_showSecret = subscribe(showSecret, (value) => value);
  let scrollY = 0;
  $$unsubscribe_showSecret();
  return `<div class="${"min-h-screen min-w-screen flex flex-col justify-between pt-10 sm:pt-14 " + escape(scrollY !== 0, true)}"><section class="${"retro-frame mx-auto my-auto w-full max-w-6xl px-5 py-8 text-center sm:px-8 sm:py-10 lg:px-12 lg:py-12 lg:text-left"}"><div class="${"grid gap-8 lg:grid-cols-[14rem,1fr] lg:gap-10"}"><div class="${"flex flex-col items-center gap-4 lg:items-start"}"><span class="${"retro-chip inline-flex rounded-full px-3 py-1 text-[0.6rem] leading-none"}">Mission Profile</span>
				<img src="${"/img/anime.webp"}" class="${"w-28 aspect-square rounded-2xl border border-[#86c4ff]/70 ring-4 ring-[#112c5a]"}" alt="${"Francis Wibisono"}">
				<div class="${"retro-card w-full px-4 py-3 text-center lg:text-left"}"><p class="${"font-mono text-[0.65rem] uppercase tracking-[0.14em] text-slate-300"}">Callsign
					</p>
					<p class="${"mt-1 text-sm font-semibold text-[#f7fbff]"}">@fwibisono87</p></div></div>
			<div class="${"flex flex-col justify-center gap-5"}"><p class="${"font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[#8fc8ff]"}">Earth Sector // Frontend Mission Control
				</p>
				<div class="${"space-y-2"}"><h1 class="${"text-4xl leading-tight text-[#f7fbff] sm:text-5xl lg:text-6xl"}">Hello!</h1>
					<span class="${"text-sm italic text-slate-300"}">My name is</span>
					<h2 class="${"text-2xl text-[#ffd3a4] sm:text-3xl"}">Francis Wibisono</h2>
					<span class="${"text-sm italic text-slate-300"}">and I make</span>
					${validate_component(Buzzword, "Buzzword").$$render($$result, {}, {}, {})}
					<span class="${"text-sm italic text-slate-300"}">frontend applications</span></div>
				<div class="${"retro-divider"}"></div>
				<div class="${"flex flex-wrap justify-center gap-2 lg:justify-start"}"><span class="${"retro-chip inline-flex items-center gap-1 rounded-full px-3 py-1 text-[0.58rem] leading-none"}">${validate_component(Rocket, "CarbonRocket").$$render($$result, { class: "h-3.5 w-3.5" }, {}, {})}
						Launch-Ready
					</span>
					<span class="${"retro-chip inline-flex items-center gap-1 rounded-full px-3 py-1 text-[0.58rem] leading-none"}">${validate_component(Star, "CarbonStar").$$render($$result, { class: "h-3.5 w-3.5" }, {}, {})}
						Hidden Log In Footer
					</span></div>
				${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})}</div></div></section>
	${`<div class="${"mx-auto mb-8 lg:mb-2"}">${`${validate_component(Circle_dash, "CarbonCircleDash").$$render(
    $$result,
    {
      class: "h-7 w-7 animate-spin text-[#9acfff]"
    },
    {},
    {}
  )}`}</div>`}</div>
${``}

`;
});
export {
  Page as default
};
