<template>
  <router-link :to="to"><slot /></router-link>
</template>

<script>
export default {
  name:"NavItem",
  props:{
    to:{
      type: String,
      default: ""
    }
  }
};
</script>

<style>
</style>