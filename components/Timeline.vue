<script setup lang="ts">
interface TimelineEvent {
  title: string
  href: string
  description: string
}

const timelineHasLoaded = ref(false)
const timelineEvents = ref<TimelineEvent[]>([])

onMounted(async () => {
  await nextTick()
  const timeline = document.querySelector('.timeline')
  const timelineLinks = timeline!.querySelectorAll('li>a')
  const events: TimelineEvent[] = []

  for (const link of timelineLinks) {
    const title = link.textContent || ''
    const href = link.getAttribute('href') || ''
    const page = await queryCollection('data').path(href).first()
    const description = page?.description || ''

    events.push({ title, href, description })
  }

  timelineEvents.value = events
  timelineHasLoaded.value = true
})
</script>

<template>
  <div class="timeline">

    <ul v-if="timelineHasLoaded">
      <li v-for="event in timelineEvents"
          :key="event.href">
        <h2>
          <NuxtLink :to="event.href">{{ event.title }}</NuxtLink>
        </h2>
        <p>{{ event.description }}</p>
      </li>
    </ul>

    <div v-else
         class="timeline-loading">
      Timeline is loading...
      <div v-show="timelineHasLoaded">
        <slot />
      </div>
    </div>

  </div>
</template>

<style scoped>
.timeline {
  --timeline-color: var(--color-primary);
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

  /* Dot at the start of the timeline */
  &::before {
    content: '';
    width: var(--timeline-width);
    height: 100%;
    position: absolute;
    background: var(--timeline-color);
    left: calc(var(--timeline-padding) / 2);
  }

  /* Vertical line */
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

  /* Timeline event */
  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
    margin-bottom: var(--space-xs);

    & li {
      position: relative;
      margin-bottom: 32px;
      list-style: none;

      /* Dot at each event */
      &::before {
        content: '';
        width: var(--timeline-dot-size);
        height: var(--timeline-dot-size);
        background: var(--timeline-color);
        border-radius: 50%;
        position: absolute;
        top: var(--timeline-dot-size);
        left: calc(var(--timeline-padding) * -1 / 2 - var(--timeline-dot-size) / 2 + var(--timeline-width) / 2);
      }
    }

    & h2 {
      margin-bottom: var(--space-xs);

    }

    & p {
      margin: 0;

    }

    & a {
      text-decoration: none;

    }
  }
}
</style>