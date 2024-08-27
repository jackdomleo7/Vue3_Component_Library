# @jackdomleo7/vue3-library

A Vue3 component library for my own enjoyment, learning, & development <small>(feel free to use but use at your own risk, this is fully typed and thoroughly tested but was never intended to be used for commercial use)</small>.

[![Pipeline](https://github.com/jackdomleo7/Vue3_Component_Library/actions/workflows/pipeline.yml/badge.svg?branch=master)](https://github.com/jackdomleo7/Vue3_Component_Library/actions/workflows/pipeline.yml)
[![CodeFactor](https://www.codefactor.io/repository/github/jackdomleo7/vue3_component_library/badge)](https://www.codefactor.io/repository/github/jackdomleo7/vue3_component_library)
[![codecov](https://codecov.io/gh/jackdomleo7/Vue3_Component_Library/branch/master/graph/badge.svg?token=KG10GLDQTN)](https://codecov.io/gh/jackdomleo7/Vue3_Component_Library)

## Tech Stack

**Client:** Vue3, Vite, TypeScript, Vitest, Storybook, Rollup, pnpm, ESLint, Prettier, Stylelint

## Installation

Install @jackdomleo7/vue3-library

```bash
  npm install @jackdomleo7/vue3-library
  yarn add @jackdomleo7/vue3-library
  pnpm add @jackdomleo7/vue3-library
```

## Usage/Examples

Basic usage

`App.vue`

```typescript
import '@jackdomleo7/vue3-library/dist/style.css';
```

Any component

```typescript
import ComponentName from '@jackdomleo7/vue3-library/ComponentName.vue';
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

Install dependencies (You will need pnpm)

```bash
  npm i -g pnpm
  pnpm i
```

Serve Storybook

```bash
  pnpm run serve
```

Serve static Storybook

```bash
  pnpm run serve:static
```

Build static Storybook docs

```bash
  pnpm run build:docs
```

Build the project

```bash
  pnpm run build
```

Check linting & formatting

```bash
  pnpm run lint:check
```

Fix linting & formatting

```bash
  pnpm run lint:fix
```

Run test suite in a single run

```bash
  pnpm run test
```

Open unit test report in the browser

```bash
  pnpm run test:report
```

Add a new component to the library

```bash
  pnpm run new-component MyComponent
```
