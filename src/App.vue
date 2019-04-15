<template>
  <v-app>
    <v-navigation-drawer
      app
      :mini-variant.sync="mini"
      hide-overlay
      fixed
      clipped
      v-model="drawer"
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile>
            <v-spacer></v-spacer>
            <v-list-tile-action>
              <v-btn
                icon
                @click.stop="mini = !mini"
              >
                <v-icon>{{ mini ? 'chevron_right' : 'chevron_left' }}</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list>
        <v-list-tile
          v-for="link in links"
          :key="link.title"
          :to="link.url"
        >
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="link.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app dark color="primary">
      <v-toolbar-side-icon
        @click="drawer=!drawer"
      ></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link
          to="/"
          tag="span"
          class="pointer"
        >IT-Enterprise
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="link in links"
          :key="link.title"
          :to="link.url"
          flat
        >
          <v-icon left>{{ link.icon }}</v-icon>
          {{ link.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    
    <v-content>
      <router-view></router-view>
    </v-content>
    
    <template v-if="error">
      <v-snackbar
        :multi-line="true"
        :timeout="5000"
        color="error"
        @input="closeError"
        :value="true"
      >
        {{ error }}
        <v-btn flat dark @click.native="closeError"
        >Close
        </v-btn>
      </v-snackbar>
    </template>
  
  </v-app>
</template>

<script>
  
  export default {
    data() {
      return {
        drawer: true,
        mini: true
      }
    },
    computed: {
      error() {
        return this.$store.getters.error
      },
      links() {
        return [
          {title: 'Каталог', icon: 'library_books', url: '/'},
          {title: 'Заказы', icon: 'bookmark_border', url: '/orders'},
        ]
      },
      
    },
    methods: {
      closeError() {
        this.$store.dispatch('clearError');
      }
    }
  }
</script>

<style>
  .pointer {
    cursor: pointer;
  }
</style>
