<template>
  <main class="main">
    <div class="container">
      <!-- CONTENT start  -->
      <div class="content">
        <div class="banner">
          <div class="banner__body">
            <div class="step-one">
              <div class="text-block">
                <h2 class="title">Рассчитать КАСКО онлайн</h2>
                <h3 class="subtitle">По номеру авто за 3 минуты</h3>
                <ul class="list">
                  <li class="list__item">Цены выгоднее на 10-15%</li>
                  <li class="list__item">
                    Выберите лучший вариант из 7 страховых
                  </li>
                  <li class="list__item">Бесплатная доставка полиса</li>
                </ul>
                <label class="input__box">
                  <p class="input__text">Если есть</p>
                  <input
                    type="text"
                    class="input"
                    placeholder="Ввести номер машины"
                  />
                </label>
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
      </div>
      <!-- CONTENT end -->
    </div>
  </main>
</template>

<script>
</script>

<style>
</style>
