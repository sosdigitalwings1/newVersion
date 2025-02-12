export interface Product {
    id: string
    name: string
    price: string // Keep as string to match your current implementation
    // Add other product properties as needed
  }
  
  export interface CartItem {
    product: Product
    quantity: number
  }
  
  