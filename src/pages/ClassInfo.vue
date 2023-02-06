<template>
  <Header header__white="header__white" />
  <TeacherInfoArea />
  <CourseDetails />
  <Footer footerPadding="true" />
</template>

<script>
import Header from "../components/Home/Header.vue";
import TeacherInfoArea from "../components/Class/TeacherInfoArea.vue";
import CourseDetails from "../components/Class/CourseDetailsArea.vue";
import Footer from "../components/Home/Footer.vue";

export default {
  name: "ClassInfo",
  components: {
    Header,
    TeacherInfoArea,
    CourseDetails,
    Footer,
  },
};
</script>
