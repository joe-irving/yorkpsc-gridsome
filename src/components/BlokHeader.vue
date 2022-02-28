<template>
  <header class="header" :class="{'nav-hidden': !showNavbar}">

    <g-link to="/">
      <img :src="blok.logo.filename" :alt="blok.logo.alt" :title="blok.logo.title" v-if="blok.logo" class="header-image">
      <span v-else><strong>{{ blok.title }}</strong></span>
    </g-link>



    <input type="checkbox" name="menuToggle" value="" class="menuToggle" id=menuToggle >
    <label class="menuToggle label" for="menuToggle"></label>
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

<style lang=scss scoped>
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
  .menuToggle {
    display: none;
    &.label{
      &::before {
        z-index: 101;
        content: "\27AE";
        font-size: 3em;
        position: absolute;
        top:  -1 * $padding-unit;
        right: $padding-unit;
        transition: transform $transition;
      }
    }
  }

  @include media-query($on-palm){
    #menuToggle{
      display: none;
      &:checked   {
        ~ nav.nav {
          right: 0;
        }
        + label.menuToggle {
          &::before {
            transform: rotate(90deg);
            position: fixed;
          }
        }
      }
    }
    label.menuToggle{
      display: block;
    }

    nav.nav {
      background-color: $green;
      padding: $spacing-unit;
      position: fixed;
      top:0;
      height: 100vh;
      padding-top: $header-height;
      right: -100vw;
      transition: right $transition;
      min-width: calc(min(50vw, 400px));
      box-shadow: 0 0 5px rgba($shadow, 1);
      > * {
        display: block;
        margin-bottom: $padding-unit * 2;
      }
      > a.nav__link {
        color: $black;
      }

    }
  }
</style>
