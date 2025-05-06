<script setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryCollection('data').path(route.path).first())
</script>

<template>
  <main> 
    <NuxtLayout :name="page?.meta?.layout">
      <ContentRenderer v-if="page" :value="page" />
    </NuxtLayout>
  </main>
</template>