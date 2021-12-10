<fieldset class="prices">
	{#each prices as price}
		<Checkbox name="price" label={price} />
	{/each}
</fieldset>

<style>
	.prices {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;
	}
</style>

<script>
	import Checkbox from '$lib/Checkbox.svelte'

	let prices = [
		'$',
		'$$',
		'$$$',
		'$$$$',
	]
</script>
