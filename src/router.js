import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home"
import Lesson from "./views/Lesson"

Vue.use(Router);

export default new Router({
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
        }
    ]

})