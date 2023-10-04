<template>
    <div class="row">
        <div class="col-3 p-0">
            <Sidebar :items="sidebar_items"/>
        </div>
        <div class="col-9 right p-0">
            <router-view/>
        </div>
    </div>
</template>

<script setup>
import Sidebar from "@/components/layouts/Sidebar.vue";
import { ref } from "vue";
const sidebar_items = ref([
    {title: "Products", path:"admin/products"}
])
</script>

<style lang="scss" scoped>
.right {
    height: 100vh;
    overflow: auto;
}
</style>