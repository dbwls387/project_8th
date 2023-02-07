<template>
  <Header headerShadow="header__area header__padding header__padding-2 header__shadow " />
  <ApplyCounselArea/>
  <Footer footerPadding="true"/>
</template>

<script>
import Header from '../components/HomeTwo/Header.vue';
import ApplyCounselArea from '../components/Parent/ApplyCounselArea.vue';
import Footer from '../components/Home/Footer.vue';

export default {
    name: 'ApplyCounselPage',
    components:{
        Header,
        ApplyCounselArea,
        Footer,
    }
}
</script>
