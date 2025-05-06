import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        data: defineCollection({
            type: "page",
            source: "**/*.md"
        }),
    }
})