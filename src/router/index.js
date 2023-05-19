import { createRouter , createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import Tam from '../views/Tam.vue'
import Ann from '../views/Ann.vue'
import Sanya from '../views/Sanya.vue'
import Step from '../views/Step.vue'
import Alex from '../views/Alex.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/tam',
        component: Tam
    },
    {
        path: '/ann',
        component: Ann
    },
    {
    path: '/sanya',
    component: Sanya
    },
    {
        path: '/step',
        component: Step
    },
    {
        path: '/alex',
        component: Alex
    }

]

const router = createRouter({
    'history' : createWebHistory(),
    routes,
    'linkActiveClass': 'font-bold'
})

export default router