import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/recipes',
    name: 'RecipesList',
    component: () => import('../views/Recipes.vue')
  },
  {
    path: '/recipes/:recipeName',
    name: 'RecipeDetails',
    component: () => import('../views/RecipeDetails.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
