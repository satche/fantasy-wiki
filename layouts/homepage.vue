<script setup>
const { data } = await useAsyncData('navigation', () => {
    return queryCollectionNavigation('data', ['description', 'meta'])
})
</script>

<template>
    <div>
        <slot />
        <Collection :data="data.children" />
    </div>
</template>