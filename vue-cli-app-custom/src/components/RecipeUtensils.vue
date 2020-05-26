<template>
  <div class="recipe-utensils">
    <h2>Utensils:</h2>
    <ul>
      <li v-for="(utensil, index) in recipe.utensils" :key="index">
        {{ utensil }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'RecipeUtensils',

    props: {
      recipe: {
        required: true,
        type: Object
      }
    }
  }
</script>
