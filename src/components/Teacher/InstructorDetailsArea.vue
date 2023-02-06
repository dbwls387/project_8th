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
               <div class="work_history">이력 사항</div>
               <ul class="work_history_detail">
                  <li>임채오 수학학원 2020.01.01 ~ 2021.01.01</li>
                  <li>임채오 과학학원 2020.12.31 ~ 2021.12.31</li>
                  <li>임채오 영어학원 2022.12.01 ~ 2022.12.31</li>
                  <li>임채오 사회학원 2020.01.01 ~ 2023.01.01</li>
                  <li>임채오 컴퓨터학원 2020.07.01 ~ 2022.0101</li>
               </ul>
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
                     <h4>임채오(강사 이름)</h4>
                     <span>수학(과목)</span>
                  </div>
                  <div class="teacher__info">
                     <div>연락처 : 010-1234-5678</div>
                     <div>이메일 : educal@gmail.com</div>
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
                  <p>Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well.(강사 소개 내용)</p>
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

export default {
   name:'InstructorDetailsArea',
   mixins:[CourseMixin],
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