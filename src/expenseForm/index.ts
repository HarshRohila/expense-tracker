import { fromEvent } from "../libs/rx"
import { renderTemplate, type Template } from "../utils"
import { getClassBuilder } from "../utils/ClassBuilder"
import { CategoryDropdown } from "./categoryDropdown"
const expenseForm: Template = {
  template: `
		<div class="container-sm">
			<form>
				<fieldset>
					<legend>Add Expense</legend>
				</fieldset>
				<div class="mb-3" data-test="amount">
					<label for="amountInput" class="form-label">Amount</label>
					<input type="number" placeholder="Enter number" class="form-control" id="amountInput" />
				</div>
				<div class="category-dropdown mb-3"></div>
				<button type="submit" class="${getClassBuilder().primaryButton().build()}">
					Submit
				</button>
			</form>
		</div>
	`,
  hooks: {
    didInsertElement(el: HTMLFormElement) {
      const cd = el.querySelector(".category-dropdown")
      renderTemplate(cd!, CategoryDropdown)

      fromEvent(el, "submit").subscribe((ev) => {
        ev.preventDefault()

        const amountInput = el.querySelector(
          '[data-test="amount"] input'
        )! as HTMLInputElement

        if (!amountInput.value) {
          throw Error("Amount should be something")
        }

        console.log("Success")
      })
    },
  },
}

export { expenseForm }
