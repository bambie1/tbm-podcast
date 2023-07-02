<script>
	import decor from '$lib/assets/decor.png';
	import photo_2 from '$lib/assets/cover_2.jpeg';
	import Platforms from '$lib/components/Platforms.svelte';
	import Episode from '$lib/components/Episode.svelte';

	import instagram from '$lib/assets/instagram.svg';
	import youtube from '$lib/assets/youtube.svg';
	import twitter from '$lib/assets/twitter.svg';
	import linkedin from '$lib/assets/linkedin.svg';
	import latestEpisode from '$lib/assets/latest_episode.svg';
	import coverPhoto from '$lib/assets/cover.jpeg';

	export let data;
	const latestYTEpisode = 'https://www.youtube.com/watch?v=Dkfijg7s76o';

	const socials = [
		{ href: 'https://www.instagram.com/tbm_pod/?hl=en', img: instagram, title: 'Instagram page' },
		{ href: 'https://www.instagram.com/tbm_pod/?hl=en', img: youtube, title: 'Youtube page' },
		{ href: 'https://ca.linkedin.com/company/soplugged', img: linkedin, title: 'LinkedIn page' },
		{ href: 'https://twitter.com/sopluggd', img: twitter, title: 'Twitter page' }
	];

	const title = 'The Business Mindset Podcast | By SoPlugged';
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

<div class="relative my-2 border border-brown lg:my-20 lg:shadow-3xl">
	<img
		src={latestEpisode}
		alt="Watch the latest episode"
		class="absolute -right-40 top-0 hidden xl:block"
	/>
	<div class="grid border-b border-brown md:grid-cols-2">
		<div
			class="flex aspect-square flex-col justify-center border-brown bg-light p-4 py-10 lg:border-r lg:p-10"
		>
			<h1 class="mb-4 text-4xl font-bold text-brown xl:text-6xl">The Business Mindset Podcast</h1>
			<p class="lg:text-lg">
				On this weekly podcast, we amplify the stories of Black entrepreneurs in Canada as we
				explore their journey to building a successful business.
			</p>

			<Platforms />
		</div>
		<div class="group relative flex">
			<img
				src="https://images.pexels.com/photos/6954162/pexels-photo-6954162.jpeg?auto=compress&cs=tinysrgb&w=1600"
				alt=""
				class="aspect-square object-cover"
			/>

			<div
				class="absolute left-1/2 top-1/2 flex aspect-square w-24 -translate-x-1/2 -translate-y-1/2 transform animate-pulse items-center justify-center rounded-full bg-white/80 transition duration-150"
			/>
			<a
				href={latestYTEpisode}
				target="_blank"
				class="absolute left-1/2 top-1/2 flex aspect-square w-20 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white text-brown transition duration-150 hover:bg-white/80"
				aria-label="Go to Youtube video"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="ml-2 h-10 w-10"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
					/>
				</svg>
			</a>
		</div>
	</div>

	<div class="grid md:grid-cols-2">
		<div
			class="relative order-2 flex aspect-square justify-start bg-[#E4C0D1] md:order-1 md:aspect-auto lg:aspect-square"
		>
			<img src={decor} alt="" class="absolute top-0" />

			<div
				class="absolute right-3 top-1/2 max-w-[10rem] -translate-y-1/2 transform text-sm lg:right-16"
			>
				<p>HOST</p>
				<p class="font-playfair font-bold md:text-xl">Nina Barango</p>
				<p>Founder, SoPlugged</p>
			</div>

			<img src={coverPhoto} alt="Nina Barango, Host of TBM Podcast" class="w-full object-cover" />
		</div>

		<div
			class="relative flex flex-col items-start justify-center p-4 py-10 pb-20 md:order-2 lg:p-10"
			id="about"
		>
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

			<a
				href="#episodes"
				class="inline-flex border-b border-brown transition-all duration-150 hover:border-transparent hover:text-brown/80"
				>Check out recent episodes!</a
			>

			<div class="absolute bottom-0 left-0 right-0 flex">
				<a
					href="https://docs.google.com/forms/d/18X65OJ4XbRhaEIa_Ge-ByqCgj5YkHG4CBnsvf_N_o60/viewform"
					target="_blank"
					class="flex flex-1 items-center justify-center border-t border-transparent bg-brown p-4 text-white transition duration-150 hover:border-brown hover:bg-white hover:text-brown"
					>Ask a question</a
				>
				<a
					href="https://docs.google.com/forms/d/18X65OJ4XbRhaEIa_Ge-ByqCgj5YkHG4CBnsvf_N_o60/viewform"
					class="flex flex-1 items-center justify-center border-l border-t border-brown text-brown transition duration-150 hover:bg-light"
					>Join as a guest</a
				>
			</div>
		</div>
	</div>

	<div
		class="flex aspect-video flex-col items-center justify-center border-t border-brown bg-light p-4 py-10 text-center lg:p-10"
		id="episodes"
	>
		<h2 class="mb-2 text-3xl font-bold text-brown xl:text-4xl">Recent Episodes</h2>
		<p>New episode dropped every week</p>

		<div class="mt-10 grid gap-10 text-left md:grid-cols-2 lg:mt-20 lg:gap-14">
			{#each data.recentEpisodes as episode}
				<Episode {episode} />
			{/each}
		</div>

		<Platforms isCentered />
	</div>

	<div class="grid border-t border-brown md:grid-cols-2">
		<div class="flex aspect-square flex-col justify-center border-r border-brown p-4 py-10 lg:p-10">
			<h1 class="mb-4 text-3xl font-bold text-brown xl:text-4xl">Stay up-to-date</h1>
			<p class="lg:text-lg">
				Follow us on social media for real-time updates, sneak peeks, and engaging conversations.
				Join our online community and be part of the discussion!
			</p>

			<div class="mt-10 flex gap-4">
				{#each socials as social}
					<a
						href={social.href}
						target="_blank"
						class="inline-flex items-center rounded-sm border border-brown/5 p-2 transition-all duration-150 hover:border-brown lg:rounded-lg lg:p-4"
					>
						<img src={social.img} alt={social.title} class="aspect-square w-6" />
					</a>
				{/each}
			</div>
		</div>
		<div class="flex aspect-square">
			<img src={photo_2} alt="" class="aspect-video object-cover" />
		</div>
	</div>
</div>
