<template>
        <vue-cal
            class="vuecal--date-picker"
            xsmall
            hide-view-selector
            :time="false"
            :transitions="false"
            active-view="month"
            :disable-views="['week']"
            @cell-click="handleDayClick"
            >
        </vue-cal>
        <vue-cal
            class="vuecal--scheduler"
            v-bind:selected-date="selectedDate"
            :time-from="9 * 60"
            :time-to="21 * 60"
            :disable-views="['years', 'year', 'month', 'week']"
            hide-weekends
            editable-events
            resize-x
            :events="events">
        </vue-cal>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default {
  components: { VueCal },
  methods: {
    handleDayClick(date) {
        const array = date.toString().split(" ");
        this.showSchedule(array[3], array[1], array[2]);
    },
    
    showSchedule(year, month, day) {
        var numMonth = 0;
        if (month == "Jan") {
            numMonth = 1;
        } else if (month == "Feb") {
            numMonth = 2;
        } else if (month == "Mar") {
            numMonth = 3;
        } else if (month == "Apr") {
            numMonth = 4;
         }else if (month == "May") {
            numMonth = 5;
        } else if (month == "Jun") {
            numMonth = 6;
        } else if (month == "Jul") {
            numMonth = 7;
        } else if (month == "Aug") {
            numMonth = 8;
        } else if (month == "Sep") {
            numMonth = 9;
        } else if (month == "Oct") {
            numMonth = 10;
        } else if (month == "Nov") {
            numMonth = 11;
        } else if (month == "Dec") {
            numMonth = 12;
        }

        var selectedDate = year + "-" +  numMonth + "-" + day;
        this.selectedDate = selectedDate;
    }
  },
  data() {
    return {
        events: [],
        selectedDate: new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDate(),
    }
  }
}
</script>

<style scoped>
.vuecal--date-picker {
    width: 80%;
    margin-left: 10%;
    margin-top: 5%;
}
.vuecal--scheduler {
    width: 80%;
    margin-left: 10%;
    margin-top: 3%;
    margin-bottom: 5%;
}
</style>