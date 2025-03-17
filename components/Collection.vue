<script setup lang="ts">
const props = defineProps({
    data: Array
})
</script>

<template>
    <nav>
      <ul>
        <li v-for="item in data">
          <Card :link="item.path"
                :title="item.title"
                :description="item.description"
                :img="item.meta?.img" />
        </li>
      </ul>
    </nav>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding: 0;
}

li {
  list-style: none;
}
</style>