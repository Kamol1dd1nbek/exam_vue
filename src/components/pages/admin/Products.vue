<template>
   <Loading v-if="loading" />
   <Addproduct ref="addProductModal" />
   <div>
      <div class="row position-sticky top-0 z-3 bg-light border d-flex">
         <div class="col-3 offset-1">
            <h1 class="start-0">Products</h1>
         </div>
         <div class="col-3 offset-4 d-flex align-items-center">
            <button @click="add" class="btn btn-outline-success form-control">
               Add
            </button>
         </div>
      </div>
      <div class="container">
         <ProductBox
            @edit-product="edit"
            v-for="(item, index) in data"
            :key="index"
            :item="item"
         />
      </div>
   </div>
</template>

<script setup>
import Loading from "@/components/pages/Loader.vue";
import ProductBox from "../../ui/ProductBox.vue";
import Addproduct from "@/components/modals/Products/addProduct.vue";
import { useProductStore } from "@/store/products";
import { onMounted, ref, watch } from "vue";
const productStore = useProductStore();
const loading = ref(false);
const data = ref(null);
const addProductModal = ref();
onMounted(() => {
   productStore.getAllProducts();
   loading.value = productStore.allProducts.loading;
});

watch(
   () => productStore.allProducts.data,
   () => {
      loading.value = productStore.allProducts.loading;
      data.value = productStore.allProducts.data;
      console.log(data.value[0]);
   }
);

const add = () => {
   addProductModal.value.openModal("", "Add Product");
};
const edit = (id) => {
   productStore.getOneProduct(id);
};

watch(
   () => productStore.oneProduct.data,
   () => {
      const data = productStore.oneProduct.data;
      addProductModal.value.openModal(data, "Edit Product");
   }
);
</script>

<style lang="scss" scoped></style>
