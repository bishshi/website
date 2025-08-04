// @ts-check
import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import umami from "@yeskunall/astro-umami";

// https://astro.build/config
export default defineConfig({
	site: 'https://www.class612.bond',
	integrations: [expressiveCode(),mdx(), sitemap(), 
		umami(
			{   hostUrl : "https://statistic.class612.bond/",
				id: "44a27b01-3ea1-4a22-bb55-9a778dead980",
			 }
		)

	],
});
