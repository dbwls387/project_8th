<template>
    <CalendarScheduleArea/>
</template>

<script>
import CalendarScheduleArea from "../Calendar/CalendarScheduleArea.vue";

export default {
  name: "TeacherScheduleArea",
  components: {
    CalendarScheduleArea,
  },
};
</script>


<style scoped>
.vuecal--date-picker {
    width: 30rem !important;
}
</style>