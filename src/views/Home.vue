<template>
  <div class="home flex mt-4 flex-wrap">
    <router-link
      class="
        flex-grow
        text-center text-gray-600
        bg-gray-200
        font-semibold
        text-xl
        px-8
        py-12
        mx-2
        hover:bg-gray-400
        transition
        duration-300
        ease-in-out
        hover:text-white
        mb-5
      "
      to="/questionary"
      >Опросник по темам</router-link
    >
    <router-link
      class="
        flex-grow
        text-center text-gray-600
        bg-gray-200
        font-semibold
        text-xl
        px-8
        py-12
        mx-2
        hover:bg-gray-400
        transition
        duration-300
        ease-in-out
        hover:text-white
        mb-5
      "
      to="/exam"
      >Пройти экзамен</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
