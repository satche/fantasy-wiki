<script setup>
defineProps({
  page: Object
})
</script>

<template>
    <div class="markdown">
      <ContentRenderer v-if="page" :value="page" />
    </div>
</template>