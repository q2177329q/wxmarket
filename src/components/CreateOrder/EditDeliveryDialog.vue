<template>
  <div class="edit-delivery__wrap" v-show="show">
    <div class="edit-delivery__mask" @click="closeDialog"></div>
    <div class="edit-delivery__content">
      <div class="edit-delivery__header">
        编辑收获地址
        <i class="edit-delivery__close-icon" @click="closeDialog"></i>
      </div>
      <div class="edit-delivery__main">
        <form action="javascript:void(0);" class="edit-delivery__form">
          <ul class="edit-delivery__list">
            <li class="edit-delivery__li">
              <input type="text" class="edit-delivery__input" placeholder="姓名">
            </li>
            <li class="edit-delivery__li">
              <input type="text" class="edit-delivery__input" placeholder="联系电话">
            </li>
            <li class="edit-delivery__li edit-delivery__li--address">
              省、市、区、乡镇/街道
            </li>
            <li class="edit-delivery__li edit-delivery__li--full-address">
              <input type="text" class="edit-delivery__input" placeholder="详细地址">
              <i class="edit-delivery__full-address-icon iconfont icon-address"></i>
            </li>
            <li class="edit-delivery__li">
              <input type="text" class="edit-delivery__input" placeholder="邮政编码(选填)">
            </li>
            <li class="edit-delivery__li edit-delivery__li-set-default">
              设为默认收货地址
              <i class="edit-delivery__set-default-icon iconfont icon-select1"></i>
            </li>
          </ul>
          <div class="edit-delivery__save-btn-wrap">
            <button class="edit-delivery__save-btn">保存</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'editDeliveryDialog',
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      closeDialog () {

        this.$emit('update:show', false)
      }
    }
  }
</script>
<style lang="less">
  .edit-delivery__mask {
    z-index: 9;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.5);
  }
  .edit-delivery__content {
    z-index: 10;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #eee;
    width: 100%;
    padding-bottom: 100px;
  }
  .edit-delivery__header {
    position: relative;
    width: 100%;
    max-width: 640px;
    background-color: #fff;
    font-size: 15px;
    line-height: 42px;
    text-align: center;
  }
  .edit-delivery__close-icon {
    position: absolute;
    right: 16px;
    top: 12px;
    width: 18px;
    height: 18px;
    transform: scale(.8);
    &:before,
    &:after {
      content: "";
      position: absolute;
      left: -4px;
      top: 8px;
      width: 26px;
      height: 2px;
      background-color: #b8b8b8;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
  .edit-delivery__li {
    padding: 0 15px;
    background-color: #fff;
    line-height: 42px;
  }
  .edit-delivery__input {
    width: 100%;
    height: 30px;

    font-size: 14px;
    padding: 0;
    border: none;
  }
  .edit-delivery__li--address {
    position: relative;
    &:after {
      box-sizing: content-box;
      content: "";
      display: inline-block;
      width: 8px;
      height: 8px;
      border: 2px solid #c3c3c3;
      border-width: 2px 2px 0 0;
      position: absolute;
      top: 50%;
      right: 18px;
      margin-top: -4px;
      -webkit-transform: rotate(45deg);
    }
  }
  .edit-delivery__li--full-address {
    position: relative;
  }
  .edit-delivery__full-address-icon {
    position: absolute;
    right: 13px;
    top: 0;
    font-size: 20px;
    line-height: 42px;
    color: #ff2e45;
  }
  .edit-delivery__li-set-default {
    padding: 10px 8px 15px 10px;
    margin: 10px 0 20px;
    line-height: 21px;
    position: relative;
  }
  .edit-delivery__set-default-icon {
    position: absolute;
    right: 9px;
    top: 0px;
    bottom: 0;
    margin: auto;
    width: 24px;
    height: 24px;
    line-height: 20px;
    font-size: 24px;
    text-align: center;
    color: #ed6c76;
  }
  .edit-delivery__save-btn-wrap {
    margin: 0 30px;
    padding-bottom: 15px;
  }
  .edit-delivery__save-btn {
    display: block;
    padding: 11px 0;
    width: 100%;
    border: 1px solid #ff2e45;
    border-radius: 4px;
    font-size: 16px;
    color: #ff2e45;
    text-align: center;
    background-color: transparent;
    line-height: 21px;
  }


















</style>
