<script setup lang="ts">
interface TimelineItem {
  path: string;
  title: string;
  description: string;
  img: string;
}

const props = defineProps<{ data: Array<TimelineItem> }>();
</script>

<template>
    <ul class="timeline">
      <li
        v-for="item in props.data"
        :key="item.path"
      >
          <NuxtLink :to="item.path">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
          </NuxtLink>
      </li>
    </ul>
</template>

<style scoped>

ul {
  --timeline-color: var(--color-text-soft);
  --timeline-font-size: var(--font-size-l);
  --timeline-padding: 30px;
  --timeline-width: 1px;
  --timeline-dot-size: 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin: 0;
  padding-left: var(--timeline-padding); 
  
  &::before {
    content: '';
    width: var(--timeline-width);
    height: 100%;
    position: absolute;
    background: var(--timeline-color);
    left: calc(var(--timeline-padding) / 2);
  }

  &::after {
    content: '';
    width: calc(var(--timeline-dot-size) / 1.5);
    height: calc(var(--timeline-dot-size) / 1.5);
    background: var(--timeline-color);
    border-radius: 50%;
    position: absolute;
    left: calc(var(--timeline-padding) / 2 - var(--timeline-dot-size) / 1.5 / 2 + var(--timeline-width) / 2);
    bottom: 0;
  }
}

li {
  display: flex;
  align-items: flex-start;
  position: relative;
  margin-bottom: 32px;

  &::before {
    content: '';
    width: var(--timeline-dot-size);
    height: var(--timeline-dot-size);;
    background: var(--timeline-color);
    border-radius: 50%;
    position: absolute;
    left: calc(var(--timeline-padding) * -1 / 2 - var(--timeline-dot-size) / 2 + var(--timeline-width) / 2);
    top: calc(var(--timeline-font-size) / 3);
  }
}

h2 {
  font-size: var(--timeline-font-size);
  margin-bottom: var(--space-xs);
}

p {
  margin: 0;
}

a {
  text-decoration: none;
}
</style>