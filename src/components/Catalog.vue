<template>
  <div v-if="!loading">
    <v-container grid-list-lg>
      <v-layout column wrap>
        <v-flex
          xs12
          sm6
          md4
          v-for="group in groups"
          :key="group.Id"
        >
          <v-item-group>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-toolbar
                  card
                  color="blue-grey"
                  height="42px"
                  dark
                >
                  <v-toolbar-title>{{group.Caption}}</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-icon
                    dark
                    :id="group.Id"
                    @click="btnToggle($event)"
                  >keyboard_arrow_down
                    <!--{{ btnToggle ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}-->
                  </v-icon>
                </v-toolbar>
                <v-flex row xs12 class="description">
                
                </v-flex>
                <v-flex
                  v-for="product in products"
                  v-if="product.GroupId === group.Id"
                  :key="product.Id"
                  md4
                >
                  <v-item>
                    <v-card dark height="100%">
                      <v-img
                        :src="product.Img"
                        height="200px"
                      ></v-img>
                      <v-card-title>
                        {{ product.Caption }}
                      </v-card-title>
                    </v-card>
                  </v-item>
                </v-flex>
              </v-layout>
            </v-container>
          </v-item-group>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  <div v-else>
    <v-container>
      <v-layout row>
        <v-flex xs12 class="text-xs-center pt-5">
          <v-progress-circular
            :size="100"
            :width="4"
            color="purple"
            indeterminate
          ></v-progress-circular>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        //btnToggle: {}
      }
    },
    computed: {
      groups() {
        return this.$store.getters.groups
      },
      description() {
        return this.$store.getters.description
      },
      products() {
        return this.$store.getters.products
      },
      loading() {
        return this.$store.getters.loading
      }
    },
    methods: {
      btnToggle(event) {
        console.log(event.target.parentNode.parentNode.nextSibling);
        this.$store.dispatch('fetchDescription', event.target.id)
          .then(() => event.target.parentNode.parentNode.nextSibling.innerHTML = this.description)
          .catch(() => {})
        
      }
  }
  }
</script>

<style scoped>

</style>