import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/route/routes'
const router = createRouter({
    history: createWebHistory(),
    routes
})
// router.beforeEach((to,from,next) => {
//     console.log(to.
// })
export default router