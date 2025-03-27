import { createRouter, createWebHistory } from 'vue-router';

import Devices from '../pages/Devices.vue'
import Home from '../pages/master/Home.vue'
import Users from '../pages/Users.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/devices',
                name: 'devices',
                component: Devices,
            },
            {
                path: '/users',
                name: 'users',
                component: Users,
            },
        ]
    },
];

const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}



