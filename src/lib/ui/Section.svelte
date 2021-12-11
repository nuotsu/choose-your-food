<section>
	<h2>{title}</h2>

	<div>
		<slot></slot>
	</div>
</section>

<style>
	section {
		position: relative;
		margin-top: 2em;
		padding: 1rem;
		border-radius: 5px;
		background-color: #fff;
	}

	h2 {
		position: absolute;
		left: 0;
		top: 0;
		padding: 0.25em 1em;
		transform: translateY(-50%);
		background-color: inherit;
	}
</style>

<script>
	export let title
</script>
