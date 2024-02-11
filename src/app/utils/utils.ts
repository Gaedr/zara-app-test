import { Shelf } from "../interfaces/shelf";

export const checkShelvesAreValid = (shelves: Shelf[]): boolean => {
  return shelves.length > 0 && shelves.every(shelf => checkShelfIsValid(shelf));
}

export const checkShelfIsValid = (shelf: Shelf): boolean => {
  return shelf.template !== 'none' && shelf.products.length > 0 && shelf.products.length <= 3;
}
