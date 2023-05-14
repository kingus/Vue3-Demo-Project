<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue';
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <MainLayout class="main">
    <RouterView />
  </MainLayout>
</template>

<style scoped>
.main{
  background-color: rgb(255, 255, 255);
}
</style>
