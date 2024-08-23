import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { nateTheme } from './src/nateTheme';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}', 
		join(require.resolve('@skeletonlabs/skeleton'), 
		'../**/*.{html,js,svelte,ts}'),
		'./node_modules/layerchart/**/*.{svelte,js}'
	],
	theme: {
		extend: {
			colors: {
				'surface-100': 'rgb(var(--theme-color-surface-100) / <alpha-value>)',
				'surface-200': 'rgb(var(--theme-color-surface-200) / <alpha-value>)',
				'surface-300': 'rgb(var(--theme-color-surface-300) / <alpha-value>)',
				'surface-content': 'rgb(var(--theme-color-surface-content) / <alpha-value>)',
			},
		},
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				// preset: [
				// 	{
				// 		name: 'skeleton',
				// 		enhancements: true,
				// 	},
				// ],
				custom: [
					nateTheme,
				],
			},
		}),
	],
} satisfies Config;
