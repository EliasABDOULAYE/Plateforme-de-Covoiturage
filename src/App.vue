<script>
export default {
  name: 'App',
};
</script>

<template>
  <div id="app">
      <h1><router-link to="/"></router-link></h1>
    <router-view/>
  </div>
</template>

<style scoped>
@import url("./components/Home_.css");
</style>