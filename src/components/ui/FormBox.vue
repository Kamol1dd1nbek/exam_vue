<template>
    <div class="form-box">
        <slot></slot>
    </div>
</template>

<script setup></script>

<style lang="scss">
.form-box {
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