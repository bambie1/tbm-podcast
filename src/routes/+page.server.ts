import type { Episode } from '$lib/types';

export async function load() {
	let recentEpisodes: Episode[] = [];

	const paths = import.meta.glob('/src/episodes/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Episode, 'slug'>;
			const episode = { ...metadata, slug: `/episodes/${slug}` };
			recentEpisodes.push(episode);
		}
	}

	return {
		recentEpisodes: recentEpisodes.reverse()
	};
}
