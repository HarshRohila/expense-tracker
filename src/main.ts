import "./style.css"
import { renderTemplate, safeInnerHtml } from "./utils/index.ts"
import "./scss/styles.scss"
import "bootstrap"
import { expenseForm } from "./expenseForm/index.ts"
import { AppHeader } from "./appHeader/index.ts"

const html = `
  ${AppHeader.template}
  <main>
    <a href="/#/expenses/add">Add Expense</a>
    <div class="container">
      <button class="btn btn-primary">Primary button</button>
    </div>
  </main>
`

const appEl = document.querySelector<HTMLDivElement>("#app")

safeInnerHtml(appEl!, html)

let containerEl = document.querySelector(".container")

renderTemplate(containerEl!, expenseForm)
