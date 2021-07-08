<template>
  <div>
    <p>{{ count }}</p>
    <p>{{ cart }}</p>
    <button @click="addCart">장바구니추가</button>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      sampleData: "",
    };
  },
  computed: {
    count() {
      return this.$storeCart.state.count;
    },
    cart() {
      return this.$storeCart.state.cart;
    },
    // storecart에 count와 cart가 변경되는걸 감지한다.
  },
  setup() {},
  created() {},
  updated() {
    console.table(this.cart);
  },
  mounted() {},
  unmounted() {},
  methods: {
    addCart() {
      this.$storeCart.commit("addCart", {
        productId: "1",
        productName: "마우스",
        price: 12000,
      });
      // 데이터. storeCart로 옮겨줌
    },
  },
};
</script>
