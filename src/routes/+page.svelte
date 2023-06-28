<script>
	import spotify from '$lib/assets/spotify.png';
	import google_podcast from '$lib/assets/google_podcast.png';
	import apple_podcast from '$lib/assets/apple_podcast.png';
	import thumbnail from '$lib/assets/thumbnail.jpg';

	const platforms = [
		{ image: spotify, title: 'Spotify', href: '#' },
		{ image: apple_podcast, title: 'Apple podcast', href: '#' },
		{ image: google_podcast, title: 'Google podcast', href: '#' }
	];
</script>

<svelte:head>
	<title>The Business Mindset Podcast | By SoPlugged</title>
</svelte:head>

<div class="my-10 border border-brown lg:my-20">
	<div class="grid border-b border-brown lg:grid-cols-2">
		<div
			class="flex aspect-square flex-col justify-center border-brown bg-light p-4 py-10 lg:border-r lg:p-10"
		>
			<h1 class="mb-4 text-4xl font-bold text-brown xl:text-6xl">The Business Mindset Podcast</h1>
			<p class="lg:text-lg">
				On this weekly podcast, we interview black entrepreneurs in Canada about their experiences
				starting and building their businesses
			</p>

			<div class="mt-10 lg:mt-16">
				<p>AVAILABLE ON</p>
				<div class="mt-4 flex flex-wrap items-center gap-4">
					{#each platforms as platform}
						<a href={platform.href}
							><img src={platform.image} alt={platform.title} class="h-10" /></a
						>
					{/each}
				</div>
			</div>
		</div>
		<div class="relative flex">
			<img src={thumbnail} alt="" class="object-cover" />

			<div
				class="absolute left-1/2 top-1/2 flex aspect-square w-24 -translate-x-1/2 -translate-y-1/2 transform animate-pulse items-center justify-center rounded-full bg-white/80"
			/>
			<button
				class="absolute left-1/2 top-1/2 flex aspect-square w-20 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white text-brown"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="ml-2 h-6 w-6 lg:h-10 lg:w-10"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
					/>
				</svg>
			</button>
		</div>
	</div>

	<div class="grid lg:grid-cols-2">
		<div class="order-2 aspect-square bg-pink lg:order-1" />

		<div class="relative flex aspect-square flex-col justify-center p-4 py-10 pb-20 lg:p-10">
			<h2 class="mb-4 text-3xl font-bold text-brown xl:text-4xl">About the Podcast</h2>

			<p>
				Welcome to The Business Mindset Podcast, where we empower Black entrepreneurs by sharing
				inspiring stories, practical tips, and valuable insights from successful Black entrepreneurs
				in Canada.
			</p>
			<br />
			<p class="mb-10">
				I'm Nina Barango, your host, and together we'll explore the world of entrepreneurship
				through the journeys, challenges, and triumphs of our incredible guests. Let's get started!
			</p>

			<div class="absolute bottom-0 left-0 right-0 flex">
				<button class="flex-1 bg-brown p-4 text-white">Ask a question</button>
				<button class="flex-1 border-t border-brown text-brown">Join as a guest</button>
			</div>
		</div>
	</div>

	<div class="flex aspect-video flex-col justify-center border-t border-brown bg-light p-4 lg:p-10">
		<h2 class="mb-4 text-center text-3xl font-bold text-brown xl:text-4xl">Recent Episodes</h2>
	</div>

	<div class="grid border-t border-brown lg:grid-cols-2">
		<div class="flex aspect-square flex-col justify-center border-r border-brown p-4 lg:p-10">
			<h1 class="mb-4 text-3xl font-bold text-brown xl:text-4xl">Stay up-to-date</h1>
			<p class="lg:text-lg">
				On this weekly podcast, we interview black entrepreneurs in Canada about their experiences
				starting and building their businesses
			</p>
		</div>
		<div class="flex">
			<img src={thumbnail} alt="" class="object-cover" />
		</div>
	</div>
</div>
