import { Template, renderTemplate } from "."
import { expenseForm } from "../expenseForm"
import { Home } from "../home"
import { fromEvent } from "../libs/rx"

const routeMap: Record<string, Template> = {
  "": Home,
  "expense/add": expenseForm,
}

function getTemplateForRoute(path: string) {
  path = path.replace(/^#\//, "")

  if (!routeMap[path]) {
    throw Error(`No route found for path: ${path}`)
  }
  return routeMap[path]
}

const Router = {
  init(parentElement: Element) {
    renderTemplate(parentElement, getTemplateForRoute(window.location.hash))

    fromEvent(window, "hashchange").subscribe(() => {
      const template = getTemplateForRoute(window.location.hash)

      renderTemplate(parentElement, template)
    })
  },
}

export { Router }
