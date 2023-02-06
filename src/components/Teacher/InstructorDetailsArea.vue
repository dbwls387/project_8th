<template>
  <section class="teacher__area pt-100 pb-110">
    <div class="container">
      <div class="row">
<!-- <<<<<<< Updated upstream
        <div class="col-xxl-2 col-xl-2 col-lg-3 col-md-2">
          <div class="teacher__details-thumb p-relative w-img pr-30 pt-20">
            <img src="../../assets/img/teacher/details/teacer-details-1.jpg" alt="" />
          </div>
        </div>
        <div class="col-xxl-8 col-xl-8 col-lg-8">
          <div class="teacher__wrapper">
            <div class="col-xxl-8 col-xl-8 col-lg-8 mt-15">
              <div class="teacher__wrapper">
                <div class="d-md-flex align-items-end justify-content-between">
                  <div class="teacher__info">
                    <h4>임채오(강사 이름)</h4>
                  </div>
                </div>
              </div>

              <table class="mt-40">
                <tr>
                  <th>연락처</th>
                  <th>이메일</th>
                  <th>과목</th>
                  <th>학년</th>
                </tr>
                <tr>
                  <td class="pr-50"><span>010-1234-5678</span></td>
                  <td class="pr-50"><span>educal@gmail.com</span></td>
                  <td class="pr-50"><span>수학</span></td>
                  <td class="pr-50"><span>1학년</span></td>
                </tr>
              </table>
======= -->
         <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
            <div class="teacher__details-thumb p-relative w-img pr-30">
               <img src="../../assets/img/teacher/details/teacer-details-1.jpg" alt="">
               <div class="work_history">이력 사항</div>
               <ul class="work_history_detail">
                  <li v-for="history of historyInfo" :key="history">{{ history.academyName }} {{ history.startDateYear }}.{{ history.startDateMonth }} ~ {{ history.endDateYear }}.{{ history.endDateMonth }}</li>
               </ul>
            </div>
         </div>
         <div class="col-xxl-8 col-xl-8 col-lg-8">
            <div class="teacher__wrapper">
               <div class="teacher__top d-md-flex align-items-end justify-content-between">
                  <div class="teacher__info">
                     <h4>{{ userInfo.userName }}</h4>
                     <span>{{ checkSubject(teacherInfo.subjectCode) }}</span>
                  </div>
                  <div class="teacher__info">
                     <div>연락처 : {{ makeNum(userInfo.userPhoneNumber) }}</div>
                     <div>이메일 : {{ userInfo.userEmail }}</div>
                  </div>
                  <div class="teacher__rating">
                     <h5>Review:</h5>
                     <div class="teacher__rating-inner d-flex align-items-center">
                        <ul>
                           <li><a href="#"> <i class="fas fa-star"></i> </a></li>
                           <li><a href="#"> <i class="fas fa-star"></i> </a></li>
                           <li><a href="#"> <i class="fas fa-star"></i> </a></li>
                           <li><a href="#"> <i class="fas fa-star"></i> </a></li>
                           <li><a href="#"> <i class="fas fa-star"></i> </a></li>
                        </ul>
                        <p>4.5</p>
                     </div>
                  </div>
               </div>
               <div class="teacher__bio">
                  <h3>강사 소개</h3>
                  <p>{{ teacherInfo.introduce}}</p>
               </div>
               <div class="teacher__courses pt-55">
                  <div class="section__title-wrapper mb-30" v-for="academy of academyInfo" :key="academy">
                    <h2 class="section__title"><span class="yellow-bg yellow-bg-big">{{ academy }}</span></h2>
                    <div v-for="clas of tempList" :key="clas">
                      <div v-if="clas.academy_name === academy">{{ clas.class_name }}</div>
                    </div>
                    <br>
                  </div>
               </div>
            </div>
            <div class="teacher__bio">
              <h3>강사 소개</h3>
              <p>
                Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in
                my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your
                father David skive off sloshed, don't get shirty with me chip shop vagabond crikey
                bugger Queen's English chap. (강사 소개 내용)
              </p>
            </div>
            <h3 class="mt-30">이력 사항</h3>
            <ul class="work_history_detail">
              <li>임채오 수학학원 2020.01.01 ~ 2021.01.01</li>
              <li>임채오 과학학원 2020.12.31 ~ 2021.12.31</li>
              <li>임채오 영어학원 2022.12.01 ~ 2022.12.31</li>
              <li>임채오 사회학원 2020.01.01 ~ 2023.01.01</li>
              <li>임채오 컴퓨터학원 2020.07.01 ~ 2022.0101</li>
            </ul>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import axios from 'axios'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { ref, onBeforeMount } from 'vue'
export default {
  name:'TeacherDetail',
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const userSeq = {route}.route.params.userSeq
    const userInfo = ref({})
    const teacherInfo = ref({})
    const historyInfo = ref([])
    const tempList = ref([])
    const academyInfo = ref([])
    const getUser = () => {
      axios({
        method: 'get',
        url: `${store.state.API_URL}/api/v1/users/${userSeq}`,
      })
      .then((res) => {
        userInfo.value = res.data
        axios({
          method: 'get',
          url: `${store.state.API_URL}/api/v1/teachers/${userSeq}`,
        })
        .then((res) => {
          teacherInfo.value = res.data
          axios({
            method: 'get',
            url: `${store.state.API_URL}/api/v1/teachers/${userSeq}/histories`,
          })
          .then((res) => {
            historyInfo.value = res.data.list
            axios({
              method: 'get',
              url: `${store.state.API_URL}/api/v1/teachers/${userSeq}/info`,
            })
            .then((res) => {
              tempList.value = res.data.list
              console.log(tempList.value)
              // tempList에서 학원부터 뽑아내기
              // v-for로 학원 먼저 뱉은 다음 tempList를 반 이름 기준으로 정렬
              // 이중 v-for로 tempList 순회하면서 학원이름이 같으면 출력
              for (let i = 0; i < tempList.value.length; i++) {
                if (!academyInfo.value.includes(tempList.value[i].academy_name)) {
                  academyInfo.value.push(tempList.value[i].academy_name)
                }
              }
              tempList.value.sort(function(a, b) {
                if (a.class_name < b.class_name) {
                  return -1
                }
                if (a.class_name > b.class_name) {
                  return 1
                }
                  return 0
              })
            })
          })
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

    onBeforeMount(() => {
      getUser()
    })

    return {
      router,
      userSeq,
      checkSubject,
      getUser,
      makeNum,
      userInfo,
      teacherInfo,
      historyInfo,
      tempList,
      academyInfo

    }
  }
};
</script>

<style scoped>
.work_history {
  font-size: 2rem;
  margin-top: 1rem;
}
.work_history_detail {
  margin-top: 1rem;
}
</style>
