<template>
  <div class="order-detail__wrap">
    <div class="order-detail__not-pay-wrap">
      <h2 class="order-detail__not-pay-title">待支付</h2>
      <p class="order-detail__last-time-wrap">请在<span class="order-detail__last-time">22时8分41秒</span>支付，超时订单将会自动取消</p>
    </div>
    <div class="order-detail__transport-wrap">
      <div class="order-detail__transport">
        <span class="order-detail__transport-key">收 件 人 ：</span>
        <div class="order-detail__transport-people">
          <div class="order-detail__transport-name">
            <span>小黄人</span>
            <span>18395898759</span>
          </div>
          <div>广东省 深圳市 南山区 南头街道(518052)</div>
        </div>
      </div>
      <div class="order-detail__transport">
        <span class="order-detail__transport-key">配送方式： </span>
        <span class="order-detail__transport-val">商家配送</span>
      </div>
    </div>
    <div class="order-detail__message">
      <i class="order-detail__message-icon iconfont icon-message"></i>
      <p class="order-detail__message-content">客户留言</p>
    </div>
    <div class="order-detail__goods-msg">
      <div class="order-detail__goods-title border-b">
        <i class="order-detail__goods-title-icon iconfont icon-qingdan"></i>
        <p class="order-detail__goods-title-content">购物清单</p>
      </div>
      <div class="order-detail__goods-list-wrap">
        <ul class="order-detail__goods-list">
          <li class="order-detail__goods-li border-b">
            <div class="order-detail__goods-img-wrap">
              <img src="//shopimg.weimob.com/55562123/Goods/1607011352406664.jpg@0e_320w_320h_0c_0i_0o_90Q_1x.src" alt="" class="order-detail__goods-img">
            </div>
            <div class="order-detail__goods-detail">
              <div class="order-detail__goods-detail-top">
                <div class="order-detail__goods-detail-title">【南国食品】榴莲糖82gX5</div>
                <span class="order-detail__goods-detail-price">￥19.90</span>
              </div>
              <div class="order-detail__goods-detail-num">数量1</div>
            </div>
          </li>
          <li class="order-detail__goods-li border-b">
            <div class="order-detail__goods-img-wrap">
              <img src="//shopimg.weimob.com/55562123/Goods/1607011352406664.jpg@0e_320w_320h_0c_0i_0o_90Q_1x.src" alt="" class="order-detail__goods-img">
            </div>
            <div class="order-detail__goods-detail">
              <div class="order-detail__goods-detail-top">
                <div class="order-detail__goods-detail-title">【南国食品】榴莲糖82gX5</div>
                <span class="order-detail__goods-detail-price">￥19.90</span>
              </div>
              <div class="order-detail__goods-detail-num">数量1</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="order-detail__state">
        <div class="order-detail__state-item">
          <span class="order-detail__state-key">商品总额</span>
          <span class="order-detail__state-val">￥42.80</span>
        </div>
        <div class="order-detail__state-item">
          <span class="order-detail__state-key">运费</span>
          <span class="order-detail__state-val">￥10.00</span>
        </div>
        <div class="order-detail__state-item">
          <span class="order-detail__state-key">实付款(含运费)</span>
          <span class="order-detail__state-val order-detail__state-count">￥52.80</span>
        </div>
      </div>
    </div>
    <div class="order-detail__contact">
      <button class="order-detail__contact-btn">联系客服</button>
    </div>
    <div class="order-detail__order-msg">
      <p class="order-detail__order-id">订单编号：6710958136358570832</p>
      <p class="order-detail__order-time">创建时间：2017-07-22 20:18:20</p>
    </div>
    <div class="order-detail__operation-wrap">
      <button class="order-detail__operation-btn">取消订单</button>
      <button class="order-detail__operation-btn">去支付</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'orderDetail'
  }
</script>
<style lang="less">
  .order-detail__wrap {
    padding-bottom: 70px;
    min-height: 100vh;
    background-color: #f1f1f1;
  }
  .order-detail__not-pay-wrap {
    height: 110px;
    background-color: #3dd3b6;
    background-image: url(./order-detail-1.png);
    background-size: 86px auto;
    padding: 0 100px 0 20px;
    border-right: 20px solid transparent;
    margin-right: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-repeat: no-repeat;
    background-position: right center;
    color: #fff;
  }
  .order-detail__not-pay-title {
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;
  }
  .order-detail__last-time-wrap {
    font-size: 12px;
  }
  .order-detail__transport-wrap {
    margin-top: 10px;
    background-color: #fff;
    padding: 10px 15px;
    line-height: 22px;
  }
  .order-detail__transport {
    display: flex;
    padding: 5px 0;
    font-size: 14px;
    line-height: 22px;
  }
  .order-detail__transport-key {
    min-width: 75px;
    text-align:justify;
  }
  .order-detail__transport-val {
    flex: 1;
  }
  .order-detail__transport-people {
    flex: 1;
  }
  .order-detail__transport-name {
    display: flex;
    justify-content: space-between;
  }
  .order-detail__message {
    display: flex;
    margin-top: 10px;
    padding: 0 10px 0 10px;
    line-height: 40px;
    background-color: #fff;
  }
  .order-detail__message-content {
    line-height: 18px;
    padding: 11px 0;
    font-size: 13px;
    flex: 1;
  }
  .order-detail__message-icon {
    width: 27px;
    font-size: 16px;
  }
  .order-detail__goods-msg {
    background-color: #fff;
  }
  .order-detail__goods-title {
    display: flex;
    margin-top: 10px;
    line-height: 40px;
    height: 40px;
    padding: 0 10px;
    font-size: 14px;
    background-color: #fff;
  }
  .order-detail__goods-title-icon {
    width: 27px;
  }
  .order-detail__goods-li {
    display: flex;
    padding: 10px;

  }
  .order-detail__goods-img-wrap {
    width: 65px;
    height: 65px;
  }
  .order-detail__goods-img {
    width: 100%;
    height: auto;
  }
  .order-detail__goods-detail {
    margin-left: 10px;
    flex: 1;
    height: 65px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #434a54;
    font-size: 13px;
  }
  .order-detail__goods-detail-top {
    display: flex;
    justify-content: space-between;
  }
  .order-detail__goods-detail-num {
    color: #666;
  }
  .order-detail__state {
    padding: 3px 10px;
    font-size: 12px;
    line-height: 18px;
    color: 1a1a1a;
  }
  .order-detail__state-item {
    display: flex;
    justify-content: space-between;
    padding: 3px 0;
  }
  .order-detail__state-count {
    font-size: 14px;
    color: #ff2e45;
  }
  .order-detail__contact {
    margin-top: 10px;
    padding: 10px 0;
    background-color: #fff;
    text-align: center;
  }
  .order-detail__contact-btn {
    width: 81.25%;
    margin: auto;
    height: 35px;
    font-size: 14px;
    line-height: 35px;
    border-radius: 5px;
    border: 1px solid #666;
    text-align: center;
    background-color: #fff;
    -webkit-tap-highlight-color: rgba(0,0,0,0.15);
  }
  .order-detail__order-msg {
    margin-top: 10px;
    padding: 8px 10px;
    line-height: 22px;
    font-size: 13px;
    color: #666;
    background-color: #fff;
  }
  .order-detail__operation-wrap {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 10px 5px 15px;
    overflow-x: auto;
    background-color: #fff;
  }
  .order-detail__operation-btn {
    height: 35px;
    width: 90px;
    text-align: center;
    line-height: 35px;
    border-radius: 4px;
    border: 1px solid #666;
    padding: 0 8px;
    margin: 0 5px;
    -webkit-tap-highlight-color: rgba(0,0,0,0.15);
    white-space: nowrap;
    color: #666;
    background-color: #fff;
  }



















</style>
