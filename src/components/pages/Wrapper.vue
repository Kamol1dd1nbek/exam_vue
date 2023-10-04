<template>
    <div class="wrapper bg-dark">
       <slot></slot>
    </div>
 </template>
 
 <script setup></script>
 
 <style scoped>
 .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
 }
 </style>
 