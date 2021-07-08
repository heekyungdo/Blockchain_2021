<template>
  <div>
    <h1>Hello, {{ fullName }}</h1>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      firstName: "Heekyung",
      lastName: "Do",
      fullName: "",
    };
  },
  // 지켜보다가 firstname 변경되면 fullname 실행, 메모리 용량이 커져. 변화를 감지하기 위해 계속 대기해야해서
  watch: {
    firstName() {
      this.fullName = this.firstName + " " + this.lastName;
    },
    lastName() {
      this.fullName = this.firstName + " " + this.lastName;
    },
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
