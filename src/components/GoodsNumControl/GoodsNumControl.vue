<template>
  <div class="goods-num__control">
    <div class="goods-num__decrease iconfont icon-icondecrease" :class="{disable: !enableDecrease}" @click="clickDecrease"></div>
    <input type="text" class="goods-num__input" v-model="buyNum">
    <div class="goods-num__increase iconfont icon-add2" :class="{disable: !enableIncrease}" @click="clickIncrease"></div>
  </div>
</template>
<script>
  export default {
    name: 'goodsNumControl',
    props: {
      repertoryNum: {
        type: [Number, String],
        default: 1
      }
    },
    data () {
      return {
        buyNum: 1
      }
    },
    computed: {
      enableDecrease () {
        return this.buyNum > 1
      },
      enableIncrease () {
        return this.buyNum < this.repertoryNum
      }
    },
    methods: {
      clickIncrease () {
        if(this.enableIncrease) {
          this.buyNum = this.buyNum + 1
          this.updateBuyNum()
        }
      },
      clickDecrease () {
        if(this.enableDecrease) {
          this.buyNum = this.buyNum - 1;
          this.updateBuyNum()
        }
      },
      updateBuyNum () {
        this.$emit('updateBuyNum', this.buyNum)
      }
    },
    mounted () {
      this.updateBuyNum()
    }
  }
</script>
<style lang="less">
  .goods-num__control {
    font-size: 0;
    &:after {
      background-color: #ced3d7;
    }
  }
  .disable {
    opacity: .5;
  }
  .goods-num__decrease,
  .goods-num__increase,
  .goods-num__input {
        display: inline-block;
        vertical-align: top;
        height: 35px;
        font-size: 13px;
        line-height: 35px;
        text-align: center;
  }
  .goods-num__decrease,
  .goods-num__increase {
    width: 35px;
    text-align: center;
  }
  .goods-num__decrease {
    border: 1px solid #999;
    border-width: 1px 0 1px 1px;
    border-radius: 3px 0 0 3px;
    color: #999;
  }
  .goods-num__increase {
    border: 1px solid #999;
    border-width: 1px 1px 1px 0;
    border-radius: 0 3px 3px 0;
    color: #999;
  }
  .goods-num__input {
    width: 43px;
    background: #fff;
    border: 1px solid #999;
    line-height: 31px;
  }
  .goods-num__input--disable {
    opacity: .2;
  }







</style>
