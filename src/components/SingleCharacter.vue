<script>
export default {
    name: "SingleCharacter",
    props: {
        cardObj: Object,
        cardImage: String,
        cardName: String,
        cardType: String
    }
}

</script>

<template>
    <!-- card -->

    <img class="img-fluid mb-3" :src="cardImage" :alt="cardName">
    <h4> {{ cardName }}</h4>
    <div class="tipo"> {{ cardType }}</div>
</template>
<style scoped lang="scss">
@use '../styles/partials/variables' as *;

h4 {
    text-transform: uppercase;
    font-size: 15px;
}

.tipo {
    color: $small-text-color;
    font-size: 12px;
}
</style>