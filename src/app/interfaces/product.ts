export interface Product {
  id: string
  title: string
  img: string
  altImg?: string
  price: {
    amount: number
    currency?: string
  }
}
