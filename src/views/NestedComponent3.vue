<template>
  <div>
    <ChildComponent :num="7" :isSelected="isSelected" :arr="arr" />
  </div>
</template>
<script>
//import는 가져오겠다.
import ChildComponent from "../components/ChildComponent.vue";
export default {
  name: "",
  //components는 사용하겠다. 여기서 childcomponent는 import의 첫번째거.
  //문자뿐 아니라 arr, boolean, num도 가져올 수 있다.
  components: { ChildComponent },
  data() {
    return {
      num: 5,
      isSelected: true,
      arr: [1, 2, 3, 4],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
