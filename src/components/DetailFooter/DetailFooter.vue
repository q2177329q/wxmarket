<template>
  <div class="detail__footer-wrap">
    <button class="df__cart iconfont icon-cart1"></button>
    <button class="df__mine iconfont icon-seeusero"></button>
    <button class="df__add-cart">加入购物车</button>
    <button class="df__buy-now">立即购买</button>
  </div>
</template>
<script>
  export default {
    name: 'detailfooter'
  }
</script>
<style lang="less">
  .detail__footer-wrap {
    position: fixed;
    display: flex;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    padding: 8px 2%;
    background: #f5f5f5;
    text-align: center;
    z-index: 100;
    border-top: 1px solid #dedede;
  }
  .df__cart,
  .df__mine {
    display: inline-block;
    width: 44px;
    height: 44px;
    border-radius: 3px;
    background-color: #ffffff;
    border: 1px solid #e2e2e2;
    font-size: 20px;
    line-height: 42px;
    color: #646464;
  }
  .df__mine {
    margin-left: 8px;
  }
  .df__add-cart,
  .df__buy-now {
    flex: 1;
    margin-left: 5px;
    font-size: 15px;
    height: 44px;
    line-height: 44px;
    border: none;
    border-radius: 5px;
    text-align: center;
    color: #fff;
  }
  .df__add-cart {
    margin-left: 7px;
    background-color: #ff8522;
  }
  .df__buy-now {
    background-color: #ff2e45;
  }
</style>
