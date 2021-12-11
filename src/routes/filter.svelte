<Section title="New Preset">
	<div class="filter"><Prices/></div>
	<div class="filter"><Categories/></div>
	<div class="filter"><Distance/></div>
	<div class="filter"><Selections/></div>
</Section>

<section>
	<a href="#1">Preset 1</a>
	<a href="#2">Preset 2</a>
</section>

<section class="actions">
	<a href="/results" class="action">Go!</a>

	<div class="cancel-wrapper">
		<a href="/pre-filter" class="cancel">Cancel</a>
	</div>
</section>

<style>
	.filter + .filter {
		margin-top: 1.5rem;
	}

	.actions {
		display: grid;
		gap: 1rem;
		margin-top: 2rem;
	}

	.cancel-wrapper {
		text-align: center;
	}

	.cancel {
		display: inline-block;
		color: inherit;
		text-align: center;
		text-decoration: none;
	}
</style>

<script>
	import Section from '$lib/ui/Section.svelte'
	import Prices from '$lib/presets/Prices.svelte'
	import Categories from '$lib/presets/Categories.svelte'
	import Distance from '$lib/presets/Distance.svelte'
	import Selections from '$lib/presets/Selections.svelte'
</script>
