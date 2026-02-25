import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","img/GameIconsPc.webp","img/anime.webp","img/blobs.svg","img/email.svg","img/full-circle.svg","img/github.svg","img/gitlab.svg","img/instagram.svg","img/link.svg","img/linkedin.svg","img/pc.svg","img/semi-circle.svg","img/skills/arch.svg","img/skills/code.svg","img/skills/css.svg","img/skills/django.svg","img/skills/docker.webp","img/skills/en.svg","img/skills/git.svg","img/skills/github.svg","img/skills/gitlab.svg","img/skills/html.svg","img/skills/id.svg","img/skills/java.svg","img/skills/jetbrains.svg","img/skills/js.svg","img/skills/netlify.svg","img/skills/nginx.svg","img/skills/node.svg","img/skills/nuxt.svg","img/skills/python.svg","img/skills/svelte.svg","img/skills/svelte.webp","img/skills/tailwind.svg","img/skills/ts.svg","img/skills/tux.svg","img/skills/ubuntu.svg","img/skills/vue.svg","img/sora.webp","img/suisei.webp","json/events/astral-express.json","json/events/cf-16.json","json/events/gjui.json","json/events/impactnation.json","json/events/kompas.json","json/events/mukashi.json","json/events/neo-soho-toy.json","json/events.json"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".svg":"image/svg+xml",".json":"application/json"},
	_: {
		entry: {"file":"_app/immutable/start-ad8f0ae4.js","imports":["_app/immutable/start-ad8f0ae4.js","_app/immutable/chunks/index-ea20b50a.js","_app/immutable/chunks/singletons-7ed5970f.js","_app/immutable/chunks/index-f5154f0d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/hashtag",
				pattern: /^\/hashtag\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/photos",
				pattern: /^\/photos\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/photos/[slug]",
				pattern: /^\/photos\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
