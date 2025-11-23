<script setup lang="ts">
const nav = [
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
    "icon": "visible"
  },
  {
    "title": "Joueurs",
    "path": "/joueurs",
    "icon": "users",
    "disabled": true
  },
]
</script>

<template>
  <div id="navigation-container">

    <!-- Desktop navigation -->
    <nav>
      <ul>
        <li class="logo">
          <NuxtLink to="/">
            Asema
          </NuxtLink>
        </li>
        <li v-for="page in nav">
          <NuxtLink :to="page.path"
                    :aria-disabled="page.disabled ? true : false"
                    :tabindex="page.disabled ? -1 : 0">
            <Icon :name="'pixelarticons:' + page.icon" />
            {{ page.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>

  </div>
</template>

<style scoped>
/********************************
* Desktop
********************************/
#navigation-container {
  height: 100%;
}

nav {
  height: 100%;
  border-right: 1px solid var(--color-separator);
}

ul {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}


li {
  width: 100%;
  list-style: none;

  &:has(a[aria-disabled="true"]) {
    cursor: not-allowed;
  }

  &.logo a {
    font-size: var(--font-size-l);
  }
}

a {
  display: inline-block;
  width: 100%;
  padding: 0.5rem 1rem;
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
@media (max-width: 600px) {
  nav {
    border-bottom: 1px solid var(--color-separator);
  }

  .logo {
    display: none;
  }

  ul {
    flex-direction: row;
    justify-content: space-around;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--space-xs);

    font-family: var(--font-family-text);
    font-size: var(--font-size-xs);
    font-weight: bold;
  }

  .iconify {
    display: block;
    margin-bottom: var(--space-xxs);
    font-size: var(--font-size-l);
  }
}

.router-link-active,
.parent-active-class {
  color: var(--color-link-active)
}
</style>