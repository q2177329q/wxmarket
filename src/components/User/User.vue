<template>
  <div class="user__wrap">
    <div class="user__header-wrap">
      <div class="user__header">
        <div class="user__portrait-wrap">
          <img src="//shopimg.weimob.com/default/res/usercenter_head.jpg" alt="" class="user__portrait">
        </div>
        <p class="user__name">小黄人</p>
      </div>
    </div>
    <div class="user__all-order">
      <p class="user__all-order-title">
        <i class="user__all-order-title-icon"></i>
        全部订单
      </p>
      <button class="user__see-all-order">
        <i class="user__see-all-order-icon"></i>
        查看全部订单
      </button>
    </div>
    <div class="order__classify">
      <ul class="order__classify-list border-t">
        <li class="order__classify-li">
          <i class="order__classify-icon iconfont icon-daizhifu"></i>
            待支付
        </li>
        <li class="order__classify-li">
          <i class="order__classify-icon iconfont icon-daifahuo1"></i>
            待发货
        </li>
        <li class="order__classify-li">
          <i class="order__classify-icon iconfont icon-daishouhuo"></i>
            待收货
        </li>
        <li class="order__classify-li">
          <i class="order__classify-icon iconfont icon-daipingjia"></i>
            待评价
        </li>
        <li class="order__classify-li">
          <i class="order__classify-icon iconfont icon-mweiquanguanli"></i>
            维权
        </li>
      </ul>
    </div>
    <div class="order__operation border-t border-b">
      <ul class="operation__list">
        <li class="operation__li">
          <a href="" class="operation__link border-b">
            <i class="operation__icon iconfont icon-shoucang"></i>
              我的收藏
            <i class="operation__to-icon"></i>
          </a>
        </li>
        <li class="operation__li">
          <a href="" class="operation__link border-b">
            <i class="operation__icon iconfont icon-cart1"></i>
              我的购物车
            <i class="operation__to-icon"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'user'
  }
</script>
<style lang="less">

  .user__wrap {
    min-height: 100vh;
    background-color: #f1f0f5;
  }
  .user__header-wrap {
    background-color: #fff;
  }
  .user__header {
    height: 116px;
    background-color: #fff;
    background-image: linear-gradient(65deg, #ff9b64, #ff5959);
    border-bottom-left-radius: 100000% 40000px;
    border-bottom-right-radius: 100000% 40000px;
  }
  .user__portrait-wrap {
    position: relative;
    width: 100%;
    height: 80px;
    text-align: center;
  }
  .user__portrait {
    box-sizing: border-box;
    border-radius: 50%;
    width: 72px;
    height: 72px;
    border: 3px solid #ffa79d;
    margin-top: 10px;
  }
  .user__name {
    padding: 8px 0;
    font-size: 15px;
    line-height: 20px;
    color: #FFFFFF;
    text-align: center;
  }
  .user__all-order {
    background: #fff;
    position: relative;
    padding: 12px 15px 0;
    font-size: 15px;
    line-height: 44px;
    display: flex;
  }
  .user__all-order-title {
    padding-left: 22px;
    color: #1a1a1a;;
  }
  .user__see-all-order {
    flex: 1;
    padding-right: 11px;
    font-size: 15px;
    color: #666;
    border: none;
    background: #fff;
    text-align: right;
  }
  .order__classify-list {
    background-color: #fff;
  }
  .order__classify-list {
    display: flex;
  }
  .order__classify-li {
    position: relative;
    flex: 1;
    padding-top: 38px;
    padding-bottom: 10px;
    text-align: center;
    color: #666666;
    font-size: 13px;
    line-height: 18px;
    // border-top: 1px solid #dedede;
  }
  .order__classify-icon {
    position: absolute;
    top: 6px;
    left: 50%;
    width: 30px;
    height: 30px;
    font-size: 19px;
    line-height: 30px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  .order__operation {
    margin-top: 11px;
    background-color: #fff;
    // border-top: 1px solid #dedede;
    // border-bottom: 1px solid #dedede;
  }
  .operation__list {
    position: relative;
    padding: 2px 0 0 15px;
  }
  .operation__link {
    display: block;
    height: 44px;
    padding-right: 26px;
    padding-left: 22px;
    // border-bottom: 1px solid #dedede;
    font-size: 15px;
    color: #1a1a1a;
    line-height: 44px;
    &:last-child {
      border: none;
    }
  }
  .operation__icon {
    position: absolute;
    left: 0;
    width: 22px;
    font-size: 16px;
    line-height: 44px;
    text-align: left;
    color: #999;
  }
















</style>
