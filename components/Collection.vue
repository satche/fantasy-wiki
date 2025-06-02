<script setup lang="ts">
interface NavigationItem {
  path: string;
  title?: string;
  description?: string;
  img?: string;
  children?: NavigationItem[];
}

const props = defineProps<{route: String}>();

const { data } = await useAsyncData<NavigationItem[]>(
  `${props.route}_navigation`, () => {
  return queryCollectionNavigation('data', ['description', 'meta'])
    .where("path", "LIKE", props.route + '%')
})
</script>

<template>
  <nav>
    <ul v-if="data">
      <li v-for="item in data[0].children"
          :key="item.path">
       
          <Card :to="item.path"
              :title="item.title"
              :img="item.img" />

      </li>
    </ul>
  </nav>
</template>

<style scoped>
ul {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}
</style>