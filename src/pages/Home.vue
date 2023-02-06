 <template>
    <Header/>
    <HeroSection/>
    <HeroSection_teacher/>
    <HeroSection_master/>
    <Pricing/>
    <Footer footerPadding="true"/>
 </template>

 <script>
import Header from '../components/Home/Header.vue';
import HeroSection from '../components/Home/HeroSection.vue';
import HeroSection_teacher from '../components/Home/HeroSection-teacher.vue';
import HeroSection_master from '../components/Home/HeroSection-master.vue';
import Pricing from '../components/Home/Pricing.vue';
import Footer from '../components/Home/Footer.vue';

 export default {
     name:'HomePage',
     components:{
         Header,
         HeroSection,
         HeroSection_teacher, 
         HeroSection_master,
         Pricing,
         Footer,
     }
 }
 </script>