import { Product } from "./product";
import { Template } from "./template";

export interface Shelf {
  products: Product[]
  template?: string
}
