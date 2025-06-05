<script setup lang="ts">
const route = useRoute();

const breadcrumbs = computed(() => {
    const paths = route.path.split('/').filter(Boolean);
    if (paths.length <= 1) return [];
    let fullPath = '';
    return paths.map((segment, idx) => {
        fullPath += '/' + segment;
        return {
            text: segment.charAt(0).toUpperCase() + segment.slice(1),
            to: fullPath,
            active: idx === paths.length - 1
        };
    });
});
</script>

<template>
    <nav>
        <ul>
            <li v-for="(crumb, index) in breadcrumbs"
                :key="index">
                <template v-if="!crumb.active">
                    <NuxtLink :to="crumb.to"
                              :class="{ active: crumb.active }">{{ crumb.text }}</NuxtLink>
                </template>
                <template v-else>
                    <span class="active">{{ crumb.text }}</span>
                </template>
                <span v-if="!crumb.active"
                      class="separator"
                      aria-hidden="true">/</span>
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
        text-decoration: underline;
    }
}

.separator {
    margin: 0 var(--space-xxs);
    color: var(--color-separator);
}
</style>