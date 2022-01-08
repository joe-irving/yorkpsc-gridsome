<template>
  <div v-editable=blok :id=containerId :style=style :classes=blok.classes >
  </div>
</template>

<script>
export default {
  props: ['blok'],
  data() {
    let urlList = this.blok.url.split("://")[1].split("?")[0].split("/").slice(1,3);
    let action = {
      "type": urlList[0].slice(0,-1),
      "slug":  urlList[1]
    }
    action.src = `https://actionnetwork.org/widgets/v4/${action.type}/${action.slug}?format=js&source=widget`
    action.containerId = `can-${action.type}-area-${action.slug}`
    action.style = {
      width: "100%"
    }
    return action;
  },
  metaInfo() {
    return {
      script: [
        {
          src: this.src
        }
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://actionnetwork.org/css/style-embed-whitelabel-v3.css",
          type: "text/css"
        }
      ]
    }
  }
}
</script>
