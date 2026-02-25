import { c as create_ssr_component, h as add_attribute, i as each, e as escape } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let processedCharacterName;
  let processedFranchaise;
  let processedCosplayer;
  let processedEventString;
  let allHashtags;
  let finalCaption;
  let characterName = "";
  let franchaise = "";
  let cosplayer = "";
  let eventName = "";
  let eventAccount = "";
  let eventYear = "";
  const cameras = ["Canon 600D", "Canon 350D", "Canon 6D", "Canon 6D MK 2"];
  const lenses = [
    "Canon EF 50mm f/1.8 STM",
    "Tamron 18-200mm 18-200mm F/3.5-6.3",
    "Canon EF-S 24mm f/2.8 USM"
  ];
  let selectedLens = lenses[0];
  let selectedCamera = cameras[0];
  const presetHashtags = [
    {
      title: "cosplay",
      hashtags: [
        "cosplayphotography",
        "cosplayindonesia",
        "portraitphotography",
        "cosplayphotography",
        "photooftheday"
      ]
    },
    {
      title: "canon",
      hashtags: ["canonphotography", "canonindonesia", "shotoncanon"]
    },
    {
      title: "hoyoverse",
      hashtags: ["hoyoverse", "hoyoversecosplay", "hoyogames"]
    },
    {
      title: "star rail",
      hashtags: ["hsr", "hsrcosplay"]
    },
    {
      title: "genshin",
      hashtags: ["genshin", "genshincosplay"]
    },
    {
      title: "hololive",
      hashtags: ["hololive", "hololivecosplay", "ホロライブ"]
    }
  ];
  let selectedHashtags = [];
  let customHashtags = "";
  processedCharacterName = "" + characterName.replace(/\s/g, "").toLowerCase();
  processedFranchaise = "" + franchaise.replace(/\s/g, "").toLowerCase();
  processedCosplayer = cosplayer.startsWith("@") ? cosplayer.replace(/\s/g, "").toLowerCase() : "@" + cosplayer.replace(/\s/g, "").toLowerCase();
  processedEventString = (() => {
    {
      return "";
    }
  })();
  allHashtags = selectedHashtags.join(" ");
  finalCaption = `#cosplay of ${processedCharacterName} from ${processedFranchaise} by ${processedCosplayer}

📅: ${processedEventString}
📸: ${selectedCamera} | ${selectedLens}

${allHashtags} ${customHashtags}`;
  return `<div class="${"py-8 flex flex-col gap-4"}"><h2>fwibisono87&#39;s</h2>
	<h1 class="${"text-2xl font-semibold"}">IG Caption Generator</h1>
	<input type="${"text"}" placeholder="${"Character Name"}" class="${"border-2 border-black bg-gunmetal rounded-lg px-4 py-2 active:border-text"}"${add_attribute("value", characterName, 0)}>
	<input type="${"text"}" placeholder="${"Franchaise"}" class="${"border-2 border-black bg-gunmetal rounded-lg px-4 py-2 active:border-text"}"${add_attribute("value", franchaise, 0)}>
	<input type="${"text"}" placeholder="${"Cosplayer"}" class="${"border-2 border-black bg-gunmetal rounded-lg px-4 py-2 active:border-text"}"${add_attribute("value", cosplayer, 0)}>
	<input type="${"text"}" placeholder="${"Event Name"}" class="${"border-2 border-black bg-gunmetal rounded-lg px-4 py-2 active:border-text"}"${add_attribute("value", eventName, 0)}>
	<input type="${"text"}" placeholder="${"Event Account"}" class="${"border-2 border-black bg-gunmetal rounded-lg px-4 py-2 active:border-text"}"${add_attribute("value", eventAccount, 0)}>
	<input type="${"text"}" placeholder="${"Event Year"}" class="${"border-2 border-black bg-gunmetal rounded-lg px-4 py-2 active:border-text"}"${add_attribute("value", eventYear, 0)}>
	<select class="${"border-2 border-black bg-gunmetal rounded-lg px-4 py-2 active:border-text"}">${each(cameras, (camera) => {
    return `<option${add_attribute("value", camera, 0)}>${escape(camera)}</option>`;
  })}</select>
	<select class="${"border-2 border-black bg-gunmetal rounded-lg px-4 py-2 active:border-text"}">${each(lenses, (lens) => {
    return `<option${add_attribute("value", lens, 0)}>${escape(lens)}</option>`;
  })}</select>

	<div class="${"grid lg:grid-cols-4 grid-cols-2 items-center"}">${each(presetHashtags, (category) => {
    return `<label><input type="${"checkbox"}">
				${escape(category.title)}
			</label>`;
  })}</div>
	<input type="${"text"}" placeholder="${"Custom Hashtags"}" class="${"border-2 border-black bg-gunmetal rounded-lg px-4 py-2 active:border-text"}"${add_attribute("value", customHashtags, 0)}>

	<code class="${"block whitespace-pre overflow-x-scroll w-4/5 mx-auto"}">${escape(finalCaption)}</code>
	<button>Copy to Clipboard</button></div>`;
});
export {
  Page as default
};
