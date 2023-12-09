import { sanitize } from "../libs/htmlSanitizer"

interface Hooks {
  didInsertElement(el: Element): void
}

function safeInnerHtml(el: Element, htmlString: string) {
  el.innerHTML = sanitize(htmlString)
}

interface Template {
  template: string
  hooks?: Hooks
}

function renderTemplate(parentElement: Element, template: Template) {
  safeInnerHtml(parentElement, template.template)
  template.hooks?.didInsertElement(parentElement.firstElementChild!)
}

export { safeInnerHtml, renderTemplate }
export type { Template }
