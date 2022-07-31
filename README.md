# @jackdomleo7/vue3-library

A Vue3 component library for my own enjoyment, learning, & development <small>(feel free to use but use at your own risk, this is fully typed and thoroughly tested but was never intended to be used for commercial use)</small>.

[![Pipeline](https://github.com/jackdomleo7/Vue3_Component_Library/actions/workflows/pipeline.yml/badge.svg?branch=master)](https://github.com/jackdomleo7/Vue3_Component_Library/actions/workflows/pipeline.yml)
[![CodeFactor](https://www.codefactor.io/repository/github/jackdomleo7/vue3_component_library/badge)](https://www.codefactor.io/repository/github/jackdomleo7/vue3_component_library)

## Tech Stack

**Client:** Vue3, Vite, TypeScript, Rollup, pnpm, ESLint, Prettier, Stylelint

## Installation

Install @jackdomleo7/vue3-library

npm

```bash
  npm install @jackdomleo7/vue3-library
```

yarn

```bash
  yarn add @jackdomleo7/vue3-library
```

pnpm

```bash
  pnpm install @jackdomleo7/vue3-library
```

## Usage/Examples

Basic usage

`App.vue`

```typescript
import '@jackdomleo7/vue3-library/dist/style.css'
```

Any component

```typescript
import { JComponent } from '@jackdomleo7/vue3-library'
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

Run & watch test suite via a UI

```bash
  pnpm run test:watch
```

Open test suite coverage repository

```bash
  pnpm run test:update
```
