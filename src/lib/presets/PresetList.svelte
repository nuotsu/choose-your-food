<section>
	<a href="#1" class="button">Preset 1</a>
	<a href="#2" class="button">Preset 2</a>
	<a href="#3" class="button">Preset 3</a>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.5rem;
		margin-top: 1rem;
	}

	.button {
		padding-inline: 0.5em;
	}
</style>
