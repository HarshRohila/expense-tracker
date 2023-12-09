abstract class AbstractClassBuilder {
  protected className: string

  constructor() {
    this.className = ""
  }

  init(initialClass: string) {
    this.className = initialClass
  }

  primaryButton() {
    return this
  }

  build() {
    return this.className
  }
}

export { AbstractClassBuilder }
