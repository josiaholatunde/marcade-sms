import Vue from 'vue';
import VueRouter from 'vue-router';
import MainBody from '../components/MainBody.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: MainBody
    }
]


const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
})

export default router;