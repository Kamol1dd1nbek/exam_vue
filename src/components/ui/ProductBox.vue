<template>
   <div class="card my-3">
      <div class="card-header">
         {{ item.name }}
      </div>
      <div class="card-body">
         <div class="row">
            <div class="col-6 ps-5 border border-start-0 border-top-0 border-bottom-0">
               <p class="text-end">Group: {{ item.group }}</p>
               <p class="text-end">Brand: {{ item.brand }}</p>
               <p class="text-end">Description: {{ item.description }}</p>
            </div>
            <div class="col-6">
               <p class="text-start">Price: {{ item.price }}</p>
               <p class="text-start">Arrival price: {{ item.arrival_price }}</p>
               <p class="text-start">Selling price: {{ item.selling_price }}</p>
            </div>
         </div>
      </div>
      <div class="card-footer">
         <div class="row">
            <div class="col-4 offset-8">
               <div class="btn-group">
                <button class="btn btn-warning">Edit</button>
                <button class="btn btn-danger">Delete</button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
const props = defineProps({
   item: Object,
});

</script>

<style lang="scss" scoped></style>
