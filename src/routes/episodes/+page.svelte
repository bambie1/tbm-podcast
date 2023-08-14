<script>
	import EpisodeListItem from '$lib/components/EpisodeListItem.svelte';

	export let data;

	const title = 'Episodes | The Business Mindset Podcast';
	const metaDescription =
		'On this weekly podcast, we amplify the stories of Black entrepreneurs in Canada as we explore their journey to building a successful business.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={metaDescription} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={metaDescription} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={metaDescription} />

	<script
		defer
		data-domain="tbmpodcast.soplugged.com"
		src="https://plausible.io/js/script.js"
	></script>
</svelte:head>

<div>
	<div class="container mt-10">
		<h1 class="mb-4 text-center text-3xl font-bold text-brown xl:text-5xl">Episodes</h1>
		<ul class="mx-auto mt-6 flex max-w-3xl flex-col gap-2 lg:mt-10">
			{#each data.recentEpisodes as episode}
				<li class="group relative mb-4 border-b border-brown/10 last-of-type:border-none">
					<EpisodeListItem {episode} />
				</li>
			{/each}
		</ul>
	</div>
</div>
