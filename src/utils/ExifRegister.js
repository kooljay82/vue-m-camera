// 모바일 웹 / 앱에서 카메라에 접근하여 사진을 찍었을때 오리엔테이션을 사진을 찍은 방향으로 원위치 시키기 위한 등록을 돕는다.
import 'blueimp-load-image/js/load-image-scale'
import 'blueimp-load-image/js/load-image-orientation'

export default function () {
  // eslint-disable-next-line
  const GLOBAL = (function () { return this }).call() || window // 현재의 namespace 혹은 window를 전역으로 사용한다.
  if (GLOBAL.EXIF !== undefined && GLOBAL.loadImage !== undefined) return false
  GLOBAL.EXIF = require('exif-js')
  GLOBAL.loadImage = require('blueimp-load-image/js/load-image')
}
