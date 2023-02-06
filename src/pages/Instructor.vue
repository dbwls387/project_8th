<template>
 <Header header__white="header__white" />
 <Breadcrumb title="Instructor" subtitle="Instructor" />
 <InstructorArea/>
 <Footer footerPadding="true" />
</template>

<script>
import Header from '../components/HomeTwo/Header.vue';
import Breadcrumb from '../components/common/Breadcrumb.vue';
import InstructorArea from '../components/Teacher/InstructorArea.vue';
import Footer from '../components/Home/Footer.vue';

export default {
   name:'InstructorPage',
   components:{
      Header,
      Breadcrumb,
      InstructorArea,
      Footer
   }
};
</script>

