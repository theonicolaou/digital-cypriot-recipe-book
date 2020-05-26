<template>
  <div class="recipes">
    <div v-for="recipe in recipeData.recipes" v-bind:key="recipe.id">
      <h2>{{ recipe.recipeName }}</h2>
      <ul>
        <li>
          (ID: {{ recipe.id }}, URL: {{ recipe.url }})
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import recipeData from '../json/data.json'

  export default {
    name: 'RecipeIntro',

    data() {
     return {
       recipeData
     }
   }
 }

</script>
