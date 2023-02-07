<template>
  <section class="page__title-area pb-90">
    <div class="container">
      <div class="row">
        <div>
          <div class="course__wrapper">
            <div class="course__tab-2 mb-45">
              <ul class="nav nav-tabs" id="courseTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="description-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#description"
                    type="button"
                    role="tab"
                    aria-controls="description"
                    aria-selected="true"
                  >
                    <i class="icon_ribbon_alt"></i> <span>출결</span>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="member-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#member"
                    type="button"
                    role="tab"
                    aria-controls="member"
                    aria-selected="false"
                  >
                    <i class="icon_book_alt"></i> <span>원생 목록</span>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="curriculum-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#curriculum"
                    type="button"
                    role="tab"
                    aria-controls="curriculum"
                    aria-selected="false"
                  >
                    <i class="icon_star_alt"></i> <span>진도</span>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="register-test-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#registerTest"
                    type="button"
                    role="tab"
                    aria-controls="register-test-tab"
                    aria-selected="false"
                  >
                    <span>성적 등록</span>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="test-info"
                    data-bs-toggle="tab"
                    data-bs-target="#testInfo"
                    type="button"
                    role="tab"
                    aria-controls="test-info"
                    aria-selected="false"
                  >
                    <span>성적 조회</span>
                  </button>
                </li>
              </ul>
            </div>

            <!-- 출결 시작 -->
            <div class="course__tab-content mb-95">
              <div class="tab-content" id="courseTabContent">
                <div
                  class="tab-pane fade show active"
                  id="description"
                  role="tabpanel"
                  aria-labelledby="description-tab"
                >
                  <div class="course__description">
                    <button class="register">등록</button>
                    <table class="table table-bordered" align="center">
                      <thead>
                        <tr align="center">
                          <th width="25%">일시</th>
                          <th width="15%">이름</th>
                          <th width="60%">출결사항</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr align="center">
                          <td>
                            <DatePickerArea />
                          </td>

                          <td>김싸피</td>

                          <td>
                            <div>
                              <div class="form-check form-check-inline attendancyCheck">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                />
                                <label class="form-check-label" for="flexRadioDefault1">
                                  출석
                                </label>
                              </div>
                              <div class="form-check form-check-inline attendancyCheck">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault2"
                                />
                                <label class="form-check-label" for="flexRadioDefault2">
                                  결석
                                </label>
                              </div>
                              <div class="form-check form-check-inline attendancyCheck">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault3"
                                />
                                <label class="form-check-label" for="flexRadioDefault3">
                                  지각
                                </label>
                              </div>
                              <div class="form-check form-check-inline attendancyCheck">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault4"
                                />
                                <label class="form-check-label" for="flexRadioDefault4">
                                  조퇴
                                </label>
                              </div>
                              <div class="form-check form-check-inline attendancyCheck">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault5"
                                />
                                <label class="form-check-label" for="flexRadioDefault5">
                                  외출
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- RegisterTestInfoArea start -->
                <RegisterTestInfoArea />
                <!-- RegisterTestInfoArea end -->

                <!-- CurriculumTab start -->
                <ClassProgressArea />
                <!-- CurriculumTab end -->

                <!-- MemberTab start -->
                <StudentArea />
                <!-- MemberTab end -->

                <!-- TestInfoListArea start -->
                <TestInfoListArea />
                <!-- TestInfoListArea end -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ClassProgressArea from "./ClassProgressArea.vue";
import RegisterTestInfoArea from "./RegisterTestInfoArea.vue";
import TestInfoListArea from "./TestInfoListArea.vue";
import StudentArea from "./StudentArea.vue";
import DatePickerArea from "../Calendar/DatePickerArea.vue";

export default {
  name: "CourseDetailsArea",
  components: {
    ClassProgressArea,
    RegisterTestInfoArea,
    TestInfoListArea,
    StudentArea,
    DatePickerArea,
  },
};
</script>

<style scoped>
.register {
  width: 50px;
  height: 35px;
  float: right;
  margin-bottom: 15px;
  border-radius: 8%;
  background-color: #0e1133;
  color: white;
}
.attendancyCheck {
  width: 13%;
}
</style>
