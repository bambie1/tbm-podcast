<script>
	import spotify from '$lib/assets/spotify.svg';
	import google_podcast from '$lib/assets/google_podcast.svg';
	import apple_podcast from '$lib/assets/apple_podcast.svg';

	const platforms = [
		{
			image: spotify,
			title: 'Spotify',
			href: 'https://open.spotify.com/show/0as6fm4R2X422X03DydlSy'
		},
		{
			image: apple_podcast,
			title: 'Apple podcast',
			href: 'https://podcasts.apple.com/us/podcast/the-business-mindset-podcast/id1693400913'
		},
		{
			image: google_podcast,
			title: 'Google podcast',
			href: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9lMmU0MGM2OC9wb2RjYXN0L3Jzcw'
		}
	];
</script>

<div class="mt-10 lg:mt-16">
	<p>AVAILABLE ON</p>
	<div class="mt-4 flex flex-wrap items-center gap-4">
		{#each platforms as platform}
			<a href={platform.href} class="transition duration-150 hover:grayscale-[.7]"
				><img src={platform.image} alt={platform.title} class="h-10 shrink-0" /></a
			>
		{/each}
	</div>
</div>
