<template>
  <div id="app">
    <div class="header">
      <div class="content-wrapper">
        <div class="avatar">
          <img width="64" height="64" :src="seller.avatar" alt="">
        </div>
        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{seller.name}}</span>
          </div>
          <div class="description">
            {{seller.description}}/{{seller.deliveryTime}}分钟送达
          </div>
          <div v-if="seller.supports" class="support">
            <span class="icon"></span>
            <span class="test">{{seller.supports[0].description}}</span>
          </div>
        </div>
      </div>
      <div class="bulletin-wrapper"></div>
    </div>
  </div>
</template>

<script>
export default{
  props: {
    seller: {
      type: Object
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin"
  .header
    color: #fff
    background-color :#000;
    .content-wrapper
      padding :24px 12px 18px 24px
      font-size :0
      .avatar
        display :inline-block
      .content
        display :inline-block
        font-size :14px
        margin-left :16px
        .title
          margin :2px 0 8px 0
          .brand
            width :30px
            height :18px;
            display :inline-block
            bg-image('brand')
            background-size :30px 18px
            background-repeat :no-repeat
            vertical-align :middle
          .name
            margin-left :6px
            font-size :16px
            font-weight :bold
            line-height :18px
        // .description


</style>
