<template>
  <div class="card-company">
    <div class="card-company__leftside">
      <div class="card-company__company">
        <div class="card-company__logo">
          <img src="images/logo-company-1.png" alt="" />
        </div>
        <div class="card-company__text-block">
          <p class="card-company__name">Zetta</p>
          <p class="card-company__descr">Страховая компания</p>
        </div>
      </div>
    </div>
    <div class="card-company__rightside">
      <div class="card-company__price-container">
        <p class="card-company__price-mobile">
          <span class="card-company__price-mobile-sign">₽</span>
          <span class="card-company__price-mobile-descr">Цена</span>
        </p>
        <div class="card-company__pre-price-block">
          <p class="card-company__pre-price-title">Страховой</p>
          <p class="card-company__pre-price-value">10 990 ₽</p>
        </div>
        <div class="card-company__new-price-block">
          <p class="card-company__new-price-title">Наша</p>
          <p class="card-company__new-price-value">9 342 ₽</p>
        </div>
      </div>
      <button class="btn card-company__btn-discount">
        Забронировать скидку 15%
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.card-company {
  display: flex;
  align-items: center;
  min-height: 120px;
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &:first-child {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  &:hover {
    .card-company__btn-discount {
      background: linear-gradient(92.59deg, #569bfa -5.27%, #7d78fe 100.59%);
      color: #fff;
    }
  }
  &:active {
    .card-company__btn-discount {
      background: linear-gradient(92.59deg, #7d78fe 100.58%, #8076ff 100.59%);
      color: #fff;
    }
  }
  &__leftside {
    flex: 0 1 55%;
    // width: 55%;
  }

  &__company {
    display: flex;
    margin-right: 30px;
  }

  &__logo {
    flex: 0 0 60px;
    margin-top: 7px;
    margin-right: 15px;
    height: 60px;
    display: flex;
    align-items: center;
  }
  &__name {
    margin-bottom: 4px;
    font-weight: bold;
    font-size: 30px;
  }
  &__descr {
    font-size: 16px;
    color: rgba(46, 43, 43, 0.7);
  }
  &__rightside {
    flex: 1 1 45%;
    // width: 45%;
    display: flex;
    justify-content: space-between;
  }
  &__price-mobile {
    display: none;
    font-weight: 700;
    align-items: center;
    color: rgba(85, 156, 250, 1);
  }
  &__price-mobile-sign {
    margin-right: 12px;
    font-size: 30px;
  }
  &__price-mobile-descr {
    font-size: 14px;
    text-transform: uppercase;
    transform: translateY(16%);
  }
  &__price-container {
    display: flex;
    margin-right: 20px;
  }

  &__pre-price-block {
    color: rgba(46, 43, 43, 0.7);
    min-width: 95px;
    margin-right: 10px;
  }

  &__pre-price-title {
    font-size: 16px;
    margin-bottom: 7px;
  }

  &__pre-price-value {
    font-size: 20px;
    text-decoration: line-through;
  }

  &__new-price-title {
    font-size: 16px;
  }

  &__new-price-value {
    font-size: 35px;
  }
  &__btn-discount {
    align-self: center;
    width: 260px;
    height: 55px;
    font-weight: 700;
    padding: 10px;
    background: #ebecef;
    border-radius: 4px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 1299.98px) {
  .card-company {
    &__leftside {
      flex: 0 1 40%;
    }
    &__rightside {
      flex: 1 1 60%;
    }
  }
}
@media (max-width: 991.98px) {
  .card-company {
    flex-direction: column;
    &__leftside {
      width: 100%;
      margin-bottom: 10px;
    }
    &__rightside {
      width: 100%;
      justify-content: flex-start;
    }
    &__price-container {
      flex-wrap: wrap;
    }
    &__price-mobile {
      display: flex;
      width: 100%;
    }
    &__btn-discount {
      align-self: flex-end;
    }
  }
}
@media (max-width: 767.98px) {
  .card-company {
    margin: 0 -15px;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 35px;
    padding-bottom: 40px;
    &__company {
      margin-right: unset;
    }
    &__rightside {
      flex-wrap: wrap;
    }
    &__price-container {
      // width: 100%;
      margin-bottom: 28px;
      margin-right: unset;
      margin-right: 50px;
    }
    &__pre-price-block {
      color: #2e2b2b;
    }
    &__pre-price-title {
      margin-bottom: unset;
    }
    &__pre-price-value {
    }
    &__new-price-value {
      font-size: 30px;
      line-height: 110.5%;
    }
    &__btn-discount {
      align-self: center;
    }
  }
}
</style>