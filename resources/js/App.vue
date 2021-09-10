<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import Footer from "./components/Footer";
export default {
  name: "app",
  components: {
    Header,
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    Footer,
  },
};
</script>

<style>
</style>
