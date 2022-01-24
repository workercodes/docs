<template>
    <span class="badge">
         <slot></slot>
    </span>
</template>

<script setup>

</script>

<style scoped>

.badge {
    vertical-align:  middle;
    /* background-color: #ff7043; */
    user-select: none;
    pointer-events: none;
    font-weight: 700;
    font-size: .7rem;
    border-radius: 3px;
    border: 2px solid rgba(255, 255, 255, 0.555);
    color: rgba(255, 255, 255, 0.555);
    opacity: .75;
    box-shadow: 0 0 0 1px rgba(var(--color-rgb),var(--border-opacity));
}
</style>