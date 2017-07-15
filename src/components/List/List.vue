<template>
  <div class="list__wrap">
    <header class="list__header">
      <div class="list__header-control" @click="showFilter">
        <i class="list__header-control-icon iconfont icon-list9"></i>
        <span class="list__header-control-text">分类</span>
      </div>
      <div class="list__header-search-wrap">
        <i class="iconfont  icon-search list__header-search-icon"></i>
        <input placeholder="搜索店铺内商品" type="text" class="list__header-search">
      </div>
      <div class="list__header-control">
        <i class="list__header-control-icon iconfont icon-list8"></i>
        <span class="list__header-control-text">列表</span>
      </div>
    </header>
    <div class="sort">
      <ul class="sort__list">
        <li class="sort__li">综合</li>
        <li class="sort__li">销量</li>
        <li class="sort__li">新品</li>
        <li class="sort__li sort__li--active">价格<i class="sort__li-price-asc"></i></li>
      </ul>
    </div>
    <div class="list__list">
      <item v-for="i in list"></item>
    </div>
    <filter-classify :show.sync="show"></filter-classify>
  </div>
</template>
<script>
  import item from '@/components/item/Recomend.vue'
  import FilterClassify from '@/components/Filter/FilterClassify.vue'
  export default {
    name: 'list',
    components: {
      item,
      FilterClassify
    },
    data () {
      return {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        show: false
      }
    },
    methods: {
      showFilter () {
        this.show = true
      }
    }
  }
</script>
<style lang="less">
  body {
    background-color: rgb(241, 241, 241);
  }
  .list__header {
    display: flex;
    padding: 10px 8px;
    background-color: #fff;
  }
  .list__header-control {
    width: 35px;
    text-align: center;
    font-size: 9px;
    line-height: 12px;
    color: #999;
    cursor: pointer;
  }
  .list__header-search-wrap {
    flex: 1;
    position: relative;
    padding: 0 8px;
  }
  .list__header-search {
    color: #1a1a1a;
    height: 32px;
    vertical-align: middle;
    border-radius: 3px;
    padding: 0 8px 0 30px;
    width: 100%;
    -webkit-appearance: none;
    border: 0;
    font-size: 14px;
    text-align: left;
    background-color: #f6f6f6;
  }
  .list__header-search-icon {
    position: absolute;
    left: 17px;
    top: 9px;
    color: #333;
    font-size: 14px;
  }
  ::-webkit-input-placeholder {
    color: #c3c3c3
  }
  .list__header-control-icon {
    display: block;
    text-align: center;
    font-size: 22px;
    line-height: 20px;
    color: #333;
  }

  .sort {
    margin-top: 1px;
    padding: 0 8px;
    background-color: #fff;
  }
  .sort__list {
    display: flex;
    padding: 10px 0;
  }
  .sort__li {
    flex: 1;
    font-size: 14px;
    line-height: 16px;
    border: 1px solid #d7d7d7;
    border-width: 0 1px 0 0;
    color: #1a1a1a;
    text-align: center;
    &:last-child {
      border-right-width: 0;
    }
  }
  .sort__li--active {
    color: #ff2e45;
  }
  .sort__li-price-asc {
    position: relative;
    display: inline-block;
    width: 4px;
    height: 16px;
    vertical-align: top;
    &:before,&:after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-width: 8px 7px;
      border-color: transparent;
      // border-color: transparent transparent #000;
      // 
      border-style: solid;
      transform: scale(.5);
    }
    &:before {
      transform-origin: 50% 100%;
      border-bottom-color: #666;
      bottom: 9px;
    }
    &:after {
      transform-origin: 50% 0;
      border-top-color: #ff2e45;
      top: 9px;
    }
  }
  





















</style>
