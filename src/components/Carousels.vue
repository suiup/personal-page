<template>
    <v-carousel
            cycle
            height="600"
    >
        <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
        >

        </v-carousel-item>
    </v-carousel>
</template>

<script>
    export default {
        name: "Carousels",
        data () {
            return {
                items:[
                    {
                        src: require("@/assets/carousels_01.jpg")
                    },
                    {
                        src: require("@/assets/carousels_02.jpg")
                    },
                    {
                        src: require("@/assets/carousels_03.jpg")
                    },
                    {
                        src: require("@/assets/carousels_04.jpg")
                    },
                    {
                        src: require("@/assets/carousels_05.jpg")
                    },
                    {
                        src: require("@/assets/carousels_06.jpg")
                    },
                    {
                        src: require("@/assets/carousels_07.jpg")
                    },
                    {
                        src: require("@/assets/carousels_08.jpg")
                    },
                    {
                        src: require("@/assets/carousels_09.jpg")
                    }
                ]
            }
        },
    }
</script>

<style scoped>

</style>