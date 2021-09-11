<template>
  <div
    class="input__box"
    @focus="handleOnClick"
    :class="{
      active: isActive,
    }"
  >
    <p class="input__text">Если есть</p>
    <input type="text" @on="handlers" class="input" />
    <p class="input__label">Ввести номер машины</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      handlers: {
        focus: this.toggleLabel,
        blur: this.toggleLabel,
      },
    };
  },
  methods: {
    toggleLabel() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss">
.input {
  height: 100%;
  width: 100%;
  font-size: 16px;
  padding: 20px 23px;
  &__box {
    width: 291px;
    height: 60px;
    position: relative;
    display: flex;
    background: #ffffff;
    border: 1px solid #fff;
    border-radius: 4px;
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
    .icon-add {
      margin-right: 14px;
    }
    &.active {
      .input__label {
        transform: translate(-10px, -18px) scale(0.75);
      }
    }
  }

  &__text {
    color: rgba(46, 43, 43, 0.5);
    position: absolute;
    right: 11px;
    top: 5px;
    font-size: 14px;
  }
  &__title {
    font-size: 16px;
    transform: translateY(-2.5px);
  }
  &__label {
    position: absolute;
    left: 23px;
    top: 19px;
  }
}
</style>