import { defineCollection, z } from 'astro:content';

const onCampusCollection = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    role: z.string(),
    ctc: z.string().optional().default('N/A'),
    stipend: z.string().optional().default('N/A'),
    deadline: z.string().optional().default('N/A'),
    batch: z.string().optional().default('N/A'),
    applicationLink: z.string().url().or(z.string().optional()),
  }),
});

const offCampusCollection = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    role: z.string(),
    batch: z.string(),
    applicationLink: z.string().url(),
    notes: z.string().optional(),
  }),
});

export const collections = {
  'on-campus': onCampusCollection,
  'off-campus': offCampusCollection,
};
