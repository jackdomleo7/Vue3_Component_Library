const path = require("path")

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/preset-scss",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@hover/storybook-addon-pseudo-states"
  ],
  framework: "@storybook/vue3",
  webpackFinal: async (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src')
    return config
  }
}