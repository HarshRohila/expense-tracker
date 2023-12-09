import { Template, renderTemplate } from "."
import { expenseForm } from "../expenseForm"
import { Home } from "../home"
import { fromEvent } from "../libs/rx"

const routeMap: Record<string, Template> = {
  "": Home,
  "expense/add": expenseForm,
}

function getRoute(path: string) {
  if (!routeMap[path]) {
    throw Error(`No route found for path: ${path}`)
  }
  return routeMap[path]
}

const Router = {
  init(parentElement: Element) {
    renderTemplate(parentElement, getRoute(""))

    fromEvent(window, "hashchange").subscribe(() => {
      const path = window.location.hash
      const template = getRoute(path.replace(/^#\//, ""))

      renderTemplate(parentElement, template)
    })
  },
}

export { Router }
