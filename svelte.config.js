import preprocessor from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'

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