<template>
  <div></div>
</template>
<script>
import axios from "axios";
// 비동기이지만, 동시에 받는것 처럼 느낌
export default {
  name: "",
  components: {},
  data() {
    return {
      url: "https://b1e5b8ea-4ddb-49b8-9239-f62e6fea9a35.mock.pstmn.io/getUserList",
      userList: [],
    };
  },
  setup() {},
  created() {},
  mounted() {
    this.getUserList();
  },
  unmounted() {},
  methods: {
    async getUserList() {
      this.userList = (await axios.get(this.url)).data.data;
      // await을 사용함으로써 가져올때까지 기다려. 배열을 가져올때까지 기다려. mounted에서 함수 호출되면
      // async로 보내진 데이터를 await이 기다려서 받고, 다시 mounted에 넘겨줘
      console.log(this.userList);
    },
  },
};
</script>
