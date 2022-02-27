<template>
  <span>
    <span v-if="multi.day && allDay">{{ time(start).format("Mo MMM") }} to {{ time(end).format("Mo MMM") }}</span>
    <span v-else-if="multi.day && !allDay">{{ time(start).format("HH:mm Mo MMM") }} to {{ time(end).format("Mo MMM") }}</span>
    <span v-else-if="!multi.day && allDay">{{ time(start).format("Mo MMM") }}</span>
    <span v-else-if="!multi.day && !allDay && end">{{ time(start).format("HH:mm") }} to {{ time(end).format("HH:mm") }} on {{ time(start).format("Mo MMM") }}</span>
    <span v-else>{{ time(start).format("HH:mm Mo MMM") }}</span>
  </span>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    start: {
      required: true
    },
    end: {
      required: false
    },
    allDay: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    multi(){
      return {
        day: e.end ? !moment(e.start).isSame(e.end, "day") : false,
        year: e.end ? !moment(e.start).isSame(e.end, "year") : false,
      }
    }
  },
  methods: {
    time: moment
  }
}
</script>
