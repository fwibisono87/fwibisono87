/// <reference types="unplugin-icons/types/svelte" />

import type { SvelteComponentTyped } from 'svelte';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

declare global {
	interface Window {
		umami?: {
			track: (eventName: string, eventData?: Record<string, unknown>) => void;
		};
	}
}

declare module '~icons/*' {
	export default class IconComponent extends SvelteComponentTyped<Record<string, unknown>> {}
}

export {};
