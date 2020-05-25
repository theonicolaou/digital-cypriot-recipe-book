<template>
  <div class="recipes">
  <h1>This is the recipes View, within maincolumn, but with a different background colour just to show</h1>
    <h2>Recipe names:</h2>
    <ul>
      <li v-for="recipe in recipeData.recipes" v-bind:key="recipe.id">
        {{ recipe.recipeName }} (ID: {{ recipe.id }}, URL: {{ recipe.url }})
      </li>
    </ul>

    <h2>Ingredients:</h2>
    <ul>
      <li v-for="recipe in recipeData.recipes" v-bind:key="recipe.id">
        {{ recipe.ingredients }}
      </li>
    </ul>

        <h2>Utensils:</h2>
    <ul>
      <li v-for="recipe in recipeData.recipes" v-bind:key="recipe.id">
        {{ recipe.utensils }}
      </li>
    </ul>

        <h2>Methods:</h2>
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
    name: 'Recipes',

    data() {
     return {
       recipeData
     }
   }
 }

</script>

<style scoped lang="scss">
.recipes {
  background-color: #cccccc;
}
</style>
