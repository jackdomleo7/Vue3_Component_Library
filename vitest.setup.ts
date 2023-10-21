import { afterEach, vitest } from 'vitest'
import { enableAutoUnmount } from '@vue/test-utils'

enableAutoUnmount(afterEach)

afterEach(() => {
  vitest.restoreAllMocks()
  vitest.clearAllTimers()
})
