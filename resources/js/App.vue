<template>
  <div id="app">
    <Header />
    <router-view></router-view>
      <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import StepOne from "./pages/StepOne";
import Footer from "./components/Footer"
export default {
  name: "app",
  components: {
    Header,StepOne,Footer,
  },
};
</script>

<style>
</style>
