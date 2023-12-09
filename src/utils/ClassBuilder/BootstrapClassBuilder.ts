import { AbstractClassBuilder } from "./AbstractClassBuilder"

class BootstrapClassBuilder extends AbstractClassBuilder {
  primaryButton() {
    this.className += " btn btn-primary"
    return this
  }

  navBar() {
    this.className += " navbar bg-body-tertiary"
    return this
  }

  fluidContainer() {
    this.className += " container-fluid"
    return this
  }

  navbarBrand() {
    this.className += " navbar-brand"
    return this
  }
}

export { BootstrapClassBuilder }
