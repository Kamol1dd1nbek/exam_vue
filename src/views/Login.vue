<template>
   <Loader v-if="loading" />
   <div v-else>
      <Choose ref="choose_modal"></Choose>
      <wrapper>
         <FormBox>
            <h2 class="text-center">Log In</h2>
            <Form @submit="handleSubmit" :validation-schema="login_schema">
               <div class="my-2">
                  <Field
                     name="username"
                     type="text"
                     class="form-control"
                     placeholder="Username"
                     v-model="form.username"
                  />
               </div>
               <ErrorMessage class="text-danger text-start" name="username" />
               <div class="my-2">
                  <Field
                     name="password"
                     type="text"
                     class="form-control"
                     placeholder="Password"
                     v-model="form.password"
                  />
                  <ErrorMessage class="text-danger" name="password" />
               </div>
               <div class="row mt-4">
                  <div class="col-4 offset-4">
                     <button
                        class="btn btn-outline-dark form-control"
                        type="submit"
                     >
                        Log in
                     </button>
                  </div>
               </div>
            </Form>
         </FormBox>
      </wrapper>
   </div>
</template>

<script setup>
import Wrapper from "@/components/pages/Wrapper.vue";
import FormBox from "@/components/ui/FormBox.vue";
import Loader from "../components/pages/Loader.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import { login_schema } from "@/models/login";
import { ref, watch } from "vue";
import { useAuthStore } from "@/store/auth";
const authStore = useAuthStore();
import Choose from "@/components/pages/create_choose.vue";
const choose_modal = ref();
const form = ref({
   username: "",
   password: "",
});

const loading = ref(true);
const handleSubmit = () => {
   authStore.login(form.value);
   loading.value = authStore.loginData.loading;
};

watch(() => authStore.loginData.data, () => {
      loading.value = false;
      setTimeout(() => {
         choose_modal.value.openModal(authStore.loginData.data);
      },0)
      console.log(11111);
});

loading.value = authStore.login.loading;
</script>

<style lang="scss" scoped>
.formBox {
   display: flex;
   flex-flow: nowrap column;
   justify-content: center;
   border-radius: 10px;
   gap: 15px;
   width: 45%;
   padding: 40px;
   background-color: #fff;
}
</style>
