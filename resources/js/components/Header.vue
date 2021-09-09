<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <a href="" class="logo">
          <img src="images/logo.png" alt="" />
        </a>
        <nav class="menu">
          <ul class="menu__list">
            <li class="menu__item">
              <a href="" class="menu__link">КАСКО</a>
            </li>
            <li class="menu__item">
              <a href="" class="menu__link">КБМ И ОСАГО</a>
            </li>
            <li class="menu__item">
              <a href="" class="menu__link">СТРАХОВОЙ СЛУЧАЙ</a>
            </li>
            <li class="menu__item">
              <a href="" class="menu__link">КОНТАКТЫ</a>
            </li>
          </ul>
          <p class="menu__rights">© 2012-2021 Все права защищены</p>
        </nav>
        <div class="header__contacts">
          <a href="" class="header__phone-num">+7 495 626-23-53</a>
        </div>
        <button
          type="button"
          class="burger-btn"
          @click="isBurgerActive = !isBurgerActive"
          :class="{
            active: isBurgerActive,
          }"
        >
            <nav class="menu burger">
                <ul class="menu__list">
                    <li class="menu__item">
                        <a href="" class="menu__link">КАСКО</a>
                    </li>
                    <li class="menu__item">
                        <a href="" class="menu__link">КБМ И ОСАГО</a>
                    </li>
                    <li class="menu__item">
                        <a href="" class="menu__link">СТРАХОВОЙ СЛУЧАЙ</a>
                    </li>
                    <li class="menu__item">
                        <a href="" class="menu__link">КОНТАКТЫ</a>
                    </li>
                </ul>
                <p class="menu__rights">© 2012-2021 Все права защищены</p>
            </nav>
          <span class="icon-burger">
            <svg
              width="27"
              height="20"
              viewBox="0 0 27 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H26"
                stroke="#2E2B2B"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M1 10H26"
                stroke="#2E2B2B"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M1 19H26"
                stroke="#2E2B2B"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </span>
          <span class="icon-close">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.7071 1.70711C24.0976 1.31658 24.0976 0.683418 23.7071 0.292894C23.3166 -0.0976306 22.6834 -0.0976306 22.2929 0.292894L12 10.5858L1.70711 0.292894C1.31658 -0.0976296 0.683416 -0.0976295 0.292892 0.292894C-0.0976321 0.683418 -0.097632 1.31658 0.292892 1.70711L10.5858 12L0.292893 22.2929C-0.0976311 22.6834 -0.0976311 23.3166 0.292893 23.7071C0.683417 24.0976 1.31658 24.0976 1.70711 23.7071L12 13.4142L22.2929 23.7071C22.6834 24.0976 23.3166 24.0976 23.7071 23.7071C24.0976 23.3166 24.0976 22.6834 23.7071 22.2929L13.4142 12L23.7071 1.70711Z"
                fill="#2E2B2B"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isBurgerActive: false,
    };
  },
};
</script>

<style>
</style>
