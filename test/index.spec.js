const fn = require('../src/index.js')

describe('Number validator module', () => {
  test('Should return error on invalid format', () => {
    const payload = 'foo'

    const res = fn({}, payload)

    expect(res).toEqual({ errors: [{ code: 'INVALID_NUMBER', data: {} }], result: {} })
  })

  test('Should return error on number too small', () => {
    const payload = 2

    const res = fn({ minimum: 5 }, payload)

    expect(res).toEqual({
      errors: [{
        code: 'NUMBER_TOO_SMALL'
      }]
    })
  })

  test('Should return error on number too large', () => {
    const payload = 12

    const res = fn({ maximum: 5 }, payload)

    expect(res).toEqual({
      errors: [{
        code: 'NUMBER_TOO_LARGE'
      }]
    })
  })

  test('Should return errors on number too large and not even', () => {
    const payload = 13

    const res = fn({ maximum: 5 }, payload)

    expect(res).toEqual({
      errors: [{
        code: 'NUMBER_TOO_LARGE'
      }, {
        code: 'NUMBER_NOT_EVEN'
      }]
    })
  })

  test('Should return on valid number', () => {
    const payload = 12

    const res = fn({ minimum: 4, maximum: 25 }, payload)
    expect(res).toEqual({
      errors: []
    })
  })
})
