<div class="rank" data-rank={rank}>{rank}</div>

<style>
	.rank {
		position: absolute;
		left: -0.5rem;
		top: 0;
		transform: translateY(-50%);
		display: grid;
		place-content: center;
		width: 2em;
		height: 2em;
		border-radius: 100%;
		background-color: #fff;
		color: var(--orange);
	}

	.rank[data-rank="1"] { background-color: gold; }
	.rank[data-rank="2"] { background-color: silver; }
	.rank[data-rank="3"] { background-color: #cd7f32 ; }

	.rank[data-rank="1"],
	.rank[data-rank="2"],
	.rank[data-rank="3"] {
		color: #fff;
	}
</style>

<script>
	export let rank
</script>
