<template>
   <AppModal v-model="dialog" class="p-5">
      <select
         v-if="form.roles"
         id="select"
         class="form-select"
         aria-label="Default select example"
      >
         <option selected hidden>Select role</option>
         <option v-for="(item, index) in form.roles" :key="index" :value="item">
            {{ item }}
         </option>
      </select>
      <div class="row my-4">
         <div class="col-4 offset-4">
            <button @click="getSelectedOption" class="btn btn-outline-dark">
               Select
            </button>
         </div>
      </div>
   </AppModal>
</template>

<script setup>
import AppModal from "@/components/ui/app-modal.vue";

import { ref } from "vue";
const dialog = ref(false);
const form = ref();
const openModal = (item) => {
   if (item) {
      form.value = item.data;
   }
   dialog.value = true;
};
import { useAuthStore } from "@/store/auth";
const authStore = useAuthStore();

const getSelectedOption = async () => {
   const selectElement = document.getElementById("select");
   const selectedOption =
      selectElement.options[selectElement.selectedIndex].value;

   if (selectedOption !== "Select role") {
      console.log("kirdi");
      await authStore.setRole(selectedOption);
      location.reload();
   }
};
defineExpose({ openModal });
</script>

<style lang="scss" scoped></style>
