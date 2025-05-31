<script setup lang="ts">
const nav = [
  { "title": "🏠 Accueil", "path": "/" },
  { "title": "📝 Sessions", "path": "/sessions", "disabled": true },
  { "title": "👥 Personnages", "path": "/personnages", "disabled": true },
  { "title": "🗺️ Lieux", "path": "/lieux", "disabled": true },
  { "title": "🎒 Objets", "path": "/objets", "disabled": true },
  { "title": "📖 Lore", "path": "/lore" },
  { "title": "👤 Joueurs", "path": "/joueurs", "disabled": true },
]
</script>

<template>
  <header>
    <nav>
      <ul>
        <li v-for="page in nav">
          <NuxtLink :to="page.path"
                    :aria-disabled="page.disabled ? true : false"
                    :tabindex="page.disabled ? -1 : 0"
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

  &:has(a[aria-disabled="true"]) {
    cursor: not-allowed;
  }
}

a {
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-text);
  text-decoration: none;

  &[aria-disabled="true"] {
    pointer-events: none;
    opacity: 0.25;
  }
}

.router-link-active,
.parent-active-class {
  color: var(--color-link-active)
}
</style>