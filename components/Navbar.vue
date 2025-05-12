<script setup lang="ts">
const nav = [
  { "title": "Home", "path": "/" },
  { "title": "Personnages", "path": "/characters" },
  { "title": "Lore", "path": "/lore" }
]
</script>

<template>
  <header>
    <nav>
      <ul>
        <li v-for="page in nav">
          <NuxtLink :to="page.path"
                    :class="page.path == '/' || { 'parent-active-class': $route.path.startsWith(page.path) }">
            {{ page.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
}


li {
  list-style: none;
}

a {
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-text);
  text-decoration: none;
}

.router-link-active,
.parent-active-class {
  color: var(--color-link-active)
}
</style>