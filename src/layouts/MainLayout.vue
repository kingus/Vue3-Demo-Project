<template>
  <div class="main-container">
    <header>
      <span class="mdi mdi-menu side-bar-icon" @click="handleToggle"></span>

      <FlagSelect :options="flagOptions" v-model="locale" />
    </header>

    <div class="page-container">
      <div v-if="store.open" class="navbar">
        <router-link class="router-link" to="/">
          <span class="mdi mdi-home" />
          {{ t('message.homeLabel') }}
        </router-link>
        <router-link class="router-link" to="/favourites">
          <span class="mdi mdi-heart" />

          {{ t('message.favouriteLabel') }}
        </router-link>
      </div>

      <div class="page">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FlagSelect, { type IFlagSelectOption } from '@/components/FlagSelect.vue'
import { useI18n } from 'vue-i18n'
import { useSidebarStore } from '@/stores/sidebar'

const store = useSidebarStore()

const handleToggle = () => {
  store.toggleSidebar()
}

const { t, locale } = useI18n()
const flagOptions: IFlagSelectOption[] = [
  { name: 'message.polish', value: 'pl', icon: '🇵🇱' },
  { name: 'message.english', value: 'en', icon: '🇬🇧' }
]
</script>

<style scoped>
header {
  background-color: rgb(155, 191, 255);
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  justify-content: space-between;
}

.side-bar-icon {
  font-size: 40px;
  color: rgb(0, 0, 30);
}

.navbar {
  width: 250px;
  max-width: 250px;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0px 20px;
}

.main-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.page-container {
  height: 100%;
  width: 100%;
  display: flex;
}

.page {
  width: 100%;
  height: calc(100% - 50px);
  padding: 10px;
  overflow: scroll;
}

.router-link {
  font-size: 20px;
  text-decoration: none;
  color: rgb(0, 0, 30);
  margin-bottom: 5px;
  border-radius: 10px;
  padding: 10px;
}

.router-link:hover {
  cursor: pointer;
  background-color: white;
}
</style>
