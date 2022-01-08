<template>
  <div class="Accordion">
      <AccordionItem v-for="item in data" :key="data.id" :data=item />
  </div>
</template>

<script>
  export default {
    props: ['data']
  }
</script>
