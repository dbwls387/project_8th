<template>
  <Header headerShadow="header__area header__padding header__padding-2 header__shadow " />
  <StudentDetailArea/>
  <DatePickerMonthArea/>
  <Footer footerPadding="true"/>
</template>

<script>
import Header from '../components/HomeTwo/Header.vue';
import StudentDetailArea from '../components/Student/StudentDetailArea.vue';
import DatePickerMonthArea from "../components/Calendar/DatePickerMonthArea.vue"
import Footer from '../components/Home/Footer.vue';

export default {
    name:'InstructorDetails',
    components:{
        Header,
        StudentDetailArea,
        DatePickerMonthArea,
        Footer,
    }
}
</script>
