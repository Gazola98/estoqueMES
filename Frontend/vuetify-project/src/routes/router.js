import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/master/Home.vue'
import Devices from '../pages/Devices.vue'
import Add from '../pages/Add.vue'
import Log from '../pages/Log.vue'
import Users from '../pages/Users.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/devices',
                name: 'Devices',
                component: () => import ('@/pages/Devices.vue'),
            },
            {
                path: '/add',
                name: 'Add',
                component: Add,
            },
            {
                path: '/logs',
                name: 'logs',
                component: Log,
            },
            {
                path: '/users',
                name: 'Users',
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



