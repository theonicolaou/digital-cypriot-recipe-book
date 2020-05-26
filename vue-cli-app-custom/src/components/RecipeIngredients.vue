<template>
  <div class="recipe-ingredients">
    <h2>Ingredients:</h2>
    <ul>
      <!-- <li v-for="recipe in recipeData.recipes" v-bind:key="recipe.id"> -->
      <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
        {{ ingredient }}
      </li>
    </ul>
  </div>
</template>

<script>
  // import recipeData from '../json/data.json'

  export default {
    name: 'RecipeIngredients',

   //  data() {
   //   return {
   //     recipeData
   //   }
   // },

    props: {
      recipe: {
        required: true,
        type: Object
      }
    }
  }

</script>
