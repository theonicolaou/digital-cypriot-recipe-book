<template>
  <div class="recipes">
  <h1>This is the RecipesListing View, within maincolumn, but with a different background colour just to show. It calls the RecipesList component</h1>
    <RecipesList/>
  </div>
</template>

<script>
  import recipeData from '../json/data.json'
  import RecipesList from '@/components/RecipesList.vue'

  export default {
    name: 'Recipes',
    components: {
      RecipesList
    },

    data() {
     return {
       recipeData
     }
   }
 }

</script>
