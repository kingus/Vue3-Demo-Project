<template>
  <div class="rating-container">
    <span v-for="index in 5" :key="index">
      <span v-if="index <= rating" class="mdi mdi-star"></span>
      <span v-else class="mdi mdi-star-outline"></span>
    </span>
    <span class="rating-number">{{ rating }}</span>
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
.rating-container {
  display: flex;
  align-items: center;
}

.rating-number {
  padding-left: 10px;
}

span {
  font-size: small;
}
</style>
