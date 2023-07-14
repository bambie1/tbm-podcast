<script>
	import clsx from 'clsx';

	/** @type {import('$lib/types').Episode} */
	export let episode;

	const { guest, title, date, youtube, number, slug } = episode;
</script>

<a href={youtube} target="_blank" class="group flex w-full flex-col">
	<div
		class="relative flex aspect-square w-full overflow-hidden rounded-xl border border-transparent transition-all duration-500 group-hover:border-brown"
	>
		<img
			src={guest.photo}
			alt={`Portrait of ${guest.name}`}
			class="mb-4 h-full w-full object-cover transition-all duration-500 group-hover:scale-[1.07]"
		/>

		<div
			class="absolute bottom-2 right-2 flex aspect-square w-7 items-center justify-center rounded bg-white text-sm text-brown md:bottom-5 md:right-5 md:w-10 md:rounded-lg md:text-base"
		>
			{number}
		</div>
	</div>

	<p class="mb-2 mt-4 line-clamp-1 w-full font-playfair font-bold text-brown group-hover:underline">
		{title}
	</p>
	<div class="flex flex-wrap items-start justify-between lg:gap-10">
		<p class="mr-4 text-sm uppercase">{guest.name}</p>
		<p class="shrink-0 text-sm">{date}</p>
	</div>
</a>
