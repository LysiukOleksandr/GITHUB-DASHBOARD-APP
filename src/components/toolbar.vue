<template>
  <v-card
    color="grey lighten-4"
    flat
    height="65px"
    tile
  >
    <v-toolbar class="indigo accent-1">
      <v-app-bar-nav-icon @click="drawer= !drawer" />

      <v-toolbar-title>Github API</v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="indigo accent-1"
      temporary
      overlay-opacity="0.5">
      <v-list>
        <v-list-item-group v-model="elem">
          <v-list-item
            v-for="( item, index ) in items"
            :key="index"
            router
            :to="item.route">
            <v-list-item-icon >
              <v-icon v-text="item.icon"/>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"/>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  name: 'Toolbar',
  data () {
    return {
      drawer: false,
      elem: 1,
      items: [
        { text: 'Home', icon: 'mdi-home', route: '/' },
        { text: 'About', icon: 'mdi-information', route: '/about' },
        { text: 'Timeline', icon: 'mdi-chart-timeline', route: '/timeline' }
      ]
    }
  }
}
</script>
