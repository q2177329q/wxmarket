<template>
  <div class="order-list__wrap">
    <div class="order-list">
      <li class="order-list__li" v-for="order in orderList">
        <div class="order-list__time border-b">下单时间：{{order.orderTime}}<span class="order-list__price">￥{{order.totalPrice}}</span></div>
        <div class="order-list__goods-list-wrap">
          <ul class="order-list__goods-list" @click="goToOrderDetail">
            <li class="order-list__goods-item border-t" v-for="goods in order.goodsList">
              <div class="order-list__goods-img-wrap">
                <img :src="goods.img" alt="" class="order-list__goods-img">
              </div>
              <div class="order-list__goods-detail">
                <p class="order-list__goods-title">{{goods.name}}</p>
                <p class="order-list__goods-price">￥{{goods.price}}</p>
                <p class="order-list__goods-num">数量{{goods.num}}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="order-list__operation-wrap">
          <span class="order-list__state">代支付</span>
          <span class="order-list__operation">支付</span>
        </div>
      </li>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'OrderList',
    data () {
      return {
        orderList: [{
            totalPrice: 19.90,
            orderTime: '2017-07-22 20:13:43',
            goodsList: [
              {
                img: '//shopimg.weimob.com/55562123/Goods/1607011352406664.jpg@0e_320w_320h_0c_0i_0o_90Q_1x.src',
                name: '【南国食品】榴莲糖82gX5',
                price: '9.90',
                num: 1
              },
              {
                img: '//shopimg.weimob.com/55562123/Goods/1607011352406664.jpg@0e_320w_320h_0c_0i_0o_90Q_1x.src',
                name: '【南国食品】榴莲糖82gX5',
                price: '9.90',
                num: 1
              }
            ]
          },
          {
            totalPrice: 19.90,
            orderTime: '2017-07-22 20:13:43',
            goodsList: [
              {
                img: '//shopimg.weimob.com/55562123/Goods/1607011352406664.jpg@0e_320w_320h_0c_0i_0o_90Q_1x.src',
                name: '【南国食品】榴莲糖82gX5',
                price: '9.90',
                num: 1
              },
              {
                img: '//shopimg.weimob.com/55562123/Goods/1607011352406664.jpg@0e_320w_320h_0c_0i_0o_90Q_1x.src',
                name: '【南国食品】榴莲糖82gX5',
                price: '9.90',
                num: 1
              }
            ]
          }]
      }
    },
    methods: {
      goToOrderDetail () {
        this.$router.push('/order/detail')
      }
    }
  }
</script>
<style lang="less">
    li {
      list-style: none;
    }
    .order-list__wrap {
      font-size: 14px;
      min-height: 100vh;
      background-color: #f1f1f1;
    }
    .order-list__li {
      width: 100%;
      padding-top: 5px;
      margin-bottom: 12px;
      background: #fff;
    }
    .order-list__time {
      line-height: 28px;
      padding: 0 12px;
      color: #878a8d;
    }
    .order-list__price {
      float: right;
      color: #ff5366;
    }
    .order-list__goods-list {
      padding: 0 14px;
    }

    .order-list__goods-item {
      display: flex;
      width: 100%;
      height: 112px;
      padding: 15px 5px;
      position: relative;
      &:first-of-type:before {
        display: none;
      }
    }
    .order-list__goods-img-wrap {
      width: 82px;
      height: 82px;

    }
    .order-list__goods-img {
      display: block;
      width: 100%;
      height: auto;
    }
    .order-list__goods-detail {
      flex: 1;
      padding: 0 0px 0 18px;
      font-size: 12px;
      line-height: 22px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .order-list__goods-title {
      vertical-align: middle;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 18px;
      min-height: 30px;
      color: #4a4a4a;
      word-break: break-all;
    }
    .order-list__goods-price {
      vertical-align: middle;
       color: #ff5366;
       font-size: 12px;
       font-weight: bold;

    }
    .order-list__goods-num {
      font-size: 12px;
      line-height: 22px;
      color: #c7c7c7;
    }
    .order-list__operation-wrap {
      position: relative;
      height: 45px;
      width: 100%;
      background: #eaedf4;
    }
    .order-list__state {
      padding: 0 0 0 10px;
      float: left;
      line-height: 47px;
      font-size: 13px;
      display: inline-block;
      color: #878a8d;
    }
    .order-list__operation {
      position: absolute;
      right: 5px;
      top: 7px;
      width: 62px;
      font-size: 13px;
      border: 1px solid #ff5366;
      color: #ff5366;
      height: 30px;
      line-height: 30px;
      border-radius: 5px;
      text-align: center;
    }






</style>

