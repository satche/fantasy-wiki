<script setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('data').path(route.path).first()
})

const defaultCollectionLayout = ["lore"]
let layout = page?.meta?.layout || "default"

if (defaultCollectionLayout.some(item => route.path === `/${item}`)) {
  layout = "collection"
}
</script>

<template>
  <main>
    <NuxtLayout :name="layout">
      <ContentRenderer v-if="page"
                       class="markdown"
                       :value="page" />
    </NuxtLayout>
  </main>
</template>