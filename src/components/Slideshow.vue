<template>

  <div class="slideshow">
    <div class="container__btn">
      <Slides>
      </Slides>
    </div>
  </div>

</template>

<script>

  import Slides from './Slides.vue'

  export default {
    props: ['visibleSlide', 'index'],
    components: {
      Slides
    },   
  }

</script>

<style>

  .container__btn {
      margin: auto;
      width: 1080px;
      height: 700px;
  }

  .btn__next {
      float: right;
  }

  .btn__prev {
      float: left;
  }

  .btn__next,
  .btn__prev {
      position: relative;
      top: -400px;
      background-color: rgba(0, 0, 0, 0.412);
      border: none;
      color: white;
      padding: 5px;
  }

  .slideshow {
    background: var(--dblue);
    padding: 12px;
  }
  
</style>