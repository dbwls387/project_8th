<template>
<section class="teacher__area pt-115 pb-110">
   <div class="container">
      <div class="row">
         <div class="col-xxl-6 offset-xxl-3">
            <div class="section__title-wrapper text-center mb-60">
               <h2 class="section__title">** 학원 강사진<br>
               </h2>
               <!-- <p>You don't have to struggle alone, you've got our assistance and help.</p> -->
            </div>
         </div>
      </div>
      <div class="row">
         <div v-for="teacher in teacher_list" :key="teacher" 
         class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
            <div class="teacher__item text-center grey-bg-5 transition-3 mb-30">
               <div class="teacher__thumb w-img fix">
                  <!-- <a href="#"> -->
                     <!-- <img :src="teacher.img" alt=""> -->
                  <!-- </a> -->
                  <router-link :to="{ name: 'teacher-details', params: { userSeq: teacher.teacherSeq } }">
                      <img src="../../assets/img/teacher/teacger-1.jpg">
                  </router-link>
               </div>
               <div class="teacher__content">
                  <h3 class="teacher__title">{{teacher.teacherName}}</h3> 
                  <span> &nbsp;{{checkSubject(teacher.subjectCode)}} </span>
                  <button @click="deleteTeacher(teacher.teacherSeq)" class="delete-teacher-btn"> 삭제 </button>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
</template>

<script>
import axios from 'axios'
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'

export default {
   name:'ManageTeacher',
   setup () {
    const store = useStore()
    const academy_info = ref({})
    const teacher_list = ref({})

    // 학원 아이디로 강사 목록 가져오기
    const inq_academy = () => {
      axios({
        method: 'get',
        url: `${store.state.API_URL}/api/v1/masters/${store.state.myseq}/academies`,
        headers: {
          Authorization: 'Bearer ' + store.state.token
        }
      })
      .then((res) => {
        academy_info.value = res.data.academyInfo
          axios({
          method: 'get',
          url: `${store.state.API_URL}/api/v1/masters/academies/${academy_info.value.academy_id}/teachers`,
          headers: {
            Authorization: 'Bearer ' + store.state.token
          }
          })
        .then((res) => {
          teacher_list.value = res.data.list
        })
      })
    }
    const checkSubject = (code) => {
      if (code === "KO") {
        return "국어"
      } else if (code === "EN") {
        return "영어"
      } else if (code === "MA") {
        return "수학"
      } else if (code === "SI") {
        return "과학"
      } else if (code === "SO") {
        return "사회"
      } else if (code === "CS") {
        return "컴퓨터"
      } else if (code === "AL") {
        return "알고리즘"
      }
    }

    // 삭제
    const deleteTeacher = (teacherSeq) => {
      axios ({
        method: 'delete',
        url: `${store.state.API_URL}/api/v1/masters/teachers/${teacherSeq}`
      })
      .then( () => {
        inq_academy()
      })
    }

    onMounted(() => {
      inq_academy()
    })

    return {
      checkSubject,
      deleteTeacher,
      teacher_list
    }
  }
}
</script>


<style scoped>
   .delete-teacher-btn {
      margin-left: 2rem;
      border: 1px solid;
   }
</style>