<script setup lang="ts">
interface CollectionItem {
  path: string;
  title: string;
  description: string;
  img: string;
}

const props = defineProps<{ data: Array<CollectionItem> }>();
</script>

<template>
  <nav>
    <ul v-if="props.data">
      <li v-for="item in props.data"
          :key="item.path">
        <Card :to="item.path"
              :title="item.title"
              :description="item.description"
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