# This script is used to create all files required for new components
# it will create .vue, .spec.ts and .stories.ts files and
# automatically add and order them to index.ts

# Check there is not more than 1 argument
if ($args.Count -gt 1) { 
  Write-Host " ERROR - More than 1 argument provided " -ForegroundColor black -BackgroundColor red
  throw "You must only provide one argument - this argument should be the name of the component as PascalCase"
}

# Create tempory component name variable
$componentName = $args[0]

# If there is no argument provided, prompt user for value
if ($args.Count -eq 0) {
  Write-Host "Component name missing as argument, enter below " -ForegroundColor yellow
  $componentName = Read-Host 'Component name'
}

# Check component name is valid (must be PascalCase)
if ($componentName.substring(0, 1) -cmatch "^[a-z]*$") { 
  Write-Host " ERROR - Component name not written in PascalCase " -ForegroundColor black -BackgroundColor red
  throw "PascalCase requires the first letter to be capitalised"
}

# Prefix component name with 'J'
# this is used when exporting/importing Vue components
$prefixedComponentName = "J${componentName}"

# Create files for new component

# Create component directory
New-Item -ItemType "directory" -Path ".\src\components\" -Name $componentName | Out-Null
Write-Host "Created ./src/components/${componentName} directory" -ForegroundColor DarkGray

# Create component Vue file
New-Item -ItemType "file" -Path ".\src\components\${componentName}\" -Name "${componentName}.vue" | Out-Null
Add-Content ".\src\components\${componentName}\${componentName}.vue" @"
<template>
  <p>I'm the ${prefixedComponentName} component</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '${componentName}'
})
</script>

<style lang="scss" scoped>
@use '../../assets/scss/variables/scss' as *;
</style>
"@
Write-Host "Created ./src/components/${componentName}/${componentName}.vue template" -ForegroundColor DarkGray

# Create component unit test
New-Item -ItemType "file" -Path ".\src\components\${componentName}\" -Name "${componentName}.spec.ts" | Out-Null
Add-Content ".\src\components\${componentName}\${componentName}.spec.ts" @"
import { mount, shallowMount } from '@vue/test-utils'
import { ${prefixedComponentName} } from '@/components'
import { configureAxe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

const axe = configureAxe({
  rules: {
    region: { enabled: false } // Don't need to check because components are loaded in isolation
  }
})

describe('${prefixedComponentName}', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(${prefixedComponentName})

    expect(wrapper.vm).toBeTruthy()
  })

  it('to have no obvious accessibility violations', async () => {
    const wrapper = mount(${prefixedComponentName})

    await expect(axe(wrapper.element)).resolves.toHaveNoViolations()
  })

  describe('snapshots', () => {
    it('matches snapshot when mounted', () => {
      const wrapper = mount(${prefixedComponentName})
  
      expect(wrapper.element).toMatchSnapshot()
    })
  
    it('matches snapshot when shallow mounted', () => {
      const wrapper = shallowMount(${prefixedComponentName})
  
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
"@
Write-Host "Created ./src/components/${componentName}/${componentName}.spec.ts template" -ForegroundColor DarkGray

# Create component Storybook file
New-Item -ItemType "file" -Path ".\src\components\${componentName}\" -Name "${componentName}.stories.ts" | Out-Null
Add-Content ".\src\components\${componentName}\${componentName}.stories.ts" @"
import { Story } from '@storybook/vue3'
import { ${prefixedComponentName} } from '@/components'

export default {
  title: 'Components/${componentName}',
  component: ${prefixedComponentName},
  parameters: {
    docs: {
      description: {
        component: "import { ${prefixedComponentName} } from '@jackdomleo7/vue3-library'"
      }
    }
  }
}

const Template = (args: Record<string, unknown>) => ({
  components: { ${prefixedComponentName} },
  setup () {
    return { args }
  },
  template: '<${prefixedComponentName} v-bind="args" />'
})

export const Default: Story = Template.bind({})
Default.args = {}
"@
Write-Host "Created ./src/components/${componentName}/${componentName}.stories.ts template" -ForegroundColor DarkGray
Write-Host " "


# Add component to components import/export file
Add-Content .\src\components\index.ts "`nexport { default as ${prefixedComponentName} } from './${componentName}/${componentName}.vue'"
Write-Host "Added ${prefixedComponentName} to components barrel file (./src/components/index.ts)" -ForegroundColor DarkGray
# Sort component imports in ./src/components/index.ts
Invoke-Command {param($file='./src/components/index.ts') .\psSort.ps1 }

Write-Host " "
Write-Host " New Component Created: ${componentName} " -ForegroundColor black -BackgroundColor green
