// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
<<<<<<< HEAD
	site: "https://colabhd.github.io",
	base: "/open-journals-data/",
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
=======
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
>>>>>>> b2c0248 (ajuste nome pasta)
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
