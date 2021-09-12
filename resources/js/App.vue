<template>
  <div id="app">
    <Header />
    <main class="main">
      <div class="container">
        <div class="content">
          <router-view></router-view>
          <!--  <LoadingResults /> -->
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import FinalData from "./pages/FinalData";
import Complete from "./pages/Complete";
import Footer from "./components/Footer";
export default {
  name: "app",
  components: {
    Header,
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    FinalData,
    Complete,
    Footer,
  },
};
</script>

<style>
</style>
