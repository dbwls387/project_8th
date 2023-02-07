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
            :events="events">
        </vue-cal>

        <div>
          <button v-b-modal.modal-center>
          <p>등록</p>
          </button>
        </div>

        <div>
          <div class="video-modal-wrapper">
            <b-modal id="modal-center" centered>
            <ScheduleModal :selectedDate = selectedDate />
            </b-modal>
          </div>
        </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import { ref, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import ScheduleModal from '../Calendar/ScheduleModal.vue'

export default {
  components: { VueCal, ScheduleModal },
  setup() {
    const store = useStore()
    const events = ref([])
    const lst = ref([])
    
    const today_list = new Date().toISOString().slice(0, 10).split('-')
    const selectedDate = ref(today_list[0] + '-' + today_list[1] + '-' + today_list[2])
    function getSchedule() {
      axios({
        method: 'get',
        url: `${store.state.API_URL}/api/v1/teachers/${store.state.myseq}/schedules/${dateString(selectedDate)}`,
        headers: {
          Authorization: `Bearer ${store.state.token}`
        }
      })
        .then((res) => {
          lst.value = res.data.list
          events.value = []
          for (let schedule of lst.value) {
            events.value.push({
              start: new Date(schedule.scheduleDate.substring(0, 4), schedule.scheduleDate.substring(4, 6) - 1, schedule.scheduleDate.substring(6, 8), schedule.startTimeHour, schedule.startTimeMinute),
              end: new Date(schedule.scheduleDate.substring(0, 4), schedule.scheduleDate.substring(4, 6) - 1, schedule.scheduleDate.substring(6, 8), schedule.endTimeHour, schedule.endTimeMinute),
              title: stateCode(schedule.scheduleCode)
            })
          }  
        })
    }

    const dateString = (word) => {
      const temp = ref(word.value.split('-'))
      return temp.value[0] + temp.value[1] + temp.value[2]
    }
    const handleDayClick = (date) => {
      const array = date.toString().split(" ")
      showSchedule(array[3], array[1], array[2])
      getSchedule()
    }

    const showSchedule = (year, month, day) => {
      let numMonth = 0
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
      const selectedDateValue = `${year}-${numMonth.toString().padStart(2, '0')}-${day}`
      selectedDate.value = selectedDateValue
    }

    const stateCode = (code) => {
      if (code === 'SC') {
        return '수업'
      } else if (code === 'SM') {
        return '상담'
      } else if (code === 'SR') {
        return '휴게시간'
      } else if (code === 'SP') {
        return '개인일정'
      } else if (code === 'SE') {
        return '기타'
      }
    }

    onBeforeMount(() => {
      getSchedule()
    })
    return {
      events,
      lst,
      getSchedule,
      handleDayClick,
      selectedDate,
      stateCode
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