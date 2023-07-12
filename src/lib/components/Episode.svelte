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
			class="absolute bottom-5 right-5 flex aspect-square w-10 items-center justify-center rounded-lg bg-white text-brown"
		>
			{number}
		</div>
	</div>

	<p class="mb-2 mt-4 font-playfair font-bold text-brown group-hover:underline">{title}</p>
	<div class="flex items-start justify-between gap-10">
		<p class="text-sm uppercase">{guest.name}</p>
		<p class="shrink-0 text-sm">{date}</p>
	</div>
</a>
