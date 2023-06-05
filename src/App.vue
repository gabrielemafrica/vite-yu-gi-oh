<script>
import axios from 'axios';
// importo lo store
import { store } from '../src/store'
import AppHeader from './components/AppHeader.vue'
import CharactersList from './components/CharactersList.vue'

export default {
  components: {
    AppHeader,
    CharactersList
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
        })
        // intercetto errori
        .catch(errore => {
          console.log(errore);
        })
    }
  },
  created() {
    this.getCharacters();
  }
}
</script>

<template>
  <AppHeader message="Yu-Gi-Oh Api" />
  <CharactersList />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
