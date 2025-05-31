<script setup>
const route = useRoute()
const { data } = await useAsyncData('navigation', () => {
    return queryCollectionNavigation('data', ['description', 'meta'])
        .where("path", "LIKE", route.path + '%')
})
</script>

<template>
    <div>
        <Timeline :data="data[0].children[0].children || []" />
    </div>
</template>