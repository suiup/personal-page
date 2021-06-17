import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home"
import Calendars from "./views/Calendars"
import Theme from "./views/Theme"
import Color from "./views/Color"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },{
            path: "/suiup",
            name: "home",
            component: Home
        },
        {
            path: "/calendars",
            name: "calendars",
            component: Calendars
        },
        {
            path: "/theme",
            name: "/theme",
            component: Theme
        },
        {
            path: "/color",
            name: "/color",
            component: Color
        },
        {
            path: "/markdown",
            name: "markdown",
            component: ()=> import(/* webpackChunkName: "Markdown" */ "./views/MarkdownPreview.vue")
        },
        {
            path: "/article",
            name: "article",
            component: () => import(/* webpackChunkName: "Article" */ "./views/Articles.vue")
        },
        {
            path: "/layout",
            name: "layout",
            component: () => import(/* webpackChunkName: "Layout" */ "./views/Layout.vue")
        }


    ]

})