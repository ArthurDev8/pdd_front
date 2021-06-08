<template>
  <div class="questionnairiesLists" >
    <ListAnswers :questionnaireis="questionnaireis" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "questionnairiesLists",
  components: {
    ListAnswers: () => import("@/components/list/ListAnswers"),
  },
  async mounted() {
    await this.fetchData();
  },
  computed: {
    ...mapGetters({ questionnaireis: "questionnaireis/questionnaireis" }),
  },
  methods: {
    ...mapActions({
      fetchData: "questionnaireis/fetchAllQuestionnaireis",
    }),
  },
};
</script>
