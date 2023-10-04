import { defineStore } from "pinia";
import $http from "@/plugins/axios";
export const useProductStore = defineStore("product", {
   state: () => ({
      allProducts: {
         data: null,
         loading: false,
         error: null,
      },
   }),
   actions: {
      async getAllProducts() {
         try {
            this.allProducts.loading = true;
            const response = await $http.get("products");
            this.allProducts.data = response.data.products;
         } catch (error) {
            this.allProducts.error = error;
         } finally {
            this.allProducts.loading = false;
         }
      },
      async addProduct(form) {
         try {
            const response = await $http.post("products/add", form);
            const data = response.data;
            return data;
         } catch (error) {
            console.log(error);
         } finally {
            
         }
      }
   },
   getters: {},
});
