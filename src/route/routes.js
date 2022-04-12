const routes = [
    {
        path: '/',
        name: 'index',
        title: '首页',
        redirect: () => {
            return { name: 'atoms' }
        }
    },
    {
        path: '/login',
        name: 'login',
        title: '登录',
        component: () => import('../components/Users/Login.vue')
    },
    {
        path: '/atom',
        name: 'atoms',
        title: '原子服务',
        component: () => import('../components/Atoms/Atoms.vue')
    },
    {
        path: '/product',
        name: 'products',
        title: '产品编排',
        component: () => import('../components/Products/Products.vue')
    },
    {
        path: '/ppos',
        name: 'ppos',
        title: '可视化编排系统',
        component: () => import('../components/Products/PPOS/PPOS.vue')
    },
    {
        path: "/:catchAll(.*)",
        name: '404',
        title: '404',
        redirect: () => {
            return { name: 'login' }
        }
    }
]
export default routes