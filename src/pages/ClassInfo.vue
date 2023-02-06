<template>
  <Header header__white="header__white" />
  <TeacherInfoArea/>
  <Footer footerPadding="true"/>
</template>

<script>
import Header from '../components/Home/Header.vue';
import TeacherInfoArea from "../components/Class/TeacherInfoArea.vue";
import Footer from '../components/Home/Footer.vue';

export default {
   name:'ClassInfo',
   components:{
      Header,
      TeacherInfoArea,
      Footer,
   }
}
</script>

