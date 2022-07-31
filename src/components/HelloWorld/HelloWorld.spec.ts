import { describe, it, expect } from 'vitest'
import { shallowMount, mount } from '@vue/test-utils'
import { JHelloWorld } from '../../index'

describe.concurrent('HelloWorld', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(JHelloWorld, {
      props: {
        msg: 'Hello there!'
      }
    })

    expect(wrapper.vm).toBeTruthy()
  })

  describe('snapshots', () => {
    it('matches snapshot when shallow mounted', () => {
      const wrapper = shallowMount(JHelloWorld, {
        props: {
          msg: 'Hello there!'
        }
      })

      expect(wrapper).toMatchSnapshot()
    })

    it('matches snapshot when mounted', () => {
      const wrapper = mount(JHelloWorld, {
        props: {
          msg: 'Hello there!'
        }
      })

      expect(wrapper).toMatchSnapshot()
    })
  })
})
