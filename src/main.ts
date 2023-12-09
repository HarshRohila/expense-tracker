import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { renderTemplate, safeInnerHtml } from './utils/index.ts'
// Import our custom CSS
import './scss/styles.scss'
// Import all of Bootstrap's JS
import 'bootstrap'
import { expenseForm } from './expenseForm/index.ts'

const html = `
<div class="container">
  <button class="btn btn-primary">Primary button</button>
  <a href="https://vitejs.dev" target="_blank">
    <img src="${viteLogo}" class="logo" alt="Vite logo" />
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
  </a>
</div>
`

const appEl = document.querySelector<HTMLDivElement>('#app')

safeInnerHtml(appEl!, html)


let containerEl = document.querySelector(".container")

renderTemplate(containerEl!, expenseForm)
