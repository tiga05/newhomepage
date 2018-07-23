<template>
   <v-app light>
      <v-toolbar fixed flat  style="opacity:0.9">
         <v-toolbar-title >Trinkfreunde Heidelberg</v-toolbar-title>
         <v-spacer></v-spacer>
         <v-btn flat class="transparent" @click="$vuetify.goTo('#Description1', options)">START</v-btn>
         <v-btn flat class="transparent" @click="$vuetify.goTo('#Description2', options)">RULES</v-btn>
         <v-btn flat class="transparent" @click="$vuetify.goTo('#Description3', options)">Teamspeak</v-btn>
         <v-btn flat class="transparent" @click="$vuetify.goTo('#Description4', options)">Minecraft-Viewer</v-btn>
      </v-toolbar>
      <v-content>
         <section>
            <v-parallax src="../static/images/hero.jpeg" height="600">
               <v-layout
                  column
                  align-center
                  justify-center
                  class="white--text"
                  >
                  <img src="../static/images/vuetify.png" alt="Vuetify.js" height="200">
                  <h1 class="white--text mb-2 display-1 text-xs-center">Parallax Template</h1>
                  <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div>
                  <v-btn
                     class="blue lighten-2 mt-5"
                     dark
                     large
                     href="/pre-made-themes"
                     >
                     Get Started
                  </v-btn>
               </v-layout>
            </v-parallax>
         </section>
         <section>
            <Description1 id="Description1"></Description1>
         </section>
         <section>
            <v-parallax src="../static/images/section.jpg" height="380">
               <v-layout column align-center justify-center>
                  <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
                  <em>Kick-start your application today</em>
                  <v-btn
                     class="blue lighten-2 mt-5"
                     dark
                     large
                     href="/pre-made-themes"
                     >
                     Get Started
                  </v-btn>
               </v-layout>
            </v-parallax>
         </section>
         <section>
            <Description2 id="Description2"></Description2>
         </section>
         <section>
            <v-parallax src="../static/images/section.jpg" height="380">
               <v-layout column align-center justify-center>
                  <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
                  <em>Kick-start your application today</em>
                  <v-btn
                     class="blue lighten-2 mt-5"
                     dark
                     large
                     href="/pre-made-themes"
                     >
                     Get Started
                  </v-btn>
               </v-layout>
            </v-parallax>
         </section>
         <section>
            <Description3 id="Description3"></Description3>
         </section>
         <section>
            <v-parallax src="../static/images/section.jpg" height="380">
               <v-layout column align-center justify-center>
                  <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
                  <em>Kick-start your application today</em>
                  <v-btn
                     class="blue lighten-2 mt-5"
                     dark
                     large
                     href="/pre-made-themes"
                     >
                     Get Started
                  </v-btn>
               </v-layout>
            </v-parallax>
         </section>
         <section>
            <Description4 id="Description4"></Description4>
         </section>
         <section>
            <v-parallax src="../static/images/section.jpg" height="380">
               <v-layout column align-center justify-center>
                  <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
                  <em>Kick-start your application today</em>
                  <v-btn
                     class="blue lighten-2 mt-5"
                     dark
                     large
                     href="/pre-made-themes"
                     >
                     Get Started
                  </v-btn>
               </v-layout>
            </v-parallax>
         </section>
         <section>
            <Description5 id="Description5"></Description5>
         </section>
         <v-footer class="blue darken-2">
            <v-layout row wrap align-center>
               <v-flex xs12>
                  <div class="white--text ml-3">
                     Made with
                     <v-icon class="red--text">favorite</v-icon>
                     by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
                     and <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>
                  </div>
               </v-flex>
            </v-layout>
         </v-footer>
      </v-content>
   </v-app>
</template>

<script>
import Description1 from './components/Description1.vue'
import Description2 from './components/Description2.vue'
import Description3 from './components/Description3.vue'
import Description4 from './components/Description4.vue'
import Description5 from './components/Description5.vue'

export default {
  components: {
    Description1,
    Description2,
    Description3,
    Description4,
    Description5

  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      message: 'Hello',
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  computed: {
    options () {
      return {
        duration: 300,
        easing: 'easeInQuart',
        offset: -112
      }
    }
  },
  name: 'App'
}
</script>
