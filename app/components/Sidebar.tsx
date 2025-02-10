"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Package, Truck, MessageSquare, AlertTriangle, BarChart2, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: Package, label: "Orders", href: "/orders" },
  { icon: Truck, label: "Deliveries", href: "/deliveries" },
  { icon: MessageSquare, label: "Customer Interaction", href: "/customers" },
  { icon: AlertTriangle, label: "Escalations", href: "/escalations" },
  { icon: BarChart2, label: "Reports", href: "/reports" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="bg-white w-64 min-h-screen flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800">Sales Dashboard</h1>
      </div>
      <nav className="flex-1">
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100",
                  pathname === item.href && "bg-gray-100 text-blue-600 font-semibold",
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

