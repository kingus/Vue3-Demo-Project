import { defineStore } from 'pinia'
import type { IRecipe } from '@/components/RecipeCard.vue'

export interface IFavouritesStore {
  favourites: Array<IRecipe>
}

export const useFavouritesStore = defineStore('favourites', {
  state: (): IFavouritesStore => ({ favourites: [] }),
  getters: {},
  actions: {
    isRecipeFavourite(id: number): boolean {
      return this?.favourites.filter((item: IRecipe) => item.id == id).length > 0
    },
    addRecipe(recipe: IRecipe) {
      if (!this.isRecipeFavourite(recipe.id)) {
        this.favourites.push(recipe)
      }
    },
    removeRecipe(id: number) {
      this.favourites = this.favourites.filter((item: IRecipe) => item.id !== id)
    }
  }
})
