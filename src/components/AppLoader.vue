<script>
export default {
    name: 'AppLoader'
}
</script>

<template>
    <div class="loading">

        <div class="d-flex align-items-center justify-content-center fs-3">
            <strong>Loading...</strong>
            <div class="spinner-border ms-3" role="status" aria-hidden="true"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;

.loading {
    background-color: $text-color;
    color: black;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>