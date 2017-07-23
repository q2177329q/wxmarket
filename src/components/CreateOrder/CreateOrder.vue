<template>
  <div class="create-order__wrap">
    <div class="create-order__delivery" @click="showEditDeliveryDialog">请填写收货地址</div>
    <div class="create-order__goods-msg">
      <h2 class="create-order__goods-msg-title">购物清单</h2>
      <div class="create-order__goods-list-wrap">
        <ul class="create-order__goods-list">
          <li class="create-order__goods-li">
            <div class="create-order__goods-img-wrap">
              <img src="../../assets/goods.png" alt="" class="create-order__goods-img">
            </div>
            <div class="create-order__goods-detail">
              <h3 class="create-order__goods-title">【南国食品】零食组合140g</h3>
              <p class="create-order__goods-num">数量2</p>
              <p class="create-order__goods-price">￥9.90</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="create-order__message-wrap">
        <div class="create-order__message border-b">
          <input placeholder="给卖家留言：" type="text" class="create-order__message-input">
        </div>
      </div>
      <div class="create-order__total">
        共<span class="create-order__total-num">2</span>件商品　　　合计：<span class="create-order__total-price">￥9.90</span>
      </div>
    </div>
    <div class="create-order__pay-way-wrap border-t border-b">支付方式
      <span class="create-order__pay-way">在线支付</span>
    </div>
    <div class="create-order__collect border-t border-b">
      <div class="create-order__collect-title">商品金额
        <span class="create-order__collect-val">￥9.90</span>
      </div>
      <div class="create-order__collect-title">运费
        <span class="create-order__collect-val">+￥0.00</span>
      </div>
    </div>
    <div class="create-order__confirm border-t">
      实付：<span class="create-order__confirm-total-price">￥9.90</span>
      <button class="create-order__confirm-submit">提交订单</button>
    </div>
    <edit-delivery-dialog
      :show.sync="isShowEditDeliveryDialog"></edit-delivery-dialog>
  </div>
</template>
<script>
  import editDeliveryDialog from '@/components/CreateOrder/editDeliveryDialog.vue'
  export default {
    name: 'createOrder',
    components: {
      editDeliveryDialog
    },
    data () {
      return {
        isShowEditDeliveryDialog: false
      }
    },
    methods: {
      showEditDeliveryDialog () {
        this.isShowEditDeliveryDialog = true
      }
    }

  }
</script>
<style lang="less">
  html {
    background-color: #f1f1f1;
  }
  .create-order__wrap {
    min-height: 100vh;
    font-size: 14px;
    color: #1a1a1a;
    background-color: #f1f1f1;
  }
  .create-order__delivery {
    margin-bottom: 8px;
    line-height: 40px;
    position: relative;
    text-align: center;
    background-color: #fff;
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
      right: 15px;
      margin-top: -4px;
      transform: rotate(45deg);
    }

  }
  .create-order__goods-msg-title {
    line-height: 43px;
    padding-left: 36px;
    font-weight: 400;
    background-color: #fff;
  }
  .create-order__goods-li {
    display: flex;
    padding: 6px 15px;
    margin-bottom: 3px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .create-order__goods-img-wrap {
    position: relative;
    width: 90px;
    height: 90px;
    margin-right: 10px;
    box-sizing: border-box;
    &:after {
      content: "";
      position: absolute;
      left: -45px;
      top: -45px;
      width: 180px;
      height: 180px;
      border: 1px solid rgba(192, 192, 192, .5);
      transform: scale(.5);
    }
  }
  .create-order__goods-img {
    display: block;
    width: 90px;
    height: 90px;
  }
  .create-order__goods-detail {
    flex: 1;
  }
  .create-order__goods-title {
    font-weight: 400;
    font-size: 14px;
    color: #1a1a1a;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    min-height: 34px;
    line-height: 18px;
  }
  .create-order__goods-num {
    display: block;
    color: #999;
    font-size: 12px;
    line-height: 32px;
    margin-bottom: 4px;
  }
  .create-order__goods-price {
    color: #ff2e45;
    font-size: 14px;
    vertical-align: bottom;
  }
  .create-order__message-wrap {
    background-color: #fff;
  }
  .create-order__message {
    margin: 0 15px;
    border: 1px solid transparent;
    border-width: 0 0 1px 0;
    background: #fff;
    line-height: 43px;
    vertical-align: top;
    position: relative;
  }
  .create-order__message-input {
    border: 0;
    width: 100%;
    height: 30px;
    font-size: 14px;
    line-height: 30px;
  }
  .create-order__total {
    padding: 0 15px;
    line-height: 43px;
    text-align: right;
    background-color: #fff;
  }
  .create-order__total-price {
    color: #ff2e45;
  }
  .create-order__pay-way-wrap {
    line-height: 43px;
    background: #fff;
    padding: 0 15px;
    margin: 10px 0 0 0;
    vertical-align: top;
  }
  .create-order__pay-way {
    float: right;
  }
  .create-order__collect {
    background: #fff;
    padding: 5px 15px;
    margin-top: 10px;
  }
  .create-order__collect-title {
    line-height: 30px;
  }
  .create-order__collect-val {
    float: right;
    color: #ff2e45;
  }
  .create-order__confirm {
    width: 100%;
    position: fixed;
    z-index: 2;
    bottom: 0;
    max-width: 640px;
    height: 60px;
    background: #fff;
    line-height: 60px;
    text-align: right;
    padding-right: 15px;
    font-size: 15px;
  }
  .create-order__confirm-total-price {
    color: #ff2e45;
  }
  .create-order__confirm-submit {
    display: inline-block;
    background: #ff2e45;
    color: #fff;
    height: 43px;
    line-height: 43px;
    width: 100px;
    text-align: center;
    border-radius: 5px;
    margin-left: 10px;
    cursor: pointer;
    border: none;
    font-size: 15px;
  }












</style>
