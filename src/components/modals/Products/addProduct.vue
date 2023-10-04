<template>
   <AppModal v-model="dialog" class="p-5">
      <div>
         <Form :validation-schema="add_product_schema">
            <div class="my-2">
               <Field
                  name="name"
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  v-model="form.name"
               />
               <ErrorMessage name="name" class="text-danger" />
            </div>
            <div class="my-2">
               <Field
                  name="brand"
                  type="text"
                  class="form-control"
                  placeholder="Brand"
                  v-model="form.brand"
               />
               <ErrorMessage name="brand" class="text-danger" />
            </div>
            <div class="my-2">
               <Field
                  name="group"
                  type="text"
                  class="form-control"
                  placeholder="Group"
                  v-model="form.group"
               />
               <ErrorMessage name="group" class="text-danger" />
            </div>
            <div class="my-2">
               <Field
                  name="price"
                  type="text"
                  class="form-control"
                  placeholder="Price"
                  v-model="form.price"
               />
               <ErrorMessage name="price" class="text-danger" />
            </div>
            <div class="my-2">
               <Field
                  name="arrival_price"
                  type="text"
                  class="form-control"
                  placeholder="Arrival price"
                  v-model="form.arrival_price"
               />
               <ErrorMessage name="arrival_price" class="text-danger" />
            </div>
            <div class="my-2">
               <Field
                  name="selling_price"
                  type="text"
                  class="form-control"
                  placeholder="Selling price"
                  v-model="form.selling_price"
               />
               <ErrorMessage name="selling_price" class="text-danger" />
            </div>
            <div class="my-2">
               <Field
                  name="description"
                  type="text"
                  class="form-control"
                  placeholder="Description"
                  v-model="form.description"
               />
               <ErrorMessage name="description" class="text-danger" />
            </div>
            <div class="row my-3">
               <div class="col-6 offset-3">
                  <button class="btn btn-outline-primary" @click="save">
                     Save
                  </button>
               </div>
            </div>
         </Form>
      </div>
   </AppModal>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { add_product_schema } from "@/models/product";
import AppModal from "@/components/ui/app-modal.vue";
import FormBox from "../../ui/FormBox.vue";
import { useProductStore } from "@/store/products";
const productStore = useProductStore();
import { ref } from "vue";
const dialog = ref(false);
const form = ref({
   name: "",
   brand: "",
   group: "",
   price: "",
   arrival_price: "",
   selling_price: "",
   description: "",
});

const openModal = (item) => {
   if (item) {
      form.value = item.data;
   }
   dialog.value = true;
};

const save = () => {
   productStore.addProduct({
      ...form.value,
      price: Number(form.value.price),
      arrival_price: Number(form.value.arrival_price),
      selling_price: Number(form.value.selling_price),
   });
   form.value = {
      name: "",
      brand: "",
      group: "",
      price: null,
   };
   dialog.value = false;
   productStore.getAllProducts();
};

defineExpose({ openModal });
</script>

<style lang="scss" scoped></style>
