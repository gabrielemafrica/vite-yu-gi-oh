<script>
import { store } from "../store";

export default {
    name: "AppSearch",
    emit: ['mysearch'],
    data() {
        return {
            store
        }
    },
    methods: {
        // funzione che emette mysearch
        handleSearch() {
            this.$emit('mysearch');
        }
    }
};
</script>

<template>

<div class="container">
<!-- metto @change per chiamare una funzione che farà emit -->
    <select name="languages" id="archetype" @change="handleSearch" v-model="store.searchValue">
        <option  value="all">All Archetypes</option>
        <option :value="archetype.archetype_name" v-for="(archetype, index) in store.archetypeList" :key="index">{{ archetype.archetype_name }}</option>
    </select>


</div>
</template>

<style scoped lang="scss">
    
</style>
