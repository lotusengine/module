const fn = require('../src/index.js')

describe('Number validator module', () => {
  test('Should return error on invalid format', () => {
    const payload = 'foo'

    const res = fn({}, payload)

    expect(res).toEqual({
      status: 'error',
      code: 'INVALID_NUMBER',
      message: 'Payload is not a valid number'
    })
  })

  test('Should return error on number too small', () => {
    const payload = 3

    const res = fn({ minimum: 5 }, payload)
    expect(res).toEqual(
      {
        status: 'error',
        code: 'NUMBER_TOO_SMALL',
        message: 'The provided number is too small'
      })
  })

  test('Should return error on number too large', () => {
    const payload = 13

    const res = fn({ maximum: 5 }, payload)
    expect(res).toEqual(
      {
        status: 'error',
        code: 'NUMBER_TOO_LARGE',
        message: 'The provided number is too large'
      })
  })

  test('Should return success on valid number', () => {
    const payload = 13

    const res = fn({ minimum: 4, maximum: 25 }, payload)
    expect(res).toEqual(
      {
        status: 'success',
        data: {}
      })
  })
})
