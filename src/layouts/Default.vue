<template>
  <div class="layout">
    <BlokHeader :blok="global.content"/>
    <slot/>
    <BlokFooter :blok="global.content"/>
  </div>
</template>

<script>
  export default {
    computed: {
      global() {
        return this.$static.global.edges[0].node
      }
    }
  }
</script>

<static-query>
query {
  metadata {
    siteName
  }
  global: allStoryblokEntry (filter: { slug: { eq: "global" } }) {
    edges {
      node {
        id
        full_slug
        content
      }
    }
  }
}
</static-query>

<style>
  * {
    box-sizing: border-box;
  }
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}
</style>
