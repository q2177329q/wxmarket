<template>
  <div class="cart__wrap">
    <div class="cart__header">
      <span class="cart__header-select-all">
        <i class="cart__header-select-all-icon iconfont icon-select1"></i>
        全选
      </span>
      <span class="cart__header-delete iconfont icon-garbage"></span>
    </div>
    <ul class="cart__item-list">
      <li class="cart__item-li">
        <div class="cart__item-wrap">
          <i class="cart__item-select-icon iconfont icon-select1"></i>
          <div class="cart__item-img-wrap">
            <img src="../../assets/goods.png" alt="" class="cart__item-img">
          </div>
          <div class="cart__item-detail-wrap">
            <p class="cart__item-title">【南国食品】零食组合140g</p>
            <p class="cart__item-price">￥9.90</p>
            <div class="cart__item-num-control-wrap">
              <goods-num-control
                repertory-num="4"
                @updateBuyNum="updateBuyNum"></goods-num-control>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <cart-footer 
      :total-price="totalPrice"></cart-footer>
  </div>
  
</template>
<script>
  import GoodsNumControl from '@/components/GoodsNumControl/GoodsNumControl.vue'
  import CartFooter from '@/components/Cart/CartFooter.vue'
  export default {
    name: 'cart',
    components: {
      GoodsNumControl,
      CartFooter
    },
    data () {
      return {
        totalPrice: 0
      }
    },
    methods: {
      updateBuyNum (buyNum) {
        this.totalPrice = buyNum * 9.90
        console.log(this.totalprice)
      }
    }
  }
</script>
<style lang="less">
  .cart__wrap {
    min-height: 100%;
    min-height: 100vh;
    background-color: rgb(241, 241, 241);

  }
  .cart__header {
    padding: 0 10px;
  }
  .cart__header-select-all {
    position: relative;
    display: inline-block;
    padding-left: 40px;
    font-size: 13px;
    line-height: 40px;
    color: #4a4a4a;
  }
  .cart__header-select-all-icon {
    position: absolute;
    left: 0;
    top: 10px;
    width: 19px;
    height: 19px;
    line-height: 20px;
    font-size: 19px;
    text-align: center;
    color: #ed6c76;
  }
  .cart__header-delete {
    position: absolute;
    right: 16px;
    top: 0;
    font-size: 19px;
    line-height: 40px;
    color: #4a4a4a;
  }

  .cart__item-li {
    margin-bottom: 10px;
    padding: 0 10px;
    background-color: #fff;
  }
  .cart__item-wrap {
    display: flex;
    padding-left: 30px;
    position: relative;
  }
  .cart__item-select-icon {
    position: absolute;
    left: 0;
    top: 0px;
    bottom: 0;
    margin: auto;
    width: 19px;
    height: 19px;
    line-height: 20px;
    font-size: 19px;
    text-align: center;
    color: #ed6c76;
  }
  .cart__item-img-wrap {
    padding: 14px 7px 5px;
  }
  .cart__item-img {
    display: block;
    width: 80px;
    height: auto;
  }
  .cart__item-detail-wrap {
    flex: 1;
    vertical-align: top;
    padding: 12px 7px;
  }
  .cart__item-title,
  .cart__item-price {
    padding: 3px 0;
    font-size: 12px;
    color: #4a4a4a;
  }
  .cart__item-price {
    font-size: 13px;
    color: #ff5366;
  }
  .cart__item-num-control-wrap {
    margin-top: 12px;
  }
























</style>
