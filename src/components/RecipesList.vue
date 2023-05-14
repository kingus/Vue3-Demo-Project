<template>
  <div class="recipes-container">
    <slot> No recipes </slot>
  </div>
</template>

<script setup lang="ts">
export interface IRatingProps {
  rating: number
}

withDefaults(defineProps<IRatingProps>(), {
  rating: 3
})
</script>

<style scoped>
.recipes-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
