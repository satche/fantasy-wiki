<script setup lang="ts">
const route = useRoute();

const breadcrumbs = computed(() => {
    const paths = route.path.split('/').filter(Boolean);
    let fullPath = '';

    const segments = paths.map((segment, idx) => {
        fullPath += '/' + segment;
        return {
            text: segment.charAt(0).toUpperCase() + segment.slice(1),
            to: fullPath,
            active: idx === paths.length - 1
        };
    });

    // Add root breadcrumb at the start
    return segments;
})
</script>

<template>
    <nav v-if="breadcrumbs.length">
        <ul>
            <li>
                <NuxtLink to="/">
                    <Icon name="pixelarticons:home" />
                </NuxtLink>
                <span class="separator"
                      aria-hidden="true">/</span>
            </li>
            <li v-for="(crumb, index) in breadcrumbs"
                :key="index">
                <template v-if="!crumb.active">
                    <NuxtLink :to="crumb.to">{{ crumb.text }}</NuxtLink>
                    <span class="separator"
                          aria-hidden="true">/</span>
                </template>
                <template v-else>
                    <span>{{ crumb.text }}</span>
                </template>

            </li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    position: absolute;
    margin: var(--space-xs) 0;
}

ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
}

li,
a {
    color: var(--color-text-soft);
}

a {
    text-decoration: none;

    &:hover {
        color: var(--color-primary);
    }
}

.separator {
    margin: 0 var(--space-xxs);
    color: var(--color-separator);
}
</style>