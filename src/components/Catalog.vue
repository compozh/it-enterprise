<template>
  <div v-if="!loading">
    <v-container grid-list-lg>
      <v-layout column wrap>
        <v-flex
          xs12
          sm6
          md4
          v-for="(group, index) in groups"
          :key="index"
        >
          <v-item-group>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-expansion-panel>
                  <v-expansion-panel-content>
                    <template v-slot:header>
                      <h2 class="group-header">{{group.Caption}}</h2>
                    </template>
                    <v-card>
                      <v-card-text v-html="group.description" class="grey lighten-5"></v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
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
    computed: {
      groups() {
        return this.$store.getters.groups
      },
      products() {
        return this.$store.getters.products
      },
      loading() {
        return this.$store.getters.loading
      }
    }
  }
</script>

<style scoped>
  .group-header {
    color: #4c5155;
  }
</style>
