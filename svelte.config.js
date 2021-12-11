import path from 'path'
import adapter from '@sveltejs/adapter-auto'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		target: '#svelte',

		vite: {
			resolve: {
				alias: {
					$data: path.resolve('./src/data')
				}
			}
		}
	}
}

export default config
