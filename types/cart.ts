export interface Product {
  reference: any
  id: string
  name: string
  price: string // Keep as string to match your current implementation
  images: string[]
}

export interface CartItem {
  product: Product
  quantity: number
}

