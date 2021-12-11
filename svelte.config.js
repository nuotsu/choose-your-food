import path from 'path'
import adapter from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		target: '#svelte',

		vite: {
			resolve: {
				alias: {
					$icons: path.resolve('./src/icons')
				}
			}
		}
	}
}

export default config
