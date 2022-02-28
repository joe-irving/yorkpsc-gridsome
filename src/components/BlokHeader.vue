<template>
  <header class="header" :class="{'nav-hidden': !showNavbar}">
    <strong>
      <g-link to="/">
        <img :src="blok.logo.filename" :alt="blok.logo.alt" :title="blok.logo.title" v-if="blok.logo" class="header-image">
        <span v-else>{{ blok.title }}</span>
      </g-link>
    </strong>
    <nav class="nav">
      <g-link class="nav__link" v-for="navItem in blok.header"  :to="$getStoryblokLink(navItem.target)" :key="navItem._uid">{{ navItem.title }}</g-link>
    </nav>
  </header>
</template>

<script>
export default {
  props: ['blok'],
  data() {
    return {
      showNavbar: true
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
      }
  }
}
</script>

<style lang=scss>
  .header {
    top: 0;
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
    box-shadow: 0 0 15px rgba($shadow,0.5);
    transition: $transition;
    /* clip-path: circle(); */
    .header-image{
      max-height: $header-height - 2px;
    }
  }
  .nav-hidden{
    top: -1 * $header-height;
  }

  .nav__link {
    color: $green;
    margin-left: 20px;
    font-size: 1.2em;
    text-decoration: none;
    font-weight: bold;
    transition: $transition * 0.1;
    &:hover {
      border-bottom: $red 3px solid;
      color: darken($green, 10%);
    }
    &:visited {
      color: $green;
    }
  }
</style>
