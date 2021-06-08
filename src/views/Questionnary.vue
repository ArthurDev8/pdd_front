<template>
  <div class="flex flex-col">
    <Tickets
      :ticketTitle="questionnaireById.section"
      :tickets="questionnaireById.tickets"
      :isExam="false"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Questionnary",
  components: {
    Tickets: () => import("@/components/Tickets"),
  },
  async mounted() {
    await this.fetchDataById(this.$route.params.id);
  },
  computed: {
    ...mapGetters({ questionnaireById: "questionnaireis/questionnaireById" }),
  },
  methods: {
    ...mapActions({
      fetchDataById: "questionnaireis/fetchQuestionnaireById",
    }),
  },
};
</script>
 
<style lang='scss' scoped>
</style>