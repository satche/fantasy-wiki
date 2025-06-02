<script setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('data').path(route.path).first()
})
</script>

<template>
  <div class="collection-layout">
    <div class="markdown">
      <ContentRenderer v-if="page"
                       :value="page" />
    </div>
    <div class="collection-container">
      <Collection :route="route.path" />
    </div>
  </div>
</template>