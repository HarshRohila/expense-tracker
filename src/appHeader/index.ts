import { Template } from "../utils"
import { getClassBuilder } from "../utils/ClassBuilder"

const AppHeader: Template = {
  template: `
	<nav class="${getClassBuilder().navBar().build()}">
		<div class="${getClassBuilder().fluidContainer().build()}">
			<a class="${getClassBuilder()
        .navbarBrand()
        .build()}" href="/#/">Expense Tracker</a>
		</div>
	</nav>
	`,
}

export { AppHeader }
