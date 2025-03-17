<script setup lang="ts">
definePageMeta({ layout: 'collection' })

const { data } = await useAsyncData('navigation', () => {
  const collection = queryCollectionNavigation('characters', ['description', 'meta'])
  return collection
})
</script>

<template>
  <main>

    <template v-if="$route.path === '/characters'">
      <Collection :data="data[0].children" />
    </template>

    <template v-else>
      <NuxtPage />
    </template>

  </main>
</template>

<style scoped>
aside {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background: var(--color-background);
  padding: 1rem;
}
</style>