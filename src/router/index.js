import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";
import admin from "./admin";
import superadmin from "./super";
const routes = [
   {
      path: "/",
      name: "login",
      component: Login,
   },
   admin,
   superadmin
];
const router = createRouter({
   history: createWebHistory(),
   routes,
});

router.beforeEach((to, from, next) => {
   const token = localStorage.getItem("token");
   const role = localStorage.getItem("role");
   const name = to.name === "login";
   if (!token && !name) {
      return next({ name: "login" });
   } else {
      if (token && name) {
         return next({ name: role });
      } else {
         next();
      }
   }
});

export default router;
