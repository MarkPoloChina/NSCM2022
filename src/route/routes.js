const routes = [
    {
        path: '/',
        name: 'index',
        title: '首页',
        redirect: () => {
            return { path: '/atom' }
        }
    },
    {
        path: '/atom',
        name: 'atoms',
        title: '原子服务',
        component: () => import('../components/Atoms/Atoms.vue'), //.vue不能省略
    },
    {
        path: '/product',
        name: 'products',
        title: '产品编排',
        component: () => import('../components/Products/Products.vue'), //.vue不能省略
    },
    {
        path: '/ppos',
        name: 'ppos',
        title: '可视化编排系统',
        component: () => import('../components/Products/PPOS/PPOS.vue'), //.vue不能省略
    }
]
export default routes