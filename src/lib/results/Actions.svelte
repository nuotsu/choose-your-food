<section>
	<a href="/filter" class="action with-icon">
		<Filter/>
		Filter
	</a>

	<button on:click={handleClick} class="action with-icon">
		More results
		<ChevronR/>
	</button>
</section>

<style>
	section {
		position: sticky;
		bottom: 0;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		width: 100vw;
		margin: 1rem calc(50% - 50vw) 0;
		padding: 0.5rem 1rem calc(1rem + env(safe-area-inset-bottom));
		box-sizing: border-box;
		background-color: var(--bg);
	}

	section::before {
		content: '';
		position: absolute;
		left: 0; right: 0;
		bottom: 100%;
		display: block;
		height: 1rem;
		background-image: linear-gradient(to top,
			var(--bg),
			transparent
		);
	}

	button {
		appearance: none;
		cursor: pointer;
		border: 0;
		font: inherit;
	}

	.action {
		padding-inline: 1em;
	}
</style>

<script>
	import Filter from '$icons/Filter.svelte'
	import ChevronR from '$icons/ChevronR.svelte'

	function handleClick() {
		window.scrollTo({ top: 0 })
		location.reload()
	}
</script>
