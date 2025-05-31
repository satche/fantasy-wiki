<script setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('data').path(route.path).first()
})

const defaultCollectionLayouts = ["lore"]

const layout = computed(() => {
  const pageLayout = page.value?.meta?.layout

  if (defaultCollectionLayouts.includes(route.path.replace(/^\//, "")) && pageLayout === undefined) {
    return "collection"
  }

  return pageLayout ?? "default"
})
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