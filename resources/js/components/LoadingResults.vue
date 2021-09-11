<template>
  <div class="load-results">
    <div class="load-results__screen">
      <div>
        <span>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.1633 11.145V13.73H13.0433V24.675H10.1833V13.73H0.0632814V11.145H10.1833V0.2H13.0433V11.145H23.1633Z"
            />
          </svg>
        </span>
      </div>
      <div>
        <span>
          <svg
            width="24"
            height="4"
            viewBox="0 0 24 4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23.6691 3.315H0.569141V0.84H23.6691V3.315Z" />
          </svg>
        </span>
      </div>
      <div>
        <span>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.1633 11.145V13.73H13.0433V24.675H10.1833V13.73H0.0632814V11.145H10.1833V0.2H13.0433V11.145H23.1633Z"
            />
          </svg>
        </span>
      </div>
      <div>
        <span>
          <svg
            width="24"
            height="13"
            viewBox="0 0 24 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.6691 0.249999V2.835H0.569141V0.249999H23.6691ZM23.6691 10.095V12.68H0.569141V10.095H23.6691Z"
            />
          </svg>
        </span>
      </div>
    </div>
    <p class="load-results__text">Рассчитываем стоимость вашего КАСКО</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.load-results {
  padding: 175px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__screen {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 150px;
    margin-bottom: 30px;
    & div {
      width: 57px;
      height: 57px;
      border-radius: 5px;
      margin: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: load 1s infinite;
      background: #ebecef;
      font-size: 55px;
      font-weight: 300;
      & span {
      }
    }
    & div:nth-child(1) {
      animation-delay: 0.25s;
      & span {
        transform: translate(4%, -15%);
      }
    }
    & div:nth-child(2) {
      animation-delay: 0.5s;
      & span {
        transform: translate(0%, -28%);
      }
    }
    & div:nth-child(4) {
      animation-delay: 0.75s;
      & span {
        transform: translate(-1%, -23%);
      }
    }
    & div:nth-child(3) {
      & span {
        transform: rotate(-45deg) translate(2%, -15%);
      }
      animation-delay: 1s;
    }
  }

  &__text {
    font-size: 55px;
    max-width: 730px;
    text-align: center;
  }
}
@keyframes load {
  0% {
    background: #ebecef;
  }
  25% {
    background: #569bfa;
    fill: #fff;
  }
  50% {
    background: #ebecef;
  }
  100% {
  }
}
@media (max-width: 575.98px) {
  .load-results {
    padding: 45px 0 150px;
    &__text {
      font-size: 30px;
      line-height: 115.5%;
      text-transform: uppercase;
      order: 1;
      font-weight: 700;
      margin-bottom: 30px;
    }
    &__screen {
      margin-bottom: unset;
      order: 2;
      width: 90px;
      & div {
        width: 28px;
        height: 28px;
        border-radius: 5px;
        margin: 2.5px;
        & span {
        }
      }
      & div:nth-child(1) {
        & span {
          transform: translate(4%, -8%) scale(0.5);
        }
      }
      & div:nth-child(2) {
        & span {
          transform: translate(-1%, -15%) scale(0.5);
        }
      }
      & div:nth-child(3) {
        & span {
          transform: rotate(-45deg) translate(4%, -7%) scale(0.5);
        }
      }
      & div:nth-child(4) {
        & span {
          transform: translate(-1%, -12%) scale(0.5);
        }
      }
    }
  }
}
</style>