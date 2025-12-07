<script setup>
// Called before the page is rendered
// Validate the page exists
definePageMeta({
  async validate(route) {
    const { data: page } = await useAsyncData(`${route.path}_page`, () => {
      return queryCollection('data').path(route.path).first()
    })
    return page.value !== null
  }
})

const route = useRoute()
const { data: page } = await useAsyncData(`${route.path}_page`, () => {
  return queryCollection('data').path(route.path).first() || {}
})

/********************************
* WIP
********************************/

/**
// Apply a layout based on the page's metadata
const defaultCollectionLayouts = ["lore"]

let layout = page.value?.meta?.layout

if (defaultCollectionLayouts.includes(route.path.replace(/^\//, "")) && layout === undefined) {
  layout = "collection"
}

layout = layout || "default"
**/

</script>

<template>
  <main>
    <Breadcrumbs />
    <NuxtLayout name="default"
                fallback="default"
                :page="page">
      <slot />
    </NuxtLayout>
  </main>
</template>