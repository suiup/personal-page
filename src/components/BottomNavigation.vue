<template>
    <v-bottom-navigation
            v-model="value"
            :background-color="color"
            dark
            shift
    >
        <v-btn>
            <span>Video</span>

            <v-icon>mdi-television-play</v-icon>
        </v-btn>

        <v-btn>
            <span>Music</span>

            <v-icon>mdi-music-note</v-icon>
        </v-btn>

        <v-btn>
            <span>Book</span>

            <v-icon>mdi-book</v-icon>
        </v-btn>

        <v-btn>
            <span>Image</span>

            <v-icon>mdi-image</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
    export default {
        name: "BottomNavigation"
    }
</script>

<style scoped>

</style>