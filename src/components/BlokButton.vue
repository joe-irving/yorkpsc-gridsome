<template>
  <g-link class="Button" v-editable="blok" :to="blok.target.url"><div class="Button">{{ blok.text }}</div></g-link>
</template>

<script>
export default {
  props: ['blok']
}
</script>
