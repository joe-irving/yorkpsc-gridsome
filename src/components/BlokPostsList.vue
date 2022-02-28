<template>
  <div class="BlokPostsList " v-editable="blok">
      <div class="Gallery">
        <div class="Gallery-Post" v-for="post in posts" :key=post.id>
          <div class="text">
            <h2><g-link :to="'/posts/'+post.slug">{{ post.name }}</g-link></h2>
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
      let posts =  this.$static.allStoryblokEntry.edges.map(node => node.node)
      console.log(this.$static);
      return posts.filter(node => node.parent_id==111505673 && !node.is_startpage);
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
query {
  allStoryblokEntry {
    edges {
      node {
        name
        id
        slug
        name
        parent_id
        is_startpage
      }
    }
  }
}
</static-query>
