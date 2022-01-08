<template>
  <div class="">
    <div v-html=blok.html></div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  data() {
    return {
      scripts: []
    }
  },
  metaInfo() {
    return {
      script: this.scripts
    }
  },
  mounted() {
    // Place embedded scripts in head
    let dom = new DOMParser().parseFromString(this.blok.html, "text/html");
    let scripts = dom.scripts
    for (var i = 0; i < scripts.length; i++) {
      let src = scripts.item(i).getAttribute("src")
      this.scripts.push({
        src: src
      })
    }// TODO: remove script tags from v-html
  }
}
</script>
