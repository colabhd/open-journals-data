// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://open-journals-data.cppsunesp.org",
	base: "/",
	integrations: [
		starlight({
			title: 'Documentação',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/colabhd/open-journals-data' }],
			sidebar: [
				{
					label: "Documentação",
					items: [
						{
							label: "Introdução",
							slug: "sobre/introducao",
						},
					],
				},
				{
					label: "Informações",
					items: [
						{
							label: "Metadados",
							slug: "infos/metadados",
						},
						
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});