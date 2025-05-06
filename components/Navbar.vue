<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/characters">Personnages</NuxtLink>
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
</style>