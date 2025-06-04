<script setup lang="ts">
const timelineHasLoaded = ref(false);

onMounted(async () => {
  const timeline = document.querySelector('.timeline');
  const listItems = timeline!.querySelectorAll('li>a');

  // Format the links as headings
  listItems.forEach(link => {
    const title = link.textContent;
    const href = link.getAttribute('href');
    const el = `
      <h2><a href='${href}'>${title}</a></h2>
    `;
    link.outerHTML = el;
  })

  // Query for the new headings (since outerHTML replaced the old nodes)
  const newListItems = timeline!.querySelectorAll('h2 > a');

  // Add descriptions
  for (const link of newListItems) {
    const href = link.getAttribute('href');
    const page = await queryCollection('data').path(href!).first();
    const description = page?.description || '';
    const el = `<p>${description}</p>`;
    link.parentElement!.insertAdjacentHTML('afterend', el);
  }

  timelineHasLoaded.value = true;
})
</script>

<template>
  <div class="timeline"
       v-show="timelineHasLoaded">
    <slot />
  </div>
</template>

<style scoped>
.timeline {
  --timeline-color: var(--color-text-soft);
  --timeline-padding: 30px;
  --timeline-width: 1px;
  --timeline-dot-size: 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
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

:slotted(ul) {
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: var(--space-xs);

}

:slotted(ul) li {
  position: relative;
  margin-bottom: 32px;
  list-style: none;
}

:slotted(ul) li::before {
  content: '';
  width: var(--timeline-dot-size);
  height: var(--timeline-dot-size);
  background: var(--timeline-color);
  border-radius: 50%;
  position: absolute;
  top: var(--timeline-dot-size);
  left: calc(var(--timeline-padding) * -1 / 2 - var(--timeline-dot-size) / 2 + var(--timeline-width) / 2);
}

:slotted(ul) h2 {
  margin-bottom: var(--space-xs);
}

:slotted(ul) p {
  margin: 0;
}

:slotted(ul) a {
  text-decoration: none;
}
</style>