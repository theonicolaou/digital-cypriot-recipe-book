<template>
  <div id="header">
  	<header>This is the header</header>
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/recipes">Recipes</router-link>
		</div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
	#header {
		background-color: cyan;
	}
</style>