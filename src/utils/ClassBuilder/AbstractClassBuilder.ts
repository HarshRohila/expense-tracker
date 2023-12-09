abstract class AbstractClassBuilder {
  protected className: string

  constructor() {
    this.className = ""
  }

  init(initialClass: string) {
    this.className = initialClass
  }

  navBar() {
    return this
  }

  primaryButton() {
    return this
  }

  fluidContainer() {
    return this
  }

  navbarBrand() {
    return this
  }

  build() {
    return this.className
  }

  getClassName() {
    return this.className
  }
}

export { AbstractClassBuilder }
