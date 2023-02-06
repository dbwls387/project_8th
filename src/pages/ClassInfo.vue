<template>
  <Header header__white="header__white" />
  <Breadcrumb title="Blog Grid" subtitle="Blog Grid" />
  <TeacherInfoArea/>
  <Footer footerPadding="true"/>
</template>

<script>
import Header from '../components/Home/Header.vue';
import Breadcrumb from '../components/common/Breadcrumb.vue';
import TeacherInfoArea from "../components/Class/TeacherInfoArea";
import Footer from '../components/Home/Footer.vue';

export default {
   name:'BlogPage',
   components:{
      Header,
      Breadcrumb,
      TeacherInfoArea,
      Footer,
   }
}
</script>

