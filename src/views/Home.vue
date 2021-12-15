<template>
  <Table />
</template>

<script>

  import Table from '../components/Table.vue'

  export default {
    name: 'App',
    components: {
      Table
    },

    data () {
      return {
        isPlaying: false,
        delay: null,
        score: null,
        showResults: false,
      }
    },
    
    methods: {
      start() {
        this.delay = 2000 + Math.random() * 5000,
        this.isPlaying = true,
        this.showResults = false
      },

      endGame(reactionTime) {
        this.score = reactionTime,
        this.isPlaying = false,
        this.showResults = true
      }
    }
  }
</script>

<style>



</style>
