<template>
  <div class="recipe-utensils">
    <h2>Utensils:</h2>
    <ul>
      <li v-for="recipe in recipeData.recipes" v-bind:key="recipe.id">
        {{ recipe.utensils }}
      </li>
    </ul>
  </div>
</template>

<script>
  import recipeData from '../json/data.json'

  export default {
    name: 'RecipeUtensils',

    data() {
     return {
       recipeData
     }
   }
 }

</script>
