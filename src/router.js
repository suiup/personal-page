import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home"
import Lesson from "./views/Lesson"
import Calendars from "./views/Calendars"

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/lesson",
            name: "lesson",
            component: Lesson
        },
        {
            path: "/calendars",
            name: "calendars",
            component: Calendars
        }

    ]

})