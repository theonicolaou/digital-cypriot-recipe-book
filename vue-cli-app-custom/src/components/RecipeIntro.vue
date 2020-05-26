<template>
  <div class="recipe-intro">
    <h2>{{ recipe.recipeName }}</h2>
    <ul>
      <li>
        (ID: {{ recipe.id }}, URL: {{ recipe.url }})
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'RecipeIntro',

    props: {
      recipe: {
        required: true,
        type: Object
      }
    }
  }
</script>
