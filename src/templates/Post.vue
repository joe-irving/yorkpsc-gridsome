<template id="">
  <Layout>
    <h1>{{ this.$page.post.title }}</h1>
    <div class="content">
      {{ this.$page.post.content }}
    </div>
  </Layout>
</template>

<script>
  export default {
    metaInfo() {
      return {
        title: this.$page.post.title
      }
    }
  }

</script>

<page-query>
  query Post ($id: ID!) {
    post: post(id: $id) {
      id
      title
      content
    }
  }
</page-query>
