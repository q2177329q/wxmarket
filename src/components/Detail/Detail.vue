<template>
  <div class="detail__box">
    <!-- <swiper class="test" :options="swiperOption2" ref="mySwiper2" > -->
      <!-- <swiper-slide> -->
        <div class="detail__wrap">
          <div class="detail__scroll">
            <div class="detail__goods-pic-banner">
              <swiper class="index-header__banner" :options="swiperOption" ref="mySwiper" >
                <swiper-slide v-for="i in list">
                  <img :src="i" alt="" class="detail__goods-pic">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
              </swiper>
            </div>
            <div class="detail">
              <div class="detail__title-wrap">
                <p class="detail__title">【沃隆每日坚果】河南省内包邮 每天一小包，方便又营养</p>
                <div class="detail__collect">
                  <i class="detail__collect-icon"></i>
                  收藏
                </div>
             </div>
              <div class="detail__price detail__price--wx">
                <span class="detail__price-key">微信价:</span>
                <span class="detail__price-symbol">￥</span>
                <span class="detail__price-int">100</span><span class="detail__price-decimals">.00</span>
              </div>
              <div class="detail__price detail__price--ori">
                <span class="detail__price-key">原价:</span>
                <span class="detail__price-symbol">￥</span>
                <span class="detail__price-int">88</span>
                <span class="detail__price-decimals">.00</span>
              </div>
              <div class="detail__delivery-wrap">
                <div class="detail__delivery">
                  <span class="detail__delivery-key">送至</span>
                  <div class="detail__delevery-address">全国<i class="detail__delevery-address-icon"></i></div>
                  <div class="detail__delevery-price">22.00元</div>
                </div>
                <div class="detail__salesed">销量22件</div>
              </div>
            </div>
            <div class="select">
              <p class="select__text">请选择</p>
              <span class="select__btn"></span>
            </div>
            <div class="store">
              <div class="store__msg-wrap">
                <i class="store__icon"></i>
                <div class="store__msg">
                  <p class="store__name">农产品直营店</p>
                  <p class="store__other">专注30年</p>
                </div>
              </div>
              <div class="store__link">
                <div class="store__all-goods">全部商品</div>
                <div class="store__index">进入店铺</div>
              </div>
            </div>
          </div>
        </div>
      <!-- </swiper-slide> -->
      <!-- <swiper-slide>
        <div class="detail__picture-wrap">
          <div class="detail__picture"></div>
        </div>
      </swiper-slide> -->
    <!-- </swiper> -->
    <detail-footer @addCart="clickAddCart"></detail-footer>
    <buy-dialog></buy-dialog>
  </div>
</template>
<script>
  require("expose-loader?IScroll!../../lib/iscroll-probe.js")
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import DetailFooter from '@/components/DetailFooter/DetailFooter.vue'
  import BuyDialog from '@/components/BuyDialog/BuyDialog.vue'
  export default {
    name: 'detail',
    components: {
      swiper,
      swiperSlide,
      DetailFooter,
      BuyDialog
    },
    data () {
      return {
        list: [require('./banner1.png'),
          require('./banner2.png')
        ],
        swiperOption: {
          // loop: true,
          direction: 'horizontal',
          grabCursor: true,
          // setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          // paginationClickable :true,
          // prevButton:'.swiper-button-prev',
          // nextButton:'.swiper-button-next',
          // scrollbar:'.swiper-scrollbar',
          mousewheelControl: true,
          observeParents: true
        },
        swiperOption2: {
          direction: 'vertical',
          height : window.innerHeight,
          onlyExternal: true,
          grabCursor: true,
          autoHeight: true,
          mousewheelControl: true,
          observeParents: true
        },
      }
    },
    methods: {
      clickAddCart () {
        this.eventHub.$emit('eventHub__many__addCart', {
          img: '../../assets/goods.png',
          price: '129.00',
          repertoryNum: 4
        })
      }
    },
    mounted () {
      var myScroll = new IScroll('.detail__wrap', {
        probeType: 3
      });
      console.log(window.IScroll)
      myScroll.on('scroll', (e) => {
        // console.log(myScroll.y)
      });
      myScroll.on('scrollEnd', (e) => {
        console.log(myScroll.y)
      });
    }
  }
</script>
<style lang="less">
  .detail__wrap {
    // min-height: 100vh;
    position: relative;
    height: 100vh;
    background-color: #f1f1f1;
  }
  .detail__scroll {
    box-sizing: border-box;
    min-height: 100vh;
    padding-bottom: 60px;
  }
  .detail__goods-pic {
    width: 100%;
    height: auto;
  }
  .detail {
    background: #fff;
    border-width: 1px 0 0 0;
    padding: 10px 16px 6px 16px;
  }
  .detail__title-wrap {
    display: flex;
  }
  .detail__title {
    flex: 1;
    line-height: 18px;
    color: #1a1a1a;
    font-size: 15px;
    padding: 3px 10px 0 0;
  }
  .detail__collect {
    width: 61px;
    border: 1px solid #e3e3e3;
    border-width: 0 0 0 1px;
    position: relative;
    padding-left: 10px;
    padding-top: 22px;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    vertical-align: top;
  }
  .detail__price--wx {
    padding-top: 6px;
    color: #ff2e45;
    font-size: 14px;
    line-height: 25px;
  }
  .detail__price-key {
    padding-right: 8px;
  }
  .detail__price-int {
    font-size: 19px;
  }
  .detail__price--ori {
    color: #999999;
    font-size: 11px;
    line-height: 18px;
    padding-bottom: 4px;
    text-decoration: line-through;
    .detail__price-int {
      font-size: 11px;
    }
  }
  .detail__delivery-wrap {
    display: flex;
    font-size: 12px;
    line-height: 18px;
    padding-bottom: 2px;
    color: #666666;
  }
  .detail__delivery {
    flex: 1;
    display: flex;
  }
  .detail__salesed {
    padding-left: 8px;
    margin-left: 6px;
    border: 1px solid #e3e3e3;
    border-width: 0 0 0 1px;
  }
  .detail__delevery-address {
    flex: 1;
    text-align: center;
  }
  .select {
    margin-top: 7px;
    background: none;
    padding-left: 16px;
    line-height: 18px;
    padding: 14px 30px 14px 15px;
    display: block;
    font-size: 15px;
    color: #1a1a1a;
    position: relative;
    background-color: #fff;
    .select__btn {
      content: "";
      width: 8px;
      height: 8px;
      border: 2px solid #c3c3c3;
      border-width: 2px 2px 0 0;
      position: absolute;
      top: 50%;
      right: 5%;
      margin-top: -5px;
      transform: rotate(45deg);
    }
  }
  .store {
    padding: 10px 16px 15px 16px;
    overflow: hidden;
    margin-top: 7px;
    background: #ffffff;
    margin-bottom: 7px;
  }
  .store__msg-wrap {
    display: flex;
    padding: 3px 0;
  }
  .store__icon {
    width: 50px;
    height: 30px;
  }
  .store__msg {
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 15px;
    line-height: 15px;
  }
  .store__all-goods,
  .store__index {
    border: 1px solid #bdbdbd;
    border-radius: 5px;
    width: 48%;
    line-height: 32px;
    color: #666666;
    margin-top: 15px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
  }
  .store__index {
    margin-left: 2%;
  }
  .detail__picture-wrap {
    height: 100vh;
    overflow: auto;
  }
  .detail__picture {
    height: 1500px;
    background-color: #ccc;
  }
















</style>
