import { AbstractClassBuilder } from "./AbstractClassBuilder"

class BootstrapClassBuilder extends AbstractClassBuilder {
  primaryButton() {
    this.className += " btn btn-primary"
    return this
  }
}

export { BootstrapClassBuilder }
