<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
    const collection = queryCollection('characters').path(route.path).first()
    return collection
})
</script>

<template>
    <div>
        <ContentRenderer v-if="page"
                         :value="page" />

    </div>
</template>