<template>
  <header class="header">

    <strong>
      <g-link to="/">{{ blok.title }}</g-link>
    </strong>
    <nav class="nav">
      <g-link class="nav__link" v-for="navItem in blok.header"  :to="$getStoryblokLink(navItem.target)" :key="navItem._uid">{{ navItem.title }}</g-link>
    </nav>
  </header>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang=scss>
  .header {
    position: fixed;
    width: 100%;
    z-index: 100;
    background-color: $background-color;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: $header-height;
    gap: $spacing-unit;
    padding: 0 $padding-unit;
    /* clip-path: circle(); */
  }

  .nav__link {
    margin-left: 20px;
  }
</style>
