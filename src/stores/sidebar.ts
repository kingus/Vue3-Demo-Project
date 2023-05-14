import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({ open: true }),
  getters: {},
  actions: {
    toggleSidebar() {
      this.open = !this.open
    }
  }
})
