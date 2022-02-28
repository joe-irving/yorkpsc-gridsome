<template>
  <div v-editable=blok :id=action.containerId :style=action.style :class=classes>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  props: ['blok'],
  data() {
    // Get embed info
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
    // compile classes
    let cssClass = {}
    this.blok.classes.forEach((className) => cssClass[className]=true)



    return {
      action:action,
      classes: {
        ...cssClass,
        formOnly: this.blok.formOnly
      }
    };
  },
  metaInfo() {
    return {
      script: [
        {
          src: this.action.src
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

<style lang=scss>
  .formOnly{
    #can_embed_form {
      #can_embed_form_inner {
        > *:not(form){
          display: none;
        }
      }
    }
  }
</style>
