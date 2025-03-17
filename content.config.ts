import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        characters: defineCollection({
            type: 'page',
            source: 'characters/**/*.md'
        })
    }
})