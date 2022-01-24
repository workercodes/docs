<template>
    <div class="aside">
         <slot></slot>
    </div>
</template>

<script setup>

</script>

<style scoped>

.aside {
    background-color: #ff6f4327;
    padding: 10px;
    margin-top: 10px;
    /* font-weight: 700; */
    font-size: .8rem;
    border-radius: 3px;
    border: 1px solid rgba(255, 255, 255, 0.247);
    color: white;
    /* opacity: .75; */
}
</style>