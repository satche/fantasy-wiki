<script setup lang="ts">
import '~/assets/css/index.css'

const routes = [
    { title: "Personnages", path: "/characters"},
]
</script>

<template>
    <h1>Welcome</h1>
    <Collection :data="routes" />
</template>