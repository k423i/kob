import { createRouter, createWebHistory } from 'vue-router'
import PkIndexView from '../views/pk/PkIndexView.vue'
import RecordIndexView from '../views/record/RecordIndexView.vue'
import RanklistIndexView from '../views/ranklist/RanklistIndexView.vue'
import UserBotIndexView from '../views/user/bot/UserBotIndexView.vue'
import NotFound from '../views/error/NotFound.vue'

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/pk/"
  },
  {
    // 这里的path是相对于localhost:8080后的
    path: "/pk/", 
    name: "pk_index",
    component: PkIndexView, 
  },
  {
    path: "/record/", 
    name: "record_index",
    component: RecordIndexView, 
  },
  {
    path: "/ranklist/", 
    name: "ranklist_index",
    component: RanklistIndexView, 
  },
  {
    path: "/user/bot/", 
    name: "user_bot_index",
    component: UserBotIndexView, 
  },
  {
    path: "/404/", 
    name: "404",
    component: NotFound, 
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404/"  
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router