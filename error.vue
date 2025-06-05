<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
    error: Object as () => NuxtError
})
</script>

<template>
    <Navbar />
    <main>
        <template v-if="error?.statusCode === 404">
            <h1>Erreur 404</h1>
            <p>La page n'a pas été trouvée. Il est possible qu'elle ait été supprimée ou qu'elle n'existe tout
                simplement pas. Vous pouvez utiliser la navigation à gauche pour retrouver votre chemin.</p>
        </template>

        <details>
            <summary>
                <Icon name="pixelarticons:book-open" />
            </summary>
            <div>
                <p>Voici quelques ressources qui pourraient vous aider pour la prochaine fois</p>
                <ul>
                    <li>
                        <a href="https://2e.aonprd.com/Actions.aspx?ID=2406">Sense Direction</a> –
                        <span>Exploration activity</span>
                    </li>
                    <li>
                        <a href="https://2e.aonprd.com/Equipment.aspx?ID=2716">Compass</a> –
                        <span>Adventuring gear, Level 0+</span>
                    </li>
                    <li>
                        <a href="https://2e.aonprd.com/Equipment.aspx?ID=3113">Tracker's Goggles</a> –
                        <span>Magic Item, Level 3+</span>
                    </li>
                    <li>
                        <a href="https://2e.aonprd.com/Spells.aspx?ID=2400">Show the Path</a> –
                        <span>Focus spell, Rank 4</span>
                    </li>
                    <li>
                        <a href="https://2e.aonprd.com/Spells.aspx?ID=1588">Locate</a> –
                        <span>Spell, Rank 2</span>
                    </li>
                </ul>
            </div>
        </details>
    </main>
</template>

<style scoped>
#error-page {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
}

summary {
    cursor: pointer;
    list-style: none;

    & .iconify {
        color: var(--color-text-soft);
    }

    &:hover .iconify {
        color: var(--color-primary-soft);
    }
}

details {
    &>div {
        color: var(--color-text-soft);
        border-left: 1px solid var(--color-text-soft);
        margin-top: calc(var(--space-m) * -1);
        margin-left: 0.4rem;
        padding-left: var(--space-l);
    }

    & a {
        color: var(--color-text-soft);
    }
}
</style>