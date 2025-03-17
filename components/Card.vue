<script setup lang="ts">
const props = defineProps({
    link: String,
    title: String,
    description: String,
    img: String,
});
</script>

<template>
    <article>
        <NuxtLink :to="props.link">
            <img v-if="props.img"
                 :src="props.img"
                 alt="">
            <h2>{{ props.title }}</h2>
            <p v-if="props.description">{{ props.description }}</p>
        </NuxtLink>
    </article>
</template>

<style scoped>
article {
    --card-spacing: 0.6rem;

    width: 160px;
    height: 100%;
    overflow: hidden;

    background: var(--color-background);
    border: 1px solid black;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
        transform: translateY(-0.4rem);
        box-shadow: 0 0.4rem black;
    }

    &:has(a.router-link-active) {
        border-color: var(--color-primary);
    }
}

a {
    display: flex;
    flex-direction: column;
    height: 100%;
}

img {
    display: block;
    width: 100%;
    max-width: 150px;
    height: auto;
}

h2 {
    font-size: 1.25em;
    margin: var(--card-spacing);
}

p {
    font-size: var(--font-size-s);
    margin: var(--card-spacing);
}
</style>