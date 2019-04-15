<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 class="text-xs-center pt-5" v-if="loading">
        <v-progress-circular
          :size="100"
          :width="4"
          color="purple"
          indeterminate
        ></v-progress-circular>
      </v-flex>
      <v-flex
        xs12
        v-else-if="!loading"
        v-for="order in orders"
      >
        <v-flex xs12 mb-3>
          <v-card color="blue-grey lighten-4">
            <v-layout>
              <v-flex xs3>
                <v-img
                  :src="getProductImg(order)"
                  height="200px"
                ></v-img>
              </v-flex>
              <v-flex row xs9>
                <v-card-title class="blue-grey lighten-1 py-2 ">
                  <h3 class="white--text text-xs-center">{{ getProductName(order) }}</h3>
                </v-card-title>
                <v-layout>
                  <v-flex row xs8>
                    <v-card-text>
                      <p>Категория: <b>{{ getProductGroup(order) }}</b></p>
                      <p>Дата заказа: {{ getOrderDate(order) }}</p>
                      <p>Статус заказа: {{ getOrderStatus(order) }}</p>
                    </v-card-text>
                  </v-flex>
                  <v-flex row xs4>
                    <v-card-text>
                      <p>Количество: {{ order.Amount }}</p>
                      <p>Цена: {{ order.Price.toFixed(2) }}$</p>
                      <h2 class="cost py-2">Сумма: {{ getOrderCost(order) }}$</h2>
                    </v-card-text>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex
                xs12
                v-for="status in statuses"
                :key="status.Id"
              >
                <div
                  class="step text-xs-center"
                  :class="{active: status.Caption === getOrderStatus(order)}"
                >{{ status.Caption }}
                </div>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('fetchOrders')
      this.$store.dispatch('fetchStatuses')
    },
    computed: {
      loading() {
        return this.$store.getters.loading
      },
      groups() {
        return this.$store.getters.groups
      },
      orders() {
        return this.$store.getters.orders.sort((a, b) => new Date(a.Date) - new Date(b.Date))
      },
      products() {
        return this.$store.getters.products
      },
      statuses() {
        return this.$store.getters.statuses
      }
    },
    methods: {
      getProductImg(order) {
        return this.products.find(product => product.Id === order.ProductId).Img
      },
      getProductName(order) {
        return this.products.find(product => product.Id === order.ProductId).Caption
      },
      getProductGroup(order) {
        const id = this.products.find(product => product.Id === order.ProductId).GroupId
        return this.groups.find(group => group.Id === id).Caption
      },
      getOrderDate(order) {
        const options = {day: 'numeric', month: 'numeric', year: 'numeric'}
        return new Date(order.Date).toLocaleString('ru-RU', options)
      },
      getOrderCost(order) {
        const cost = order.Amount * order.Price
        return cost.toFixed(2)
      },
      getOrderStatus(order) {
        return this.statuses.find(status => status.Id === order.StageId).Caption
      }
    }
  }
</script>

<style scoped>
  .cost {
    border-bottom: 1px solid black;
  }
  .step {
    border: 1px solid grey;
  }
  .active {
    background: #78909c;
    color: white;
  }
</style>
