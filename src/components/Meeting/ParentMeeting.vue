<template>
  <section class="teacher__area pt-100 pb-110">
    <div class="container">
      <div class="row">
        <div class="col-xxl-8 col-xl-8 col-lg-8">
          <div class="teacher__wrapper">
            <div class="col-xxl-8 col-xl-8 col-lg-8 mt-15">
              <div class="d-md-flex align-items-end justify-content-between">
                <div class="teacher__info">
                  <h4>예약 내역</h4>
                </div>
              </div>
              <div>
                <table class="mt-40 mb-40 ml-10">
                  <tr>
                    <th>일시</th>
                    <th>학원</th>
                    <th>반</th>
                    <th>강사명</th>
                    <th>상태</th>
                  </tr>
                  <tr>
                    <td><span>2022/07/29 14:00 ~ 15:00</span></td>
                    <td><span>정상우리어학원</span></td>
                    <td><span>N3</span></td>
                    <td><span>이선생</span></td>
                    <td><span>승인대기중</span></td>
                  </tr>
                </table>
              </div>

              <div class="d-md-flex align-items-end justify-content-between">
                <div class="teacher__info">
                  <h4>상담 내역</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
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
