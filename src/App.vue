<script>
import axios from 'axios';
// importo lo store
import { store } from '../src/store'
import AppHeader from './components/AppHeader.vue'
import CharactersList from './components/CharactersList.vue'
import AppLoader from './components/AppLoader.vue'
import AppSearch from './components/AppSearch.vue'

export default {
  components: {
    AppHeader,
    CharactersList,
    AppLoader,
    AppSearch
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCharacters() {
      // chiamo axios
      axios.get(store.apriURL)
        // il risultato lo metto nell array di store
        .then(risultato => {
          store.charactersList = risultato.data.data;
          store.loading = false;
        })
        // intercetto errori
        .catch(errore => {
          console.log(errore);
        })
    },
    // popolo array per il menu a tendina
    getArchetypes() {
      axios.get(store.archetypesURL)

      .then(risultato => {
        store.archetypeList = risultato.data;
        console.log(store.archetypesURL);
        console.log(store.archetypeList);
        console.log(store.searchValue);
      })
      // intercetto errori
      .catch(errore => {
        console.log(errore);
      })
    },
  },
  created() {
    this.getCharacters();
    this.getArchetypes();
  }
}
</script>

<template>
  <AppLoader v-if="store.loading" />
  <AppHeader message="Yu-Gi-Oh Api" />
  <AppSearch />
  <CharactersList />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
