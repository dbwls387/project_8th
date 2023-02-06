<template>
 <Header header__white="header__white" />
 <Breadcrumb title="Student" subtitle="Student" />
 <StudentArea/>
 <Footer footerPadding="true" />
</template>

<script>
import Header from '../components/HomeTwo/Header.vue';
import Breadcrumb from '../components/common/Breadcrumb.vue';
import StudentArea from '../components/Student/StudentArea.vue';
import Footer from '../components/Home/Footer.vue';

export default {
   name:'InstructorPage',
   components:{
      Header,
      Breadcrumb,
      StudentArea,
      Footer
   }
};
</script>