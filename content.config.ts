import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        data: defineCollection({
            type: "page",
            source: {
                include: "**/*.md",
                exclude: [".trash/**", ".obsidian/**", "gm/**"],
            }
        }),
    }
})