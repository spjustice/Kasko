<template>
  <main class="main">
    <div class="container">
      <!-- CONTENT start  -->
      <div class="content">
        <div class="banner">
          <div class="banner__body">
            <div class="step-four">
              <div class="top-block">
                <div class="text-block">
                  <h2 class="title">Ваши контакты</h2>
                  <p class="paragraph mobile">Заполните поля</p>
                </div>
                <div class="form-block">
                  <label class="input__box">
                    <input type="text" class="input" placeholder="Ваше имя" />
                  </label>
                  <label class="input__box">
                    <input
                      type="text"
                      class="input"
                      placeholder="Ваш телефон"
                    />
                  </label>
                </div>
                <div class="bg">
                  <img src="images/step-four__bg.svg" alt="" />
                </div>
              </div>
              <div class="status-bar">
                <div class="progress-bar">
                  <p class="progress-bar__title">Оформление каско</p>
                  <div class="progress-bar__line">
                    <span class="progress-bar__line-next-step"></span>
                    <span class="progress-bar__line-this-step"></span>
                  </div>
                  <div class="progress-bar__text">
                    <span class="progress-bar__step">Шаг 4/4</span>
                    <span class="progress-bar__descr">Введите контакты</span>
                  </div>
                </div>
                <router-link to="/Results" class="btn">
                  <p class="btn__text">Получить расчет</p>
                  <p class="btn__step">Шаг 4/4</p>
                </router-link>
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
export default {
  data() {
    return {
      isToggleActive: false,
    };
  },
};
</script>

<style>
</style>
