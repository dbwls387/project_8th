<template>
<header>
   <div id="header-sticky" :class="`${isSticky ? 'header__area header__transparent header__padding-2 sticky' : `${headerShadow ? headerShadow : 'header__area header__transparent header__padding-2'}`}`">
      <div class="container">
         <div class="row align-items-center">
            <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-2 col-sm-4 col-6">
               <div class="header__left d-flex">
                  <div class="logo">
                     <router-link to="/">
                        <img src="../../assets/img/logo/logo.png" alt="logo">
                     </router-link>
                  </div>
                  <div class="header__category d-none d-lg-block">
                     <nav>
                        <ul>
                           <li>
                              <div class="cat-dot-icon d-inline-block">
                                 <svg viewBox="0 0 276.2 276.2">
                                    <g>
                                       <g>
                                          <path class="cat-dot" d="M33.1,2.5C15.3,2.5,0.9,17,0.9,34.8s14.5,32.3,32.3,32.3s32.3-14.5,32.3-32.3S51,2.5,33.1,2.5z"/>
                                          <path class="cat-dot" d="M137.7,2.5c-17.8,0-32.3,14.5-32.3,32.3s14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3S155.5,2.5,137.7,2.5    z"/>
                                          <path class="cat-dot" d="M243.9,67.1c17.8,0,32.3-14.5,32.3-32.3S261.7,2.5,243.9,2.5S211.6,17,211.6,34.8S226.1,67.1,243.9,67.1z"/>
                                          <path class="cat-dot" d="M32.3,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3S0,120.4,0,138.2S14.5,170.5,32.3,170.5z"/>
                                          <path class="cat-dot" d="M136.8,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3c-17.8,0-32.3,14.5-32.3,32.3    C104.5,156.1,119,170.5,136.8,170.5z"/>
                                          <path class="cat-dot" d="M243,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3s-32.3,14.5-32.3,32.3    C210.7,156.1,225.2,170.5,243,170.5z"/>
                                          <path class="cat-dot" d="M33,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3s32.3-14.5,32.3-32.3S50.8,209.1,33,209.1z    "/>
                                          <path class="cat-dot" d="M137.6,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3    S155.4,209.1,137.6,209.1z"/>
                                          <path class="cat-dot" d="M243.8,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3    S261.6,209.1,243.8,209.1z"/>
                                       </g>
                                    </g>
                                 </svg>
                              </div>
                           </li>
                        </ul>
                     </nav>
                  </div>
               </div>
            </div>
            <div class="col-xxl-9 col-xl-9 col-lg-8 col-md-10 col-sm-8 col-6">
               <div class="header__right d-flex justify-content-end align-items-center">
                  <div class="main-menu main-menu-2">
                     <nav id="mobile-menu" class="d-none d-xl-block">
                        <ul>
                           <li class="has-dropdown">
                              <router-link to="/teacher/class/">반 관리</router-link>
                              <ul class="submenu">
                                <!-- v-for로 학원/반 순서대로 출력, 가능하면 n개까지 스크롤까지 -->
                                 <li v-for="clas of classes" :key="clas">
                                    <router-link :to="{ name: 'teacher-class', params: {class_id: clas.clas_id} }">{{clas.academy_name}}&nbsp;{{class_name}}</router-link>
                                 </li>
                              </ul>
                           </li>
                           <li class="has-dropdown">
                            <router-link to="/teacher/counsel">상담</router-link>
                              <ul class="submenu">
                                 <li>
                                    <router-link to="/teacher/counsel">상담</router-link>
                                 </li>
                              </ul>
                           </li>
                           <li class="has-dropdown">
                            <router-link to="/teacher/schedule">스케줄</router-link>
                              <ul class="submenu">
                                 <li><router-link to="/teacher/schedule">스케줄</router-link></li>
                              </ul>
                           </li>
                        </ul>
                     </nav>
                  </div>
                  <div class="header__btn header__btn-2 ml-50 d-none d-sm-block">
                     <router-link to="/my" class="e-btn">마이페이지</router-link>
                  </div>
                  <div class="header__btn header__btn-2 ml-10 d-none d-sm-block">
                     <button class="e-btn" @click="logout">로그아웃</button>
                  </div>
                  <div class="sidebar__menu d-xl-none">
                     <div @click="handleSidebar" class="sidebar-toggle-btn ml-30" id="sidebar-toggle">
                           <span class="line"></span>
                           <span class="line"></span>
                           <span class="line"></span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</header>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import axios from 'axios'
export default {
   name:'HomeTwoHeader',
   setup() {
      const isSticky = ref('false')
      const store = useStore()
      const router = useRouter()
      const classes = ref([])
      function logout() {
         store.commit('CLEAR_LOCAL')
         router.push({ name : 'home' })
      }

      function getClasses() {
      if (store.state.profile.userCode === 'UT' && store.state.classes === []) {
        axios({
          method: 'get',
          url: `${store.state.API_URL}/api/v1/teachers/${store.state.myseq}/info`,
          headers: {
            Authorization: `Bearer ${store.state.token}`
          }
        })
        .then((res) => {
          classes.value = res.data.list
          store.dispatch('saveClasses', classes)
        })
      }
    }
    onBeforeMount(() => {
      getClasses()
    })
      return {
         isSticky,
         logout

      }
  },
  props:{
    headerShadow:String,
  },
  methods:{
      handleSticky () {
          if(window.scrollY > 80){
             this.isSticky = true;
          }
          else{
             this.isSticky = false;
          }
       },
  },
  mounted() {
      window.addEventListener('scroll',this.handleSticky)
   },
};
</script>
