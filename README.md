# @jackdomleo7/vue3-library

A Vue3 component library for my own enjoyment <small>(feel free to use but use at your own risk, this is fully typed and thoroughly tested but was never intended to be used for commercial use)</small>.

[![Pipeline](https://github.com/jackdomleo7/Vue3_Component_Library/actions/workflows/pipeline.yml/badge.svg?branch=master)](https://github.com/jackdomleo7/Vue3_Component_Library/actions/workflows/pipeline.yml)
[![CodeFactor](https://www.codefactor.io/repository/github/jackdomleo7/vue3_component_library/badge)](https://www.codefactor.io/repository/github/jackdomleo7/vue3_component_library)

## Tech Stack

**Client:** Vue3, TypeScript, Rollup


## Installation

Install @jackdomleo7/vue3-library with npm

```bash
  npm install @jackdomleo7/vue3-library
```

## Usage/Examples

Basic usage

```typescript
import { defineComponent } from 'vue';
import { JComponent } from '@jackdomleo7/vue3-library';

export default defineComponent({
    components: { JComponent }
});
```

```html
<j-component />
```
## Run Locally

Clone the project

```bash
  git clone https://github.com/jackdomleo7/Vue3_Component_Library
```

Go to the project directory

```bash
  cd Vue3_Component_Library
```

Install dependencies

```bash
  npm install
```

Run the project

```bash
  npm run serve
```

Build the project

```bash
  npm run build
```