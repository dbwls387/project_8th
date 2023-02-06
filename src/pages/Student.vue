<template>
 <Header header__white="header__white" />
 <Breadcrumb title="Instructor" subtitle="Instructor" />
 <StudentArea/>
 <BannerArea/>
 <Footer footerPadding="true" />
</template>

<script>
import Header from '../components/Home/Header.vue';
import Breadcrumb from '../components/common/Breadcrumb.vue';
import StudentArea from '../components/Student/StudentArea.vue';
import BannerArea from '../components/Home/BannerArea.vue';
import Footer from '../components/Home/Footer.vue';

export default {
   name:'InstructorPage',
   components:{
      Header,
      Breadcrumb,
      StudentArea,
      BannerArea,
      Footer
   }
};
</script>