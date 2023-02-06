<template>
  <section class="teacher__area pt-100 pb-110">
    <div class="container">
      <div class="row">
        <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2">
          <div class="teacher__details-thumb p-relative w-img pr-30">
            <img src="../../assets/img/teacher/details/teacer-details-1.jpg" alt="" />
          </div>
        </div>
        <div class="col-xxl-8 col-xl-8 col-lg-8 mt-15">
          <div class="teacher__wrapper">
            <div class="d-md-flex align-items-end justify-content-between">
              <div class="teacher__info">
                <h4>임채오(강사 이름)</h4>
              </div>
            </div>
          </div>

          <table class="mt-40 ml-10">
            <tr>
              <th>연락처</th>
              <th>이메일</th>
              <th>과목</th>
              <th>학년</th>
            </tr>
            <tr>
              <td class="pr-80"><span>010-1234-5678</span></td>
              <td class="pr-80"><span>educal@gmail.com</span></td>
              <td class="pr-80"><span>수학</span></td>
              <td class="pr-80"><span>1학년</span></td>
            </tr>
          </table>
        </div>

         <hr class="mt-30">

      </div>
    </div>
  </section>
</template>

<script>
import CourseMixin from "../../mixins/courseItemsMixin";

export default {
  name: "InstructorDetailsArea",
  mixins: [CourseMixin],
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
