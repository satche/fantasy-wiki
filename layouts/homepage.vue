<script setup>
</script>

<template>
    <div>
        <header>
            <Navbar />
        </header>
        <main>
            <div id="content">
                <slot />
            </div>
        </main>
    </div>
</template>

<style scoped>
main {
    margin: var(--space);
}
</style>