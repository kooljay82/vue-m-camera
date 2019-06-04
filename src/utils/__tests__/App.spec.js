import { shallowMount } from '@vue/test-utils'
import App from '@/App'

describe('App.vue', () => {
  const wrapper = shallowMount(App)

  test('passImageToArray로 imgList에 전달된 이미지를 추가한다', () => {
    wrapper.vm.passImageToArray('some_url')
    expect(wrapper.vm.imgList[0]).toBe('some_url')
  })
  
  test('removeImageFromArray로 클릭 이벤트가 발생한 아이템을 imgList에서 삭제한다.', () => {
    
  })
})