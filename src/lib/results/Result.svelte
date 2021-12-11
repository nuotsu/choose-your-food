<section>
	<Rank {rank} />

	<div class="chips">
		<Chip>{category}</Chip>
		<Chip>{price}</Chip>
		<Chip>{distance}mi</Chip>
	</div>

	<div class="bottom">
		<Images/>
		<Go/>
	</div>
</section>

<style>
	section {
		position: relative;
		padding: 1rem;
		margin-top: 2rem;
		border-radius: 5px;
		background-color: #fff;
	}

	.chips {
		display: flex;
		flex-wrap: wrap;
		justify-content: end;
		gap: 0.25em;
	}

	.bottom {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 0.5rem;
		margin-top: 1rem;
		padding-top: 1rem;
		border-top: 1px solid #eee;
	}
</style>

<script>
	import Rank from './Rank.svelte'
	import Chip from '$lib/ui/Chip.svelte'
	import Images from './Images.svelte'
	import Go from './Go.svelte'

	export let rank, category, price, distance
</script>
