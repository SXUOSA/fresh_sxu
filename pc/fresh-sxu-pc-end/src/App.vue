<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

  // mounted() {
  //     this.router.afterEach((to, from, next) => {
  //     window.scrollTo(0, 0);
  //   })
  // }

}
</script>

<style>

body, html {
  /* background-color: black; */
  position: relative;

  /* mwidth: 100%; */
  /* min-height: 100vh; */
  overflow-x: hidden;
}

#app {
  width: 100vw;
  min-height: 100vh;
  position: relative;
}
</style>
