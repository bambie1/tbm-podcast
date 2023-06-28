import { error } from '@sveltejs/kit';

import type { Episode } from '$lib/types.js';

export async function load({ params }) {
	try {
		const episode = await import(`../../../episodes/${params.slug}.md`);

		return {
			content: episode.default,
			meta: episode.metadata as Episode
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}
