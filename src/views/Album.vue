<template>
    <div class="container" id="app">
        <Gallery :photos="photos"></Gallery>
    </div>
</template>

<script>
    import Gallery from '@/components/Gallery.vue'
    export default {
        components: {
            Gallery,
        },
        data:function(){
            return{
                photos:[
                    require("@/assets/carousels_01.jpg"),
                    require("@/assets/carousels_02.jpg"),
                    require("@/assets/carousels_03.jpg"),
                    require("@/assets/carousels_04.jpg"),
                    require("@/assets/carousels_05.jpg"),
                    require("@/assets/carousels_06.jpg"),
                    require("@/assets/carousels_07.jpg"),
                    require("@/assets/carousels_08.jpg"),
                    require("@/assets/carousels_09.jpg"),
                ],
                activePhoto:null
            }
        }
    }
</script>

<style scoped>

</style>