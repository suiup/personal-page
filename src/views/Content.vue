<template>
    <div id="body">

        <a href="#" id="anchor">top</a>

        <!--<div class="left-column">-->
            <!--<div class="card">-->
                <!--<h2>About Me</h2>-->
                <!--<div class="fakeimg" style="height:100px;">Image</div>-->
                <!--<p>Some text about me ...</p>-->
            <!--</div>-->
            <!--<div class="card">-->
                <!--<h3>Popular Post</h3>-->
                <!--<div class="fakeimg"><p>Image</p></div>-->
                <!--<div class="fakeimg"><p>Image</p></div>-->
                <!--<div class="fakeimg"><p>Image</p></div>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="right-column">-->
            <!--<div class="card">-->
                <!--<h2>About Me</h2>-->
                <!--<div class="fakeimg" style="height:100px;">Image</div>-->
                <!--<p>Some text about me ...</p>-->
            <!--</div>-->
            <!--<div class="card">-->
                <!--<h3>Popular Post</h3>-->
                <!--<div class="fakeimg"><p>Image</p></div>-->
                <!--<div class="fakeimg"><p>Image</p></div>-->
                <!--<div class="fakeimg"><p>Image</p></div>-->
            <!--</div>-->
        <!--</div>-->
        <div class="row">
            <div class="middle-column">
                <vue-markdown :source="mdText" class="card" ></vue-markdown>
            </div>
        </div>


    </div>
</template>

<script>
    import axios from "axios";
    import VueMarkdown from 'vue-markdown'
    export default {
        name: "Content",
        components: {
            VueMarkdown,
        },
        data(){
            return {
                "param": null,
                "mdText" : ""
            }
        },
        mounted(){
            this.getParams();
        },
        watch:{
            '$route'(){
                this.getParams();
            }
        },
        methods:{
            getParams() {
                this.param = this.$route.query.val;
                console.log(this.param);
                axios.get(this.param).then((response) => {
                    this.mdText = response.data
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }

    #body {
        position: relative;
        padding: 5px;
        background: #f1f1f1;
        width: 1200px;
        margin: 0 auto;

    }
    /* Create two unequal columns that floats next to each other */
    /* Left column */

    .left-column {
        float: left;
        width: 15%;
        background-color: #f1f1f1;
        padding-left: 10px;
        padding-right: 15px;
        position: sticky;
        top: 48px;
    }

    .middle-column {
        float: left;
        width: 100%;
    }

    /* Right column */
    .right-column {
        float: right;
        width: 15%;
        background-color: #f1f1f1;
        padding-left: 15px;
        padding-right: 10px;
        position: sticky;
        top: 48px;

    }

    /* Fake image */
    .fakeimg {
        background-color: #aaa;
        width: 100%;
        padding: 20px;
    }

    /* Add a card effect for articles */
    .card {
        background-color: white;
        padding: 20px;
        margin-top: 7px;
    }

    /* Clear floats after the columns */
    body-row:after {
        content: "";
        display: table;
        clear: both;
    }

    a {
        text-decoration: none;
        text-align: center;
        line-height: 50px;
        background-color: rgba(0, 0, 0, 0.4);
        font-size: 20px;
        color: black;
    }

    a:hover{
        background-color: gray;
    }

    #anchor {
        position: fixed;
        /*走浏览器宽度一半*/
        left: 50%;
        bottom: 150px;
        margin-left: 600px;
        width: 50px;
        height: 50px;
    }

    /* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 800px) {
        .left-column,  .right-column, .middle-column{
            width: 100%;
            padding: 0;
        }
    }
</style>