import { browser } from '$app/environment';
import { derived, writable } from 'svelte/store';
import type { Readable, Writable } from 'svelte/store';

let store: Readable<URL>;

if (browser) {
	const href = writable(window?.location.href);
	const originalPushState = history.pushState;
	const originalReplaceState = history.replaceState;
	const updateHref = () => href.set(window?.location.href);
	history.pushState = function (data, unused, url) {
		originalPushState.apply(this, [data, unused, url]);
		updateHref();
	};
	history.replaceState = function (data, unused, url) {
		originalReplaceState.apply(this, [data, unused, url]);
		updateHref();
	};
	window.addEventListener('popstate', updateHref);
	window.addEventListener('hashchange', updateHref);
	store = derived(href, ($href) => new URL($href));
} else {
	// do nothing
	const url = writable(new URL('https://example.com'));
	store = derived(url, ($url) => $url);
}
export const location = store;
