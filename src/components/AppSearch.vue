<script>
import { store } from "../store";

export default {
    name: "AppSearch",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div>{{ store.searchValue }}</div>
<div class="container">
    <select name="languages" id="archetype" v-model="store.searchValue">
        <option  disabled value="">All Archetypes</option>
        <option :value="archetype.archetype_name" v-for="(archetype, index) in store.archetypeList" :key="index" v-on:change="$emit(mysearch)" >{{ archetype.archetype_name }}</option>
    </select>

</div>
</template>

<style scoped lang="scss">
    
</style>

