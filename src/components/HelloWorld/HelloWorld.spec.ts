import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { JHelloWorld } from '@/index'

describe.concurrent('HelloWorld', () => {
  describe('props', () => {
    it('displays the message "Hello there!"', () => {
      const wrapper = mount(JHelloWorld, {
        props: {
          msg: 'Hello there!'
        }
      })

      expect(wrapper.find('h1').text()).toBe('Hello there!')
    })
  })

  describe('interactivity', () => {
    it('increments the counter when clicked', async () => {
      const wrapper = mount(JHelloWorld, {
        props: {
          msg: 'Hello there!'
        }
      })

      expect(wrapper.find('button').text()).toBe('count is 0')

      await wrapper.find('button').trigger('click')

      expect(wrapper.find('button').text()).toBe('count is 1')
    })
  })
})
