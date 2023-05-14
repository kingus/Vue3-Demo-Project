<template>
    <div class="card-container">

        <button class="favourite-container" @click.stop.prevent="handleRemoveFromFavourites">

            <span v-if="store.isRecipeFavourite(recipe.id)" class="mdi mdi-heart favourite-icon" ></span>
            <span v-else class="mdi mdi-heart-outline favourite-icon" @click.stop.prevent="handleAddToFavourites"></span>

        </button>
        <img :src="recipe.imageUrl" />

        <div class="bottom-section">
            <div class="header-container">

                <div class="icons-container">
                    <span v-if="recipe.isSpicy" class="mdi mdi-chili-mild icon spicy-icon"></span>
                    <span v-if="recipe.isVegan" class="mdi mdi-sprout icon vegan-icon"></span>
                </div>
                <div class="time-container">
                    <span class="mdi mdi-clock-outline time-icon"></span>
                    <span> {{ recipe.preparationTime }} {{ $t("message.hoursLabel") }}</span>
                </div>

            </div>
            <div class="title-container">
                <span :title="recipe.title" class="title"> {{ recipe.title }}</span>
                <Rating :rating="recipe.rating" />
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import Rating from './Rating.vue';
import { useFavouritesStore } from '@/stores/favourites';

const store = useFavouritesStore();

export interface IRecipe {
    id: number,
    title: string,
    imageUrl: string,
    preparationTime: number,
    isVegan: boolean,
    isSpicy: boolean,
    rating: number
}

export interface IRecipeCardProps {
    recipe: IRecipe
}

const props = withDefaults(defineProps<IRecipeCardProps>(), {
    recipe: {
        title: "Title test",
        imageUrl: "https://cafedelites.com/wp-content/uploads/2019/01/Butter-Chicken-IMAGE-27.jpg",
        preparationTime: 1
    }

})

const handleAddToFavourites = () => {
    store.addRecipe(props.recipe)
}
const handleRemoveFromFavourites = () => {
    store.removeRecipe(props.recipe.id)
}
</script>

<style scoped>
.card-container {
    width: 250px;
    height: 250px;
    border: 1px solid rgb(239, 252, 255);
    border-radius: 10px;
    background-color: aliceblue;
    position: relative;
}

.card-container:hover {
    filter: brightness(90%);
}

.favourite-icon{
    font-size: large;
}

.favourite-container {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 10px;
    right: 10px;
    background-color: aliceblue;
    padding: 2px;
    width: 35px;
    height: 35px;
    border-radius: 100%;
    border: 3px solid white;
    font-size: large;
    cursor: pointer;
    opacity: 90%;
}

.icons-container {
    display: flex;
    flex-direction: row;
}

.time-container {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.bottom-section {
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
}

.header-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

}

.title {
    font-size: large;
    font-weight: bold;
    text-align: center;
    text-size-adjust: auto;
    white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden; /* keeps the element from overflowing its parent */
width: 200px;
}

img {
    width: 100%;
    height: 50%;
    object-fit: cover;
    border-radius: 10px 10px 0px 0px;
}

span {
    font-size: small;
}

.icon {
    font-size: x-large;
}

.vegan-icon {
    color: rgb(117, 223, 117)
}

.spicy-icon {
    color: rgb(255, 71, 71)
}

.time-icon {
    font-size: large;
    color: rgb(42, 42, 42);
    padding-right: 5px;
}
</style>