      <template>
      <v-navigation-drawer style="position:fixed; top:0; left:0;"  :value="getNaviState" absolute temporary>
        <v-list class="pa-1">
                 <v-list-tile>
             <v-list-tile-avatar>
              <v-icon>menu</v-icon>
             </v-list-tile-avatar>
            {{ $t("message.navbar.rules") }}
          </v-list-tile>
          <v-list-tile>
                         <v-list-tile-avatar>
              <v-icon>menu</v-icon>
             </v-list-tile-avatar>
            {{  $t("message.navbar.teamspeak") }}
          </v-list-tile>
          <v-list-tile>
                         <v-list-tile-avatar>
              <v-icon>menu</v-icon>
             </v-list-tile-avatar>
            {{ $t("message.navbar.minecraft") }}
          </v-list-tile>
          <v-list-tile>
                         <v-list-tile-avatar>
              <v-icon>menu</v-icon>
             </v-list-tile-avatar>
            {{ $t("message.navbar.contact") }}
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      </template>

      <script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState(['naviState']),
    ...mapGetters(['getNaviState'])
  }

}
</script>