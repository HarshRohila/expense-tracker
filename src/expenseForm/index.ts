import { fromEvent } from "../libs/rx"
import type { Template } from "../utils"
import { getClassBuilder } from "../utils/ClassBuilder"
const expenseForm: Template = {
  template: `
	<form>
		<div class="mb-3" data-test="amount">
			<label for="amountInput" class="form-label">Amount</label>
			<input type="number" class="form-control" id="amountInput">
		</div>
		<button type="submit" class="${getClassBuilder()
      .primaryButton()
      .build()}">Submit</button>
	</form>
	`,
  hooks: {
    didInsertElement(el: HTMLFormElement) {
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
