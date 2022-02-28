<template>
  <div class="BlokPostsList " v-editable="blok">
      <div class="Gallery">
        <div v-for="post in posts" :key="post.id" class="Event Gallery-Post">
          <g-link :to="post.path"  v-if="Object.keys(post.image).includes('url')"><div class="boxImage" :style="{backgroundImage:`url('${post.image.url}')`}"></div></g-link>
          <div class="text">
            <h2><g-link :to="post.path">{{ post.title }}</g-link></h2>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import moment from "moment";

export default {
  props: ['blok'],
  computed: {
    posts() {
      let posts =  this.$static.allPost.edges.map(node => node.node)
      let sort = this.blok.sortBy;
      // TODO: what is this doing lol
      return posts.sort((a,b) => moment(a.date).isBefore(b.date));
    },
  },
  methods: {
    time: moment
  }
}
</script>

<style lang=scss>

</style>

<static-query>
query Posts{
  allPost{
    edges{
      node{
        id
        path
        slug
        title
        content
        image {
          url
          thumbnails {
            small {
              url
            }
            large {
              url
            }
          }
          width
          height
        }
      }
    }
  }
}
</static-query>
