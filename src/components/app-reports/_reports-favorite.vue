<template>
    <div class="fav-container">
        <icon-favorite v-if="isFavorite" />
        <icon-not-favorite v-else />
    </div>
</template>

<script>
    export default {
        props: ['isFavorite'],
        watch: {
            isFavorite() { }
            }
    }
</script>

<style scoped lang="sass">
.fav-container
    display: flex
    align-items: center
    justify-content: center
    width: 100%
</style>