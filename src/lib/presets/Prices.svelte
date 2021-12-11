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

<script context="module">
	export const prices = [
		'$',
		'$$',
		'$$$',
		'$$$$',
	]
</script>

<script>
	import Checkbox from '$lib/ui/Checkbox.svelte'
</script>
