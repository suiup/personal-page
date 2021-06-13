<template>
    <v-app>
        <Header></Header>
        <NavigationDrawer></NavigationDrawer>
        <HelloWorld></HelloWorld>
        <Footer></Footer>
    </v-app>
</template>

<script>
    import HelloWorld from './components/HelloWorld';
    import Header from '@/components/Header.vue';
    import Footer from "@/components/Footer.vue";
    import NavigationDrawer from "@/components/NavigationDrawer.vue";

    export default {
        name: 'App',

        components: {
            HelloWorld,
            Header,
            Footer,
            NavigationDrawer,
        },

        data: () => ({
            //
        }),
    };
</script>
