import Vue from "vue"
import VueRouter from "vue-router"
import home from "./home"
import sort from "./sort"
import cart from "./cart"
import mine from "./mine"

Vue.use(VueRouter);


const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:'/',
            redirect:"/home",
        },
        home,
        sort,
        cart,
        mine
    ]
})


export default router;