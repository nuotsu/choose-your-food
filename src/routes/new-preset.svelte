<Section title="Filter">
	<div class="filter"><Prices/></div>
	<div class="filter"><Categories/></div>
	<div class="filter"><Selections/></div>
</Section>

<a href="/pre-filter">Pre-filters</a>

<style>
	.filter + .filter {
		margin-top: 1rem;
	}
</style>

<script>
	import Section from '$lib/Section.svelte'
	import Prices from '$lib/presets/Prices.svelte'
	import Categories from '$lib/presets/Categories.svelte'
	import Selections from '$lib/presets/Selections.svelte'
</script>
