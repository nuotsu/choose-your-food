<fieldset>
	<select name="selections">
		{#each selections as selection}
			<option value={selection} selected={selection == 3}>
				{selection} Selection<!--
				-->{#if selection != 1}s{/if}
			</option>
		{/each}
	</select>
</fieldset>

<style>
	select {
		width: 100%;
		text-align: center;
	}
</style>

<script>
	let selections = [...Array(5).keys()].map(i => i + 1);
</script>
