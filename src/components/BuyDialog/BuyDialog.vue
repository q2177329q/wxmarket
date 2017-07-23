<template>
  <div class="buy-dialog__wrap">
    <div class="buy-dialog-mask" @click="clickClose"></div>
    <div class="buy-dialog border-t">
      <div class="buy-dialog__detail-wrap border-b">
        <div class="buy-dialog__detail-img-wrap"><img src="../../assets/goods.png" alt="" class="buy-dialog__img"></div>
        <div class="buy-dialog__detail">
          <p class="buy-dialog__detail-price">￥{{goodsMsg.price}}</p>
          <p class="buy-dialog__repetory">库存{{goodsMsg.repertoryNum}}件</p>
          <p class="buy-dialog__unit">请选择 箱</p>
        </div>
      </div>
      <!-- <div class="buy-dialog__unit-wrap border-b">
        <p class="buy-dialog__unit">箱</p>
        <div class="buy-dialog__unit-list-wrap">
          <ul class="buy-dialog__unit-list">
            <li class="buy-dialog__unit-li">A款-成人款</li>
            <li class="buy-dialog__unit-li">A款-儿童款</li>
          </ul>
        </div>
      </div> -->
      <div class="buy-dialog__num-wrap border-b">
        <p class="buy-dialog__num">数量</p>
        <div class="buy-dialog__num-control-wrap">
          <goods-num-control
            repertory-num="goodsMsg.repertoryNum"
            @updateBuyNum="updateBuyNum"></goods-num-control>
        </div>
      </div>

      <div class="buy-dialog__close" @click="clickClose"></div>
    </div>
    <div class="buy-dialog__control">
      <button class="buy-dialog__control-add" @click="clickAddCart">加入购物车</button>
      <button class="buy-dialog__control-buy" @click="clickBuyNow">立即购买</button>
    </div>
  </div>
</template>
<script>
  import GoodsNumControl from '@/components/GoodsNumControl/GoodsNumControl.vue'
  export default {
    name: 'buyDialog',
    components: {
      GoodsNumControl
    },
    data () {
      return {
        buyNum: 1,
        goodsMsg: {
          repertoryNum: 0,
          price: '0.00',
          img: 'none'
        }
      }
    },
    computed: {
      enableDecrease () {
        return this.buyNum > 1
      },
      enableIncrease () {
        return this.buyNum < this.goodsMsg.repertoryNum
      }
    },
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      updateBuyNum (buyNum) {
        this.buyNum = buyNum
      },
      addCartEvent (data) {
        console.log(data)
        this.$el.style.display = 'block'
        this.goodsMsg = data
      },
      clickAddCart () {
        this.$el.style.display = 'none'
      },
      clickBuyNow () {
        this.$el.style.display = 'none'
        this.$router.push('/createOrder')
      },
      clickClose () {
        this.$el.style.display = 'none'
      }

    },
    mounted () {
      console.log('on')
      this.eventHub.$on('eventHub__many__addCart',  this.addCartEvent)
    },
    beforeDestroy () {
      this.eventHub.$off('eventHub__many__addCart',  this.addCartEvent)
    }
  }
</script>
<style lang="less" scoped>
  .buy-dialog__wrap {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      display: none;
  }
  .buy-dialog-mask {
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);

  }
  .buy-dialog {
    position: fixed;
    box-sizing: border-box;
    bottom: 0;
    padding: 0 3% 61px;
    width: 100%;

    max-width: 640px;
    background: #fff;
    z-index: 1003;
    border-width: 1px 0 0;
  }
  .buy-dialog__detail-wrap {
    padding-bottom: 10px;
    &:after {
      background-color: #ced3d7;
    }
  }
  .buy-dialog__detail-img-wrap {
    position: relative;
    width: 113px;
    margin-right: 15px;
    height: 88px;
    border: 1px solid #e9e9e9;
  }
  .buy-dialog__img {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: auto;
  }
  .buy-dialog__detail {
    flex: 1;
    padding-top: 20px;
  }
  .buy-dialog__detail p {
    font-size: 12px;
    color: #1a1a1a;
    line-height: 14px;
    padding: 2px 0;
  }
  .buy-dialog__detail .buy-dialog__detail-price {
    font-size: 13px;
    color: #ff2e45;
  }
  .buy-dialog__unit-wrap {
    padding: 5px 12px 10px;
    &:after {
      background-color: #ced3d7;
    }
  }
  .buy-dialog__unit {
    color: #1a1a1a;
    font-size: 14px;
    line-height: 30px;
  }
  .buy-dialog__unit-li {
    display: inline-block;
    box-sizing: border-box;
    height: 30px;
    line-height: 30px;
    margin: 5px 10px 5px 0;
    color: #1a1a1a;
    background-color: #fff;
    color: #666;
    font-size: 12px;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    padding: 0 10px;
  }
  .buy-dialog__unit-li--active {
    color: #fff;
    background-color: #ff2e45;
    border-color: #ff2e45;
  }
  .buy-dialog__unit-li--disable {
    color: #e0e3e6;
    background-color: #fff;
    border-color: #e0e3e6;
  }

  .buy-dialog__num-wrap {
    display: flex;
    margin-bottom: 6px;
  }
  .buy-dialog__num {
    padding: 13px 0 13px 13px;
    font-size: 14px;
    line-height: 35px;
  }
  .buy-dialog__num-control-wrap {
    flex: 1;
    padding: 13px 0 13px 13px;
    text-align: right;
  }
  .disable {
    opacity: .5;
  }

  .buy-dialog__control {
    z-index: 1004;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #f5f5f5;
    padding: 8px 0;
    font-size: 0;
    text-align: center;
  }
  .buy-dialog__control-add,
  .buy-dialog__control-buy {
    margin: 0 1%;
    width: auto;
    font-size: 14px;
    height: 44px;
    line-height: 44px;
    width: 46%;
    background: #ff2e45;
    border-radius: 5px;
    color: #fff;
    border: none;
  }
  .buy-dialog__control-add {
    background-color: #ff8522;
  }
  .buy-dialog__close {
    position: absolute;
    right: 16px;
    top: 11px;
    width: 18px;
    height: 18px;
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






</style>  

