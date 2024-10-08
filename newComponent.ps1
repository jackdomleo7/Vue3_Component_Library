$componentName = $args[0]

if($args.Count -eq 0 -OR $args.Count -gt 1) { throw "You must only provide one argument - this argument should be the name of the component as PascalCase" }

if($componentName.substring(0, 1) -cmatch "^[a-z]*$") { throw "PascalCase requires the first letter to be capitalised" }

Write-Output "New component: ${componentName}"

# Create component directory
New-Item -ItemType "directory" -Path ".\src\components\" -Name $componentName
Write-Output "Created ./src/components/${componentName} directory"

# Create component Vue file
New-Item -ItemType "file" -Path ".\src\components\${componentName}\" -Name "${componentName}.vue"
Add-Content ".\src\components\${componentName}\${componentName}.vue" @"
<template>

</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped></style>
"@
Write-Output "Created ./src/components/${componentName}/${componentName}.vue template"

# Create component unit test
New-Item -ItemType "file" -Path ".\src\components\${componentName}\" -Name "${componentName}.spec.ts"
Add-Content ".\src\components\${componentName}\${componentName}.spec.ts" @"
import { shallowMount } from '@vue/test-utils'
import ${componentName} from './${componentName}.vue'

describe('${componentName}', () => {
  
})
"@
Write-Output "Created ./src/components/${componentName}/${componentName}.spec.ts template"

# Create component Storybook file
New-Item -ItemType "file" -Path ".\src\components\${componentName}\" -Name "${componentName}.stories.ts"
Add-Content ".\src\components\${componentName}\${componentName}.stories.ts" @"
import type { Meta, StoryObj } from '@storybook/vue3'

import ${componentName} from './${componentName}.vue'

const meta = {
  title: 'Components/${componentName}',
  component: ${componentName}
} satisfies Meta<typeof ${componentName}>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
"@
Write-Output "Created ./src/components/${componentName}/${componentName}.stories.ts template"
