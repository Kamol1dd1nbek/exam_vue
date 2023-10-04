<template>
   <div class="app-modal" :class="{ 'app-modal-show': modelValue }">
      <AppTransition>
         <div v-if="modelValue" class="app-modal__body">
            <slot></slot>
         </div>
      </AppTransition>
   </div>
   <div>
      <AppTransition>
         <span
            @click="$emit('update:modelValue', false)"
            v-if="modelValue"
            class="app-modal-shadow"
         ></span>
      </AppTransition>
   </div>
</template>

<script setup>
import AppTransition from "@/components/ui/app-transition.vue";

const props = defineProps({
   modelValue: {
      type: Boolean,
      default: false,
   },
   width: {
      type: String,
   },
});
</script>

<style lang="scss" scoped>
.app-modal {
   position: fixed;
   transform: translate(-50%, -50%);
   left: 50%;
   width: 50%;
   max-height: 600px;
   top: 50%;
   background-color: white;
   z-index: -1;
   opacity: 0;
   overflow: auto;
   background-color: #d2e9e9;
   border-radius: 0.5rem;
}

.app-modal-show {
   opacity: 1;
   z-index: 1000;
}

::-webkit-scrollbar {
   display: none;
}

.app-modal__body {
   padding: 20px;
}

.app-modal-shadow {
   background-color: rgba(0, 0, 0, 0.5);
   position: absolute;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   z-index: 100;
}

@media (max-width: 990px) {
   .app-modal {
      width: 70%;
   }
}

@media (max-width: 768px) {
   .app-modal {
      width: 80%;
   }
}

@media (max-width: 576px) {
   .app-modal {
      width: 90%;
   }
}
</style>
