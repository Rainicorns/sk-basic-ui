import { browser } from '$app/environment';

/**
 *
 * Converts a relative path to an absolute path. Return undefined in the the server.
 * @param href - the relative path to convert to an absolute path
 * @returns absolute path
 */
export function relPathToAbs(href: string): string | undefined {
	if (browser) {
		const url = new URL(href, window.location.href);
		return url.href;
	}
}
