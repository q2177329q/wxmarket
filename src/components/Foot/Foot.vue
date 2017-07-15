<template>
  <footer class="footer">
    <ul class="footer__list">
      <li class="footer__li">
        <a href="" class="footer__link">
          <i class="fa fa-home footer__link-icon"></i>
          <span class="footer__link-text">首页</span></a>
      </li>
      <li class="footer__li">
        <a href="" class="footer__link">
          <i class="fa fa-th-large footer__link-icon"></i>
          <span class="footer__link-text">所有商品</span></a>
      </li>
      <li class="footer__li">
        <a href="" class="footer__link">
          <i class="fa fa-shopping-cart footer__link-icon"></i>
          <span class="footer__link-text">购物车</span></a>
      </li>
      <li class="footer__li">
        <a href="" class="footer__link">
          <i class="fa fa-file footer__link-icon"></i>
          <span class="footer__link-text">我的订单</span></a>
      </li>
    </ul>
  </footer>
</template>
<script>
  export default {
    name: 'foot'
  }

</script>
<style lang="less">
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
  }
  .footer__list {
    display: flex;
  }
  .footer__li {
    flex: 1;
    padding-top: 6px;
  }
  .footer__link {
    display: block;
    color: #999999;
    text-align: center;
  }
  .footer__link-icon {
    display: block;
    font-size: 20px;
    line-height: 20px;
    height: 24px;
    text-align: center;
    vertical-align: top;
  }
  .footer__link-text {
    display: block;
    font-size: 12px;
    line-height: 20px;
  }
</style>
