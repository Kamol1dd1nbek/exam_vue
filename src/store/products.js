import { defineStore } from "pinia";
import $http from "@/plugins/axios";
export const useProductStore = defineStore("product", {
   state: () => ({
      allProducts: {
         data: null,
         loading: false,
         error: null,
      },
      oneProduct: {
         data: null,
         loading: false,
         error: null
      }
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
      },
      async getOneProduct(id){
         try {
            this.oneProduct.loading = true;
            const response = await $http.get(`products/${id}`);
            const data = response.data;
            this.oneProduct.data = data;
         } catch (error) {
            this.oneProduct.error = error
         } finally {
            this.oneProduct.loading = false;
         }
      },
      async editOneProduct(id, data){
         try {
            this.oneProduct.loading = true;
            const response = await $http.patch(`products/update/${id}`, data);
         } catch (error) {
            this.oneProduct.error = error;
         } finally {
            this.oneProduct.loading = false;
         }
      }
   },
   getters: {},
});
