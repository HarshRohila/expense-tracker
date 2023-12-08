import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { safeInnerHtml } from './utils/index.ts'
// Import our custom CSS
import './scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const html = `
<div>
  <button class="btn btn-primary">Primary button</button>
  <a href="https://vitejs.dev" target="_blank">
    <img src="${viteLogo}" class="logo" alt="Vite logo" />
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
  </a>
  <h1>Vite + TypeScript</h1>
  <div class="card">
    <button id="counter" type="button"></button>
  </div>
  <p class="read-the-docs">
    Click on the Vite and TypeScript logos to learn more
  </p>
</div>
`

const appEl = document.querySelector<HTMLDivElement>('#app')

safeInnerHtml(appEl!, html)

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
