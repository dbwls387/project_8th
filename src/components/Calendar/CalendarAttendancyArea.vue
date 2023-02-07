<template>
    <vue-cal
        selected-date="2018-11-19"
        :time-from="9 * 60"
        :disable-views="['years', 'year', 'week', 'day']"
        active-view="month"
        hide-weekends
        events-on-month-view="short"
        :events="events"
        style="height: 600px">
    </vue-cal>
</template>

<style scoped>
.vuecal--month-view .vuecal__cell {height: 80px;}

.vuecal--month-view .vuecal__cell-content {
  justify-content: flex-start;
  height: 100%;
  align-items: flex-end;
}

.vuecal--month-view .vuecal__cell-date {padding: 4px;}
.vuecal--month-view .vuecal__no-event {display: none;}
</style>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default {
  components: { VueCal },
  methods: {
    handleDayClick(date) {
        console.log(date);
    }
  },
  data() {
    return {
        events: [
            {
                start: '2018-11-20',
                end: '2018-11-20',
                title: '출석',
            },
        ]
    }
  }
}
</script>