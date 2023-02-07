<template>
  <vue-cal
    class="vuecal--date-picker"
    xsmall
    hide-view-selector
    :time="false"
    :transitions="false"
    active-view="month"
    :disable-views="['week']"
    style="width: 210px; height: 230px"
    @cell-click="handleDayClick"
  >
  </vue-cal>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

export default {
  components: { VueCal },
  methods: {
    handleDayClick(date) {
      console.log(date);
    },
  },
};
</script>
