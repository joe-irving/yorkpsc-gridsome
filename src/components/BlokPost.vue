<template>
  <main  v-editable="blok">
    <div class="half-screen post-header-image" :style="{'background-image':`url('${ blok.image.filename }')`}">

    </div>
    <article class="content">
      <h1>{{ story.name }}</h1>
      <BlokBanner v-if=blok.intro :text=blok.intro />
      <BlokRichtext  :blok="{text: blok.long_text}" class="wrapper pad"/>
    </article>
  </main>
</template>

<script>
export default {
  props: ['blok','story'],

}
</script>

<style lang=scss>
  main,article {
    margin: 0;
    padding: 0;
  }
  main > *:first-child {
    padding-top: $header-height + $spacing-unit;
  }
  article > h1:first-child {
    font-size: 3em;
  }
  .post-header-image {
    background:  rgba($background-color,0) no-repeat bottom;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>
