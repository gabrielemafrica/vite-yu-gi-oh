<script>
// importo store nel componente lista
import { store } from './../store';
import SingleCharacter from './SingleCharacter.vue';
import Contatore from './Contatore.vue';

export default {
    name: "CharactersList",
    name: "Contatore",
    components: {
        SingleCharacter
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <section class="container pt-3 pb-3">
        <!-- <Contatore /> -->
        <div class="counter">numero carte: {{ store.charactersList.length }}</div>
        <div class="riga">
            <div class="colonna mt-3 text-center" v-for="character in store.charactersList" :key="character.id">
                <!-- card -->
                <SingleCharacter :cardObj="character" :cardImage="character.card_images[0].image_url"
                    :cardName="character.name" :cardType="character.archetype ? character.archetype : character.type" />

            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;

.container {
    background-color: $text-color;

    .counter {
        background-color: black;
        height: 50px;
        padding-left: 10px;
        line-height: 50px;
        vertical-align: middle;
    }

    .riga {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        .colonna {
            width: calc(100% / 5 - 40px);
            padding: 10px;
            background-color: $bg-color;
        }
    }
}
</style>