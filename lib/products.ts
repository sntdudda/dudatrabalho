import type { Product } from "./types"

// Mock data - In a real app, this would come from your database
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    description: "Premium quality wireless headphones with noise cancellation and 30-hour battery life.",
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    stock: 50,
    rating: 4.8,
    reviews: 124,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring and GPS.",
    price: 299.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    stock: 30,
    rating: 4.6,
    reviews: 89,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "Organic Cotton T-Shirt",
    description: "Comfortable and sustainable organic cotton t-shirt available in multiple colors.",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Clothing",
    stock: 100,
    rating: 4.4,
    reviews: 67,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    name: "Professional Camera Lens",
    description: "85mm f/1.4 professional camera lens perfect for portrait photography.",
    price: 899.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    stock: 15,
    rating: 4.9,
    reviews: 45,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    name: "Ergonomic Office Chair",
    description: "Comfortable ergonomic office chair with lumbar support and adjustable height.",
    price: 449.99,
    originalPrice: 599.99,
    discount: 25,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home & Garden",
    stock: 25,
    rating: 4.7,
    reviews: 156,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "6",
    name: "Stainless Steel Water Bottle",
    description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours.",
    price: 34.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Sports",
    stock: 75,
    rating: 4.5,
    reviews: 203,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "7",
    name: "Wireless Charging Pad",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    stock: 60,
    rating: 4.3,
    reviews: 78,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "8",
    name: "Yoga Mat Premium",
    description: "Non-slip premium yoga mat with extra cushioning for comfortable practice.",
    price: 79.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Sports",
    stock: 40,
    rating: 4.6,
    reviews: 92,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

interface GetProductsOptions {
  limit?: number
  category?: string
  search?: string
}

export async function getProducts(options: GetProductsOptions = {}): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  let filteredProducts = [...mockProducts]

  if (options.category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category.toLowerCase() === options.category?.toLowerCase(),
    )
  }

  if (options.search) {
    const searchTerm = options.search.toLowerCase()
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm),
    )
  }

  if (options.limit) {
    filteredProducts = filteredProducts.slice(0, options.limit)
  }

  return filteredProducts
}

export async function getProduct(id: string): Promise<Product | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  return mockProducts.find((product) => product.id === id) || null
}
