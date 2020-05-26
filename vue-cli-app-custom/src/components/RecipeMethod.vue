<template>
  <div class="recipe-method">
    <h2>Method:</h2>
    <ul>
      <li v-for="(method, index) in recipe.method" :key="index">
        {{ method }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'RecipeMethod',

    props: {
      recipe: {
        required: true,
        type: Object
      }
    }
  }
</script>
