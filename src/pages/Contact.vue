<template>
  <Header header__white="header__white" />
  <ContactArea/>
  <Footer footerPadding="true"/>
</template>

<script>
import Header from '../components/Home/Header.vue';
import ContactArea from '../components/Contact/ContactArea.vue';
import Footer from '../components/Home/Footer.vue';

export default {
   name:'ContactPage',
   components:{
		Header,
      ContactArea,
      Footer,
	}
}
</script>
