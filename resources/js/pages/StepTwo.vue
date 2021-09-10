<template>
  <main class="main">
    <div class="container">
      <!-- CONTENT start  -->
      <div class="content">
        <div class="banner">
          <div class="banner__body">
            <div class="step-two">
              <div class="text-block">
                <h2 class="title">Параметры автомобиля</h2>
                <p class="paragraph">
                  Проверьте, верно ли введены данные о вашем авто
                </p>
                <div class="policy">
                  <p class="policy-title">
                    Предыдущий полис <span class="gray">(Если есть)</span>
                  </p>
                  <button class="attach">
                    <span class="icon-clip">
                      <img src="images/icon-clip.svg" alt="" />
                    </span>
                    <span class="attach__text">Прикрепить файл</span>
                  </button>
                </div>
              </div>
              <div class="form-block">
                <label class="input__box">Марка, модель</label>
                <label class="input__box">Год выпуска</label>
                <label class="input__box">Мощность двигателя</label>
                <label class="input__box">Стоимость авто</label>
              </div>
              <div class="status-bar">
                <div class="progress-bar">
                  <p class="progress-bar__title">Оформление каско</p>
                  <div class="progress-bar__line">
                    <span class="progress-bar__line-next-step"></span>
                    <span class="progress-bar__line-this-step"></span>
                  </div>
                  <div class="progress-bar__text">
                    <span class="progress-bar__step">Шаг 2/4</span>
                    <span class="progress-bar__descr"
                      >Проверьте данные об авто</span
                    >
                  </div>
                </div>
                <router-link to="/StepThree" class="btn">
                  <p class="btn__text">Подтвердить данные</p>
                  <p class="btn__step">Шаг 2/4</p>
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
</script>

<style>
</style>
