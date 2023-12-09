import "./style.css"
import { safeInnerHtml } from "./utils/index.ts"
import "./scss/styles.scss"
import "bootstrap"
import { AppHeader } from "./appHeader/index.ts"
import { Router } from "./utils/Router.ts"

const html = `
  ${AppHeader.template}
  <main>
  </main>
`

const appEl = document.querySelector<HTMLDivElement>("#app")

safeInnerHtml(appEl!, html)

const mainEl = document.querySelector("main")
Router.init(mainEl!)
