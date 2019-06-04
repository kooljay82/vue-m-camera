import ExifRegister from '../ExifRegister'

describe('ExifRegister.js', () => {
  const GLOBAL = (function () { return this; }).call() || window

  test('namespace에 EXIF와 loadImage가 있는지 확인한다.', () => {
    expect.assertions(4)
    expect(typeof GLOBAL.EXIF).toBe('undefined')
    expect(typeof GLOBAL.loadImage).toBe('undefined')
    ExifRegister()
    expect(typeof GLOBAL.EXIF).toBe('function')
    expect(typeof GLOBAL.loadImage).toBe('function')
  })

})