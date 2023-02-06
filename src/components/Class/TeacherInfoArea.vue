<template>
<section class="teacher__area pt-100 pb-110">
   <div class="container">
      <div class="row">
         <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
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
                  <div class="teacher__info">
                    <h4>과목</h4>
                    <p>수학(과목)</p>
                    <h4>학년</h4>
                    <p>1학년</p>
                  </div>
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