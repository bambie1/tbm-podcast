<script>
	import spotify from '$lib/assets/spotify.png';
	import google_podcast from '$lib/assets/google_podcast.png';
	import apple_podcast from '$lib/assets/apple_podcast.png';

	const platforms = [
		{ image: spotify, title: 'Spotify', href: '#' },
		{ image: apple_podcast, title: 'Apple podcast', href: '#' },
		{ image: google_podcast, title: 'Google podcast', href: '#' }
	];
</script>

<div class="mt-10 lg:mt-16">
	<p>AVAILABLE ON</p>
	<div class="mt-4 flex items-center gap-4">
		{#each platforms as platform}
			<a href={platform.href}><img src={platform.image} alt={platform.title} class="h-10" /></a>
		{/each}
	</div>
</div>
