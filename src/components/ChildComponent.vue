<template>
  <div>
    <div>{{ num }}</div>
    <div>{{ isSelected }}</div>
    <div>{{ arr.join(",") }}</div>
  </div>
</template>
<script>
//props는 데이터같은애, 부모로 부터 받을 수 있게 해주는애, default는 기존에 같고 있던 값
export default {
  props: {
    num: {
      type: Number,
      default: 0,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
    arr: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>
