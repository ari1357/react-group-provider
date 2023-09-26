// extarnal
import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react-swc';
import type { InlineConfig } from 'vitest';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'React Group Provider',
			fileName: 'index'
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React'
				}
			}
		}
	},
	test: {
		globals: true,
		environment: 'jsdom'
	}
});
