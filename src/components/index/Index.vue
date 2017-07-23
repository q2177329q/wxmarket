<template>
  <div class="index__wrap">
    <header class="index-header">
      <div class="index-header__search-wrap">
        <input type="text" placeholder="搜索商品" class="index-header__search">
      </div>
      <div class="index-header__banner-wrap">
        <swiper class="index-header__banner" :options="swiperOption" ref="mySwiper" >
          <swiper-slide>
            <router-link class="index-header__banner-link" to="/detail">
              <img class="index-header__banner-img" src="./banner1.jpg">
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link class="index-header__banner-link" to="/detail">
              <img class="index-header__banner-img" src="./banner2.jpg">
            </router-link>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
      <index-classify></index-classify>
    </header>
    <div class="main">
      <div class="recomend__wrap">
        <article class="recomend">
          <div class="recomend__title-wrap">
            <h2 class="recomend__title">精品推荐</h2>
          </div>
          <ul class="recomend__list">
            <li class="recomend__li">
              <a class="recomend__link">
                <img src="http://shopimg.weimob.com/55707743/Group/1609051123043204.jpg?x-oss-process=style/w360" alt="" class="recomend__img">
              </a>
            </li>
            <li class="recomend__li">
              <a class="recomend__link">
                <img src="http://shopimg.weimob.com/55707743/Group/1612181116536674.jpg?x-oss-process=style/w360" alt="" class="recomend__img">
              </a>
            </li>
          </ul>
        </article>
      </div>
      <div class="hot__wrap">
        <article class="hot">
          <div class="hot__title-wrap">
            <h2 class="hot__title">热门</h2>
            <a class="hot__more">更多</a>
          </div>
          <div class="hot__list">
            <item v-for="i in list"></item>
          </div>
        </article>
      </div>
    </div>
    <foot></foot>
  </div>

</template>
<script type="text/javascript">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import item from '@/components/item/Recomend.vue'
  import Foot from '@/components/Foot/Foot.vue'
  import IndexClassify from '@/components/IndexClassify/IndexClassify.vue'
  export default {
    name: 'index',
    components: {
      swiper,
      swiperSlide,
      item,
      Foot,
      IndexClassify
    },
    data () {
      return {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        swiperOption: {
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: 3000,
          loop: true,
          direction: 'horizontal',
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          // paginationClickable :true,
          // prevButton:'.swiper-button-prev',
          // nextButton:'.swiper-button-next',
          // scrollbar:'.swiper-scrollbar',
          mousewheelControl: true,
          observeParents: true,
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          onTransitionStart (swiper) {
            console.log(swiper)
          }
          // more Swiper configs and callbacks...
            // ...
        }
      }
    }
  }
</script>
<style lang="less" scopedß>
  body {
    background-color: #f1f1f1;
  }
  .index__wrap {
    padding-bottom: 53px;
    background-color: #fff;
  }
  .index-header__search-wrap {
    background: #f1f1f1;
    height: 46px;
    line-height: 46px;
    padding: 0 15px;
    font-size: 0;
  }
  .index-header__search{
    color: #34342f;
    height: 30px;
    vertical-align: middle;
    border-radius: 30px;
    padding: 0 10px 0 30px;
    width: 100%;
    -webkit-appearance: none;
    border: 0;
    font-size: 14px;
    text-align: left;
    background-image: url(http://stc.weimob.cn/h5static/wangpu/wp/assets/img/widget/widget_search_icon.png);
    background-size: 50px auto;
    background-repeat: no-repeat;
    background-position: 10px 50%;
  }
  .index-header__banner-link {
    display: block;
  }
  .index-header__banner-img {
    display: block;
    width: 100%;
  }
  .swiper-pagination-bullet-active{
    background: #2a3d4b !important;
  }
  .recomend__title-wrap {
    position: relative;
    font-size: 15px;
    line-height: 35px;
    text-align: center;
    color: #a61c00;
    &:before {
      content: "";
      z-index: -1;
      position: absolute;
      top: 17px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #a61c00;
    }
  }
  .recomend__title {
    display: inline-block;
    padding: 0 10px;
    background-color: #fff;
  }
  .recomend__list {
    font-size: 0;
  }
  .recomend__li {
    box-sizing: border-box;
    display: inline-block;
    padding-right: 2px;
    width: 50%;
  }
  .recomend__li:last-child {
    padding-left: 2px;
    padding-right: 0;
  }
  .hot__wrap {
    margin-top: 10px;
  }
  .hot__title-wrap {
    overflow: hidden;
    display: flex;
    padding: 0 5px 0 15px;
    font-size: 15px;
    color: #fff;
    background-color: #3c78d8;
  }
  .hot__title {
    line-height: 35px;
    height: 35px;
    flex: 1;
  }
  .hot__more {
    display: block;
    padding: 0 10px;
    font-size: 13px;
    line-height: 35px;
    height: 35px;
  }
  .hot__list {
    padding: 4px;
  }











</style>
