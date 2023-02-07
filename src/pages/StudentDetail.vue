<template>
  <Header headerShadow="header__area header__padding header__padding-2 header__shadow " />
  <CalendarArea/>
  <DatePicker/>
  <StudentDetailArea/>
  <Footer footerPadding="true"/>
</template>

<script>
import Header from '../components/HomeTwo/Header.vue';
import StudentDetailArea from '../components/Student/StudentDetailArea.vue';
import CalendarArea from "../components/Calendar/CalendarArea.vue";
import DatePicker from "../components/Calendar/DatePickerArea.vue";
import Footer from '../components/Home/Footer.vue';

export default {
    name:'InstructorDetails',
    components:{
        Header,
        StudentDetailArea,
        DatePicker,
        CalendarArea,
        Footer,
    }
}
</script>
