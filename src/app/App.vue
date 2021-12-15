<template>
	<Header />
	<RouterView />
</template>

<script>
	import Header from '../components/Header.vue'

	export default {
		// name: 'Router test app',
		
		components: {
			Header
		}
	}
</script>

<style>
	@import '../style/reset.css';
	@import '../style/variables.css';
	@import '../style/style.css';
</style>
