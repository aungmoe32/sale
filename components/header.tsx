import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header({ openCart }: { openCart: () => void }) {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold">
          ShopUI
        </Link>
        <nav className="hidden space-x-4 md:flex">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/products" className="text-sm font-medium transition-colors hover:text-primary">
            Products
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
        </nav>
        <Button variant="outline" size="icon" onClick={openCart}>
          <ShoppingCart className="h-4 w-4" />
          <span className="sr-only">Open cart</span>
        </Button>
      </div>
    </header>
  )
}

