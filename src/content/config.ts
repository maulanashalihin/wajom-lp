import { defineCollection, z } from 'astro:content';

const tutorials = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    categoryLabel: z.string(),
    keywords: z.string(),
    duration: z.string(),
    number: z.string(),
    bgGradient: z.string(),
    icon: z.string(),
    publishDate: z.string(),
    author: z.string(),
  }),
});

export const collections = {
  tutorials,
};
