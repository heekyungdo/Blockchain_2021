<template>
  <div></div>
</template>
<script>
export default {
  inject: ["itemLength"],
  mounted() {
    console.log(this.itemLength);
  },
  // 메소드에 써도되지만, 그럼 한번 더 함수를 호출해야해서. mounted에 사용.
};
</script>
