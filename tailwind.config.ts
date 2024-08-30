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
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}'),
		'./node_modules/layerchart/**/*.{svelte,js}'
	],
	theme: {
		extend: {
			colors: {
				'surface-100': 'rgba(var(--theme-color-surface-100) / 1.0)',
				'surface-200': 'rgba(var(--theme-color-surface-200) / 1.0)',
				'surface-300': 'rgba(var(--theme-color-surface-300) / 1.0)',
				'surface-content': 'rgba(var(--theme-color-surface-content) / 0.1)',
			},
			// borderRadius: {
			// 	lg: "var(--radius)",
			// 	md: "calc(var(--radius) - 2px)",
			// 	sm: "calc(var(--radius) - 4px)"
			// },
			// fontFamily: {
			// 	// sans: ["sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
			// 	sans: ['Graphik', 'sans-serif'],
      		// 	serif: ['Merriweather', 'serif'],
			// },
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
