<template>
  <div class="cart__footer-wrap border-t">
    <div class="cart__footer-msg">
      <p class="cart__footer-msg-total">总计<span class="cart__footer-msg-totle-price">￥  {{formatTotalPrice}}</span></p>
      <p class="cart__footer-msg-ps">(共2件，不含运费)</p>
    </div>
    <div class="cart__footer-settle">
      <button class="cart__footer-settle-btn" @click="submit">结算</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'cartFooter',
    props: {
      totalPrice: {
        type: [String, Number],
        default: 0
      }
    },
    computed: {
      formatTotalPrice () {
        return Number.prototype.toFixed.call(this.totalPrice, 2)
      }
    },
    methods: {
      submit () {
        this.$router.push('/createOrder')
      }
    }
  }
</script>
<style lang="less">
  .cart__footer-wrap {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
  }
  .cart__footer-msg {
    height: 50px;
    vertical-align: middle;
    color: #6c6c6c;
    padding: 8px 10px 0;
    flex: 1;
    font-size: 12px;
    line-height: 17px;
    color: #6c6c6c;
  }
  .cart__footer-settle {
    line-height: 50px;
    height: 50px;
    vertical-align: middle;
    color: #6c6c6c;
    padding: 0 10px;
  }
  .cart__footer-settle-btn {
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    height: 33px;
    line-height: 33px;
    width: 100px;
    color: #fff;
    text-align: center;
    background: #ff5366;
    border-radius: 5px;
    border: none;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0,0,0,.35);
  }
  .cart__footer-msg-total {
    font-size: 10px;
    line-height: 17px;
  }
  .cart__footer-msg-totle-price {
    margin-left: 10px;
    font-size: 16px;
    color: #ff5366;
  }









</style>
