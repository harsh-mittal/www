import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const garden = defineCollection({
	loader: glob({ base: "../../content/notes", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string().max(60),
		description: z.string().optional(),
		publishDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		stage: z.enum(["seedling", "budding", "evergreen"]).default("seedling"),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

export const collections = { garden };
