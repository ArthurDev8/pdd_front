<template>
  <div class="nav flex justify-center flex-wrap flex-col font-bold my-2">
    <div class="text-2xl text-center my-2 font-bold text-gray-500">Выбери тему опроса</div>
    <ItemAnswers
      class="px-4 py-2 my-2 bg-gray-200 text-gray-800 rounded-lg hover:text-gray-900 hover:bg-gray-300 transition duration-150 ease-in-out"
      v-for="(ans, index) in questionnaireis"
      :key="ans.section"
      :to="`/questionnary/${index}`"
      >{{ ans.section }}</ItemAnswers
    >
  </div>
</template>

<script>
export default {
  name: "Nav",
  components: {
    ItemAnswers: () => import("@/components/list/ItemAnswers"),
  },
  props: {
    questionnaireis: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
</style>