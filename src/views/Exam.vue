<template>
  <div class="flex flex-col">
    <Tickets
      :tickets="exam"
      :isExam="true"
      @again="handlerAgain"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Exam",
  components: {
    Tickets: () => import("@/components/Tickets"),
  },
  async mounted() {
    await this.fetchExam();
  },
  computed: {
    ...mapGetters({ exam: "exam/exam" }),
  },
  methods: {
    ...mapActions({
      fetchExam: "exam/fetchExam",
    }),
   async handlerAgain(){
     await this.fetchExam();
    }
  },
};
</script>
 
<style lang='scss' scoped>
</style>