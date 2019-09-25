import Vue from 'vue';
import VueRouter from 'vue-router';
import TeacherContent from '../components/TeacherContent.vue'
import Dashboard from '../views/Dashboard.vue';
import RollCall from '../views/RollCall.vue';
import SubjectResults from '../views/SubjectResults.vue';



Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: TeacherContent
    },
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/roll-call',
        component: RollCall
    },
    {
        path: '/subjects/results',
        component: SubjectResults
    },
]


const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
})

export default router;