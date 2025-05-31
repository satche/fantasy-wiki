<script setup lang="ts">
const { data } = await useAsyncData('navigation', () => queryCollectionNavigation('data', ['description', 'meta']))
</script>

<template>
  <div>
    <slot />
    <Collection :data="data?.find(item => item.path === $route.path)?.children || []" />
  </div>
</template>