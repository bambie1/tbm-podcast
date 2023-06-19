<script>
	import hostPortrait from '$lib/assets/nina.jpeg';
	import yourHost from '$lib/assets/your_host.png';
	import decor1 from '$lib/assets/decor-1.png';
	import decor2 from '$lib/assets/decor-2.png';
	import spotify from '$lib/assets/spotify.png';
	import google_podcast from '$lib/assets/google_podcast.png';
	import apple_podcast from '$lib/assets/apple_podcast.png';

	const recentEpisodes = [
		{
			guestName: 'Peace Friths',
			guestImage:
				'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
			title: 'Overcoming Grassroots challenges'
		},
		{
			guestName: 'Ricah Mich',
			guestImage:
				'https://images.unsplash.com/photo-1634746715098-6cafbc6a7a00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
			title: 'Bridging the customer-owner gap'
		},
		{
			guestName: 'Toni Ronke',
			guestImage:
				'https://images.unsplash.com/photo-1546791737-97c81ec08179?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
			title: 'Safely scaling up your business'
		}
	];

	const platforms = [
		{ image: spotify, title: 'Spotify', href: '#' },
		{ image: apple_podcast, title: 'Apple podcast', href: '#' },
		{ image: google_podcast, title: 'Google podcast', href: '#' }
	];
</script>

<svelte:head>
	<title>The Business Mindset Podcast | By SoPlugged</title>
</svelte:head>

<div class="relative">
	<img src={decor1} alt="" class="absolute right-0 top-20 h-full" />
	<div class="container grid items-center gap-10 py-4 lg:grid-cols-5 xl:gap-20">
		<div class="max-w-2xl py-10 lg:col-span-3 lg:py-20 xl:py-28">
			<h1 class="mb-4 max-w-lg text-4xl font-bold text-brown xl:text-6xl">
				The Business Mindset Podcast
			</h1>
			<p class="lg:text-lg">
				On this weekly podcast, we interview black entrepreneurs in Canada about their experiences
				starting and building their businesses
			</p>

			<div class="my-8 flex items-center gap-4">
				<img
					src={hostPortrait}
					alt="Nina Barango"
					class="aspect-square w-16 rounded-full border border-brown object-cover"
				/>

				<div>
					<p>HOST</p>
					<p class="font-playfair text-lg font-bold lg:text-xl">Nina Barango</p>
					<p>Founder, SoPlugged</p>
				</div>
			</div>

			<div class="mt-10 lg:mt-16">
				<p>AVAILABLE ON</p>
				<div class="mt-4 flex items-center gap-4">
					{#each platforms as platform}
						<a href={platform.href}
							><img src={platform.image} alt={platform.title} class="h-10" /></a
						>
					{/each}
				</div>
			</div>
		</div>

		<div class="lg:col-span-2">
			<p>RECENT EPISODES</p>
			<ul class="mt-6">
				{#each recentEpisodes as episode}
					<li class="inline-flex items-center gap-4 border-b py-3 last-of-type:border-none">
						<img
							src={episode.guestImage}
							alt=""
							class="aspect-square w-10 overflow-hidden rounded-lg object-cover object-top"
						/>
						<div>
							<p>{episode.guestName}</p>
							<p class="font-playfair text-lg font-bold text-brown lg:text-xl">{episode.title}</p>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<div class="relative mt-12">
	<img src={decor2} alt="" class="absolute left-0 top-0 w-1/3 max-w-[24rem]" />

	<div class="container grid items-center gap-10 lg:grid-cols-5 lg:gap-20">
		<div class="lg:col-span-3">
			<h2 class="text-2xl font-bold text-brown lg:text-3xl">About the podcast</h2>
			<p class="mt-4 max-w-2xl">
				Welcome to "The Business Mindset," your go-to podcast for inspiring stories and insightful
				conversations with exceptional black entrepreneurs across Canada. Each week, we delve deep
				into the journeys of these remarkable individuals, exploring their triumphs, challenges, and
				the lessons they've learned along the way. <br /><br />

				Our podcast is a celebration of the vibrant and diverse black entrepreneurial community in
				Canada. We believe in the power of storytelling to inspire, empower, and uplift, and that's
				exactly what we aim to achieve with each episode. By sharing the experiences and wisdom of
				successful black entrepreneurs, we seek to inspire aspiring business owners, professionals,
				and dreamers to pursue their passions and overcome obstacles, no matter their background.
			</p>
		</div>

		<div class="lg:col-span-2">
			<img src={yourHost} alt="Nina Barango" class="mx-auto w-full object-contain" />
		</div>
	</div>
</div>

<div class="relative mt-12">
	<img src={decor1} alt="" class="absolute right-0 top-20 h-full" />

	<div class="container grid items-center gap-10 py-4 lg:grid-cols-5 xl:gap-20">
		<div class="lg:col-span-3">
			<h2 class="text-2xl font-bold text-brown lg:text-3xl">Got a question for us?</h2>
			<p class="mt-4 max-w-2xl">
				Keep them coming! Please click the link below to ask your question, and we'll discuss it on
				a future episode!
			</p>

			<a href="#form" class="mt-4 inline-flex text-brown underline">Send in your question</a>
		</div>
	</div>
</div>
