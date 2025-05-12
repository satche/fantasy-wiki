<script setup lang="ts">
const { data } = await useAsyncData('navigation', () => queryCollectionNavigation('data', ['description', 'meta']))
</script>

<template>
  <div>
    <slot />
    <Collection :data="data.find(item => item.path === $route.path).children" />
  </div>
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