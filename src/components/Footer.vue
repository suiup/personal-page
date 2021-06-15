<template>
    <v-footer
            dark
    >
        <v-card
                flat
                tile
                width="100%"
                class="lighten-1 text-center"
        >
            <v-card-text>
                <v-btn
                        v-for="icon in iconss"
                        :key="icon"
                        class="mx-4"
                        icon
                        :to="icon.src"
                >
                    <v-icon size="24px" >
                        {{ icon.name }}
                    </v-icon>
                </v-btn>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>Suiup</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        data: () => ({
            iconss:[
                {
                    name: 'mdi-home',
                    src: "/suiup"
                },
                {
                    name: 'mdi-email',
                    src: "/suiup"
                },
                {
                    name: 'mdi-calendar',
                    src: "/suiup"
                },
                {
                    name: 'mdi-delete',
                    src: "/suiup"
                },
            ],
        }),
    }
</script>

<style scoped>

</style>