const routes = [
    {
        path: '/',
        name: 'atoms',
        title: '首页',
        component: () => import('@/components/Atoms.vue'), //.vue不能省略
    }
]
export default routes