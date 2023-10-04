<template>
   <div class="sidebar bg-warning pt-5">
      <router-link
         class="sidebar_link"
         v-for="(item, index) in items"
         :key="index"
         :to="item.path"
      >
         {{ item.title }}
      </router-link>
      <button @click="logout" class="btn btn-outline-success">Log out</button>
   </div>
</template>

<script setup>
const props = defineProps({
   items: Array,
});
const logout = () => {
   localStorage.removeItem("token");
   localStorage.removeItem("role");
   location.reload();
}
</script>

<style lang="scss" scoped>
.sidebar {
   width: 100%;
   height: 100vh;
   background-color: black;
   display: flex;
   gap: 15px;
   flex-flow: nowrap column;
   .sidebar_link {
      width: 80%;
      padding: 20px 15px !important;
      text-decoration: none;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 8px;
   }
}
</style>
