import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import mkcert from 'vite-plugin-mkcert';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [mkcert(), enhancedImages(), sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		host: 'contoso.com',
		proxy: {}
	}
});
