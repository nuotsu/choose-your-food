<Section title="History">
	{#each Array(5) as _, i}
		<Result
			category={getRandom(categories)}
			price={getRandom(prices)}
			distance={getRandomDistance(min, max)}
		/>
	{/each}
</Section>

<script>
	import Section from '$lib/ui/Section.svelte'
	import Result from './Result.svelte'
	import { categories } from '$lib/presets/Categories.svelte'
	import { prices } from '$lib/presets/Prices.svelte'
	import { min, max } from '$lib/presets/Distance.svelte'
	import { getRandom, getRandomDistance } from '$lib/utils'
</script>
