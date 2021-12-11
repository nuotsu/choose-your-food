<div>
	<figure class="no-scrollbar">
		{#each Array(5) as img}
			<Image/>
		{/each}
		<Image/>
	</figure>
</div>

<style>
	div {
		position: relative;
		min-width: 0;
	}

	div::after {
		content: '';
		pointer-events: none;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		width: 1rem;
		background-image: linear-gradient(to left,
			rgba(255,255,255, 1) 0%,
			rgba(255,255,255, 0.3) 50%,
			rgba(255,255,255, 0.15) 65%,
			rgba(255,255,255, 0.075) 75.5%,
			rgba(255,255,255, 0.037) 82.85%,
			rgba(255,255,255, 0.019) 88%,
			rgba(255,255,255, 0) 100%
		);
	}

	figure {
		display: flex;
		gap: 0.5rem;
		overflow-x: auto;
	}
</style>

<script>
	import Image from './Image.svelte'
</script>
