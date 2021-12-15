<template>
	<header>

		<RouterLink :to="{ name: 'Home' }">HJEM</RouterLink>
		
		<RouterLink :to="{ name: 'Slideshow' }">SLIDESHOW</RouterLink>
	
		<RouterLink :to="{ name: 'Kontaktskjema' }">KONTAKTSKJEMA</RouterLink>
		
		<RouterLink :to="{ name: 'Quiz' }">QUIZ</RouterLink>
		
		<RouterLink :to="{ name: 'Todo' }">TODO</RouterLink>
		
	</header>
</template>

<script>
	export default {
		methods: {
	
		},
	};
</script>

<style>

	header {
		width: 100vw;
		height: 70px;
		background: #A8D0E6;
		display: flex;
		justify-content: space-around;
		font-style: normal;
		font-weight: bold;
		letter-spacing: 0.05em;
	}

	header a {
		text-decoration: none;
		color: white;
		padding: 20px 0;
	}

	header .router-link-active {
		color: #F76c6c;
	}
</style>
