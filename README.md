# vue-m-camera
### (return back to original orientation)

## Purpose

To avoid changing orientation of photo automatically which taken via camera of user's device, you have to use 'exif-js' and 'blueimp-load-image library'.

'exif-js' and 'blueimp-load-image' are very powerfull and easy to use. But developing in vue.js it might be quiite annoying. (Not difficult but need take some time.)

When you are working on some mobile web project (including webview of application), you might have to access camera and photos then you should overcome 'orientation of photo' problem.

So I made it prevent changing orientation automatically in '*.vue' component.

This component provide invisible 'input (type=file)' and you can customize it whatevet you want.

This component, seems like a 'input (type=file)', has function that pass image file of converted binary data with original orientation.

## Reference

stackoverflow: https://stackoverflow.com/questions/20600800/js-client-side-exif-orientation-rotate-and-mirror-jpeg-images#answer-39384061

(*This answer is very helpful to solve my problem.)

## How to install

```
  npm install @kooljay82/vue-m-camera --save
```

## How to import and registry

In your component,

```
  import VmcCmpt from "@kooljay82/vue-m-camera"
  export default {
    components: {
      'vmc-cmpt': VmcCmpt
    }
  }
```
Or in your entry file. (ex: main.js)

```
  import Vue from 'vue'
  ...
  import VmcCmpt from "@kooljay82/vue-m-camera"
  ...
  Vue.component("vmc-cmpt", VmcCmpt);
  
```

## How to use

1. Use 'ul' and 'li' to wrap 'vmc-cmpt' component to use 'hideOrShowBtn' method. **It's essential!**

2. Pass length of array containing images to 'len' for watching changes of array. **It's essential!**

3. Pass maximum length of array containing images to 'max' for hiding 'vmc-cmpt' component. **It's not essential, but recommended.**

4. You could insert slot to 'vmc-cmpt' and could customize button which you inserted. (Add icon image or text.)

5. 'imgToData' is custom event that you could handle converted image with this event.

```
  <ul class="images-list">
    <li
      v-for="(img, idx) in imgList"
      :key="idx"
      :style="{backgroundImage: 'url(' + img + ')'}"
      class="images-list-item"
    >
      <span @click="removeImageFromArray(idx)" class="remove-btn" role="button">
        <i>&#10005;</i>
      </span>
    </li>
    <li class="images-list-item">
      <vmc-cmpt @imgToData="passImageToArray" :len="imgList.length" :max="max">
        <span class="slot-span">
          <i>&#43;</i>
        </span>
      </vmc-cmpt>
    </li>
  </ul>
```

6. You can find a sample page at here. [CodeSandbox.io / https://codesandbox.io/embed/vue-template-fpfjj]

## MIT

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

It's MIT license, you can use or modify is free. But please leave comment about original source repository. It would be grateful.

## Korean

상세한 설명 보다는 CodeSandbox.io의 예제를 보시면 자세히 알 수 있도록 링크를 남겼습니다.

고쳐야할게 많지만 오픈소스로 발전시키기 위함 보다는 필요에 의한 제작이라 업데이트는 아주 뜸할것 같습니다.

테스트 코드, 구현부 등에 문제점 혹은 아쉬운 점이 있다면 jinho82@gmail.com으로 메일 보내주세요.

감사합니다.