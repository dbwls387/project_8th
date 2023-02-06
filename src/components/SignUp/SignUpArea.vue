<template>
<section class="signup__area po-rel-z1 pt-100 pb-145">
   <div class="sign__shape">
      <img class="man-1" src="../../assets/img/icon/sign/man-3.png" alt="">
      <img class="man-2 man-22" src="../../assets/img/icon/sign/man-2.png" alt="">
      <img class="circle" src="../../assets/img/icon/sign/circle.png" alt="">
      <img class="zigzag" src="../../assets/img/icon/sign/zigzag.png" alt="">
      <img class="dot" src="../../assets/img/icon/sign/dot.png" alt="">
      <img class="bg" src="../../assets/img/icon/sign/sign-up.png" alt="">
      <img class="flower" src="../../assets/img/icon/sign/flower.png" alt="">
   </div>
   <div class="container">
      <div class="row">
         <div class="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
            <div class="section__title-wrapper text-center mb-55">
               <h2 class="section__title">회원가입</h2>
               <p>Create Account For educal</p>
            </div>
         </div>
      </div>
      <div class="row">
         <div class="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
            <div class="sign__wrapper white-bg">
               <div class="sign__header mb-35">
                  <div class="sign__in text-center">
                     <a href="#" class="sign__social g-plus text-start mb-15"><i class="fab fa-google-plus-g"></i>Sign Up with Kakao</a>
                     <p> <span>........</span> Or, 
                     <router-link to="/register">sign up</router-link> 
                     with your ID<span> ........</span> </p>
                  </div>
               </div>
               <div class="sign__form">
                  <form action="#">
                     <div class="sign__input-wrapper mb-25">
                        <h5>가입유형</h5>
                        <div class="sign__input">
                           <!-- <input type="text" placeholder="Full name"> -->
                           <!-- <select>
                              <option value=none>선택</option>
                              <option>학부모</option>
                              <option>강사</option>
                           </select> -->
                           <!-- <i class="fal fa-user"></i> -->
                           <select class="form-select hero__select mt-5" aria-label="Default select example">
                              <option selected>---선택---</option>
                              <option>강사</option>
                              <option>학부모</option>
                           </select>
                        </div>
                     </div>
                     <div class="sign__input-wrapper mb-25">
                        <h5>아이디</h5>
                        <div class="sign__input">
                           <input type="text" placeholder="ID">
                           <i class="fal fa-user"></i>
                        </div>
                     </div>
                     <div class="sign__input-wrapper mb-25">
                        <h5>이메일</h5>
                        <div class="sign__input">
                           <input type="text" placeholder="e-mail address">
                           <i class="fal fa-envelope"></i>
                        </div>
                     </div>
                     <div class="sign__input-wrapper mb-25">
                        <h5>비밀번호</h5>
                        <div class="sign__input">
                           <input type="text" placeholder="Password">
                           <i class="fal fa-lock"></i>
                        </div>
                     </div>
                     <div class="sign__input-wrapper mb-10">
                        <h5>비밀번호 확인</h5>
                        <div class="sign__input">
                           <input type="text" placeholder="Re-Password">
                           <i class="fal fa-lock"></i>
                        </div>
                     </div>
                     <div class="sign__input-wrapper mb-25">
                        <h5>이름</h5>
                        <div class="sign__input">
                           <input type="text" placeholder="Name">
                           <i class="fal fa-user"></i>
                        </div>
                     </div>
                     <div class="sign__input-wrapper mb-25">
                        <h5>연락처</h5>
                        <div class="sign__input">
                           <input type="text" placeholder="'-'를 제외하고 입력해주세요">
                           <!-- <i class="fal fa-user"></i> -->
                           <i class="fal fa-phone"></i>
                        </div>
                     </div>
                     <div class="sign__input-wrapper mb-25">
                        <h5>우편번호</h5>
                        <div class="sign__input">
                           <input type="text">
                        </div>
                     </div>
                     <button>우편번호 검색</button>
                     <div class="sign__input-wrapper mb-25">
                        <h5>기본주소</h5>
                        <div class="sign__input">
                           <input type="text">
                        </div>
                     </div>
                     <div class="sign__input-wrapper mb-25">
                        <h5>상세주소</h5>
                        <div class="sign__input">
                           <input type="text">
                        </div>
                     </div>
                     <div class="sign__action d-flex justify-content-between mb-30">
                        <div class="sign__agree d-flex align-items-center">
                           <input class="m-check-input" type="checkbox" id="m-agree">
                           <label class="m-check-label" for="m-agree">I agree to the <a href="#">Terms & Conditions</a>
                              </label>
                        </div>
                     </div>
                     <button class="e-btn w-100"> <span></span>가입하기</button>
                     <div class="sign__new text-center mt-20">
                        <p>이미 Educal의 회원이신가요?<router-link to="/login"> 로그인하러 가기</router-link></p>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
</template>

<script>
export default {
  name: "SignUpArea",
};
</script>

<style scoped>
.form-select {
  margin-right: 5px;
  display: inline-block;
}
#selectForm {
  width: 100%;
  display: flex;
  justify-content: center;
}
.form-select,
.select-btn {
  border-radius: 12px;
  margin: 3px;
  padding: 8px;
}
</style>

