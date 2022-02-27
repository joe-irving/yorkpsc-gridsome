<template>
  <div class="BlokEventsList Gallery" v-editable="blok">
      <div v-for="e in events" :key="e.id" class="Event Gallery-Post">
        <div v-if="e.image" class="boxImage" :style="{backgroundImage:`url('https://drive.google.com/uc?export=view&id=${e.image.fileId}')`}"></div>
        <div class="text">
          <h2><g-link :to="e.path">{{ e.summary }}</g-link></h2>
          <p><DateRange :allDay="e.allDay" :start="e.start.date" :end="e.end.date" /></p>
        </div>

      </div>
    </div>
</template>

<script>
import moment from "moment";

export default {
  props: ['blok'],
  computed: {
    events() {
      let events =  this.$static.allEvent.edges.map((node) => {
        let e = node.node;
        return {
          ...e,
          image: e._raw.attachments.length > 0 ? e._raw.attachments[0] : null
        }
      })
      let sort = this.blok.SortBy;
      return events.sort((a,b) => new Date(a[sort].timestamp) - new Date(b[sort].timestamp))
    }
  },
  methods: {
    time: moment
  }
}
</script>

<style lang=scss>
  .BlokEventsList{
    width: 100%;
    padding: $padding-unit 0;
  }
  .boxImage{
    height: 200px;
    background: $background-color  no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .Gallery{

    display: flex;
    flex-wrap: wrap;
    gap: $spacing-unit;
    justify-content: space-around;
    .Gallery-Post{
      flex-basis: calc(max(21%, 250px));
      box-shadow: 0 0 15px rgba($shadow,0.2);
      transition: box-shadow $transition;
      &:hover{
        box-shadow: 0 0 15px rgba($shadow,1);
      }
      .text {
        padding: 0 $padding-unit;
      }
    }
  }
</style>

<static-query>
query Events{
  allEvent {
    edges{
      node{
        id
        path
        summary
        description
        start {
          timestamp
          timeZone
          date
        }
        end {
          timestamp
          timeZone
          date
        }
        _raw {
          attachments {
            fileUrl
            fileId
            title
          }
        }
      }
    }
  }
}
</static-query>
