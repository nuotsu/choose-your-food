<input {name} {id} type="checkbox" hidden>

<label for={id}>{label}</label>

<style>
	label {
		cursor: pointer;
		display: inline-block;
		padding: 0.25em 1em;
		border-radius: 5px;
		background-color: lightgray;
		color: #fff;
	}

	input:checked + label {
		background-color: var(--orange);
	}
</style>

<script>
	import slugify from 'slugify'

	export let name, label

	slugify.extend({ '$': '$' })

	let id = slugify(
		[name, label].join` `,
		{ lower: true },
	)
</script>
