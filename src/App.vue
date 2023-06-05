<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'

export default {
  components: {
    AppHeader,
  }
}
</script>

<template>
  <AppHeader message="Yu-Gi-Oh Api" />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
