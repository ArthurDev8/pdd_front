<template>
  <div class="flex flex-col">
    <div class="text-center my-2 text-xl font-bold text-gray-500">
      {{ ticketTitle }}
    </div>
    <div class="flex flex-wrap mt-2 mb-6">
      <div
        v-for="(t, index) in tickets"
        :key="index"
        class="
          px-2
          py-1
          m-1
          bg-gray-200
          text-sm
          transition
          rounded
          text-gray-700
        "
        :class="[{ active: index == curElforCurTik }, rightOrWrongNav(index)]"
      >
        {{ index + 1 }}
      </div>
    </div>
    <div class="tickets_block m-auto w-full">
      <div class="py-2 text-lg text-gray-700">
        {{ tickets[curElforCurTik].title }}
      </div>
      <div>
        <img
          class="m-auto"
          :src="require(`@/assets/${tickets[curElforCurTik].image}`)"
        />
      </div>

      <div class="my-3">
        <ul class="">
          <button
            v-for="(ans, index) in tickets[curElforCurTik].answers"
            :key="ans"
            class="
              w-full
              text-gray-700
              py-1
              px-3
              my-2
              hover:bg-gray-200
              border-2 border-gray-300
              cursor-pointer
              transition
              duration-150
              ease-in-out
              text-left
            "
            @click="choiceAnswer(index)"
            :disabled="isDisabled"
            :class="[rightOrWrong(index), { disCl: isDisabled }]"
          >
            {{ ans }}
          </button>
        </ul>
      </div>
      <div class="w-full flex justify-center py-3">
        <button
          class="
            ml-3
            px-4
            py-2
            text-lg
            cursor-pointer
            hover:bg-gray-200
            border-gray-300
            transition
            duration-150
            ease-in-out
            text-gray-700
            rounded
            bg-gray-100
          "
          :disabled="!isDisabled"
          :class="{ disCl: !isDisabled }"
          @click="nextAnswer"
          v-if="curElforCurTik < tickets.length - 1"
        >
          След. вопрос
        </button>
        <button
          class="
            ml-3
            px-4
            py-2
            text-lg
            cursor-pointer
            hover:bg-green-600
            border-green-500
            transition
            duration-150
            ease-in-out
            text-white
            rounded
            bg-green-500
          "
          @click="nextAnswer"
          v-if="resultArr.length == tickets.length"
        >
          Показать результат
        </button>
      </div>
    </div>
    <Modal v-if="showModal" @close="handlerClick" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    ticketTitle: {
      type: String,
      default: "Экзамен",
    },
    tickets: {
      type: Array,
      default: () => [],
    },
    isExam: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    Modal: () => import("@/components/FailExamModal"),
  },
  data: () => ({
    curElforCurTik: 0,
    resultArr: [],
    isDisabled: false,
    i: null,
    cor: null,
    showModal: false,
  }),
  watch: {
    resultArr() {
      let checkArrCountErr = [];
      this.resultArr.filter((el) => {
        if (el.answer == false) {
          checkArrCountErr.push(el.answer);
        }
      });
      if (checkArrCountErr.length > 1 && this.isExam == true) {
        this.showModal = true;
      } else return;
    },
  },
  methods: {
    ...mapActions({
      resByStore: "questionnaireis/fetchResByStore",
    }),
    handlerClick(val) {
      if (val == "exit") {
        this.$router.push("/");
        his.curElforCurTik = 0;
        this.resultArr = [];
        this.isDisabled = false;
        this.i = null;
        this.cor = null;
        this.showModal = false;
      } else {
        this.$emit("again");
        this.curElforCurTik = 0;
        this.resultArr = [];
        this.isDisabled = false;
        this.i = null;
        this.cor = null;
        this.showModal = false;
      }
    },
    choiceAnswer(idx) {
      this.isDisabled = true;
      this.i = idx;
      this.cor = +this.tickets[this.curElforCurTik].correct == idx + 1;
      let res = {
        answer: +this.tickets[this.curElforCurTik].correct == idx + 1,
        curTick: this.tickets[this.curElforCurTik],
      };
      this.resultArr.push(res);
    },
    rightOrWrongNav(idx) {
      if (this.resultArr[idx]) {
        return {
          green: this.resultArr[idx].answer,
          danger: !this.resultArr[idx].answer,
        };
      } else {
        return;
      }
    },
    rightOrWrong(idx) {
      return {
        green: this.i == idx && this.cor,
        danger: this.i == idx && !this.cor,
      };
    },
    async nextAnswer() {
      if (this.curElforCurTik < this.tickets.length - 1) {
        this.curElforCurTik += 1;
        this.isDisabled = false;
        this.i = null;
        this.cor = null;
      } else {
        await this.resByStore(this.resultArr);
        if(isExam){
          this.$router.push({ name: "ExamTestPassed" });
        }
        this.$router.push({ name: "Result" });
      }
    },
  },
};
</script>

<style style="scss" scoped>
.tickets_block {
  max-width: 600px;
}
.active {
  background-color: #f59e0b;
}
.green {
  background-color: #34d399;
  border-color: #10b981;
}
.disCl {
  cursor: not-allowed;
}
.danger {
  background-color: #f87171;
  border-color: #ef4444;
}
img {
  width: 100%;
  max-width: 600px;
}
</style>