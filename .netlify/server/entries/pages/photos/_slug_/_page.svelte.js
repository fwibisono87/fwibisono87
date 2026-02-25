import { c as create_ssr_component, b as subscribe, i as each } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_page();
  return `<div class="${"flex flex-col md:flex-row justify-between my-6 py-2 top-0 sticky bg-primary z-20 px-2"}"><div class="${"flex flex-col gap-1"}">${`<div class="${"w-64 bg-text h-6 animate-pulse"}"></div>
			<div class="${"w-64 bg-gray-600 h-6 animate-pulse"}"></div>
			<div class="${"w-64 bg-gray-600 h-6 animate-pulse"}"></div>`}</div>
	<div class="${"flex flex-col md:my-auto"}"><a class="${"underline"}" target="${"_blank"}" href="${"/"}">@fwibisono87</a>
		<a href="${"/photos"}" class="${"underline"}">Back</a></div></div>


<div class="${"grid grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4 w-[95%] mx-auto"}">${`${each(Array(12).fill(null), (_) => {
    return `
			<div class="${"relative bg-gray-600 animate-pulse aspect-square w-full h-full"}"></div>`;
  })}`}</div>


${``}`;
});
export {
  Page as default
};
