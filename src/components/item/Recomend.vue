<template>
  <div class="item">
    <div class="item__content">
      <img :src="img" class="item__img" />
      <div class="item__detail">
        <p class="item__desc">{{desc}}</p>
        <div class="item__purchase-wrap">
          <p class="item__price">
            <span class="item__price-small">¥</span>
            <span class="item__price-normal">{{price}}</span>
            <span class="item__price-small">.99</span>
          </p>
          <a :href="url" class="item__purchase"></a>
        </div>
      </div>
    </div> 
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'item',
  data () {
    return {
      url: '',
      img: 'http://shopimg.weimob.com/55707743/Goods/1609021608150544.jpg?x-oss-process=style/w360',
      desc: '【澳门香记牛肉粒1盒】澳门特产牛肉干肉脯办公室休闲零食品小吃',
      name: '',
      price: 200
    }
  }
}
</script>
<style lang="less">
  .item {
    box-sizing: border-box;
    display: inline-block;
    padding: 4px;
    width: 50%;
    color: #1a1a1a;
    background: #fff;
  }
  .item__content {
    position: relative;
    &:before {
      content: "";
      // z-index: -1;
      box-sizing: border-box;
      position: absolute;
      left: 0;
      top: 0;
      width: 200%;
      height: 200%;
      border: 1px solid rgba(204, 204, 204, .5);
      transform-origin: 0 0;
      transform: scale(.5);
    }

  }
  .item__detail {
    padding: 0 8px;
  }
  .item__desc {
    padding: 11px 0 0px;
    font-size: 13px;
    line-height: 17px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: 400;
    overflow: hidden;
  }
  .item__purchase-wrap {
    display: flex;
    height: 52px;
    align-items: center;
  }
  .item__purchase {
    width: 45px;
    height: 24px;
    background-color: #ff2e45;
    border-radius: 4px;
    text-decoration: none;
    text-align: center;
    color: #fff;
    box-shadow: 0 0 1px 1px rgba(255, 203, 208, 1);
    &:before {
      content: "购买";
      display: inline-block;
      font-size: 20px;
      line-height: 24px;
      transform: scale(.5);
    }
  }
  .item__price {
    flex: 1;
    color: #ff2e45;
    font-size: 0;
  }
  .item__price-small {
    font-size: 12px;
  }
  .item__price-normal {
    margin-left: 2px;
    font-size: 16px;
  }
















</style>
