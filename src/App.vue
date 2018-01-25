<template>
	<div id="app">
		<img src="./assets/images/logo.png">
		<div class="nav">
			<router-link to="/products">产品</router-link>
			<router-link to="/cart">购物车</router-link>
		</div>
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
	
	.nav a {
		color: #000;
		text-decoration: none;
	}
	
	.nav .router-link-active {
		color: royalblue;
		text-decoration: underline;
	}
</style>