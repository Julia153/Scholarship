import preprocessor from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-node'

const config = {
	preprocess: [
		preprocessor(),
	],
	kit: {
		target: '#svelte',
		adapter: adapter()
	}
}

export default config