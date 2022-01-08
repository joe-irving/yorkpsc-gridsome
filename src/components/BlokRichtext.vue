<template>
  <div v-editable="blok">
    <v-runtime-template :template=richtext />
  </div>
</template>

<script>
  import VRuntimeTemplate from "v-runtime-template";

  export default {
    props: ['blok'],
    created() {
      this.$storyapi.setComponentResolver((component, blok) => {
        return `<Blok${component} :blok='${JSON.stringify(blok)}'
                          :class='${JSON.stringify(blok.classes)}'
                           ></Blok${component}>`
      })
    },
    computed: {
      richtext() {
        return this.blok.text ? `<div>${this.$storyapi.richTextResolver.render(this.blok.text)}</div>` : ''
      }
    },
    components: {
      VRuntimeTemplate
    },
  }
</script>

<style lang=scss>
  .TextBlock{
    padding: $padding-unit;
  }
</style>
