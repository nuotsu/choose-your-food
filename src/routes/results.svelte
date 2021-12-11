{#each Array(5) as _, i}
	<Result ranked
		rank={i+1}
		category={getRandom(categories)}
		price={getRandom(prices)}
		distance={getRandomDistance(min, max)}
	/>
{/each}

<Actions/>

<script>
	import Result from '$lib/results/Result.svelte'
	import Actions from '$lib/results/Actions.svelte'
	import { categories } from '$lib/presets/Categories.svelte'
	import { prices } from '$lib/presets/Prices.svelte'
	import { min, max } from '$lib/presets/Distance.svelte'
	import { getRandom, getRandomDistance } from '$lib/utils'
</script>
