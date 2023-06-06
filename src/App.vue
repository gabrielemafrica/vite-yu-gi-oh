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
      // variabile url
      let searchURL = store.basicURL;

      // compilo la stringa di ricerca
      if (store.searchValue === 'all') {
        searchURL += store.shortSearch;
      }else {
        searchURL += `?${store.searchData}=${store.searchValue}`;
      }
      // chiamo axios
      axios.get(searchURL)
        // il risultato lo metto nell array di store
        .then(risultato => {
          store.charactersList = risultato.data.data;
          store.loading = false;
          console.log(searchURL);
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
  <AppSearch @mysearch="getCharacters" />
  <CharactersList />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
