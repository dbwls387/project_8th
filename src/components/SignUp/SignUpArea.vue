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
                  <form @submit.prevent="sendInfo">
                     <div class="sign__input-wrapper mb-25">
                        <h5>가입유형</h5>
                        <div class="sign__input">
                           <select id="type" v-model="userInfo.type" class="form-select hero__select mt-5" aria-label="Default select example">
                              <option selected>---선택---</option>
                              <option value="UT">강사</option>
                              <option value="UP">학부모</option>
                           </select>
                        </div>
                     </div>
                     <div class="sign__input-wrapper mb-25">
                        <h5>아이디</h5>
                        <div class="sign__input">
                          <input v-model="userInfo.id" type="text" placeholder="ID" id="id" @blur="id_validate">
                          <p v-if="error.id === 1" class="err-msg">필수 입력사항입니다.</p>
                          <p v-if="error.id === 2" class="err-msg">5~20 자의 영문 소문자, 숫자만 사용가능합니다.</p>
                          <p v-if="error.id === 3" class="err-msg">이미 사용 중인 아이디입니다.</p>
                          <i class="fal fa-user"></i>
                        </div>
                     </div>
                     <div class="sign__input-wrapper mb-25">
                        <h5>이메일</h5>
                        <div class="sign__input">
                           <input id="email" type="text" placeholder="e-mail address" v-model="userInfo.email" @blur="email_validate">
                           <p v-if="error.email === 1" class="err-msg">필수 입력사항입니다.</p>
                           <p v-if="error.email === 2" class="err-msg">이메일 주소를 정확히 입력해주세요.</p>
                           <i class="fal fa-envelope"></i>
                        </div>
                     </div>
                     <div class="sign__input-wrapper mb-25">
                        <h5>비밀번호</h5>
                        <div class="sign__input">
                           <input id="pwd" type="password" placeholder="Password" v-model="userInfo.pwd" maxlength="16" @blur="pwd_validate">
                           <p v-if="error.pwd === 1" class="err-msg">필수 입력사항입니다.</p>
                           <p v-if="error.pwd === 2" class="err-msg">9~16자의 영문, 숫자, 특수문자를 사용하세요.</p>
                           <i class="fal fa-lock"></i>
                        </div>
                     </div>
                     <div class="sign__input-wrapper mb-10">
                        <h5>비밀번호 확인</h5>
                        <div class="sign__input">
                           <input id="pwd2" type="password" placeholder="Re-Password" v-model="pwd2" maxlength="16" @blur="pwd2_validate">
                           <p v-if="error.pwd2 === 1" class="err-msg">필수 입력사항입니다.</p>
                           <p v-if="error.pwd2 === 2" class="err-msg">비밀번호가 일치하지 않습니다.</p>
                           <i class="fal fa-lock"></i>
                        </div>
                     </div>
                     <div class="sign__input-wrapper mb-25">
                        <h5>이름</h5>
                        <div class="sign__input">
                           <input id="name" type="text" placeholder="Name" v-model="userInfo.name" @blur="name_validate">
                           <p v-if="error.name === 1" class="err-msg">필수 입력사항입니다.</p>
                           <p v-if="error.name === 2" class="err-msg">이름을 정확히 입력해주세요.</p>
                           <i class="fal fa-user"></i>
                        </div>
                     </div>
                     <div class="sign__input-wrapper mb-25">
                        <h5>연락처</h5>
                        <div class="sign__input">
                           <input id="phoneNumber" type="text" placeholder="'-'를 제외하고 입력해주세요" v-model="userInfo.phoneNumber" maxlength="11" @blur="phoneNumber_validate">
                           <p v-if="error.phoneNumber === 1" class="err-msg">필수 입력사항입니다.</p>
                           <p v-if="error.phoneNumber === 2" class="err-msg">숫자만 입력 가능합니다.</p>
                           <i class="fal fa-phone"></i>
                        </div>
                     </div>
                     <div class="sign__input-wrapper mb-25">
                        <h5>우편번호</h5>
                        <div class="sign__input">
                           <input id="zonecode" type="number" @click="findAddress" v-model.number="userInfo.zonecode" readonly>
                        </div>
                     </div>
                     <button @click="findAddress">우편번호 검색</button>
                     <div class="sign__input-wrapper mb-25">
                        <h5>기본주소</h5>
                        <div class="sign__input">
                           <input type="text" @click="findAddress" v-model="userInfo.address" readonly>
                        </div>
                     </div>
                     <div class="sign__input-wrapper mb-25">
                        <h5>상세주소</h5>
                        <div class="sign__input">
                           <input type="text" id="detailAddress" v-model="userInfo.detailAddress" @blur="address_validate">
                           <p v-if="error.address === 1" class="err-msg">필수 입력사항입니다.</p>
                           <p v-if="error.address === 2" class="err-msg">상세주소를 입력해주세요.</p>
                        </div>
                     </div>
                     <div class="sign__action d-flex justify-content-between mb-30">
                        <div class="sign__agree d-flex align-items-center">
                          <label for="profile-img">프로필 이미지</label>
                          <input @change="imgUpdated()" ref="imgInput" type="file" id="img" accept="image/*">
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
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ref, reactive } from 'vue'
import axios from 'axios'

export default {
  name: "SignUpArea",
  setup() {
    const store = useStore()
    const router = useRouter()

    // userInfo 값 입력
    const userInfo = reactive({
      type: null,
      id: '',
      pwd: '',
      name: '',
      email: '',
      phoneNumber: '',
      zonecode: '',
      address: '',
      detailAddress: '',
      profileImg: null,
    })

    // 비밀번호 확인은 pwd와 값만 같으면 valid check 통과
    const pwd2 = ref('')
    
    // 에러 코드 작성
    const error = reactive({
      type: 0,
      id: false,
      pwd: 0,
      pwd2: 0,
      name: 0,
      email: 0,
      phoneNumber: 0,
      zonecode: 0,
      address: 0,
      detailAddress: 0,
    })

    // 정규 표현식
    const regex_id = /^[a-z|A-Z|0-9|]{5,20}$/
    const regex_pwd = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{9,16}$/
    const regex_name = /^[가-힣|a-z|A-Z|]{2,}$/
    const regex_email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
    const regex_phoneNumber = /^[0-9]+$/

    // 회원가입 시 validation check 하는 부분
    // 에러 코드 1이면 필수 입력 값 없음
    // template v-if p태그 참조
    function type_validate() {
      if (userInfo.type === null) {
        error.type = 1
      } else {
        error.type = 0
      }
    }

    function id_validate() {
      if (!userInfo.id) {
        error.id = 1
      } else if (!regex_id.test(userInfo.id)) {
        error.id = 2
      } else {
        axios ({
          method: 'post',
          url: `${store.state.API_URL}/api/v1/users/check-id`,
          data: {
            "id": userInfo.id
          }
        })
          .then((res) => {
            if (res.data["duplicated"]) {
              error.id = 3
            }
            else {
              error.id = 0
            }
          })
        }
      }

    function pwd_validate() {
      if (!userInfo.pwd) {
        error.pwd = 1
      } else if (!regex_pwd.test(userInfo.pwd)) {
        error.pwd = 2
      } else {
        error.pwd = 0
      }
    }

    function pwd2_validate() {
      if (!pwd2.value) {
        error.pwd2 = 1
      } else if (pwd2.value !== userInfo.pwd) {
        error.pwd2 = 2
      } else {
        error.pwd2 = 0
      }
    }

    function name_validate() {
      if (!userInfo.name) {
        error.name = 1
      } else if (!regex_name.test(userInfo.name)) {
        error.name = 2
      } else {
        error.name = 0
      }
    }

    function email_validate() {
      if (!userInfo.email) {
        error.email = 1
      } else if (!regex_email.test(userInfo.email)) {
        error.email = 2
      } else {
        error.email = 0
      }
    }

    function phoneNumber_validate() {
      if (!userInfo.phoneNumber) {
        error.phoneNumber = 1
      } else if (!regex_phoneNumber.test(userInfo.phoneNumber)) {
        error.phoneNumber = 2
      } else {
        error.phoneNumber = 0
      }
    }

    function address_validate() {
      if (!userInfo.zonecode) {
        error.address = 1
      } else if (userInfo.zonecode && !userInfo.detailAddress) {
        error.address = 2
      } else {
        error.address = 0
      }
    }

    // validation check
    function validation_check() {
      type_validate()
      if (error.type) {
        document.getElementById("type").focus()
        return
      }

      id_validate()
      if (error.id) {
        document.getElementById("id").focus()
        return
      }

      pwd_validate()
      if (error.pwd) {
        document.getElementById("pwd").focus()
        return
      }

      pwd2_validate()
      if (error.pwd2) {
        document.getElementById("pwd2").focus()
        return
      }

      name_validate()
      if (error.name) {
        document.getElementById("name").focus()
        return
      }

      email_validate()
      if (error.email) {
        document.getElementById("email").focus()
        return
      }

      phoneNumber_validate()
      if (error.phoneNumber) {
        document.getElementById("phoneNumber").focus()
        return
      }

      address_validate()
      if (error.zonecode) {
        document.getElementById("zonecode").focus()
        return
      } else if (error.detailAddress) {
        document.getElementById("detailAddress").focus()
        return
      }
    }

    // 정보 보내기 전에 validation check
    const sendInfo = () => {
      console.log(userInfo)
      validation_check()
      if (Object.values(error).every(v => v === 0)) {
        axios({
          method: 'post',
          url: `${store.state.API_URL}/api/v1/users`,
          data: {
            userId : userInfo.id,
            userPassword: userInfo.pwd,
            userName: userInfo.name,
            userPhoneNumber: userInfo.phoneNumber,
            userCode: userInfo.type, 
            zipCode: userInfo.zonecode,
            firstAddress: userInfo.address,
            lastAddress: userInfo.detailAddress,
            userEmail: userInfo.email,
            userProfileUrl: userInfo.profileImg,
          },
        })
          .then(() => {
            alert('회원가입 완료')
            router.push({ name: 'login' })
          })
      }
    }
    function toHome() {
      router.push({ name: 'home' })
    }

    function toLogin() {
      router.push({ name: 'login' })
    }

    function toInquiry() {
      router.push({ name: 'inquiry' })
    }


    // 다음 주소 찾기
    function findAddress() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          const addr = ref('')

          addr.value = data.roadAddress

          userInfo.zonecode = data.zonecode
          userInfo.address = addr.value

          document.getElementById("detailAddress").focus()
        }
      }).open()
    }

    return {
      userInfo,
      pwd2,
      error,
      findAddress,

      toHome,
      toLogin,
      toInquiry,

      type_validate,
      id_validate,
      pwd_validate,
      pwd2_validate,
      name_validate,
      email_validate,
      phoneNumber_validate,
      address_validate,

      sendInfo,
    }
  },
}
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

