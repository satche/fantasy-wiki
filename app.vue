<template>
  <Navbar />
  <NuxtPage />
</template>

<style>
#app {
  display: grid;
  grid-template-columns: 200px 1fr;
  height: 100vh;
}

main {
  width: 100%;
  max-width: 680px;
  margin: var(--space) auto;
  padding: 0 var(--space);
}

@media (max-width: 600px) {
  #app {
    display: block;
    grid-template-columns: none;
    height: auto;
  }

  main {
    width: 100%;
  }
}
</style>