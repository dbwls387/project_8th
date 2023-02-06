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
            <div class="course__tab-content mb-95">
              <div class="tab-content" id="courseTabContent">
                <div
                  class="tab-pane fade show active"
                  id="description"
                  role="tabpanel"
                  aria-labelledby="description-tab"
                >
                  <div class="course__description">
                    <h3>출결</h3>
                    <p>
                      Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey
                      guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of
                      how's your father David skive off sloshed, don't get shirty with me chip shop
                      vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm
                      off up the kyver old no biggie fantastic boot, David have it show off show off
                      pick your nose and blow off lost the plot porkies bits and bobs only a quid
                      bugger all mate, absolutely bladdered bamboozled it's your round don't get
                      shirty with me down the pub well.
                    </p>
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

export default {
  name: "CourseDetailsArea",
  components: {
    ClassProgressArea,
    RegisterTestInfoArea,
    TestInfoListArea,
    StudentArea,
  },
};
</script>
