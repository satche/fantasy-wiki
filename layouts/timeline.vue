<script setup>
const route = useRoute()
const { data } = await useAsyncData('navigation', () => {
    return queryCollectionNavigation('data', ['description', 'meta'])
        .where("path", "LIKE", route.path + '%')
})

defineProps({
  page: Object
})
</script>

<template>
    <div>
        <ContentRenderer v-if="page"
                         :value="page" />
        <Timeline :data="data[0].children[0].children || []" />
    </div>
</template>