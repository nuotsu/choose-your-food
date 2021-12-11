<fieldset>
	<input type="range" {min} {max} value={5}>
</fieldset>

<style>
	fieldset {
		display: grid;
		place-content: center;;
		padding: 1rem;
		border: 1px dashed lightgray;
	}
</style>

<script context="module">
	export const min = 0
	export const max = 20
</script>
