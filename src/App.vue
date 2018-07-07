<template>
  <v-app>
    <v-layout style="height:1080px; border:dotted;">
      <v-flex stye="height:100%; width:100%;">

        <v-parallax height="1000" src="https://blog-images-bucket.s3.amazonaws.com/media/private/carlos-muza-84523_u62x84y.jpg"></v-parallax>
      </v-flex>
    </v-layout>
    <v-layout style="height:200px">
      <v-flex>
        TEST{{reversedMessage}}
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
  export default {
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
    // a computed getter
      reversedMessage: function () {
      // `this` points to the vm instance
        return this.message.split('').reverse().join('')
      }
    },
    name: 'App'
  }
</script>
