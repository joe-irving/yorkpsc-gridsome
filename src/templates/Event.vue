<template id="">
  <Layout>
    <div class="FirstBlok  wrapper pad EventPage">
      <h1>{{ this.$page.event.summary }}</h1>
      <img :src="image.src" :alt="image.title" :title="image.title" v-if=image>
      <p class="dates"><em><DateRange :allDay="this.$page.event.allDay" :start="this.$page.event.start.date" :end="this.$page.event.end.date" /></em></p>
      <div class="addToCal">
        <g-link target="_blank" :to="calInvite">Add to calendar</g-link>
      </div>

      <h2 id=location>Location</h2>
      <div class="location">
        <p>{{ this.$page.event.location }}</p>
      </div>

      <h2 id="about">Description</h2>
      <div class="content" v-html="this.$page.event.description.replace('\n','<br>')">  </div>
      <div v-if="actionNetworkLink">
        <h2>RSVP</h2>
        <BlokActionNetworkForm :blok="{url:actionNetworkLink,classes:[]}" class=formOnly />
      </div>
    </div>
  </Layout>
</template>

<script>
  const extractUrls = require("extract-urls");

  export default {
    computed: {
      image() {
        if (Object.keys(this.$page.event._raw).includes("attachements")){
          return {
            title: this.$page.event._raw.attachments[0].title,
            src: `https://drive.google.com/uc?export=view&id=${this.$page.event._raw.attachments[0].fileId}`
          }
        } else {
          return null
        }
// https://calendar.google.com/event?action=TEMPLATE&tmeid=EVENT_ID_HERE&tmsrc=qiepirosdns1a1fetqr9i5j8vg%40group.calendar.google.com&scp=ALL
      },
      calInvite(){
        let htmlLink = this.$page.event._raw.htmlLink
        let id = htmlLink.split('=')[1];
        return `https://calendar.google.com/event?action=TEMPLATE&tmeid=${ id }&tmsrc=qiepirosdns1a1fetqr9i5j8vg%40group.calendar.google.com&scp=ALL`
      },
      actionNetworkLink(){
        console.log(this.$page.event.description)
        let links = extractUrls(this.$page.event.description)
        if (!links){ return null }
        let actionNetworkLinks = links.filter(link => link.includes("actionnetwork.org"));
        return actionNetworkLinks.length ? actionNetworkLinks[0] : null;
      }
    },

    metaInfo() {
      return {
        title: this.$page.event.summary
      }
    }
  }

</script>

<style lang=scss>
  .FirstBlok{
    padding-top: $header-height;
  }
  .EventPage{
    p.dates{
      text-align: center;
    }
    min-height: 95vh;
  }
</style>

<page-query>
  query Event ($id: ID!) {
    event: event(id: $id) {
      id
      summary
      description
      location
      start {
        date
      }
      end {
        date
      }
      _raw {
          attachments {
            fileUrl
            fileId
            title
          }
          htmlLink
        }
    }
  }
</page-query>
