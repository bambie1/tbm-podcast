<script>
	import clsx from 'clsx';

	/** @type {import('$lib/types').Episode} */
	export let episode;

	const { guest, title, date, youtube, number } = episode;
</script>

<a
	href={!youtube ? '' : youtube}
	target="_blank"
	class={clsx(
		'group flex items-center gap-4 border-b border-brown/30 pb-2 transition duration-150 ',
		!youtube ? 'pointer-events-none' : 'hover:border-brown'
	)}
>
	<div
		class="flex aspect-square w-10 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-brown bg-gradient-to-b from-brown/20 to-pink/20 object-cover text-xl font-bold transition-all duration-150 group-hover:rounded-lg group-hover:bg-pink/40 lg:w-20"
	>
		{number}
	</div>

	<div class="flex-1">
		<h3 class="mb-2 text-ellipsis font-playfair text-xl font-semibold text-brown">
			{!youtube ? 'Coming soon...' : title}
		</h3>
		<div class="flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-2 lg:gap-x-10">
			<p class="text-gray-600">{guest.name}</p>
			<p class="text-sm uppercase">{date}</p>
		</div>
	</div>
</a>
