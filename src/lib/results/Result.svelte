<section class:ranked>
	{#if rank}
		<Rank {rank} />
	{/if}

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
	}

	section:not(.ranked):not(:first-child) {
		margin-top: 1.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid #eee;
	}

	.ranked {
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
	}

	.ranked .bottom {
		padding-top: 1rem;
		border-top: 1px solid #eee;
	}
</style>

<script>
	import Rank from './Rank.svelte'
	import Chip from '$lib/ui/Chip.svelte'
	import Images from './Images.svelte'
	import Go from './Go.svelte'

	export let rank, category, price, distance, ranked
</script>
