import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const episode = await import(`../../../episodes/${params.slug}.md`);

		return {
			content: episode.default,
			meta: episode.metadata
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}
