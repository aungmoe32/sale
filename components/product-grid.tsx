import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Product {
  id: number
  name: string
  price: number
  image: string
}

const products: Product[] = [
  { id: 1, name: "Classic T-Shirt", price: 29.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Denim Jeans", price: 59.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Sneakers", price: 89.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Hoodie", price: 49.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 5, name: "Backpack", price: 79.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 6, name: "Watch", price: 129.99, image: "/placeholder.svg?height=200&width=200" },
]

export function ProductGrid({ addToCart }: { addToCart: (product: Product) => void }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Card key={product.id}>
          <CardHeader>
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={200}
              height={200}
              className="mx-auto rounded-md object-cover"
            />
          </CardHeader>
          <CardContent>
            <CardTitle>{product.name}</CardTitle>
            <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => addToCart(product)} className="w-full">
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

