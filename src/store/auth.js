import { defineStore } from "pinia";
import $http from "@/plugins/axios";

export const useAuthStore = defineStore("auth", {
   state: () => ({
      loginData: {
         data: null,
         loading: false,
         error: null,
      },
   }),
   actions: {
      async login(form) {
         try {
            this.loginData.loading = true;
            const response = await $http.post("admins/login", form);
            console.log("LogIn data: ", response.data);
            localStorage.setItem("token", response.data.token);
            this.loginData.data = response;
         } catch (error) {
            this.loginData.error = error;
         } finally {
            this.loginData.loading = false;
         }
      },
      async setRole(value) {
         try {
            localStorage.setItem("role", value);
            this.loginData.loading = true;
            const response = await $http.post("admins/set-role", {role: value});
            console.log("Set role data: ", response.data);
         } catch (error) {
            this.loginData.error = error;
         } finally {
            this.loginData.loading = false;
         }
      },
   },
   getters: {},
});
