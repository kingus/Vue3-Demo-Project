<template>
  <div>
    <h1>{{ t('message.favouriteLabel') }}</h1>

    <RecipesList>
      <RecipeCard v-for="(recipe, index) in store.favourites" :key="index" :recipe="recipe" />
    </RecipesList>
  </div>
</template>

<script setup lang="ts">
import RecipeCard from '@/components/RecipeCard.vue'
import RecipesList from '@/components/RecipesList.vue'
import { useFavouritesStore } from '@/stores/favourites'
import { useI18n } from 'vue-i18n'

const store = useFavouritesStore()
const { t } = useI18n()
</script>
