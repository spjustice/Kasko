<template>
  <div class="banner">
    <div class="banner__body">
      <!-- <LoadingSearchAuto v-if="loading" /> -->
      <div class="step-one">
        <div class="text-block">
          <h2 class="title">Рассчитать КАСКО онлайн</h2>
          <h3 class="subtitle">По номеру авто за 3 минуты</h3>
          <ul class="list">
            <li class="list__item">Цены выгоднее на 10-15%</li>
            <li class="list__item">Выберите лучший вариант из 7 страховых</li>
            <li class="list__item">Бесплатная доставка полиса</li>
          </ul>
          <InputDefolt />
          <router-link to="/StepTwo" class="btn">
            <p class="btn__text">Рассчитать стоимость</p>
            <p class="btn__step">Шаг 1/4</p>
          </router-link>
        </div>
        <div class="bg">
          <img src="images/step-one__car.png" alt="" />
        </div>
        <div class="bg-mobile">
          <img src="images/step-one-mobile__car.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingSearchAuto from "../components/LoadingSearchAuto.vue";
import InputDefolt from "../components/InputDefolt.vue";
export default {
  components: {
    LoadingSearchAuto,
    InputDefolt,
  },
};
</script>

<style>
</style>
