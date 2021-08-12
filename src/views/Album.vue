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
                //TODO need to create a new folder and use loop to display those images
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
                    require("@/assets/7f8e1e5c3682f9a250710e00ca64ebb.jpg"),
                    require("@/assets/8f8ca8934c17e24a182e97cb9110753.jpg"),
                    require("@/assets/a97b5907151a87720e4090826cc5b9a.jpg"),
                    require("@/assets/baa7074036de0ca15690a6c0b19671c.jpg"),
                ],
                activePhoto:null
            }
        }
    }
</script>

<style scoped>

</style>