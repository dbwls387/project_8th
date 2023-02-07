import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import HomeTwo from "../pages/HomeTwo.vue";
import HomeThree from "../pages/HomeThree.vue";
import Courses from "../pages/Courses.vue";
import CoursesList from "../pages/CoursesList.vue";
import CourseSidebar from "../pages/CourseSidebar.vue";
import CourseDetails from "../pages/CourseDetails.vue";
import Blog from "../pages/Blog.vue";
import BlogDetails from "../pages/BlogDetails.vue";
import About from "../pages/About.vue";
import Instructor from "../pages/Instructor.vue";
import InstructorDetails from "../pages/InstructorDetails.vue";
import Student from "../pages/Student.vue";
import StudentDetail from "../pages/StudentDetail.vue";
import EventDetails from "../pages/EventDetails.vue";
import Cart from "../pages/Cart.vue";
import Checkout from "../pages/Checkout.vue";
import SignIn from "../pages/SignIn.vue";
import SignUp from "../pages/SignUp.vue";
import ErrorPage from "../pages/ErrorPage.vue";
import Contact from "../pages/Contact.vue";
import CourseDetailsPage from "../pages/DynamicCourseDetails.vue";
import DynamicBlogDetails from "../pages/DynamicBlogDetails.vue";
import ClassInfo from "../pages/ClassInfo.vue";
import ParentMeeting from "../pages/ParentMeeting.vue";
import TeacherSchedule from "../pages/TeacherSchedule.vue";

const router = createRouter({
  history: createWebHistory(),
  routes:[
      {
          path:'/',
          name:'/',
          component:Home,
      },
      {
          path:'/home',
          name:'home',
          component:Home,
      },
      {
          path:'/home-two',
          name:'home-two',
          component:HomeTwo,
      },
      {
          path:'/home-three',
          name:'home-three',
          component:HomeThree,
      },
      {
          path:'/courses',
          name:'courses',
          component:Courses,
      },
      {
          path:'/courses-list',
          name:'courses-list',
          component:CoursesList,
      },
      {
          path:'/courses-sidebar',
          name:'courses-sidebar',
          component:CourseSidebar,
      },
      {
          path:'/course-details',
          name:'courses-details',
          component:CourseDetails,
      },
      {
          path:'/blog',
          name:'blog',
          component:Blog,
      },
      {
          path:'/blog-details',
          name:'blog-details',
          component:BlogDetails,
      },
      {
          path:'/about',
          name:'about',
          component:About,
      },
      {
          path:'/master/teachers',
          name:'master-teachers',
          component:Instructor,
      },
      {
          path:'/teacher-details',
          name:'teacher-details',
          component:InstructorDetails,
      },
      {
          path:'/event-details',
          name:'event-details',
          component:EventDetails,
      },
      {
          path:'/cart',
          name:'cart',
          component:Cart,
      },
      {
          path:'/checkout',
          name:'checkout',
          component:Checkout,
      },
      {
          path:'/login',
          name:'login',
          component:SignIn,
      },
      {
          path:'/register',
          name:'register',
          component:SignUp,
      },
      {
          path:'/errorPage',
          name:'error',
          component:ErrorPage,
      },
      {
          path:'/contact',
          name:'contact',
          component:Contact,
      },
      {
          path:'/course-details/:id',
          name:'course-details',
          component:CourseDetailsPage,
      },
      {
          path:'/blog-details/:id',
          name:'blog-details',
          component:DynamicBlogDetails,
      },
      {
          path:'/master/students',
          name:'master-students',
          component:Student,
      },
      {
          path:'/student-details',
          name:'student-details',
          component:StudentDetail,
      },
      { 
          path:'/teacher/class',
          component:ClassInfo,
      },
      {
        path: "/parent/counsel",
        component: ParentMeeting,
      },
      {
        path: "/teacher/schedule",
        component: TeacherSchedule,
      }
  ]
})

router.beforeEach((to, from, next) => {
  next();
  window.scrollTo(0, 0);
});

export default router;
