<script setup>
const { data } = await useAsyncData('navigation', () => queryCollectionNavigation('data', ['description', 'meta']))
</script>

<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <slot />
      <Collection :data="data[0].children" />
    </main>
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