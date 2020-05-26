<template>
  <div class="recipe-method">
    <h2>Method:</h2>
    <ul>
      <li v-for="recipe in recipeData.recipes" v-bind:key="recipe.id">
        {{ recipe.method }}
      </li>
    </ul>
  </div>
</template>

<script>
  import recipeData from '../json/data.json'

  export default {
    name: 'RecipeMethod',

    data() {
     return {
       recipeData
     }
   }
 }

</script>
