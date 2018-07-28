<template>
   <v-app light>
     <Toolbar></Toolbar>
     <Sidebar></Sidebar>
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
            HALAL
                           <h1> {{naviState}} </h1> 
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

         <v-container>
        <v-layout justify-center>
          <v-btn
            color="pink"
            dark
            @click.stop="drawer = !drawer"
          >
            Toggle
          </v-btn>
        </v-layout>
      </v-container>
  

   </v-app>
</template>
<script>
import { mapState } from 'vuex'
import Description1 from './components/Description1.vue'
import Description2 from './components/Description2.vue'
import Description3 from './components/Description3.vue'
import Description4 from './components/Description4.vue'
import Description5 from './components/Description5.vue'
import Toolbar from './components/Toolbar.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  components: {
    Description1,
    Description2,
    Description3,
    Description4,
    Description5,
    Toolbar,
    Sidebar

  },
  data () {
    return {
      clipped: false,
      drawer: false,
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
    ...mapState(['naviState'])
  },
  name: 'App'
}
</script>
