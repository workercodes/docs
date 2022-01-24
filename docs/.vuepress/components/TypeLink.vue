<template>
    <a href="http://"> 
        <span class="badge">
            <slot></slot>
        </span>
    </a>
</template>

<script setup>

</script>

<style scoped>

/* .badge {
    vertical-align:  middle;
    background-color: green;
    
} */

.badge {
    vertical-align:  middle;
    background-color: #ff6f4315;
    /* user-select: none;
    pointer-events: none; */
    /* cursor: pointer; */
    font-weight: 700;
    font-size: .7rem;
    border-radius: 3px;
    border: 2px solid #ff6f43a4;
    color: #ff6f43;
    opacity: .75;
    box-shadow: 0 0 0 1px rgba(var(--color-rgb),var(--border-opacity));
}
</style>