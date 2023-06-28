<script>
	import '../app.css';
	import logo from '$lib/assets/tbm-logo.svg';

	const navLinks = [
		{ title: 'About', href: '#about' },
		{ title: 'Episodes', href: '#episodes' },
		{
			title: 'Join as a Guest',
			href: 'https://docs.google.com/forms/d/18X65OJ4XbRhaEIa_Ge-ByqCgj5YkHG4CBnsvf_N_o60/viewform',
			isExternal: true
		}
	];
</script>

<header class="container flex items-center justify-between gap-10 py-4">
	<a href="/">
		<img alt="TBM logo" src={logo} class="h-8 object-cover lg:h-16" />
	</a>

	<div class="flex items-center gap-6">
		<ul class="hidden items-center gap-6 lg:flex">
			{#each navLinks as navItem}
				<li>
					<a href={navItem.href} target={navItem.isExternal ? '_blank' : '_self'}>{navItem.title}</a
					>
				</li>
			{/each}
		</ul>
		<a
			href="https://docs.google.com/forms/d/18X65OJ4XbRhaEIa_Ge-ByqCgj5YkHG4CBnsvf_N_o60/viewform"
			target="_blank"
			class="bg-brown p-4 text-white">Send a question</a
		>
	</div>
</header>

<main class="mx-auto w-full max-w-7xl flex-1 lg:px-4">
	<slot />
</main>

<footer class="container mt-20 flex items-center justify-between gap-10 py-4">
	<p>Copyright. 2023</p>
	<p>
		A <a href="https://www.soplugged.com" target="_blank" class="text-brown underline">SoPlugged</a>
		production
	</p>
</footer>
