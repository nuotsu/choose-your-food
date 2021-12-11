<svelte:head>
	<title>{title}</title>
</svelte:head>

<main>
	<h1>
		<a href="/">{title}</a>
	</h1>

	<slot></slot>

	<Footer/>
</main>

<style>
	main {
		max-width: 414px;
		margin-inline: auto;
	}

	h1 {
		padding-block: 1rem;
		font-size: 1.5em;
		font-weight: bold;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>

<script>
	import Footer from '$lib/Footer.svelte'

	let title = 'Choose Your Food'
</script>
