<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue'
</script>

<template>
  <MainLayout class="main">
    <RouterView />
  </MainLayout>
</template>

<style scoped>
.main {
  background-color: rgb(255, 255, 255);
}
</style>
