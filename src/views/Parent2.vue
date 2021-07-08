<template>
  <div>
    <Child2 @send-message="sendMessage" />
    <!-- @로 send message를 받겠다. 넘어온 메세지가 함수에 들어와 -->
  </div>
</template>
<script>
// 자식이 부모를 통제 (부모에게 전달)
import Child2 from "../components/Child2.vue";
export default {
  name: "",
  components: { Child2 },
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    sendMessage(data) {
      console.log(data);
    },
    // 그 메세지를 console.log로 받아 =>"자식 컴포넌트에서 보내는 메시지"를 받는다.
  },
};
</script>
