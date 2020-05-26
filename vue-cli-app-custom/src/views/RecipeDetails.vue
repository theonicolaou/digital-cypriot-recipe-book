<template>
  <div class="recipes">
    <h1>This is recipeDetails View, within maincolumn, but with a different background colour just to show</h1>
    <div>
      <RecipeIntro :recipe="recipe"/>
      <RecipeIngredients :recipe="recipe"/>
      <RecipeUtensils :recipe="recipe"/>
      <RecipeMethod :recipe="recipe"/>
    </div>
  </div>
</template>

<script>
import recipeData from '../json/data.json'
import RecipeIntro from '@/components/RecipeIntro.vue'
import RecipeIngredients from '@/components/RecipeIngredients.vue'
import RecipeUtensils from '@/components/RecipeUtensils.vue'
import RecipeMethod from '@/components/RecipeMethod.vue'

export default {
  name: 'RecipeDetails',
  components: {
    RecipeIntro,
    RecipeIngredients,
    RecipeUtensils,
    RecipeMethod
  },

  data() {
    return {
      recipeData
    }
  },

  computed: {
    recipe() {
      return this.recipeData.recipes.find(recipe => recipe.url === this.$route.params.recipeName)
    }
  }
}

</script>

<style scoped lang="scss">
.recipes {
  background-color: #cccccc;
  border-top: 1px solid #000000;
}
</style>
