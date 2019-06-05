<template>
  <div class="vmc-wrapper">
    <button
      @click="$refs['vmc-upload-image'].click()"
      class="vmc-mock-btn"
    >
      <slot></slot>
    </button>
    <input
      @change="imgToData($event)"
      ref="vmc-upload-image"
      type="file"
      accept="image/*"
      class="vmc-upload-image"
    >
  </div>
</template>
<script>
import ExifRegister from '@/utils/ExifRegister'
export default {
  props: {
    len: {
      type: Number,
      requried: true
    },
    max: {
      type: Number,
      required: false
    },
    maxWidth: {
      type: Number,
      default: 500
    }
  },
  created () {
    ExifRegister()
  },
  methods: {
    hideOrShowBtn () {
      if (this.max === undefined) return false
      const li = this.$el.parentElement
      const ul = li.parentElement
      const count = ul.childElementCount
      if (this.max !== undefined && (this.max + 1) <= count) {
        li.style.display = 'none'
        return false
      } else {
        li.style.display = 'block'
      }
    },
    imgToData (evt) {
      if (evt.target.files.length > 0) {
        /* eslint-disable */
        const SELF = this
        const TARGET = evt.target.files[0]
        const READER = new FileReader()
        const IMG = new Image()

        READER.readAsDataURL(TARGET)
        READER.onload = _evt => {
          IMG.src = _evt.target.result
          loadImage(IMG.src, img => {
            if (img.type === 'error') {
              throw new Error('error occured', img)
            } else {
              EXIF.getData(img, function () {
                const ORIENTATION = EXIF.getTag(this, 'Orientation')
                const CANVAS = loadImage.scale(img, { orientation: ORIENTATION || 0, maxWidth: SELF.maxWidth, canvas: true })
                SELF.$emit('imgToData', CANVAS.toDataURL())
                SELF.$refs['vmc-upload-image'].value = ''
              })
            }
          })
        }
      }
    }
  },
  watch: {
    len () {
      this.hideOrShowBtn()
    }
  }
}
</script>
<style lang="stylus" scope>
.vmc-wrapper
  width 100%
  height 100%
  border none
  margin 0
  padding 0

.vmc-mock-btn
  width inherit
  height inherit
  margin 0
  padding 0
  border 0
  background none

.vmc-upload-image
  position fixed
  width 1px
  height 1px
  top -1px
</style>
