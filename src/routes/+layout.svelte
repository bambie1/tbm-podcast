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
					<a
						href={navItem.href}
						target={navItem.isExternal ? '_blank' : '_self'}
						class="inline-flex items-center gap-1 border-b border-transparent transition duration-150 hover:border-brown"
						>{navItem.title}
						{#if navItem.isExternal}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="h-4 w-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
								/>
							</svg>
						{/if}
					</a>
				</li>
			{/each}
		</ul>
		<a
			href="https://docs.google.com/forms/d/18X65OJ4XbRhaEIa_Ge-ByqCgj5YkHG4CBnsvf_N_o60/viewform"
			target="_blank"
			class="bg-brown p-4 text-white transition-all duration-150 hover:rounded-md hover:shadow-md"
			>Send a question</a
		>
	</div>
</header>

<main class="mx-auto w-full max-w-7xl flex-1 lg:px-4">
	<slot />
</main>

<footer class="container mt-10 flex items-center justify-between gap-10 py-4">
	<p>Copyright. {new Date().getFullYear()}</p>
	<p>
		A <a href="https://www.soplugged.com" target="_blank" class="text-brown underline">SoPlugged</a>
		production
	</p>
</footer>
