import { sanitize } from "../libs/htmlSanitizer";

function safeInnerHtml(el: Element, htmlString: string) {
		el.innerHTML = sanitize(htmlString)
}

export { safeInnerHtml }