<template>
  <Header headerShadow="header__area header__padding header__padding-2 header__shadow " />
  <ParentMeeting />
  <Footer footerPadding="true" />
</template>

<script>
import Header from "../components/Home/Header.vue";
import ParentMeeting from "../components/Meeting/ParentMeeting.vue";
import Footer from "../components/Home/Footer.vue";

export default {
  name: "SignIn",
  components: {
    Header,
    ParentMeeting,
    Footer,
  },
};
</script>
