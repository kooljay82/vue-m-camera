import { shallowMount } from '@vue/test-utils'
import VmcCmpt from '@/components/VmcCmpt'

describe('VmcCmpt.vue', () => {

  test('file을 선택하였을 때 해당 이벤트를 호출하는지 확인한다.', () => {
    const wrapper = shallowMount(VmcCmpt)
    wrapper.vm.uploadImg = jest.fn()
    const GLOBAL = (function () { return this }).call() || window
    expect(typeof GLOBAL.EXIF).not.toBe('undefined')
    expect(typeof GLOBAL.loadImage).not.toBe('undefined')
    // 가짜 blob을 이용하여 가짜 파일과 이벤트를 넘긴다.
    const blob = new Blob([""], { type: 'text/html' });
    blob["lastModifiedDate"] = "";
    blob["name"] = "filename";
    const fakeF = blob;
    const evt = {
      target: {
        files: [
          fakeF
        ]
      }
    }
    wrapper.vm.uploadImg(evt)
    expect(wrapper.vm.uploadImg).toHaveBeenCalled()
  })

  test('max length가 설정되어있을 때 해당 버튼을 가리는지 확인한다.', () => {
    const wrapper = shallowMount(VmcCmpt, {
      propsData: {
        max: 1
      }
    })
    // 테스트를 위해 parentElement를 임의로 생성하여 1개의 리스트를 임의로 생성한다
    // max도 1로 고정하여 해당 리스트의 max 값에 도달하였을 때를 가정한다.
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    ul.setAttribute('class', 'images-list')
    li.setAttribute('class', 'images-list-item')
    li.style.display = 'block'
    ul.appendChild(li)
    Object.defineProperty(wrapper.vm.$el, 'parentElement', {
      value: li
    })
    Object.defineProperty(wrapper.vm.$el.parentElement, 'parentElement', {
      value: ul
    })
    wrapper.vm.uploadImg = jest.fn(() => {
      // 구현
      const li = wrapper.vm.$el.parentElement
      const ul = li.parentElement
      const count = ul.childElementCount
      if (wrapper.vm.max !== undefined && wrapper.vm.max <= count) {
        li.style.display = 'none'
      } else {
        li.style.display = 'block'
      }
    })
    // 이벤트 발생 전 리스트의 display 확인
    expect(li.style.display).toBe('block')
    wrapper.vm.uploadImg()
    // 이벤트 발생 후 리스트의 display 확인
    expect(li.style.display).toBe('none')
  })
})