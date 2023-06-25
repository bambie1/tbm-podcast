<script>
	import decor2 from '$lib/assets/decor-2.png';

	export let data;
</script>

<svelte:head>
	<title>The Business Mindset Podcast | By SoPlugged</title>
</svelte:head>

<div class="relative">
	<img src={decor2} alt="" class="pointer-events-none absolute left-0 top-20 -z-10 h-full" />
	<div class="container grid items-center gap-10 py-4 lg:grid-cols-2 xl:gap-20">
		<div class="mt-10">
			<h1 class="mb-4 max-w-lg text-4xl font-bold text-brown xl:text-6xl">
				{data.meta.title}
			</h1>

			<div class="prose">
				<svelte:component this={data.content} />
			</div>
		</div>
	</div>
</div>
