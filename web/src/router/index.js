import { createRouter, createWebHistory } from 'vue-router'
import PkIndexView from '../views/pk/PkIndexView.vue'
import RecordIndexView from '../views/record/RecordIndexView.vue'
import RanklistIndexView from '../views/ranklist/RanklistIndexView.vue'
import UserBotIndexView from '../views/user/bot/UserBotIndexView.vue'
import NotFound from '../views/error/NotFound.vue'
import UserAccountLoginView from '@/views/user/account/UserAccountLoginView.vue'
import UserAccountRegisterView from '@/views/user/account/UserAccountRegisterView.vue'

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
    path: "/user/account/register",
    name: "user_account_register",
    component: UserAccountRegisterView,  
  },
  {
    path: "/user/account/login/", 
    name: "user_account_login",
    component: UserAccountLoginView, 
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
