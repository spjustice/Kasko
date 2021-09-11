<template>
  <div class="load-auto">
    <div class="progress-bar">
      <p class="progress-bar__title">Оформление каско</p>
      <div class="progress-bar__line">
        <span class="progress-bar__line-next-step"></span>
        <span class="progress-bar__line-this-step"></span>
      </div>
      <div class="progress-bar__text">
        <span class="progress-bar__step">Шаг 1/4</span>
        <span class="progress-bar__descr">Ищем ваш авто...</span>
      </div>
    </div>
    <!-- <div class="circle-loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div> -->
    <div class="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <p class="load-auto__text">Ищем ваш авто</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.progress-bar {
  text-align: left;
  display: none;
}
.progress-bar__line-next-step {
  width: 25%;
}
.progress-bar__line-this-step {
  width: 2%;
}
.load-auto {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* transform: translate(-65%, -83%); */
  overflow: visible;
  width: 100%;
}
.load-auto__text {
  flex: 0 0 auto;
  /* transform: translate(15%, 150%); */
  font-size: 55px;
}

.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  transform: scale(2);
  margin-bottom: 40px;
}

.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  /* background: #fff; */
  background-color: #03a9f4;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 575.98px) {
  .progress-bar {
    display: block;
    /* top: -19px; */
  }
  .lds-roller {
    transform: scale(1.5);
    order: 2;
    margin-bottom: unset;
    margin-top: 40px;
  }
  .load-auto {
    position: static;
    transform: none;
    padding-top: 70px;
    top: 100px;
  }
  .load-auto__text {
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .banner {
    min-height: 400px;
  }
}
</style>