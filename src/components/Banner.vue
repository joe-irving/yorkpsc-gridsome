<template>
  <div class="Banner" :style="`background-color: ${color};`">
    <h2>{{ text }}</h2>
  </div>
</template>

<script>
  export default {
    props: ['text','color']
  }
</script>

<style lang=scss>
  .Banner {
    background-color: $green;
    color: $white;
    padding: $spacing-unit $spacing-unit*1.5;
    margin: 0;
  }
</style>
