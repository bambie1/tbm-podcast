<script>
	import clsx from 'clsx';

	import hostPortrait from '$lib/assets/nina.jpeg';
	import yourHost from '$lib/assets/your_host.png';
	import decor1 from '$lib/assets/decor-1.png';
	import decor2 from '$lib/assets/decor-2.png';
	import spotify from '$lib/assets/spotify.png';
	import google_podcast from '$lib/assets/google_podcast.png';
	import apple_podcast from '$lib/assets/apple_podcast.png';
	import thumbnail from '$lib/assets/thumbnail.jpg';

	import AudioPlayer from '$lib/components/AudioPlayer.svelte';
	import { pad } from '$lib/utils/pad';

	const platforms = [
		{ image: spotify, title: 'Spotify', href: '#' },
		{ image: apple_podcast, title: 'Apple podcast', href: '#' },
		{ image: google_podcast, title: 'Google podcast', href: '#' }
	];

	export let data;

	let audioSrc = data.recentEpisodes[0].audio;

	let activeEpisode = data.recentEpisodes[0].number;

	/**
	 * @param {import('$lib/types').Episode} episode
	 */
	const handleEpisodeClick = (episode) => {
		audioSrc = episode.audio;
		activeEpisode = episode.number;
	};

	let isPlaying;
</script>

<svelte:head>
	<title>The Business Mindset Podcast | By SoPlugged</title>
</svelte:head>

<div class="relative">
	<img src={decor2} alt="" class="pointer-events-none absolute left-0 top-20 -z-10 h-full" />
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

		<div class="aspect-square rounded-xl bg-white p-4 pt-8 shadow-sm shadow-primary lg:col-span-2">
			<p>RECENT EPISODES</p>
			<ul class="mt-6 flex flex-col gap-2">
				{#each data.recentEpisodes as episode}
					<li
						class={clsx(
							'group relative rounded-xl border-b border-brown/10 transition duration-150 last-of-type:border-none hover:border-transparent',
							episode.number === activeEpisode && 'border-none bg-primary/30',
							episode.audio && 'hover:bg-primary/20'
						)}
					>
						<a
							href={episode.audio ? `/episodes/${episode.slug}` : ''}
							class={`group inline-flex w-full items-center gap-4 overflow-hidden p-4 py-3 ${
								episode.audio ? '' : ' pointer-events-none opacity-50'
							}`}
						>
							<img
								src={episode.guest.photo}
								alt=""
								class="aspect-square w-10 flex-shrink-0 overflow-hidden rounded-lg border border-brown/30 object-cover object-top"
							/>
							<div>
								{#if episode.audio}
									<p>EP. {pad(episode.number)} - {episode.guest.name}</p>
								{/if}

								{#if !episode.audio}
									<p>EP. {pad(episode.number)}</p>
								{/if}
								<p
									class="line-clamp-1 w-full font-playfair text-lg font-bold text-brown lg:text-xl"
								>
									{episode.audio ? episode.title : 'Coming soon...'}
								</p>
							</div>
						</a>

						{#if episode.audio}
							<button
								class="absolute left-4 top-1/2 z-10 flex aspect-square w-10 -translate-y-1/2 items-center justify-center rounded-lg bg-primary opacity-0 transition-all duration-150 group-hover:opacity-100"
								on:click={() => handleEpisodeClick(episode)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="h-6 w-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
									/>
								</svg>
							</button>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<div class="relative my-12 lg:my-24">
	<img src={decor1} alt="" class="absolute right-0 top-20 h-full" />

	<div class="container">
		<div
			class="relative aspect-video w-full overflow-hidden rounded-2xl border border-brown shadow-lg shadow-brown/30"
		>
			<img src={thumbnail} alt="" class="pointer-events-none" />

			<a
				href="/"
				class="absolute inset-0 m-auto flex aspect-square w-20 items-center justify-center rounded-full bg-white transition duration-150 hover:opacity-80"
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
</div>

<div class="relative mt-12">
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

{#if audioSrc}
	{#key audioSrc}
		<AudioPlayer src={audioSrc} isPlaying />
	{/key}
{/if}
