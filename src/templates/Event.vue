<template id="">
  <Layout>
    <div class="wrapper">
      <h1>|</h1>
      <h1>{{ this.$page.event.summary }}</h1>
      <img :src="image.src" :alt="image.title" :title="image.title">
      <div class="content" v-html="this.$page.event.description">
      </div>
    </div>
  </Layout>
</template>

<script>
  export default {
    computed: {
      image() {
        return {
          title: this.$page.event._raw.attachments[0].title,
          src: `https://drive.google.com/uc?export=view&id=${this.$page.event._raw.attachments[0].fileId}`
        }
      }
    },
    metaInfo() {
      return {
        title: this.$page.event.summary
      }
    }
  }

</script>

<page-query>
  query Event ($id: ID!) {
    event: event(id: $id) {
      id
      summary
      description
      _raw {
          attachments {
            fileUrl
            fileId
            title
          }
        }
    }
  }
</page-query>
