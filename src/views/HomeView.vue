<script setup lang="ts">
import RecipeCard from '@/components/RecipeCard.vue'
import RecipesList from '@/components/RecipesList.vue'
import RightDrawer from '@/components/RightDrawer.vue'
import { type IRecipe } from '@/components/RecipeCard.vue'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
const showDrawer = ref(false)

const { t } = useI18n()
const recipes = [
  {
    id: 12231,
    title: 'Veggie Burger',
    imageUrl:
      'https://www.realsimple.com/thmb/z3cQCYXTyDQS9ddsqqlTVE8fnpc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/real-simple-mushroom-black-bean-burgers-recipe-0c365277d4294e6db2daa3353d6ff605.jpg',
    preparationTime: 3,
    isVegan: true,
    isSpicy: false,
    rating: 1
  },
  {
    id: 12232,
    title: 'Chicken Curry',
    imageUrl: 'https://cafedelites.com/wp-content/uploads/2019/01/Butter-Chicken-IMAGE-27.jpg',
    preparationTime: 1,
    isVegan: false,
    isSpicy: true,
    rating: 3
  },
  {
    id: 12233,
    title: 'Vegan Chicken Nuggets',
    imageUrl:
      'https://jessicainthekitchen.com/wp-content/uploads/2019/12/Vegan-Tofu-Nuggets-Crispy-Crunchy-3.jpg',
    preparationTime: 2,
    isVegan: true,
    isSpicy: true,
    rating: 2
  },
  {
    id: 12234,
    title: 'Spicy Spaghetti Curry',
    imageUrl:
      'https://veganwithgusto.com/wp-content/uploads/2021/05/speedy-spaghetti-arrabbiata-1st-image.jpg',
    preparationTime: 1,
    isVegan: false,
    isSpicy: true,
    rating: 4
  },
  {
    id: 12235,
    title: 'Vegan Nachos',
    imageUrl: 'https://www.noracooks.com/wp-content/uploads/2018/10/sq-3.jpg',
    preparationTime: 4,
    isVegan: true,
    isSpicy: false,
    rating: 5
  },
  {
    id: 12236,
    title: 'Vegan Meatballs',
    imageUrl:
      'https://cupfulofkale.com/wp-content/uploads/2020/01/Vegan-Meatballs-in-Marinara-Sauce-735x1103.jpeg',
    preparationTime: 2,
    isVegan: true,
    isSpicy: true,
    rating: 2
  },
  {
    id: 22231,
    title: 'Strawberry Shortcake',
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod/images/strawberry-shortcake1-1657636239.jpg?crop=0.671xw:1.00xh;0.167xw,0&resize=360:*',
    preparationTime: 3,
    isVegan: true,
    isSpicy: false,
    rating: 1
  },
  {
    id: 22232,
    title: 'Caesar Salad',
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod/images/caesarsalad-horizontal-jpg-1523569732.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=360:*',
    preparationTime: 1,
    isVegan: false,
    isSpicy: true,
    rating: 3
  },
  {
    id: 22233,
    title: 'Gluten-Free Crêpes',
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod/images/gluten-free-crepes-645e6e5e4261f.jpg?crop=0.566xw:1.00xh;0.0529xw,0&resize=360:*',
    preparationTime: 2,
    isVegan: true,
    isSpicy: true,
    rating: 2
  },
  {
    id: 22234,
    title: 'French Toast',
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod/images/delish-230308-french-toast-055-rv-index-641c84040274d.jpg?crop=0.502xw:1.00xh;0.176xw,0&resize=360:*',
    preparationTime: 1,
    isVegan: false,
    isSpicy: true,
    rating: 4
  },
  {
    id: 22235,
    title: 'Bruschetta',
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod/images/bruschetta-index-645d03e6f174d.jpg?crop=0.502xw:1.00xh;0.157xw,0&resize=360:*',
    preparationTime: 4,
    isVegan: true,
    isSpicy: false,
    rating: 5
  },
  {
    id: 22236,
    title: 'Frittata',
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod/images/frittata-index-645d0217ac708.jpg?crop=0.502xw:1.00xh;0.197xw,0&resize=360:*',
    preparationTime: 2,
    isVegan: true,
    isSpicy: true,
    rating: 2
  }
]
const currentRecipe = ref()

const handleOpenDrawer = (recipe: IRecipe) => {
  currentRecipe.value = recipe
  showDrawer.value = !showDrawer.value
}
</script>

<template>
  <h1>{{ t('message.recipesLabel') }}</h1>
  <RecipesList>
    <RecipeCard
      v-for="(recipe, index) in recipes"
      :key="index"
      :recipe="recipe"
      @click="handleOpenDrawer(recipe)"
    />
  </RecipesList>
  <RightDrawer v-model="showDrawer">
    <div class="drawer-content">
      <img :src="currentRecipe.imageUrl" />
      <div class="recipe-details">
        <span class="recipe-title">{{ currentRecipe.title }}</span>

        <div class="icons-container">
          <span v-if="currentRecipe.isSpicy" class="mdi mdi-chili-mild icon spicy-icon"></span>
          <span v-if="currentRecipe.isVegan" class="mdi mdi-sprout icon vegan-icon"></span>
        </div>
      </div>
      <div class="recipe-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et dui consectetur,
        suscipit nulla sed, posuere nisi. Nunc scelerisque malesuada elementum. Donec consequat
        iaculis feugiat. Etiam congue varius massa, ut porta orci rutrum sit amet. Curabitur urna
        sem, luctus a velit eu, pellentesque porttitor dolor. Aliquam a ligula ex. Ut et turpis vel
        risus luctus pellentesque. Vivamus nec luctus velit. Nullam egestas felis placerat auctor
        consectetur. Donec vitae blandit justo. Duis vehicula faucibus mauris. Maecenas vitae varius
        dolor. Sed ut dui vestibulum, sagittis augue sit amet, vestibulum nisi. Sed posuere risus
        dui, lacinia ultrices nibh maximus id. Proin congue massa non quam porttitor dignissim.
        Nulla bibendum tellus eu sagittis tempor. Maecenas sit amet consequat magna, ac facilisis
        leo. Donec est tortor, volutpat vel dolor ac, fringilla malesuada lacus. Mauris id viverra
        orci. Cras tortor nibh, tempus et volutpat id, vehicula sed urna. Ut massa purus, sodales at
        maximus non, tempus vitae nunc. Aenean rutrum diam a elit semper, sed feugiat velit
        imperdiet. Nunc dictum accumsan erat ut ultricies. Nunc a tincidunt ipsum. Duis non lectus
        ac justo tincidunt semper. Nulla laoreet pellentesque tempus. Nunc ullamcorper velit dolor,
        sollicitudin sodales elit viverra commodo. Duis luctus sollicitudin mi euismod porta.
        Maecenas sed lacus sapien. Cras et scelerisque purus, nec condimentum sem. Suspendisse
        gravida maximus justo ac suscipit. Duis vestibulum, lacus nec pellentesque porta, nibh
        libero consequat nunc, sollicitudin sodales odio metus dapibus quam. Morbi porta lobortis
        pellentesque. In ullamcorper orci eget lacus blandit, sit amet rhoncus neque euismod.
        Vestibulum eu facilisis nisl, vitae pharetra risus. Curabitur non dapibus tellus, ac finibus
        dolor. Quisque orci dui, viverra eu sodales non, aliquet a tellus. Sed faucibus sagittis
        nunc id cursus. Curabitur bibendum vehicula dignissim. Nulla diam urna, gravida sodales
        iaculis luctus, tincidunt nec diam. Nulla consectetur rhoncus ex, in lacinia lorem tempor
        vel. Sed facilisis nisl posuere velit aliquam, ut hendrerit felis tincidunt. Morbi
        vestibulum urna diam, sed sagittis sapien dapibus a. Suspendisse eu diam eget urna bibendum
        finibus. Praesent vitae accumsan erat, condimentum mollis lectus. Vivamus bibendum finibus
        magna, eu consequat risus faucibus eget. Suspendisse non urna neque. Aliquam erat volutpat.
        Maecenas semper, nibh ut efficitur pellentesque, leo est tempus libero, eu pellentesque
        lorem nisi in libero. Nulla sed dolor sapien. In nunc dolor, rutrum at velit a, interdum
        commodo lorem. Ut lobortis nisi pharetra lacus eleifend auctor. Ut placerat elit risus, sit
        amet fermentum sapien lobortis sed. Aenean lacinia, ipsum non consequat tristique, risus
        tortor vulputate velit, sit amet dictum quam nisl vitae augue. Curabitur pulvinar auctor
        urna in laoreet. Sed eu tellus dapibus erat fermentum bibendum. Pellentesque diam tortor,
        fermentum nec pharetra eget, ornare eget lacus. Sed vitae quam odio. In at ipsum ligula.
        Cras ut elementum nisi, a elementum massa. Nam nec malesuada massa, ac scelerisque arcu. Sed
        et sem tristique, sollicitudin lacus et, feugiat tortor. Sed sodales ligula a pellentesque
        condimentum. Morbi eget elementum dui. Donec sed enim eget nunc tincidunt efficitur. Donec
        mauris nisi, tempor in fermentum vel, blandit et arcu. Quisque nec cursus turpis, sed
        feugiat ipsum. Maecenas nunc purus, convallis fringilla orci a, malesuada cursus leo. Proin
        gravida maximus velit ac luctus. Sed aliquet commodo tellus, eu varius sem.
      </div>
    </div>
  </RightDrawer>
</template>

<style>
img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px 10px 0px 0px;
}

.drawer-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.recipe-details {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}

.recipe-title {
  font-size: x-large;
  font-weight: bold;
}

.recipe-text {
  display: flex;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  padding: 10px;
}

.icon {
  font-size: x-large;
  padding: 5px;
}

.vegan-icon {
  color: rgb(117, 223, 117);
}

.spicy-icon {
  color: rgb(255, 71, 71);
}
</style>
