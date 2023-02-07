<template>
  {{ scheduleDate}}
  <div class="course__sort-inner">
    <select v-model="scheduleCode">
      <option selected>---선택---</option>
      <option value="SC">수업</option>
      <option value="SM">상담</option>
      <option value="SR">휴게</option>
      <option value="SP">개인</option>
      <option value="SE">기타</option>
    </select>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: ['scheduleDate'],
    setup() {
      const scheduleCode = ref('')

      return {
        scheduleCode,
      }
    },
}
</script>