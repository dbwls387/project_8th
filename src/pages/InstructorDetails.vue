<template>
  <Header headerShadow="header__area header__padding header__padding-2 header__shadow" />
  <MenuTeacher/>
  <!-- <InstructorDetailsArea/> -->
  <Footer footerPadding="true"/>
</template>

<script>
import Header from '../components/HomeTwo/Header.vue';
import MenuTeacher from '../components/Teacher/MenuTeacher.vue';
// import InstructorDetailsArea from '../components/Teacher/InstructorDetailsArea.vue';
import Footer from '../components/Home/Footer.vue';

export default {
    name:'InstructorDetails',
    components:{
        Header,
        MenuTeacher,
        // InstructorDetailsArea,
        Footer,
    }
}
</script>

