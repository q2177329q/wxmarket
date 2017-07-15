<template>
  <div :class="['filter__content']">
    <div class="filter__box">
      <div class="filter__wrap">
        <p class="filter__all">所有商品</p>
        <ul class="filter">
          <li class="filter__li">所有商品</li>
          <li class="filter__li filter__li-list">
            <ul class="filter">
              <li v-for="i in list" class="filter__li">分类{{i}}</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="filter__close" @click="hideFilter">
        
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'filter',
    data () {
      return {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    },
    methods: {
      hideFilter () {
        this.$emit('update:show', false)
      },
      getTransitionEndType () {
        let t
        let el = document.createElement('fakeelement')
        let transitions = {
          'transition': 'transitionend',
          'OTransition': 'oTransitionEnd',
          'MozTransition': 'transitionend',
          'WebkitTransition': 'webkitTransitionEnd',
          'MsTransition': 'msTransitionEnd'
        }

        for (t in transitions) {
          if (el.style[t] !== undefined) {
            return transitions[t]
          }
        }
      }
    },
    mounted () {
      let transitionType = this.getTransitionEndType()
      let me = this
      this.$el.addEventListener(transitionType, function (e) {
        if (me.show) {
          return
        }
        me.$el.style.display = 'none'
        console.log(me.show)
      })
      console.log(transitionType)
    },
    props: {
      show: {
        default: false
      }
    },
    watch: {
      show (val) {
        if (val) {
          this.$el.style.display = 'block'
          this.$el.getClientRects()
          this.$el.classList.add('show')
        } else {
          this.$el.classList.remove('show')
        }
      }
    }
  }
</script>
<style lang="less">
  .filter__content {
    display: none;
  }
  .filter__content.show {
    display: block;
  }
  .filter__box {
    // display: none;
    // z-index: -1;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .4);
    opacity: 0;
    transition: .4s opacity;
  }
  .show .filter__box {
    display: block;
    opacity: 1;
  }
  .filter__wrap {
    transition: .4s all;
    transform: translateX(-100%);
    overflow: scroll;
    height: 100%;
    width: 83%;
    background-color: #f1f1f1;
  }
  .show .filter__wrap {
    transform: translateX(0);

  }
  .filter__all,
  .filter__li {
    color: #1a1a1a;
    line-height: 40px;
    font-weight: 400;
    font-size: 14px;
    background: #fff;
    margin-top: 10px;
    padding-left: 15px;
    position: relative;
    cursor: pointer;
  }
  .filter__li-list {
    margin-top: 1px;
  }
  .filter .filter .filter__li  {
    margin-top: 0;
  }
  .filter__close {
    position: absolute;
    right: 17px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    box-sizing: border-box;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid #fff;
    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 2px;
      height: 18px;
      background-color: #fff;
      border-radius: 50%;
      left: 13px;
      top: 5px;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
  





















</style>
