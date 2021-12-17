const path = require("path")

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y"
  ],
  framework: "@storybook/vue3",
  webpackFinal: async (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src')
    return config
  }
}