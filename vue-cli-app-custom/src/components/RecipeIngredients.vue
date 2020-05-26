<template>
  <div class="recipe-ingredients">
    <h2>Ingredients:</h2>
    <ul>
      <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
        {{ ingredient }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'RecipeIngredients',

    props: {
      recipe: {
        required: true,
        type: Object
      }
    }
  }
</script>
