<template>
  <footer class="footer">
    <div class="footer-wrapper">
      <strong>
        <g-link class="footerLink" to="/">{{ blok.title }}</g-link>
      </strong>
      <nav class="nav">
        <ul>
          <li v-for="navItem in blok.footer" :key="navItem._uid"><g-link class="footerLink" :to="$getStoryblokLink(navItem.target)" >{{ navItem.title }}</g-link></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang=scss>
  .footer {
    background-color: $background-color-invert;
    color: $text-color-invert;
    padding: $spacing-unit 0;

  }
  .footer-wrapper {
    max-width: $content-width;
    margin: 0 auto;
  }
  .footerLink{
    color: $text-color-invert;
    text-decoration: none;
    &:hover{
      text-decoration: underline;
    }
  }
</style>
