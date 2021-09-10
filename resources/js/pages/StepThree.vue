<template>
  <main class="main">
    <div class="container">
      <!-- CONTENT start  -->
      <div class="content">
        <div class="banner">
          <div class="banner__body">
            <div class="step-three">
              <div class="text-block">
                <h2 class="title">
                  Данные <br />
                  о водителях
                </h2>
                <p class="paragraph">Добавьте тех, кто пользуется машиной</p>
                <div class="toggle">
                  <button
                    type="button"
                    class="toggle__item"
                    @click="isToggleActive = !isToggleActive"
                    :class="{
                      active: isToggleActive,
                    }"
                  >
                    <span class="toggle__circle"></span>
                  </button>
                  <p class="toggle__text">Любые водители</p>
                  <div class="toggle__info">
                    <span>?</span>
                    <span class="toggle__info-hide"
                      >Пользоваться машиной может кто угодно</span
                    >
                  </div>
                </div>
              </div>
              <div class="form-block">
                <label class="input__box">
                  <span class="icon-add">
                    <img src="images/icon-add.svg" alt="" />
                  </span>
                  <span class="input__title">Добавить водителя</span>
                </label>
              </div>
              <div class="status-bar">
                <div class="progress-bar">
                  <p class="progress-bar__title">Оформление каско</p>
                  <div class="progress-bar__line">
                    <span class="progress-bar__line-next-step"></span>
                    <span class="progress-bar__line-this-step"></span>
                  </div>
                  <div class="progress-bar__text">
                    <span class="progress-bar__step">Шаг 3/4</span>
                    <span class="progress-bar__descr"
                      >Проверьте данные о водителях</span
                    >
                  </div>
                </div>
                <router-link to="/StepFour" class="btn">
                  <p class="btn__text">Подтвердить водителей</p>
                  <p class="btn__step">Шаг 3/4</p>
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
