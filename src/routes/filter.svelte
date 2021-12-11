<Section title="New Preset">
	<div class="filter"><Prices/></div>
	<div class="filter"><Categories/></div>
	<div class="filter"><Distance/></div>
	<div class="filter"><Selections/></div>
</Section>

<PresetList/>

<section class="actions">
	<a href="/results" class="action with-icon">
		Find food!
		<ArrowR/>
	</a>

	<div class="cancel-wrapper">
		<a href="/pre-filter" class="cancel">Cancel</a>
	</div>
</section>

<style>
	.filter + .filter {
		margin-top: 1.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid #eee;
	}

	.actions {
		display: grid;
		gap: 1rem;
		margin-block: 2rem 3rem;
	}

	.action {
		font-size: 1.2em;
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
	import PresetList from '$lib/presets/PresetList.svelte'
	import ArrowR from '$icons/ArrowR.svelte'
</script>
