<template>
  <div class="recipes">
  <h1>This is the recipes View, within maincolumn, but with a different background colour just to show</h1>
    <ul>
      <li v-for="recipe in recipeData" v-bind:key="recipe.id">
        {{ recipeData.recipeName }}
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
       recipeData,
       recipeName: ''
     }
   }
 }

</script>

<style scoped lang="scss">
.recipes {
  background-color: #cccccc;
}
</style>
