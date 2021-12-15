<template>
   <div class="contactform--background">
      <div class="contactform">

         <h2 class="contactform__header">Name:</h2>
         <input class="contactform__input" type="text" placeholder="Name" v-model="form.name" required>

         <h2 class="contactform__header">Email:</h2>
         <input class="contactform__input" type="email" placeholder="Email" v-model="form.email" required>

         <h2 class="contactform__header">Subject:</h2>
         <input class="contactform__input" type="textarea" placeholder="Subject" v-model="form.subject">

         <h2 class="contactform__header">Message:</h2>
         <input class="contactform__input--big" type="textarea" placeholder="Message..." v-model="form.message">

         <button class="btn--red btn__submitform" @click="submit_form">Submit</button>
      </div>
   </div>   
</template>

<script>

   export default {
      data() {
         return {
            form: {
               name: null,
               email: null,
               subject: null,
               message: null,
            }
         }
      },

      methods: {
         submit_form() {
            alert(`Thank you for contacting us, ${this.name}!`)
         }
      }
   }
</script>

<style>
   .contactform--background {
      width: 100vw;
      height: 100vh;
      background: var(--dblue);
   }

   .contactform {
      background: var(--blue);
      width: 80vw;
      margin: auto;
      padding-bottom: 24px;
   }

   .contactform__header {
      color: var(--highlight);
      text-align: left;
      margin-left: 20vw;
      padding-top: 12px;
      padding-bottom: 2px;
   }

   .contactform__input {
      border: 1px solid var(--highlight);
      width:40vw ;
      padding: 2px;
   }

   .contactform__input--big {
      border: 1px solid var(--highlight);
      width: 40vw;
      height: 20vh;
   }

   .btn__submitform {
      display: block;
      width: 40vw;
      margin-left: 20vw;
      text-align: left;
      margin-top: 12px;
   }
</style>