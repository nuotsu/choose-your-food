<div class="categories">
	<div>
		<fieldset>
			{#each categories as category}
				<Checkbox name="category" label={category} />
			{/each}
		</fieldset>
	</div>
</div>

<style>
	.categories {
		position: relative;
	}

	.categories > div {
		overflow-x: auto;
	}

	.categories::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		width: 1rem;
		background-image: linear-gradient(to left, #fff, #fff0);
	}

	.categories fieldset {
		display: flex;
		gap: 0.5em;
	}
</style>

<script>
	import Checkbox from '$lib/Checkbox.svelte'

	let categories = [
		'Asian',
		'American',
		'Italian',
		'Mexican',
		'French',
	]
</script>
