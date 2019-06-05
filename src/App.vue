<template>
  <div id="app">
    <ul class="images-list">
      <li
        v-for="(img, idx) in imgList"
        :key="idx"
        :style="{backgroundImage: 'url(' + img + ')'}"
        class="images-list-item"
      >
        <span
          @click="removeImageFromArray(idx)"
          class="remove-btn"
          role="button"
        >
          <i>&#10005;</i>
        </span>
      </li>
      <li class="images-list-item">
        <vmc-cmpt
          @imgToData="passImageToArray"
          :len="imgList.length"
          :max="max"
          :maxWidth="maxWidth"
        >
          <span class="slot-span">
            <i>&#43;</i>
          </span>
        </vmc-cmpt>
      </li>
    </ul>
  </div>
</template>

<script>
import VmcCmpt from '@/components/VmcCmpt'
export default {
  components: {
    'vmc-cmpt': VmcCmpt
  },
  data () {
    return {
      imgList: [],
      max: 10,
      maxWidth: 600
    }
  },
  methods: {
    passImageToArray (value) {
      this.imgList.push(value)
    },
    removeImageFromArray (idx) {
      this.imgList.splice(idx, 1)
    }
  }
}
</script>
<style lang="stylus" scope>
html, body
  margin 0
  padding 0
  background #eee

i
  font-style  normal

button
  outline none

#app
  width 375px
  height 667px
  margin 0 auto
  margin-top calc((100vh - 667px) / 2)
  padding 0
  background #fff

  .images-list
    margin 0
    padding 20px
    width calc(100% - 40px)
    min-height 103px
    float left

    .images-list-item
      list-style-type none
      list-style-position inside
      width 103px
      height 103px
      border 1px #ddd solid
      border-radius: 8px
      background #f8f8f8
      background-repeat no-repeat
      background-position center center
      background-size 100% auto
      float left
      margin-right 10px
      margin-bottom 10px
      position relative

      &:nth-child(3n)
        margin-right: 0

      .slot-span
        display block
        width 30px
        height 30px
        font-size 26px
        line-height 30px
        border-radius 50%
        margin 0 auto
        color #333

      .remove-btn
        display block
        width 30px
        height 30px
        font-size 20px
        line-height 32px
        text-align center
        border-radius 50%
        border 1px #333 solid
        background #fff
        position absolute
        top -7px
        right -7px
</style>
