<script>
	export let data;
</script>

<div>
	<div class="container">
		Episodes
		<ul class="mt-6 flex flex-col gap-2">
			{#each data.recentEpisodes as episode}
				<li
					class={'group relative rounded-xl border-b border-brown/10 transition duration-150 last-of-type:border-none hover:border-transparent'}
				>
					<a
						href={episode.audio ? `/episodes/${episode.slug}` : ''}
						class={`group inline-flex w-full items-center gap-4 overflow-hidden p-4 py-3 ${
							episode.audio ? '' : ' pointer-events-none'
						}`}
					>
						<img
							src={episode.guest.photo}
							alt={`Portrait of ${episode.guest.name}`}
							class="aspect-square w-10 flex-shrink-0 overflow-hidden rounded-lg border border-brown/30 object-cover object-top"
						/>
						<div>
							<p>{episode.guest.name}</p>
							<p class="line-clamp-1 w-full font-playfair text-lg font-bold text-brown lg:text-xl">
								{episode.title}
							</p>
						</div>
					</a>

					{#if episode.audio}
						<button
							class="absolute left-4 top-1/2 z-10 flex aspect-square w-10 -translate-y-1/2 items-center justify-center rounded-lg bg-primary opacity-0 transition-all duration-150 group-hover:opacity-100"
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
