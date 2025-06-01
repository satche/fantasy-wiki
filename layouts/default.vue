<script setup>
defineProps({
  page: Object
})
</script>

<template>
    <div>
      <ContentRenderer v-if="page" :value="page" />
    </div>
</template>