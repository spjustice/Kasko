<template>
  <div class="final-data__wrapper">
    <div class="banner">
      <div class="banner__body">
        <div class="final-data">
          <div class="text-block">
            <router-link to="/StepFour" class="btn-secondary btn-back">
              <span class="icon-arrow">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.331873 7.8161L0.332894 7.81718L6.24502 13.7008C6.68793 14.1416 7.40432 14.1399 7.8452 13.6969C8.28601 13.254 8.28432 12.5376 7.8414 12.0968L3.872 8.14666L18.8685 8.14666C19.4934 8.14666 20 7.64011 20 7.0152C20 6.39029 19.4934 5.88373 18.8685 5.88373L3.87206 5.88373L7.84135 1.93357C8.28426 1.49275 8.28596 0.77636 7.84514 0.333449C7.40426 -0.109575 6.68782 -0.111102 6.24497 0.329603L0.332837 6.21322L0.331818 6.21429C-0.11132 6.65658 -0.109907 7.37529 0.331873 7.8161Z"
                    fill="#2A83EC"
                  />
                </svg>
              </span>
              <span class="btn-back__text">Назад</span>
            </router-link>
            <h2 class="title">Ваши данные</h2>
            <router-link to="/" class="btn-secondary">
              Рассчитать заново
            </router-link>
          </div>
          <div class="form-block">
            <label class="input__box">
              <input type="text" class="input" placeholder="Ваш телефон" />
            </label>
            <label class="input__box">
              <input type="text" class="input" placeholder="Ваш телефон" />
            </label>
            <label class="input__box">
              <input type="text" class="input" placeholder="Ваш телефон" />
            </label>
            <label class="input__box">
              <input type="text" class="input" placeholder="Ваш телефон" />
            </label>
            <label class="input__box">
              <input type="text" class="input" placeholder="Ваш телефон" />
            </label>
            <label class="input__box">
              <input type="text" class="input" placeholder="Ваш телефон" />
            </label>
          </div>
          <div class="check-block">
            <label class="check-item">
              <div class="checkbox">
                <input type="checkbox" class="checkbox-none" />
                <span class="checkbox-style">
                  <span class="checkbox-style__img"> </span>
                </span>
              </div>
              <p class="check-item__text">Есть непогашеный кредит за авто?</p>
            </label>
            <label class="check-item">
              <div class="checkbox">
                <input type="checkbox" class="checkbox-none" />
                <span class="checkbox-style">
                  <span class="checkbox-style__img"></span>
                </span>
              </div>
              <p class="check-item__text">
                Страховался ли автомобиль ранее по Каско?
              </p>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="results">
      <div class="results__header">
        <p class="results__title">Результаты расчета</p>
        <div class="sorting__block">
          <p class="sorting__title">Сортировать по:</p>
          <div class="sorting">Популярности</div>
          <div class="sorting">Цене</div>
        </div>
      </div>
      <div class="results__container">
        <div class="results__top-line">
          <p class="results__column-name results__column-name_company">
            Компания
          </p>
          <p class="results__column-name results__column-name_price">Цена</p>
        </div>
        <div class="results__items">
          <CardCompany />
          <CardCompany />
          <CardCompany />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardCompany from "../components/CardCompany.vue";
export default {
  components: {
    CardCompany,
  },
  computed: {
    ...mapState(["count"]),
  },
  data() {
    return {
      loading: false,
    };
  },
};
</script>

<style>
</style>
