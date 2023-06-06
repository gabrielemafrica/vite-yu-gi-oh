<script>
import { store } from './../store';

export default {
    name: "Contatore",
    data() {
        return {
            store,
        }
    },
    computed: {
        resultNumber() {
            return store.charactersList.length;
        }
    }
}
</script>

<template>
    <div class="conta-schede">numero carte: {{ resultNumber }}</div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;


.conta-schede {
    background-color: black;
    height: 50px;
    padding-left: 10px;
    line-height: 50px;
    vertical-align: middle;
}

</style>