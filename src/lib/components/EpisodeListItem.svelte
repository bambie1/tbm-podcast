<script>
	/** @type {import('$lib/types').Episode} */
	export let episode;

	import SvelteMarkdown from 'svelte-markdown';
	import youtube from '$lib/assets/youtube.svg';
	import instagram from '$lib/assets/instagram.svg';
</script>

<div class={`group grid w-full gap-4 p-4 py-2`}>
	<div class="flex gap-4">
		<img
			src={episode.guest.photo}
			alt={`Portrait of ${episode.guest.name}`}
			class="h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-brown/30 object-cover object-top lg:h-20 lg:w-20"
		/>
		<div>
			<p class="text-sm lg:text-base">{episode.date}</p>
			<p class="line-clamp-1 w-full font-playfair text-lg font-bold text-brown lg:text-xl">
				{episode.title}
			</p>
			<p class="text-sm uppercase lg:text-base">{episode.guest.name}</p>
		</div>
	</div>

	<div class="prose mt-2 max-w-none">
		<SvelteMarkdown source={episode.content} />
	</div>

	<div class="mt-4 flex items-center justify-between gap-4">
		<a href={episode.youtube} class="flex items-center gap-2 text-brown underline" target="_blank">
			<img src={youtube} alt="Youtube logo" class="aspect-square w-6" />
			Watch on Youtube</a
		>

		<a
			href={`https://www.instagram.com/${episode.guest.instagram}`}
			target="_blank"
			class="flex items-center gap-1"
		>
			<img src={instagram} alt="instagram logo" class="aspect-square w-4" />
			Instagram</a
		>
	</div>
</div>
