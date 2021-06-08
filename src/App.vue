<template>
  <div id="app">
    <Header />
    <div class="main flex justify-center"><router-view /></div>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {
    Header: () => import("@/components/Header"),
  },
};
</script>
<style lang="scss">
.main {
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  height: auto;
}
</style>
