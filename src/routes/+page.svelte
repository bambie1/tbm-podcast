<script>
	import Platforms from '$lib/components/Platforms.svelte';
	import Episode from '$lib/components/Episode.svelte';

	import instagram from '$lib/assets/instagram.svg';
	import youtube from '$lib/assets/youtube.svg';
	import tiktok from '$lib/assets/tiktok.svg';
	import linkedin from '$lib/assets/linkedin.svg';
	import decor from '$lib/assets/decor.svg';
	import latestEpisode from '$lib/assets/latest_episode.svg';
	import coverPhoto from '$lib/assets/cover.jpeg';
	import yt_thumbnail from '$lib/assets/thumbnail.png';

	export let data;
	const latestYTEpisode = 'https://youtu.be/A3UntV_dxoM';

	const socials = [
		{ href: 'https://www.instagram.com/tbm_pod/?hl=en', img: instagram, title: 'Instagram page' },
		{ href: 'https://www.tiktok.com/@tbm_pod', img: tiktok, title: 'Tiktok page' },
		{ href: 'https://www.youtube.com/watch?v=5kI3NRk8ksw', img: youtube, title: 'Youtube page' },
		{ href: 'https://ca.linkedin.com/company/soplugged', img: linkedin, title: 'LinkedIn page' }
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

<div>
	<div class="relative grid gap-8 py-20 lg:gap-32 lg:py-28">
		<img src={decor} alt="" class="absolute left-0 right-0 top-0 -z-10 w-full opacity-40" />
		<div class="container">
			<div class="mx-auto max-w-2xl text-center">
				<h1 class="mb-4 text-4xl font-bold text-brown xl:text-7xl">
					The Business <br />Mindset Podcast
				</h1>
				<p class="lg:text-lg">
					On this weekly podcast, we amplify the stories of Black entrepreneurs in Canada as we
					explore their journey to building a successful business.
				</p>

				<Platforms isCentered />
			</div>
		</div>

		<div class="container relative">
			<hr class="mx-auto mb-4 w-[60%] border-brown md:mb-6 md:h-4" />

			<img
				src={latestEpisode}
				alt="Watch the latest episode"
				class="absolute -top-40 right-0 z-10 hidden scale-75 xl:block"
			/>
			<a
				href={latestYTEpisode}
				target="_blank"
				rel="noopener noreferrer"
				class="group relative mx-auto flex aspect-video overflow-hidden rounded-2xl shadow xl:max-w-5xl"
			>
				<img
					src={yt_thumbnail}
					alt="Episode 2 - Dealing with Burnout"
					class="transition duration-500 group-hover:scale-[1.02]"
				/>

				<div
					class="absolute left-1/2 top-1/2 flex aspect-square w-20 -translate-x-1/2 -translate-y-1/2 transform animate-pulse items-center justify-center rounded-full bg-white/80 transition duration-150 md:w-24"
				/>
				<span
					class="absolute left-1/2 top-1/2 flex aspect-square w-16 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white text-brown transition duration-150 hover:bg-white/80 md:w-20"
					aria-label="Go to Youtube video"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="ml-2 h-8 w-8 md:h-10 md:w-10"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
						/>
					</svg>
				</span>
			</a>

			<hr class="mx-auto mt-5 w-[60%] border-brown md:mt-10 md:h-4" />
		</div>

		<div class="container">
			<h2 class="mb-2 text-center text-3xl font-bold text-brown xl:text-4xl">Recent Episodes</h2>
			<p class="text-center">New episode dropped every week</p>

			<div class="mt-10 grid grid-cols-2 gap-2 md:gap-10 lg:grid-cols-4">
				{#each data.recentEpisodes as episode}
					<Episode {episode} />
				{/each}

				<div
					class="hidden aspect-square w-full animate-pulse overflow-hidden rounded-xl bg-pink/20 lg:block"
				/>
			</div>
		</div>

		<div
			class="container relative grid items-center gap-10 overflow-hidden bg-pink/20 py-10 md:grid-cols-2 md:rounded-2xl md:px-10 lg:gap-20 lg:py-20"
		>
			<div>
				<h2 class="mb-4 text-3xl font-bold text-brown xl:text-4xl">About the podcast</h2>
				<p>
					Welcome to The Business Mindset Podcast, where we empower Black entrepreneurs by sharing
					inspiring stories, practical tips, and valuable insights from successful Black
					entrepreneurs in Canada.
				</p>
				<p class="mt-4">
					I'm Nina Barango, your host, and together we'll explore the world of entrepreneurship
					through the journeys, challenges, and triumphs of our incredible guests. Let's get
					started!
				</p>

				<div class="mt-8 flex items-center gap-4 md:mt-16">
					<a
						href="https://docs.google.com/forms/d/e/1FAIpQLSdPJVg1F__yRsKD2HNlofA6ZJmbSp_NP5BvjeK5IYnwwRaH_w/viewform?usp=sf_link"
						target="_blank"
						class="flex flex-1 items-center justify-center border border-transparent bg-brown p-4 text-white transition duration-150 hover:-translate-y-1"
						>Ask a question</a
					>
					<a
						href="https://docs.google.com/forms/d/18X65OJ4XbRhaEIa_Ge-ByqCgj5YkHG4CBnsvf_N_o60/viewform"
						class="flex flex-1 items-center justify-center border border-brown p-4 text-brown transition duration-150 hover:-translate-y-1"
						>Join as a guest</a
					>
				</div>
			</div>
			<img
				src={coverPhoto}
				alt="Portait of Nina Barango"
				class="absolute bottom-0 right-0 top-0 mx-auto hidden h-full w-1/2 object-cover md:block lg:max-w-lg"
			/>
		</div>

		<div class="container grid items-center gap-4 md:grid-cols-2 md:gap-10">
			<div>
				<h2 class="mb-4 text-3xl font-bold text-brown xl:text-4xl">Stay up-to-date</h2>
				<p class="max-w-xl lg:text-lg">
					Follow us on social media for real-time updates, sneak peeks, and engaging conversations.
					Join our online community and be part of the discussion!
				</p>
			</div>

			<div class="flex gap-4 md:ml-auto">
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
	</div>
</div>
