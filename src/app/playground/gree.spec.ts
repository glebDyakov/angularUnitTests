import {greet} from './greet'
describe('greet',()=>{
  if('should include name in return message',()=>{
    expect(greet('angular')).toContain('Angular')
  })
})
