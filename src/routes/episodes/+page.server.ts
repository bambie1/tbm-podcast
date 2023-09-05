import type { Episode } from '$lib/types';

export async function load() {
	let recentEpisodes: Episode[] = [];

	const paths = import.meta.glob('/src/episodes/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];

		if (file && typeof file === 'object' && 'metadata' in file) {
			const metadata = file.metadata as Episode;
			const episode = { ...metadata, content: file.default.render().html };
			recentEpisodes.push(episode);
		}
	}

	return {
		recentEpisodes: recentEpisodes.reverse()
	};
}
