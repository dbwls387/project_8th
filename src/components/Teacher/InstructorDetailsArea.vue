<template>
  <section class="teacher__area pt-100 pb-110">
    <div class="container">
      <div class="row">
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
