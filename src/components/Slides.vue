<template>

    <div v-for="(slide, index) in slides" :key="slide" :index="index" :visibleSlide="visibleSlide" v-show="visibleSlide === index" @next="next" @prev="prev">
      <img :src="slide" alt="" >
    </div>

    <button @click="next" class="btn btn__next">Next</button>
    <button @click="prev" class="btn btn__prev">Prev</button>
  
</template>

<script>
    export default {
        data() {
            return {
                slides: [
                    'https://picsum.photos/id/238/1080/700',
                    'https://picsum.photos/id/236/1080/700',
                    'https://picsum.photos/id/235/1080/700',
                    'https://picsum.photos/id/234/1080/700',
                    'https://picsum.photos/id/233/1080/700',
                    
                ],
                visibleSlide: 0,
            }
        },

        computed: {
            slidesLength() {
                return this.slides.length
            }
        },

        methods: {
            next() {
            if(this.visibleSlide >= this.slidesLength - 1) {
                this.visibleSlide = 0
            } else {
                this.visibleSlide++
            }
        },
            prev() {
            if(this.visibleSlide <= 0) {
                this.visibleSlide = this.slidesLength - 1
            } else {
                this.visibleSlide--
            }
        }
        }

    }
    // <img src="@/assetts/name/of_your_image" /> tror dette skal funke for bilder lokalt



</script>

<style>

</style>