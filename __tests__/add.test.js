const add = require('../test/add')
describe('test', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toEqual(3)
  })
})
