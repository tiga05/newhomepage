<template>
      <v-toolbar fixed flat  style="opacity:0.9">
         <v-toolbar-title >Trinkfreunde Heidelberg</v-toolbar-title>
         <v-spacer></v-spacer>
         <v-btn  flat class="transparent hidden-sm-and-down" @click="$vuetify.goTo('#Description1', options)">{{ $t("message.navbar.start") }}</v-btn>
         <v-btn flat class="transparent hidden-sm-and-down" @click="$vuetify.goTo('#Description2', options)">{{ $t("message.navbar.rules") }}</v-btn>
         <v-btn flat class="transparent hidden-sm-and-down" @click="$vuetify.goTo('#Description3', options)">{{ $t("message.navbar.teamspeak") }}</v-btn>
         <v-btn flat class="transparent hidden-sm-and-down" @click="$vuetify.goTo('#Description4', options)">{{ $t("message.navbar.minecraft") }}</v-btn>
         <v-btn flat class="transparent hidden-sm-and-down" @click="$vuetify.goTo('#Description5', options)">{{ $t("message.navbar.contact") }}</v-btn>
         <v-btn flat class="transparent hidden-md-and-up" v-on:click="toggleSideBar" ><v-icon>menu</v-icon></v-btn>
      </v-toolbar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['naviState'])
  },
  options () {
    return {
      duration: 300,
      easing: 'easeInQuart',
      offset: -112
    }
  },

  methods: {
    ...mapMutations(['toggle']),
    toggleSideBar: function () {
      this.toggle()
    }
  }

}
</script>