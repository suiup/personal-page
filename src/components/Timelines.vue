<template>
    <v-container style="max-width: 600px;">
        <v-timeline
                dense
                clipped
        >
            <v-timeline-item
                    fill-dot
                    class="white--text mb-12"
                    color="orange"
                    large
            >
                <template v-slot:icon>
                    <span>ZS</span>
                </template>
                <v-text-field
                        v-model="input"
                        hide-details
                        flat
                        label="Leave a comment..."
                        solo
                        @keydown.enter="comment"
                >
                    <template v-slot:append>
                        <v-btn
                                class="mx-0"
                                depressed
                                @click="comment"
                        >
                            Post
                        </v-btn>
                    </template>
                </v-text-field>
            </v-timeline-item>

            <v-slide-x-transition
                    group
            >
                <v-timeline-item
                        v-for="event in timeline"
                        :key="event.id"
                        class="mb-4"
                        color="pink"
                        small
                >
                    <v-row justify="space-between">
                        <v-col
                                cols="7"
                                v-text="event.text"
                        ></v-col>
                        <v-col
                                class="text-right"
                                cols="5"
                                v-text="event.time"
                        ></v-col>
                    </v-row>
                </v-timeline-item>
            </v-slide-x-transition>

            <v-timeline-item
                    class="mb-6"
                    hide-dot
            >
                <span>TODAY</span>
            </v-timeline-item>
            <v-timeline-item
                    class="mb-4"
                    color="red"
                    icon-color="grey lighten-2"
                    small
            >
                <v-row justify="space-between">
                    <v-col cols="7">
                        Add Timeline
                    </v-col>
                    <v-col
                            class="text-right"
                            cols="5"
                    >
                        14:20:57
                    </v-col>
                </v-row>
            </v-timeline-item>
        </v-timeline>
    </v-container>
</template>

<script>
    export default {
        name: "Timelines",
        data: () => ({
            events: [],
            input: null,
            nonce: 0,
        }),

        computed: {
            timeline () {
                return this.events.slice().reverse()
            },
        },

        methods: {
            comment () {
                const time = (new Date()).toTimeString()
                this.events.push({
                    id: this.nonce++,
                    text: this.input,
                    time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents) => {
                        return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
                    }),
                });

                this.input = null
            },
        },
    }
</script>

<style scoped>

</style>