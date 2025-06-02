<script setup lang="ts">
const nav = [
  {
    "title": "Accueil",
    "path": "/",
    "icon": "home"
  },
  {
    "title": "Sessions",
    "path": "/sessions",
    "icon": "book",
    "disabled": true
  },
  {
    "title": "Personnages",
    "path": "/personnages",
    "icon": "user",
    "disabled": true
  },
  {
    "title": "Lieux",
    "path": "/lieux",
    "icon": "pin",
    "disabled": true
  },
  {
    "title": "Lore",
    "path": "/lore",
    "icon": "book"
  },
  {
    "title": "Joueurs",
    "path": "/joueurs",
    "icon": "users",
    "disabled": true
  },
]

const menuOpen = ref(false);
</script>

<template>
  <header>

    <!-- Desktop navigation -->
    <nav id="desktop-navigation">
      <ul>
        <li v-for="page in nav">
          <NuxtLink :to="page.path"
                    :aria-disabled="page.disabled ? true : false"
                    :tabindex="page.disabled ? -1 : 0"
                    :class="page.path == '/' || { 'parent-active-class': $route.path.startsWith(page.path) }">
            <Icon :name="'pixelarticons:' + page.icon" />
            {{ page.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <!-- Hamburger button -->
    <div id="mobile-navigation_button_container">
      <button @click="menuOpen = !menuOpen"
              aria-label="Open menu"
              id="mobile-navigation_button">
        <Icon name="pixelarticons:menu" />
      </button>
    </div>

    <!-- Dialog mobile navigation -->
    <Transition name="fade">
      <dialog v-if="menuOpen"
              open
              @close="menuOpen = false"
              id="mobile-navigation_container">
        <nav id="mobile-navigation">
          <ul>
            <li v-for="page in nav"
                :key="page.path">
              <NuxtLink :to="page.path"
                        :aria-disabled="page.disabled ? true : false"
                        :tabindex="page.disabled ? -1 : 0"
                        @click="menuOpen = false"
                        :class="page.path == '/' || { 'parent-active-class': $route.path.startsWith(page.path) }">
                <Icon :name="'pixelarticons:' + page.icon" />
                {{ page.title }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </dialog>
    </Transition>
  </header>
</template>

<style scoped>
/********************************
* Desktop
********************************/
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

  font-family: var(--font-family-headings);

  &[aria-disabled="true"] {
    pointer-events: none;
    opacity: 0.25;
  }
}

.router-link-active,
.parent-active-class {
  color: var(--color-link-active)
}

dialog#mobile-navigation_container,
button#mobile-navigation_button {
  display: none;
}

/********************************
* Mobile
********************************/
@media (max-width: 768px) {
  dialog#mobile-navigation_container {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-background);
    border: none;
    padding: 1rem;
    z-index: 100;
  }

  nav#desktop-navigation {
    display: none;
  }

  ul {
    flex-direction: column;
    align-items: center;
  }

  li {
    width: 100%;
    text-align: center;
  }

  a {
    max-width: 100%;
    text-align: center;
  }

  #mobile-navigation_button_container {
    --mobile-navigation_button_padding: 1rem;
    --mobile-navigation_button_size: 3rem;

    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 200;
    background: var(--color-background-hard);
    width: 100%;
    height: calc(var(--mobile-navigation_button_size) / 2);
    padding-bottom: var(--mobile-navigation_button_padding);
  }

  button#mobile-navigation_button {
    display: block;
    position: absolute;
    top: calc(var(--mobile-navigation_button_size) * -1 / 2);
    right: calc(50% - (var(--mobile-navigation_button_size) / 2));
    width: var(--mobile-navigation_button_size);
    height: var(--mobile-navigation_button_size);
    ;
    background-color: var(--color-text);
    border: 5px solid var(--color-background);
    border-radius: 50%;
    cursor: pointer;
    z-index: 200;

    & .iconify {
      font-size: calc(var(--mobile-navigation_button_size) / 2);
      color: var(--color-background);
    }
  }
}
</style>