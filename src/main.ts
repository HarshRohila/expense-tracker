import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { safeInnerHtml } from './utils/index.ts'
// Import our custom CSS
import './scss/styles.scss'
// Import all of Bootstrap's JS
import 'bootstrap'

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

let testForm = `
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
`

let containerEl = document.querySelector(".container")

safeInnerHtml(containerEl!, testForm)
