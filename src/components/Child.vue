<template>
  <div>
    <h1>{{ fullName }}</h1>
    <button @click="myFunction" ref="btn">클릭</button>
    <!-- 버튼을 통해서 엄마한테 받아 -->
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      sampleData: "",
      fullName: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    myFunction() {
      console.log("부모 컴포넌트에서 직접 발생시킨 이벤트");
    },
  },
};
</script>
