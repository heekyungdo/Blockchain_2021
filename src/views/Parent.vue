<template>
  <div>
    <!-- props는 데이터만 넘길 때 사용. -->
    <!-- ref는 데이터랑 메소드를 넘길 때 사용. 확장성이 있다 -->
    <Child ref="child_component" />
    <!-- childcomponent에 child_component로 전달하겠다 -->
  </div>
</template>
<script>
// 부모가 자식을 통제
import Child from "../components/Child.vue";
//첫번째는 컴포넌트, 두번째는 주소(path)
export default {
  name: "",
  components: { Child },
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {
    //document.getElementById
    this.$refs.child_component.$refs.btn.click();
    //refs 엄마랑 아이랑 양방향으로 전달
    //child component를 통해 버튼으로 가고 버튼을 클릭하라는 명령을 준것

    this.$refs.child_component.myFunction();
    //child component를 통해 함수를 실행시켜라
    this.$refs.child_component.fullName = "Heekyung Do";
  },
  //child component에 있는 풀네임에 heekyung Do를 넘겨준다.
  unmounted() {},
  methods: {},
};
</script>
