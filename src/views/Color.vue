<template>
    <div>
        <v-toolbar
                flat
                color="transparent"
        >
            <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search Cannot be used now"
                    single-line
            ></v-text-field>
        </v-toolbar>
        <v-card
                class="mx-auto"
                max-width="1500"
        >
            <h1>This is the Colors that can be used. But not the whole color</h1>
            <p>Colors in <a href="https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/styles/settings/_colors.scss" target="_blank">GitHub</a>
            </p>
            <v-container fluid>
                <v-row>
                    <v-col
                            :cols="4"
                    >
                        <v-card
                                :color="red.color"
                        >
                            <v-card-title v-text="red.title"></v-card-title>
                            <v-card-text>{{red.color}}</v-card-text>
                        </v-card>

                        <v-card
                                v-for="item in red.reds"
                                :key="item.title"
                                :color="item.color"
                        >
                            <v-card-text>{{item.title}}{{item.color}}</v-card-text>
                        </v-card>
                    </v-col>


                    <v-col
                            :cols="4"
                    >
                        <v-card
                                :color="pink.color"
                        >
                            <v-card-title v-text="pink.title"></v-card-title>
                            <v-card-text>{{pink.color}}</v-card-text>
                            <v-divider></v-divider>
                        </v-card>
                        <v-card
                                v-for="item in pink.pinks"
                                :key="item.title"
                                :color="item.color"
                        >
                            <v-card-text>{{item.title}}{{item.color}}</v-card-text>
                        </v-card>
                    </v-col>


                    <v-col
                            :cols="4"
                    >
                        <v-card
                                :color="purple.color"
                        >
                            <v-card-title v-text="purple.title"></v-card-title>
                            <v-card-text>{{purple.color}}</v-card-text>
                            <v-divider></v-divider>
                        </v-card>
                        <v-card
                                v-for="item in purple.purples"
                                :key="item.title"
                                :color="item.color"
                        >
                            <v-card-text>{{item.title}}{{item.color}}</v-card-text>
                        </v-card>
                    </v-col>

                    <v-col
                            :cols="4"
                    >
                        <v-card
                                :color="deep_purple.color"
                        >
                            <v-card-title v-text="deep_purple.title"></v-card-title>
                            <v-card-text>{{deep_purple.color}}</v-card-text>
                        </v-card>

                        <v-card
                                v-for="item in deep_purple.purples"
                                :key="item.title"
                                :color="item.color"
                        >
                            <v-card-text>{{item.title}}{{item.color}}</v-card-text>
                        </v-card>
                    </v-col>


                    <v-col
                            :cols="4"
                    >
                        <v-card
                                :color="indigo.color"
                        >
                            <v-card-title v-text="indigo.title"></v-card-title>
                            <v-card-text>{{indigo.color}}</v-card-text>
                            <v-divider></v-divider>
                        </v-card>
                        <v-card
                                v-for="item in indigo.indigos"
                                :key="item.title"
                                :color="item.color"
                        >
                            <v-card-text>{{item.title}}{{item.color}}</v-card-text>
                        </v-card>
                    </v-col>


                    <v-col
                            :cols="4"
                    >
                        <v-card
                                :color="blue.color"
                        >
                            <v-card-title v-text="blue.title"></v-card-title>
                            <v-card-text>{{blue.color}}</v-card-text>
                            <v-divider></v-divider>
                        </v-card>
                        <v-card
                                v-for="item in blue.blues"
                                :key="item.title"
                                :color="item.color"
                        >
                            <v-card-text>{{item.title}}{{item.color}}</v-card-text>
                        </v-card>
                    </v-col>


                </v-row>
            </v-container>
        </v-card>
    </div>

</template>

<script>
    export default {
        name: "Color",
        data: () => ({
            red:{ title: 'red',color: "#F44336", flex: 4,reds:[
                    {title: "lighten-5", color: "#FFEBEE"},
                    {title: "lighten-4", color: "#FFCDD2"},
                    {title: "lighten-3", color: "#EF9A9A"},
                    {title: "lighten-2", color: "#E57373"},
                    {title: "lighten-1", color: "#EF5350"},
                    {title: "darken-1", color: "#E53935"},
                    {title: "darken-2", color: "#D32F2F"},
                    {title: "darken-3", color: "#C62828"},
                    {title: "darken-4", color: "#B71C1C"},
                    {title: "accent-1", color: "#FF8A80"},
                    {title: "accent-2", color: "#FF5252"},
                    {title: "accent-3", color: "#FF1744"},
                    {title: "accent-4", color: "#D50000"},
                ]},
            pink:{ title: 'pink',color: "#E91E63", flex: 4, pinks:[
                    {title: "lighten-5", color: "#fce4ec"},
                    {title: "lighten-4", color: "#f8bbd0"},
                    {title: "lighten-3", color: "#f48fb1"},
                    {title: "lighten-2", color: "#f06292"},
                    {title: "lighten-1", color: "#ec407a"},
                    {title: "darken-1", color: "#d81b60"},
                    {title: "darken-2", color: "#c2185b"},
                    {title: "darken-3", color: "#ad1457"},
                    {title: "darken-4", color: "#880e4f"},
                    {title: "accent-1", color: "#ff80ab"},
                    {title: "accent-2", color: "#ff4081"},
                    {title: "accent-3", color: "#f50057"},
                    {title: "accent-4", color: "#c51162"},
                ] },
            purple: { title: 'purple',color: "#9C27B0", flex: 4, purples:[
                    {title: "lighten-5", color: "#f3e5f5"},
                    {title: "lighten-4", color: "#e1bee7"},
                    {title: "lighten-3", color: "#ce93d8"},
                    {title: "lighten-2", color: "#ba68c8"},
                    {title: "lighten-1", color: "#ab47bc"},
                    {title: "darken-1", color: "#8e24aa"},
                    {title: "darken-2", color: "#7b1fa2"},
                    {title: "darken-3", color: "#6a1b9a"},
                    {title: "darken-4", color: "#4a148c"},
                    {title: "accent-1", color: "#ea80fc"},
                    {title: "accent-2", color: "#e040fb"},
                    {title: "accent-3", color: "#d500f9"},
                    {title: "accent-4", color: "#aa00ff"},
                ] },
            deep_purple: { title: 'deep-purple',color: "#673ab7", flex: 4, purples:[
                    {title: "lighten-5", color: "#ede7f6"},
                    {title: "lighten-4", color: "#d1c4e9"},
                    {title: "lighten-3", color: "#b39ddb"},
                    {title: "lighten-2", color: "#9575cd"},
                    {title: "lighten-1", color: "#7e57c2"},
                    {title: "darken-1", color: "#5e35b1"},
                    {title: "darken-2", color: "#512da8"},
                    {title: "darken-3", color: "#4527a0"},
                    {title: "darken-4", color: "#311b92"},
                    {title: "accent-1", color: "#b388ff"},
                    {title: "accent-2", color: "#7c4dff"},
                    {title: "accent-3", color: "#651fff"},
                    {title: "accent-4", color: "#6200ea"},
                ] },
            indigo: { title: 'indigo',color: "#3f51b5", flex: 4, indigos:[
                    {title: "lighten-5", color: "#e8eaf6"},
                    {title: "lighten-4", color: "#c5cae9"},
                    {title: "lighten-3", color: "#9fa8da"},
                    {title: "lighten-2", color: "#7986cb"},
                    {title: "lighten-1", color: "#5c6bc0"},
                    {title: "darken-1", color: "#3949ab"},
                    {title: "darken-2", color: "#303f9f"},
                    {title: "darken-3", color: "#283593"},
                    {title: "darken-4", color: "#1a237e"},
                    {title: "accent-1", color: "#8c9eff"},
                    {title: "accent-2", color: "#536dfe"},
                    {title: "accent-3", color: "#3d5afe"},
                    {title: "accent-4", color: "#304ffe"},
                ] },
            blue: { title: 'blue',color: "#2196F3", flex: 4, blues:[
                    {title: "lighten-5", color: "#E3F2FD"},
                    {title: "lighten-4", color: "#BBDEFB"},
                    {title: "lighten-3", color: "#90CAF9"},
                    {title: "lighten-2", color: "#64B5F6"},
                    {title: "lighten-1", color: "#42A5F5"},
                    {title: "darken-1", color: "#1E88E5"},
                    {title: "darken-2", color: "#1976D2"},
                    {title: "darken-3", color: "#1565C0"},
                    {title: "darken-4", color: "#0D47A1"},
                    {title: "accent-1", color: "#82B1FF"},
                    {title: "accent-2", color: "#448AFF"},
                    {title: "accent-3", color: "#2979FF"},
                    {title: "accent-4", color: "#2962FF"},
                ] },

        }),
    }
</script>

<style scoped>

</style>