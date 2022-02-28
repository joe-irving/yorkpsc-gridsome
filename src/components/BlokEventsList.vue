<template>
  <div class="BlokEventsList " v-editable="blok">
    <div v-for="chunk in chunkedEvents" >
      <h2 v-if="chunk.title" class="center">{{ chunk.title }}</h2>
      <div class="Gallery">
        <div v-for="e in chunk.events" :key="e.id" class="Event Gallery-Post">
          <g-link :to="e.path"  v-if="e.image"><div class="boxImage" :style="{backgroundImage:`url('https://drive.google.com/uc?export=view&id=${e.image.fileId}')`}"></div></g-link>
          <div class="text">
            <h2><g-link :to="e.path">{{ e.summary }}</g-link></h2>
            <p><DateRange :allDay="e.allDay" :start="e.start.date" :end="e.end.date" /></p>
            <address>
              {{ e.location }}
            </address>
          </div>
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
    },
    chunkedEvents(){
      if (!this.blok.addHeaders){
        return [{events: this.events}];
      }
      // let chunks = [];
      let months = moment(this.events[this.events.length - 1].start.date).diff(moment(),'months');
      let chunks = Array(months).fill(0).map((_, i) => {
        return {
          title: moment().month(i).format("MMMM"),
          events: this.events.filter((e) => moment(e.start.date).month() === i)
        }
      })
      console.log(chunks)
      return chunks
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
    padding: $spacing-unit 0;
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
        padding: $padding-unit;
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
        location
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
