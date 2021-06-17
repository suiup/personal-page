<template>
    <v-app>
        <Header></Header>
        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
        <Footer></Footer>
    </v-app>
</template>

<script>
    import Header from '@/components/Header.vue';
    import Footer from "@/components/Footer.vue";
    export default {
        name: 'App',

        components: {
            Header,
            Footer,
        },
    };
</script>
