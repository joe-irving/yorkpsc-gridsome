<template>
  <div>
    <component :key="blok._uid" v-for="blok in blok.body" :blok="blok" :is="'Blok'+blok.component">{{'Blok'+blok.component}}</component>
  </div>
</template>

<script>
export default {
  props: ['blok'],
}
</script>
