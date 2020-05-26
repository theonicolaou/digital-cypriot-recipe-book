<template>
  <div class="recipes">
  <h1>This is the RecipesList component</h1>
    <h2>Recipes:</h2>
    <ul>
      <li v-for="recipe in recipeData.recipes" v-bind:key="recipe.id">
        <a :href="`#/recipes/${recipe.url}`">{{ recipe.recipeName }}</a> (ID: {{ recipe.id }}, URL: {{ recipe.url }})
      </li>
    </ul>
  </div>
</template>

<script>
  import recipeData from '../json/data.json'

  export default {
    name: 'RecipesList',

    data() {
     return {
       recipeData
     }
   }
 }

</script>
