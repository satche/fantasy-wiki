<script setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('data').path(route.path).first()
})
</script>

<template>
  <div>
    <ContentRenderer v-if="page"
                     :value="page" />
    <Collection :route="route.path" />
  </div>
</template>