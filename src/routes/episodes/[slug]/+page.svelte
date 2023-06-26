<script>
	import decor2 from '$lib/assets/decor-2.png';
	import Platforms from '$lib/components/Platforms.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
</svelte:head>

<div class="relative">
	<img src={decor2} alt="" class="pointer-events-none absolute left-0 top-20 -z-10 h-full" />
	<div class="container grid items-center gap-10 py-4 lg:grid-cols-5 xl:gap-20">
		<div class="mt-10 lg:col-span-3">
			<h1 class="mb-4 max-w-lg text-4xl font-bold text-brown xl:text-5xl">
				{data.meta.title}
			</h1>

			<div class="flex items-center gap-2">
				<img
					src={data.meta.guest.photo}
					alt=""
					class="aspect-square w-10 flex-shrink-0 overflow-hidden rounded-lg border border-brown/30 object-cover object-top"
				/>

				<p>{data.meta.guest.name}</p>
			</div>

			<Platforms />

			<div class="prose mt-10 lg:mt-20">
				<svelte:component this={data.content} />
			</div>
		</div>

		<div class="lg:col-span-2">
			<audio controls>
				<source src={data.meta.audio} />
				Your browser does not support the audio element.
			</audio>

			<div class="mt-10 aspect-video w-full border" />
		</div>
	</div>
</div>
