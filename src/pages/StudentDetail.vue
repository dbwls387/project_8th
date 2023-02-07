<template>
  <Header headerShadow="header__area header__padding header__padding-2 header__shadow " />
  <StudentDetailArea/>
  <Footer footerPadding="true"/>
</template>

<script>
import Header from '../components/HomeTwo/Header.vue';
import StudentDetailArea from '../components/Student/StudentDetailArea.vue';
import Footer from '../components/Home/Footer.vue';

export default {
    name:'StudentDetail',
    components:{
        Header,
        StudentDetailArea,
        Footer,
    }
}
</script>
