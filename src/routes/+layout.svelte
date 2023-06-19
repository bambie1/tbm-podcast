<script>
	import '../app.css';
	import logo from '$lib/assets/tbm-logo.png';
</script>

<header class="container flex items-center justify-between gap-10 py-4">
	<img alt="TBM logo" src={logo} class="h-16 w-[12rem] object-cover" />

	<div class="flex items-center gap-4">
		<a href="/#about">About</a>
	</div>
</header>

<main class="flex-1">
	<slot />
</main>

<footer class="container mt-20 flex items-center justify-between gap-10 py-4">
	<p>Copyright. 2023</p>
	<p>
		A <a href="https://www.soplugged.com" target="_blank" class="text-brown underline">SoPlugged</a>
		production
	</p>
</footer>
