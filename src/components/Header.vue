<template>
  <div class="nav flex bg-gray-600 p-2 justify-center items-center">
    <router-link
      to="/"
      class="
        text-gray-50 text-lg
        px-4
        py-1
        mx-2
        hover:bg-gray-500
        transition
        duration-150
        ease-in-out
      "
      >Главная</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  background-color: #6b7280;
}
</style>