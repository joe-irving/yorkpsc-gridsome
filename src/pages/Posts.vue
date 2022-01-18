<template>
  <Layout>
    <ul class="wrapper">
      <li class="postBox" v-for="post in posts" :key="post.id">
        <g-link :to="`posts/${post.slug}`">{{ post.title }}</g-link>
        {{post.date}}
      </li>
    </ul>
  </Layout>
</template>

<script>
export default {
  computed: {
    posts() {
      let posts =  this.$page.allPost.edges.map((node) => node.node)
      return posts.sort((a,b) => new Date(a.date) - new Date(b.date))
    }
  }
}
</script>

<page-query>
query Posts {
  allPost  {
    edges {
      node{
        id
        slug
        title
        date
      }
    }
  }
}
</page-query>
