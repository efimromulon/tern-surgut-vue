<template>
    <div :class="className">
        {{ text }}
    </div>
</template>

<script>
    export default {
        name: "settings-button",
        props: ['className', 'text']
    }
</script>

<style scoped>

</style>