import { defineCollection, z } from "astro:content";

const series = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.string(),
        nombre: z.string(),
        poster: z.string().url(),
        background: z.string().url(),
        año: z.number(),
        descripcion: z.string(),
        generos: z.array(z.string()),
        rating: z.number().optional().nullable(),
        tipo: z.string(),
        temporadas: z.array(z.object({
            numero: z.number(),
            episodios: z.array(z.object({
                numero: z.number(),
                nombre: z.string().nullable(),
                poster: z.string().url().nullable(),
                video: z.string().url()
            }))
        }))
    })
});

const movies = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.string(),
        nombre: z.string(),
        poster: z.string().url(),
        background: z.string().url(),
        año: z.number(),
        descripcion: z.string(),
        generos: z.array(z.string()),
        rating: z.number(),
        duracion: z.string(),
        tipo: z.string(),
        video: z.string().url()
    })
});

export const collections = { 'series': series, 'peliculas': movies };