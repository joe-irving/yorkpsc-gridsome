<template>
  <div class="BlokAccordion">
    <Accordion v-editable="blok" :data=blok.items />
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style scoped lang=scss>
  .BlokAccordion {
    padding: 0 10px ;
  }
</style>
