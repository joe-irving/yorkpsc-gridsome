<template>
  <Layout>
    <component
      v-if="story.content.component"
      :class=story.content.classes
      :key="story.content._uid"
      :blok="story.content"
      :is="'Blok'+story.content.component"
    >
    {{'Blok'+story.content.component}}
    </component>
  </Layout>
</template>

<script>
  export default {
    name: "StoryblokEntryTemplate",
    computed: {
      story() {
        return this.$page.storyblokEntry
      }
    }
  }
</script>

<page-query>
  query StoryblokEntry ($id: ID) {
    storyblokEntry (id: $id) {
      id
      slug
      content
    }
  }
</page-query>
