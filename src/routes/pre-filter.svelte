<Section title="Filter">
	<ul>
		<li><a href="/filter" class="button">Preset 1</a></li>
		<li><a href="/filter" class="button">Preset 2</a></li>
	</ul>

	<a href="/filter" class="action with-icon">
		<Plus/>
		New Preset
	</a>
</Section>

<History/>

<style>
	ul {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
		margin-bottom: 1.5rem;
	}

	a {
		box-sizing: border-box;
		width: 100%;
	}
</style>

<script>
	import Section from '$lib/ui/Section.svelte'
	import History from '$lib/results/History.svelte'
	import Plus from '$icons/Plus.svelte'
</script>
