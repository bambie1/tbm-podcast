<script>
	import spotify from '$lib/assets/spotify.svg';
	import google_podcast from '$lib/assets/google_podcast.svg';
	import apple_podcast from '$lib/assets/apple_podcast.svg';

	const platforms = [
		{ image: spotify, title: 'Spotify', href: '#' },
		{ image: apple_podcast, title: 'Apple podcast', href: '#' },
		{ image: google_podcast, title: 'Google podcast', href: '#' }
	];
</script>

<div class="mt-10 lg:mt-16">
	<p>AVAILABLE ON</p>
	<div class="mt-4 flex flex-wrap items-center gap-4">
		{#each platforms as platform}
			<a href={platform.href} class="transition duration-150 hover:grayscale-[.7]"
				><img
					src={platform.image}
					alt={platform.title}
					class="pointer-events-none h-10 shrink-0"
				/></a
			>
		{/each}
	</div>
</div>
