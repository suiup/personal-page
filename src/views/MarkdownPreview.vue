<template>
    <div id="body" class="container">
        <div class="row mt-4">
            <div class="col text-center" >
                <h1 class="light">Markdown Preview</h1>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <h4 class="light">Markdown</h4>
                <textarea
                    class="info"
                    v-model="markdown"
                />
            </div>
            <div class="col-md-6">
                <h4 class="light">Preview</h4>
                <div
                    :key="markdown"
                    class="info"
                    v-markdown
                >{{markdown}}

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MarkDownTest",
        components: {

        },
        data() {
            return {
                markdown: '#Hello world\n',
            }
        }
    }
</script>

<style scoped>
    #body{
        background: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
        height: 1000px;
        font-family: 'Libre Franklin', sans-serif;
    }


    .light{
        color: white;
        text-shadow: 1px 1px 5px rgba(150, 150, 150, 0.9);
    }

    .v-application .info{
        height: 400px;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.9);
    }
    .v-application .info {
        height: 400px;
        width: 100%;
        background-color: rgba(255,255,255,0.9) !important;
        border-color: rgba(255,255,255,0.9) !important
    }

    textarea{
        resize: none;
        border: 2px dashed orange;
        outline: none;
    }
</style>