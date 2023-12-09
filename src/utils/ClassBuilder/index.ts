import { AbstractClassBuilder } from "./AbstractClassBuilder"
import { BootstrapClassBuilder } from "./BootstrapClassBuilder"

function getClassBuilder(): AbstractClassBuilder {
  return new BootstrapClassBuilder()
}

export { getClassBuilder }
