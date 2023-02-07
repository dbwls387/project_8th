<template>
<section class="teacher__area pt-100 pb-110">
   <!-- <div class="page__title-shape">
      <img class="page-title-shape-5 d-none d-sm-block" src="../../assets/img/page-title/page-title-shape-1.png" alt="">
      <img class="page-title-shape-6" src="../../assets/img/page-title/page-title-shape-6.png" alt="">
      <img class="page-title-shape-3" src="../../assets/img/page-title/page-title-shape-3.png" alt="">
      <img class="page-title-shape-7" src="../../assets/img/page-title/page-title-shape-4.png" alt="">
   </div> -->
   <div class="container">
      <div class="row">
         <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
            <div class="teacher__details-thumb p-relative w-img pr-30">
               <img src="../../assets/img/teacher/details/teacer-details-1.jpg" alt="">
               <!-- <div class="teacher__details-shape"> -->
                  <!-- <img class="teacher-details-shape-1" src="../../assets/img/teacher/details/shape/shape-1.png" alt="">
                  <img class="teacher-details-shape-2" src="../../assets/img/teacher/details/shape/shape-2.png" alt=""> -->
               <!-- </div> -->
            </div>
         </div>
         <div class="col-xxl-8 col-xl-8 col-lg-8">
            <div class="teacher__wrapper">
               <div class="teacher__top d-md-flex align-items-end justify-content-between">
                  <div class="teacher__info">
                     <h4>이장섭(학생이름)</h4>
                  </div>
                  <div class="teacher__info">
                     <div>학교 : 대연초등학교</div>
                     <div>연락처 : 010-1234-5678</div>
                  </div>
                  <div class="teacher__info">
                     <div>학년 : 6학년</div>
                     <div>나이 : 13세</div>
                  </div>
               </div>
               <div class="teacher__bio">
                  <h1>출석</h1>
                  <CalendarAttendancyArea/>
                  <template>
                    <b-row>
                        <b-col md="auto">
                        <b-calendar v-model="value" @context="onContext" locale="en-US"></b-calendar>
                        </b-col>
                        <b-col>
                        <p>Value: <b>'{{ value }}'</b></p>
                        <p class="mb-0">Context:</p>
                        <pre class="small">{{ context }}</pre>
                        </b-col>
                    </b-row>
                </template>
               </div>
               <div class="teacher__courses pt-55">
                  <div class="section__title-wrapper mb-30">
                     <h2 class="section__title">임채오 <span class="yellow-bg yellow-bg-big">수학학원<img src="../../assets/img/shape/yellow-bg.png" alt=""></span></h2>
                  </div>
                  <div>수학 1반(반) </div>
                  <div>수학 3반(반) </div>
                  <div>수학 4반(반) </div>
                  <br>
                  <div class="section__title-wrapper mb-30">
                     <h2 class="section__title">임채오 <span class="yellow-bg yellow-bg-big">과학학원<img src="../../assets/img/shape/yellow-bg.png" alt=""></span></h2>
                  </div>
                  <div>과학 1반(반) </div>
                  <div>과학 3반(반) </div>
                  <div>과학 4반(반) </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
</template>

<script>
import CourseMixin from '../../mixins/courseItemsMixin';
import CalendarAttendancyArea from "../Calendar/CalendarAttendancyArea.vue";

export default {
   name:'StudentDetail',
   mixins:[CourseMixin],
   components: { CalendarAttendancyArea }
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