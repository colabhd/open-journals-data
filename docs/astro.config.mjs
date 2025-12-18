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
						{
							label: "Conheça nossa equipe",
							slug: "sobre/equipe",
						},
						{
							label: "Perguntas Frequentes",
							slug: "sobre/faq",
						}
					],
				},
				{
					label: "Informações",
					items: [
						{
							label: "Metadados",
							slug: "infos/metadados",
						},
						{
							label: "Diretórios",
							slug: "infos/diretorios",
						},
						{
							label: "Revistas",
							slug: "infos/revistas",
						},
						
					],
				},
				{
					label: 'Roadmap',
					items: [

						{ 
							label: 'Roadmap Atual', 
							slug: 'roadmap/rmatual' 
						},
						{
							label: 'Roadmap Final',
							slug: 'roadmap/rmfinal'
						},
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