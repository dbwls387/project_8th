import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const API_URL = 'https://i8e206.p.ssafy.io'

export default createStore({
  
  plugins: [
    createPersistedState()
  ],
  state: {
    token: null,
		myseq: null,
    student_id: null,

    classId: null,
    academyId: null,
    classInfo: [],
    classDayInfo: [],
    classStudent: [],
    studentID: [],

		API_URL: API_URL,
    profile: {},
    classes: [],
    children: {},
  },
  getters: {
  },
  mutations: {
    SAVE_USER(state, payload) {
      state.token = payload.token
      state.myseq = payload.userSeq
      state.profile = payload.profile
		},
    CLEAR_LOCAL(state) {
      state.token = null,
      state.myseq = null,
      state.profile = {},
      state.classes = []
    },
    SAVE_STUDENTID(state, student_id) {
      state.student_id = student_id
    },
    SAVE_PROFILE(state, profile) {
      state.profile = profile
    },
    SAVE_CLASSES(state, classes) {
      state.classes = classes
    },
    SHOW_CLASS(state, payload) {
      state.classId = payload.classId
      state.academyId = payload.academyId
      state.classInfo = payload.classInfo
      state.classDayInfo = payload.classDayInfo
      state.classStudent = payload.classStudent
      state.studentID = payload.studentID
    },
    SAVE_CLASSID(state, class_id) {
      state.classId = class_id
    }
  },
  actions: {
		login(context, payload) {
      context.commit('SAVE_USER', payload)
    },
    saveProfile(context, profile) {
      context.commit('SAVE_PROFILE', profile)
    },
    saveClasses(context, classes) {
      context.commit('SAVE_CLASSES', classes)
    },
    showClass(context, payload) {
      context.commit('SHOW_CLASS', payload)
    },
    saveStudentid(context, student_id) {
      context.commit('SAVE_STUDENTID', student_id)
    },
    saveClassid(context, class_id) {
      context.commit('SAVE_CLASSID', class_id)
    }
  },
  modules: {
  }
})