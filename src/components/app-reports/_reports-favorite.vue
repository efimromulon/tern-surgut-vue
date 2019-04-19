<template>
    <div class="fav-container" @click="handleFavClick">
        <icon-favorite v-if="getFavorite(report)" />
        <icon-not-favorite v-else />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        props: ['report'],
        computed: {
             ...mapGetters(['getFavorite']),
        },
        methods: {
            handleFavClick() {           
                let object = this.report
                this.$store.dispatch('updateFavorite', object);
            }
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