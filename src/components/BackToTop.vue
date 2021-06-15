<template>
    <div>
        <img :src= "require('@/assets/scroll.png')">
    </div>
</template>

<script>
    export default {
        name: "BackToTop",
    }
</script>

<style scoped>
    div{
        float: right;
        z-index: 9999;
    }
</style>