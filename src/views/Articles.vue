<template>
    <div id="mark">
        <vue-markdown :source="mdText" ></vue-markdown>
    </div>
</template>

<script>
    import axios from "axios";
    import VueMarkdown from 'vue-markdown'
    export default {
        name: "Articles",
        props: ["src"],
        components: {
            VueMarkdown,
        },
        data(){
            return {
                "mdText" : ""
            }
        },
        mounted(){
            axios.get("./files/RL/Q-Learning.md").then((response) => {
                this.mdText = response.data
            });
        },
    }
</script>

<style lang="scss" scoped>
    #mark{
        width: 80%;
        margin: auto;
        padding-left: 100px;
    }
</style>