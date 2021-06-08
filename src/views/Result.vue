<template>
  <div class="py-5">
    <div class="w-full flex flex-col items-center">
      <div class="text-gray-800 text-2xl flex items-center">
        Вопросов всего:
        <span class="px-2 text-gray-400 text-4xl">{{ getResult.length }}</span>
      </div>
      <div class="text-gray-800 text-2xl flex items-center">
        Верных ответов:
        <span class="px-2 text-green-400 text-4xl">{{ res(true).length }}</span>
      </div>
      <div class="text-gray-800 text-2xl flex items-center">
        Не верных ответов:
        <span class="px-2 text-red-400 text-4xl">{{ res(false).length }}</span>
      </div>
      <div v-if="res(false).length > 0">
        <button class="px-4 py-2 my-4 text-white bg-red-400" @click="showErr">
          {{ showErrors ? "Скрыть" : "Показать ошибки" }}
        </button>
      </div>
    </div>
    <transition name="fade">
      <div class="my-3" v-if="showErrors">
        <div
          v-for="el in res(false)"
          :key="el.curTick.title"
          class="my-6 border-t-4 p-3"
        >
          <div class="py-2 text-lg text-center text-gray-700">
            {{ el.curTick.title }}
          </div>
          <div class="my-2">
            <img
              class="m-auto"
              :src="require(`@/assets/${el.curTick.image}`)"
            />
          </div>
          <div class="text-center text-white bg-green-400 p-2 my-2">
            {{ el.curTick.hint }}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Result",
  data: () => ({
    showErrors: false,
  }),
  computed: {
    ...mapGetters({
      getResult: "questionnaireis/result",
    }),
  },
  methods: {
    res(val) {
      return val == true ? this.resCount(true) : this.resCount(false);
    },
    resCount(val) {
      let res = this.getResult.filter((el) => {
        return el.answer == val;
      });
      return res;
    },
    showErr() {
      this.showErrors = !this.showErrors;
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 300px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>