<script>
	import Platforms from '$lib/components/Platforms.svelte';
	import ashabiThumbnail from '$lib/assets/thumbnail.png';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
</svelte:head>

<div class="relative">
	<div class="container grid items-center gap-10 py-4 lg:grid-cols-5 xl:gap-20">
		<div class="mt-10 lg:col-span-3">
			<h1 class="mb-4 text-4xl font-bold text-brown xl:text-5xl">
				{data.meta.title}
			</h1>

			<div class="flex items-center gap-2">
				<img
					src={data.meta.guest.photo}
					alt={`Portrait of ${data.meta.guest.name}`}
					class="aspect-square w-10 flex-shrink-0 overflow-hidden rounded-lg border border-brown/30 object-cover"
				/>

				<p>{data.meta.guest.name}</p>
			</div>

			<Platforms />

			<div class="prose mt-10 lg:mt-20">
				<svelte:component this={data.content} />
			</div>
		</div>

		<div class="lg:col-span-2">
			<div class="mt-10 aspect-video w-full overflow-hidden rounded-lg border">
				<img src={ashabiThumbnail} alt="" />
			</div>
		</div>
	</div>
</div>
