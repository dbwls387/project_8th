<template>
<section class="teacher__area pt-115 pb-110">
   <div class="container">
      <div class="row">
         <div class="col-xxl-6 offset-xxl-3">
            <div class="section__title-wrapper text-center mb-60">
               <h2 class="section__title">** 학원 학원생<br>
               </h2>
               <p>You don't have to struggle alone, you've got our assistance and help.</p>
            </div>
         </div>
      </div>
      <div class="row">
         <div v-for="student in student_list" :key="student.id" 
         class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
            <div class="teacher__item text-center grey-bg-5 transition-3 mb-30">
               <div class="teacher__thumb w-img fix">
                  <!-- <a href="#">
                     <img :src="instructor.img" alt="">
                  </a> -->
                  <a href="#">
                    <img src="../../assets/img/teacher/teacher-6.jpg">
                  </a>
               </div>
               <div class="teacher__content">
                  <h3 class="teacher__title">{{student.student_name}}</h3> 
                  <span> &nbsp;&nbsp;{{ student.student_age }}</span>
                  <p>{{ student.student_school }}</p>
                  <p>{{ makeNum(student.student_phone_number) }}</p>
                  <button @click="deleteStudent(student.student_id)" class="delete-teacher-btn"> 삭제 </button>
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
  name:'StudentArea',
  setup() {
    const store = useStore()
    const academy_info = ref({})
    const student_list = ref({})

    // 학원 아이디로 학생 목록 받아옴
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
          url: `${store.state.API_URL}/api/v1/masters/academies/${academy_info.value.academy_id}/students`,
          headers: {
            Authorization: 'Bearer ' + store.state.token
          }
          })
        .then((res) => {
          student_list.value = res.data.list
        })
      })
    }

    // 삭제
    const deleteStudent = (id) => {
      axios ({
        method: 'delete',
        url: `${store.state.API_URL}/api/v1/masters/students/${id}`
      })
      .then( () => {
        inq_academy()
      })
      }

    const makeNum = (num) => {
      if (!num) {
        return
      } else {
          if (num.length === 11) {
            return num[0] + num[1] + num[2] + '-' + num[3] + num[4] + num[5] + num[6] +'-' + num[7] + num[8] + num[9] + num[10]
          } else if (num.length === 10) {
            if (num[0] === '0' && num[1] === '2') {
              return num[0] + num[1] + '-' + num[2] + num[3] + num[4] + num[5] + '-' + num[6] + num[7] + num[8] + num[9]
            } else {
              return num[0] + num[1] + num[2] + '-' + num[3] + num[4] + num[5] + '-' + num[6] + num[7] + num[8] + num[9]
            }
          } else if (num.length === 9) {
            return num[0] + num[1] + '-' + num[2] + num[3] + num[4] + '-' + num[5] + num[6] + num[7] + num[8]
        }
      }
    }

    onMounted(() => {
      inq_academy()
    })

    return {
      deleteStudent,
      student_list,
      makeNum,
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
