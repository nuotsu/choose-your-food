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
		padding: 2rem 1rem 1.5rem;
		border-radius: 5px;
		background-color: #fff;
	}

	h2 {
		position: absolute;
		left: -0.5rem;
		top: 0;
		padding: 0.5em 1em;
		transform: translateY(-50%);
		border-radius: 4em;
		background-color: inherit;
		box-shadow: 0 5px 5px #0001;
	}
</style>

<script>
	export let title
</script>
