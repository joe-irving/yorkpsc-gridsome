<template>
  <g-link class="Button" v-editable="blok" :to="link"><div class="Button">{{ blok.text }}</div></g-link>
</template>

<script>
export default {
  props: ['blok'],
  data() {
    let link;
    let target = this.blok.target;
    console.log(target)
    if (target.linktype === "story"){
      link = `/${ target.cached_url }`
    }else if (target.linktype == "url" || target.type == "asset"){
      link = target.url
    }else if (target.linktype == "email"){
      link = `mailto:${target.email}`;
    }
    console.log(link)
    return {
      link: link
    }
  }
}
</script>

<style lang=scss>
  .Button{
    background-color: $button-color;
    padding: $padding-unit / 2 $padding-unit;
    color: $button-text-color;
    text-decoration: none;
  }
</style>
