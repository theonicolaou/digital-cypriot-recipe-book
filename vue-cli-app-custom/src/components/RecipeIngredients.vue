<template>
  <div class="recipe-ingredients">
    <h2>Ingredients:</h2>
    <ul>
      <li v-for="recipe in recipeData.recipes" v-bind:key="recipe.id">
        {{ recipe.ingredients }}
      </li>
    </ul>
  </div>
</template>

<script>
  import recipeData from '../json/data.json'

  export default {
    name: 'RecipeIngredients',

    data() {
     return {
       recipeData
     }
   }
 }

</script>
