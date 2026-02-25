import { c as create_ssr_component, f as escape, b as spread, e as escape_object, i as createEventDispatcher, v as validate_component, g as add_attribute, d as subscribe, j as each } from "../../chunks/index.js";
import { s as showSecret } from "../../chunks/stores.js";
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
  return `<h3 class="${"animate-pulse-slow cursor-wait text-xl font-semibold text-[#ffbf77] drop-shadow-[0_0_14px_rgba(255,164,81,0.35)] sm:text-4xl"}">${escape(buzzword)}</h3>`;
});
const Close = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { title = "" } = $$props;
  createEventDispatcher();
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `${open ? `<div class="${"modal z-50 fixed inset-0 flex items-center justify-center p-4 sm:p-8"}"><button type="${"button"}" class="${"modal-overlay fixed inset-0 bg-[#020611]/80 backdrop-blur-sm"}" aria-label="${"Close modal"}"></button>
		<div class="${"retro-frame z-50 mx-auto max-h-[85vh] w-full overflow-y-auto lg:h-max lg:w-1/2"}"><div class="${"head flex items-center justify-between border-b border-[#5f86bd]/50 px-5 py-4 text-lg font-extrabold text-[#f7fbff] sm:px-8 sm:text-2xl"}">${escape(title)}
				<button type="${"button"}" class="${"retro-icon-link p-2"}" aria-label="${"Close modal"}">${validate_component(Close, "CarbonClose").$$render($$result, { class: "h-5 w-5" }, {}, {})}</button></div>
			<div class="${"content p-5 sm:p-8"}">${slots.body ? slots.body({}) : ``}</div></div></div>` : ``}`;
});
const Tech = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tech } = $$props;
  let showModal = false;
  if ($$props.tech === void 0 && $$bindings.tech && tech !== void 0)
    $$bindings.tech(tech);
  return `<div class="${"w-full"}"><button type="${"button"}" class="${"group retro-card flex h-full min-h-[10rem] w-full flex-col items-center justify-center gap-3 px-3 py-4 text-center transition duration-200 hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fd0ff]/70"}"${add_attribute("title", tech.title, 0)}${add_attribute("aria-label", `Open ${tech.title} details`, 0)}><div class="${"flex h-16 w-16 items-center justify-center"}"><img${add_attribute("src", tech.img, 0)} class="${"mx-auto my-auto max-h-16 max-w-16 sepia transition duration-300 group-hover:sepia-0 group-focus-visible:sepia-0"}"${add_attribute("alt", tech.title, 0)}></div>

		<span class="${"text-sm font-semibold uppercase tracking-[0.08em] text-slate-100"}">${escape(tech.title)}</span></button>
	${validate_component(Modal, "Modal").$$render($$result, { title: tech.title, open: showModal }, {}, {
    body: () => {
      return `<div class="${"flex flex-col items-center gap-4 text-slate-200 sm:flex-row sm:items-start sm:gap-6"}"><img${add_attribute("src", tech.img, 0)}${add_attribute("alt", tech.title, 0)} class="${"my-auto max-h-24 w-24"}">
				<p class="${"text-left leading-relaxed"}"><!-- HTML_TAG_START -->${tech.desc}<!-- HTML_TAG_END --></p></div>`;
    }
  })}</div>`;
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
const View = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68ZM16 25c-5.3 0-10.9-3.93-12.93-9C5.1 10.93 10.7 7 16 7s10.9 3.93 12.93 9C26.9 21.07 21.3 25 16 25Z"/><path fill="currentColor" d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6Zm0 10a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M29.25 6.76a6 6 0 0 0-8.5 0l1.42 1.42a4 4 0 1 1 5.67 5.67l-8 8a4 4 0 1 1-5.67-5.66l1.41-1.42l-1.41-1.42l-1.42 1.42a6 6 0 0 0 0 8.5A6 6 0 0 0 17 25a6 6 0 0 0 4.27-1.76l8-8a6 6 0 0 0-.02-8.48Z"/><path fill="currentColor" d="M4.19 24.82a4 4 0 0 1 0-5.67l8-8a4 4 0 0 1 5.67 0A3.94 3.94 0 0 1 19 14a4 4 0 0 1-1.17 2.85L15.71 19l1.42 1.42l2.12-2.12a6 6 0 0 0-8.51-8.51l-8 8a6 6 0 0 0 0 8.51A6 6 0 0 0 7 28a6.07 6.07 0 0 0 4.28-1.76l-1.42-1.42a4 4 0 0 1-5.67 0Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const View_off = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="m5.24 22.51l1.43-1.42A14.06 14.06 0 0 1 3.07 16C5.1 10.93 10.7 7 16 7a12.38 12.38 0 0 1 4 .72l1.55-1.56A14.72 14.72 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68a16 16 0 0 0 4.18 6.17Z"/><path fill="currentColor" d="M12 15.73a4 4 0 0 1 3.7-3.7l1.81-1.82a6 6 0 0 0-7.33 7.33zm18.94-.07a16.4 16.4 0 0 0-5.74-7.44L30 3.41L28.59 2L2 28.59L3.41 30l5.1-5.1A15.29 15.29 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68zM20 16a4 4 0 0 1-6 3.44L19.44 14a4 4 0 0 1 .56 2zm-4 9a13.05 13.05 0 0 1-6-1.58l2.54-2.54a6 6 0 0 0 8.35-8.35l2.87-2.87A14.54 14.54 0 0 1 28.93 16C26.9 21.07 21.3 25 16 25z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Unlink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="m3.584 5.002l1.414-1.414l3.416 3.414L7 8.417zm19.997 19.99l1.415-1.414l3.414 3.416l-1.414 1.414zM11 2h2v4h-2zm-9 9h4v2H2zm24 8h4v2h-4zm-7 7h2v4h-2zm-2.42-4.93l-3.71 3.72a4 4 0 1 1-5.66-5.66l3.72-3.72L9.51 14L5.8 17.72a6 6 0 0 0-.06 8.54A6 6 0 0 0 10 28a6.07 6.07 0 0 0 4.32-1.8L18 22.49zm-1.17-10.14l3.72-3.72a4 4 0 1 1 5.66 5.66l-3.72 3.72L22.49 18l3.71-3.72a6 6 0 0 0 .06-8.54A6 6 0 0 0 22 4a6.07 6.07 0 0 0-4.32 1.8L14 9.51z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dateParts;
  let { project } = $$props;
  const splitDateLabel = (label) => {
    const trimmed = label.trim();
    const match = trimmed.match(/^(.*?)(?:\s*\(([^()]*)\))\s*$/);
    if (!match) {
      return { range: trimmed, duration: null };
    }
    const range = match[1].trim();
    const duration = match[2].trim();
    return {
      range: range || trimmed,
      duration: duration || null
    };
  };
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  dateParts = splitDateLabel(project.date);
  return `<li class="${"mb-8 ml-8 text-slate-100 last:mb-0"}"><span class="${"absolute -left-[1.05rem] top-6 flex h-8 w-8 items-center justify-center rounded-full border border-[#83bdfc]/70 bg-[#0b2f63] text-[#d9ebff] shadow-[0_0_12px_rgba(98,171,255,0.45)]"}">${validate_component(Rocket, "CarbonRocket").$$render($$result, { class: "rotate-180" }, {}, {})}</span>
	<article class="${"retro-card px-4 py-4 sm:px-5 sm:py-5"}"><div class="${"flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between"}"><h3 class="${"text-base font-semibold uppercase tracking-[0.08em] text-[#f7fbff] sm:text-lg"}">${escape(project.title)}</h3>
			<time class="${"retro-date-badge xl:ml-4 xl:items-end xl:text-right"}"><span class="${"retro-date-range"}">${escape(dateParts.range)}</span>
				${dateParts.duration ? `<span class="${"retro-date-duration"}">${escape(dateParts.duration)}</span>` : ``}</time></div>
		<p class="${"mt-3 text-sm leading-relaxed text-slate-300 sm:text-base"}">${escape(project.details)}</p>
		<div class="${"mt-4 flex flex-row flex-wrap gap-2"}">${project.source ? `<a title="${"View source of " + escape(project.title, true)}"${add_attribute("href", project.source, 0)} target="${"_blank"}" rel="${"noreferrer"}" class="${"retro-button inline-flex w-[8.5rem] items-center justify-center gap-1 px-2 py-2 text-sm font-medium focus:z-10 focus:outline-none focus:ring-2 focus:ring-[#88d3ff]/60"}">${validate_component(View, "CarbonView").$$render($$result, {}, {}, {})} <span>View Source</span></a>` : `<span class="${"retro-button-muted inline-flex w-[8.5rem] cursor-not-allowed items-center justify-center gap-1 px-2 py-2 text-sm font-medium"}">${validate_component(View_off, "CarbonViewOff").$$render($$result, {}, {}, {})} <span>Closed Source</span></span>`}
			${project.link ? `<a title="${"View " + escape(project.title, true)}"${add_attribute("href", project.link, 0)} target="${"_blank"}" rel="${"noreferrer"}" class="${"retro-button inline-flex w-[8.5rem] items-center justify-center gap-1 px-2 py-2 text-sm font-medium focus:z-10 focus:outline-none focus:ring-2 focus:ring-[#88d3ff]/60"}">${validate_component(Link, "CarbonLink").$$render($$result, {}, {}, {})} <span>Open Link</span></a>` : `<span class="${"retro-button-muted inline-flex w-[8.5rem] cursor-not-allowed items-center justify-center gap-1 px-2 py-2 text-sm font-medium"}">${validate_component(Unlink, "CarbonUnlink").$$render($$result, {}, {}, {})} <span>Not Available</span></span>`}</div></article></li>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { cta = "" } = $$props;
  let { ctaMobile = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.cta === void 0 && $$bindings.cta && cta !== void 0)
    $$bindings.cta(cta);
  if ($$props.ctaMobile === void 0 && $$bindings.ctaMobile && ctaMobile !== void 0)
    $$bindings.ctaMobile(ctaMobile);
  return `<div class="${"space-y-2 sm:space-y-3"}"><div class="${"flex flex-wrap items-center justify-center gap-3 lg:justify-start"}"><h3 class="${"text-xl sm:text-2xl font-semibold text-[#f7fbff]"}">${escape(title)}</h3></div>
	${cta ? `<span class="${"hidden lg:block text-sm text-slate-300"}">${escape(cta)}</span>
		<span class="${"block lg:hidden text-center text-sm text-slate-300"}">${escape(ctaMobile ? ctaMobile : cta)}</span>` : ``}
	<div class="${"retro-divider"}"></div></div>`;
});
const Trophy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 32 32" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M26 7h-2V6a2.002 2.002 0 0 0-2-2H10a2.002 2.002 0 0 0-2 2v1H6a2.002 2.002 0 0 0-2 2v3a4.005 4.005 0 0 0 4 4h.322A8.169 8.169 0 0 0 15 21.934V26h-5v2h12v-2h-5v-4.069A7.966 7.966 0 0 0 23.74 16H24a4.005 4.005 0 0 0 4-4V9a2.002 2.002 0 0 0-2-2ZM8 14a2.002 2.002 0 0 1-2-2V9h2Zm14 0a6 6 0 0 1-6.186 5.997A6.2 6.2 0 0 1 10 13.707V6h12Zm4-2a2.002 2.002 0 0 1-2 2V9h2Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Experience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dateParts;
  let { experience: experience2 } = $$props;
  const splitDateLabel = (label) => {
    const trimmed = label.trim();
    const match = trimmed.match(/^(.*?)(?:\s*\(([^()]*)\))\s*$/);
    if (!match) {
      return { range: trimmed, duration: null };
    }
    const range = match[1].trim();
    const duration = match[2].trim();
    return {
      range: range || trimmed,
      duration: duration || null
    };
  };
  if ($$props.experience === void 0 && $$bindings.experience && experience2 !== void 0)
    $$bindings.experience(experience2);
  dateParts = splitDateLabel(experience2.duration);
  return `<li class="${"mb-8 ml-8 text-slate-100 last:mb-0"}"><span class="${"absolute -left-[1.05rem] top-6 flex h-8 w-8 items-center justify-center rounded-full border border-[#83bdfc]/70 bg-[#0b2f63] text-[#d9ebff] shadow-[0_0_12px_rgba(98,171,255,0.45)]"}">${validate_component(Trophy, "CarbonTrophy").$$render($$result, {}, {}, {})}</span>
	<article class="${"retro-card px-4 py-4 sm:px-5 sm:py-5"}"><div class="${"flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between"}"><h3 class="${"text-base font-semibold uppercase tracking-[0.08em] text-[#f7fbff] sm:text-lg"}">${escape(experience2.company)}</h3>
			<time class="${"retro-date-badge xl:ml-4 xl:items-end xl:text-right"}"><span class="${"retro-date-range"}">${escape(dateParts.range)}</span>
				${dateParts.duration ? `<span class="${"retro-date-duration"}">${escape(dateParts.duration)}</span>` : ``}</time></div>

		<span class="${"mt-3 block text-sm font-semibold text-[#e5f0ff] sm:text-base"}">${escape(experience2.position)}</span>
		${experience2.location ? `<span class="${"mt-1 block text-sm text-slate-300"}">${escape(experience2.location)}</span>` : ``}
		<p class="${"mt-3 text-sm leading-relaxed text-slate-300 sm:text-base"}">${escape(experience2.description)}</p></article></li>`;
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
const experience = [
  {
    company: "Rumah Siap Kerja",
    position: "Junior Frontend Engineer",
    duration: "October 2022 - Present",
    location: "Jakarta Metropolitan Area",
    description: "Migrating components, libraries, and pages from the old Vue Options API to Nuxt 3 and Compositions API"
  },
  {
    company: "bilateralstimulation.io",
    position: "Frontend Developer",
    duration: "June 2022 - September 2022 (4 months)",
    location: "Berlin, Germany",
    description: "Revamp animations, create presistent preferences for clients"
  },
  {
    company: "Faculty of Computer Science, Universitas Indonesia",
    position: "Teaching Assistant Coordinator",
    duration: "August 2022 - December 2022 (5 months)",
    location: "Depok, West Java, Indonesia",
    description: "Manage and coordinate fellow TA's for the Operating Systems course."
  },
  {
    company: "SayaKaya",
    position: "Frontend Engineer",
    duration: "December 2021 - June 2022 (7 months)",
    location: "Jakarta, Indonesia",
    description: "Build landing page and blog integration."
  },
  {
    company: "MyRobin.ID",
    position: "Frontend Developer",
    duration: "May 2021 - December 2021 (8 months)",
    description: "Build features and fix bugs."
  },
  {
    company: "Faculty of Computer Science, Universitas Indonesia",
    position: "Teaching Assistant",
    duration: "July 2021 - August 2022 (1 year 2 months)",
    location: "Depok, West Java, Indonesia",
    description: "Teaching Assistant for the Operating Systems course. Responsible for creating weekly quizzes and help troubleshoot student issues."
  },
  {
    company: "Faculty of Computer Science, Universitas Indonesia",
    position: "Tracer Study Staff Member",
    duration: "January 2021 - December 2021 (1 year)",
    location: "Depok, West Java, Indonesia",
    description: "Perform data collection, cleanup, and storage."
  }
];
const framework = [
  {
    id: 1,
    title: "Vue.js",
    desc: "Vue.js is a progressive JavaScript framework for building user interfaces.",
    url: "https://vuejs.org/",
    img: "/img/skills/vue.svg"
  },
  {
    id: 2,
    title: "Nuxt.js",
    desc: "Nuxt.js is a framework for creating server-rendered Vue.js applications.",
    url: "https://nuxtjs.org/",
    img: "/img/skills/nuxt.svg"
  },
  {
    id: 3,
    title: "Svelte.js",
    desc: "Svelte.js is a framework for building web applications with a reactive architecture.",
    url: "https://svelte.dev/",
    img: "/img/skills/svelte.webp"
  },
  {
    id: 4,
    title: "Tailwind CSS",
    desc: "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
    url: "https://tailwindcss.com/",
    img: "/img/skills/tailwind.svg"
  }
];
const core = [
  {
    id: 1,
    title: "HTML",
    desc: "Hypertext Markup Language is the standard markup language for creating web pages.",
    url: "https://www.w3.org/html/",
    img: "/img/skills/html.svg"
  },
  {
    id: 2,
    title: "CSS",
    desc: "Cascading Style Sheets is a stylesheet language used for describing the look and formatting of a document written in HTML.",
    url: "https://www.w3.org/Style/CSS/",
    img: "/img/skills/css.svg"
  },
  {
    id: 3,
    title: "JavaScript",
    desc: "JavaScript is a programming language that is commonly used to create interactive effects within web browsers.",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    img: "/img/skills/js.svg"
  },
  {
    id: 4,
    title: "TypeScript",
    desc: "TypeScript is a programming language that is a super set of JavaScript, offering static typing and other features.",
    url: "https://www.typescriptlang.org/",
    img: "/img/skills/ts.svg"
  }
];
const other = [
  {
    id: 1,
    title: "Python",
    desc: "Python is a high-level, interpreted programming language with a strong emphasis on readability and simplicity.",
    url: "https://www.python.org/",
    img: "/img/skills/python.svg"
  },
  {
    id: 2,
    title: "Django",
    desc: "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.",
    url: "https://www.djangoproject.com/",
    img: "/img/skills/django.svg"
  },
  {
    id: 3,
    title: "Node.js",
    desc: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable network applications.",
    url: "https://nodejs.org/en/",
    img: "/img/skills/node.svg"
  }
];
const tools = [
  {
    id: 1,
    title: "Git",
    desc: "Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people.",
    url: "https://git-scm.com/",
    img: "/img/skills/git.svg"
  },
  {
    id: 2,
    title: "Ubuntu Linux",
    desc: "Ubuntu is a free, open-source operating system based on the Linux kernel.",
    url: "https://ubuntu.com/",
    img: "/img/skills/ubuntu.svg"
  },
  {
    id: 3,
    title: "Arch Linux",
    desc: "Arch Linux is a lightweight, rolling-release distribution designed for experienced users and developers.",
    url: "https://archlinux.org/",
    img: "/img/skills/arch.svg"
  },
  {
    id: 4,
    title: "Docker",
    desc: "Docker is a tool designed to make it easier to create, deploy, and run applications by using containers.",
    url: "https://www.docker.com/",
    img: "/img/skills/docker.webp"
  },
  {
    id: 5,
    title: "Nginx",
    desc: "Nginx is a web server that can also be used as a reverse proxy, load balancer, and HTTP cache.",
    url: "https://www.nginx.com/",
    img: "/img/skills/nginx.svg"
  }
];
const projects = [
  {
    title: "Sui Archive",
    date: "November 2022",
    details: "A simple 'wiki' created to store instructions to archive Youtube videos and streams",
    link: "https://fwibisono87.github.io/sui-archive/",
    source: "https://github.com/fwibisono87/sui-archive",
    img: ""
  },
  {
    title: "Evermos FE Tests",
    date: "October 2022",
    details: "Catalog app with product details, variants, and tags. Created for a technical test.",
    link: "https://catalog.evermos.dev.franciswibisono.com/",
    source: "https://github.com/fwibisono87/evermos-frontend-tests",
    img: ""
  },
  {
    title: "Advotics FE Tests",
    date: "May 2022",
    details: "Simple static dashboard. Created for a technical test.",
    link: "https://advotics.dev.franciswibisono.com/",
    source: "https://github.com/fwibisono87/advotics-fe-tests",
    img: ""
  },
  {
    title: "PRF UI",
    date: "August 2021",
    details: "Page for Pesta Rakyat Fisika, held by the Physics Department at Universitas Indonesia. Built with Nuxt.js/Vue, Vuetify.js, and Firebase.",
    link: "",
    source: "",
    img: ""
  },
  {
    title: "Matkul Tree",
    date: "August 2021",
    details: "Page to help CSUI students check course dependencies. Built with Nuxt.js/Vue and Vuetify.js.",
    link: "https://matkul.franciswibisono.com/",
    source: "https://github.com/fwibisono87/matkul-tree",
    img: ""
  },
  {
    title: "GoPus",
    date: "July 2021",
    details: "Library management application built with Django.",
    link: "",
    source: "https://github.com/fwibisono87/GoPus",
    img: ""
  },
  {
    title: "KEC 2021",
    date: "Febuary 2021",
    details: "Page for Krakatau English Competition 2021, featuring authentication and grading. Built with Django.",
    link: "",
    source: "",
    img: ""
  },
  {
    title: "FightCorona",
    date: "January 2021",
    details: "Group project for the Web Programming and Design Course. Built with Django.",
    link: "",
    source: "https://gitlab.com/fwibisono87/tk-2-electric-boogaloo/",
    img: ""
  },
  {
    title: "YoutubeDL",
    date: "July 2020",
    details: "CLI batch YouTube Downloader built with Python.",
    link: "",
    source: "https://github.com/fwibisono87/youtubedl"
  }
];
const secrets = [
  {
    id: 1,
    title: "Linux",
    desc: "idk man, coding is easier here. also, i have a lot of really old laptops that would not even boot windows anymore.",
    url: "",
    img: "/img/skills/tux.svg"
  },
  {
    id: 2,
    title: "Hoshimachi Suisei",
    desc: "<b>Sui-chan wa... kyou mo kawaii!</b><br> <br> love her voice and songs, also the cute/psychopatic tendencies are very very endearing",
    url: "",
    img: "/img/suisei.webp"
  },
  {
    id: 3,
    title: "Vchubas",
    desc: "<b>I mean, i like streamers in general, but vchubas are just... different</b><br><br>I like corpo vtubers, like Tokino Sora, AZKi, Oozora Subaru, Airani Iofifteen, IRyS, Amelia Watson, Mika Melatika and Tsukino Mito (see, I don't exclusively like hololive lol). I also love several smaller Vtubers :)",
    url: "",
    img: "/img/sora.webp"
  },
  {
    id: 4,
    title: "PC Hardware",
    desc: "It's just fun to geek about about hardware I cannot afford lol",
    url: "",
    img: "/img/pc.svg"
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let revealProgress;
  let heroLift;
  let heroSectionStyle;
  let contentSectionStyle;
  let $showSecret, $$unsubscribe_showSecret;
  $$unsubscribe_showSecret = subscribe(showSecret, (value) => $showSecret = value);
  let scrollY = 0;
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  revealProgress = clamp((scrollY - 18) / 128, 0, 1);
  heroLift = Math.min(scrollY * 0.08, 44);
  heroSectionStyle = `transform: translateY(-${heroLift}px); opacity: ${(1 - revealProgress * 0.35).toFixed(3)};`;
  contentSectionStyle = `opacity: ${revealProgress.toFixed(3)}; transform: translateY(${Math.round((1 - revealProgress) * 68)}px); pointer-events: ${revealProgress < 0.08 ? "none" : "auto"};`;
  $$unsubscribe_showSecret();
  return `<div class="${"min-h-screen min-w-screen flex flex-col justify-between pt-10 sm:pt-14 " + escape(scrollY !== 0, true)}"><section class="${"retro-frame mx-auto my-auto w-full max-w-6xl px-5 py-8 text-center transition-[opacity,transform] duration-300 ease-out sm:px-8 sm:py-10 lg:px-12 lg:py-12 lg:text-left"}"${add_attribute("style", heroSectionStyle, 0)}><div class="${"grid gap-8 lg:grid-cols-[14rem,1fr] lg:gap-10"}"><div class="${"flex flex-col items-center gap-4 lg:items-start"}"><span class="${"retro-chip inline-flex rounded-full px-3 py-1 text-[0.6rem] leading-none"}">Mission Profile</span>
				<img src="${"/img/anime.webp"}" class="${"w-28 aspect-square rounded-2xl border border-[#86c4ff]/70 ring-4 ring-[#112c5a]"}" alt="${"Francis Wibisono"}">
				<div class="${"retro-card w-full px-4 py-3 text-center lg:text-left"}"><p class="${"font-mono text-[0.65rem] uppercase tracking-[0.14em] text-slate-300"}">Callsign
					</p>
					<p class="${"mt-1 text-sm font-semibold text-[#f7fbff]"}">@fwibisono87</p></div></div>
			<div class="${"flex flex-col justify-center gap-5"}"><p class="${"font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[#8fc8ff]"}">About Me</p>
				<div class="${"space-y-2"}"><h1 class="${"text-4xl leading-tight text-[#f7fbff] sm:text-5xl lg:text-6xl"}">Hello!</h1>
					<span class="${"text-sm italic text-slate-300"}">My name is</span>
					<h2 class="${"text-3xl text-[#ffd3a4] sm:text-4xl"}">Francis Wibisono</h2>
					<span class="${"text-sm italic text-slate-300"}">and I make</span>
					${validate_component(Buzzword, "Buzzword").$$render($$result, {}, {}, {})}
					<span class="${"text-sm italic text-slate-300"}">web applications</span></div>
				<div class="${"retro-divider"}"></div>
				${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})}</div></div></section>
	${revealProgress < 0.96 ? `<div class="${"mx-auto mb-8 lg:mb-2"}">${`${validate_component(Circle_dash, "CarbonCircleDash").$$render(
    $$result,
    {
      class: "h-7 w-7 animate-spin text-[#9acfff]"
    },
    {},
    {}
  )}`}</div>` : ``}</div>
<div class="${"mx-auto -mt-[14vh] w-full max-w-6xl transition-[opacity,transform] duration-500 ease-out"}"${add_attribute("style", contentSectionStyle, 0)}${add_attribute("aria-hidden", revealProgress < 0.08, 0)}><div class="${"flex flex-col gap-8 sm:gap-10"}"><section class="${"retro-frame px-5 py-6 sm:px-8 sm:py-8"}">${validate_component(Header, "Header").$$render(
    $$result,
    {
      title: "Technologies",
      cta: "Click to inspect each stack module.",
      ctaMobile: "Tap each module."
    },
    {},
    {}
  )}
			<div class="${"mt-6 grid grid-cols-2 gap-4 text-center sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-6"}">${each(core, (tech) => {
    return `${validate_component(Tech, "Tech").$$render($$result, { tech }, {}, {})}`;
  })}
				${each(framework, (tech) => {
    return `${validate_component(Tech, "Tech").$$render($$result, { tech }, {}, {})}`;
  })}
				${each(other, (tech) => {
    return `${validate_component(Tech, "Tech").$$render($$result, { tech }, {}, {})}`;
  })}
				${each(tools, (tech) => {
    return `${validate_component(Tech, "Tech").$$render($$result, { tech }, {}, {})}`;
  })}</div></section>

		<section class="${"retro-frame flex flex-col gap-4 px-5 py-6 sm:px-8 sm:py-8"}">${validate_component(Header, "Header").$$render(
    $$result,
    {
      title: "Projects",
      cta: "Mission archive of shipped products.",
      ctaMobile: "Shipped projects."
    },
    {},
    {}
  )}

			<ol class="${"relative ml-3 border-l border-[#5a80b6]/60 pl-3 sm:pl-5"}">${each(projects, (project) => {
    return `${validate_component(Project, "Project").$$render($$result, { project }, {}, {})}`;
  })}</ol></section>

		<section class="${"retro-frame flex flex-col gap-4 px-5 py-6 sm:px-8 sm:py-8"}">${validate_component(Header, "Header").$$render(
    $$result,
    {
      title: "Experience",
      cta: "Career timeline across missions.",
      ctaMobile: "Career timeline."
    },
    {},
    {}
  )}
			<ol class="${"relative ml-3 border-l border-[#5a80b6]/60 pl-3 sm:pl-5"}">${each(experience, (exp) => {
    return `${validate_component(Experience, "Experience").$$render($$result, { experience: exp }, {}, {})}`;
  })}</ol></section>

		${$showSecret ? `<section class="${"retro-frame flex flex-col gap-4 px-5 py-6 sm:px-8 sm:py-8"}">${validate_component(Header, "Header").$$render(
    $$result,
    {
      title: "Interests",
      cta: "Encrypted side quests unlocked.",
      ctaMobile: "Secret side quests."
    },
    {},
    {}
  )}
				<div class="${"mt-2 grid grid-cols-2 gap-4 text-center sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-6"}">${each(secrets, (secret) => {
    return `${validate_component(Tech, "Tech").$$render($$result, { tech: secret }, {}, {})}`;
  })}</div></section>` : ``}</div></div>

`;
});
export {
  Page as default
};
