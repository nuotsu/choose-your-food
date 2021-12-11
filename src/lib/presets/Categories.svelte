<div class="categories">
	<div class="no-scrollbar">
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
		pointer-events: none;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		width: 2rem;
		background-image: linear-gradient(to left, #fff, #fff0);
	}

	.categories fieldset {
		display: flex;
		gap: 0.5em;
	}
</style>

<script context="module">
	export const categories = [
		'Asian',
		'American',
		'Italian',
		'Mexican',
		'French',
	]
</script>

<script>
	import Checkbox from '$lib/ui/Checkbox.svelte'
</script>
