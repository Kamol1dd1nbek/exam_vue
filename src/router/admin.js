import Admin from "@/views/admin/Admin.vue";
export default {
   path: "/admin",
   name: "admin",
   component: Admin,
   children: [
    {
        path: "products",
        name: "products",
        component: import("@/components/pages/admin/Products.vue")
    }
   ]
};
