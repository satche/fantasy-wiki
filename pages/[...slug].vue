<script setup>
const route = useRoute()
const { data: page } = await useAsyncData(`${route.path}_page`, () => {
  return queryCollection('data').path(route.path).first()
})

const defaultCollectionLayouts = ["lore"]

let layout = page.value?.meta?.layout

if (defaultCollectionLayouts.includes(route.path.replace(/^\//, "")) && layout === undefined) {
  layout = "collection"
}

layout = layout || "default"
</script>

<template>
  <main>
    <Breadcrumbs />
    <NuxtLayout :name="layout"
                fallback="default"
                :page="page">
      <slot />
    </NuxtLayout>
  </main>
</template>