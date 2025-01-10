import { mergeConfigs } from '@unocss/core'
import config from './.nuxt/uno.config.mjs'

console.log('aaaa', config.content?.pipeline)
export default mergeConfigs([config, {
  // your overrides
}])
