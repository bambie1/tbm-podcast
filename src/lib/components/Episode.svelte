<script>
	import clsx from 'clsx';

	import leon from '$lib/assets/leon_2.jpg';

	/** @type {import('$lib/types').Episode} */
	export let episode;

	const { guest, title, date, youtube } = episode;
</script>

<a
	href={!youtube ? '' : youtube}
	target="_blank"
	class={clsx(
		'group flex items-center gap-4 border-b border-brown/30 pb-2 transition duration-150 ',
		!youtube ? 'pointer-events-none' : 'hover:border-brown'
	)}
>
	{#if youtube}
		<img
			src={guest.photo || leon}
			alt=""
			class="aspect-square w-10 shrink-0 overflow-hidden rounded-sm border border-brown object-cover transition-all duration-150 group-hover:rounded-lg lg:w-20"
		/>
	{/if}

	{#if !youtube}
		<div
			class="aspect-square w-10 shrink-0 animate-pulse rounded-sm border border-brown bg-gradient-to-b from-brown to-pink object-cover opacity-25 lg:w-20"
		/>
	{/if}
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
