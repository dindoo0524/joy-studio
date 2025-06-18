import { Link, useRouterState } from '@tanstack/react-router'
import { cn } from '@/lib/utils'
import { 
  Home, 
  Ticket, 
  Users, 
  Settings,
  BarChart3
} from 'lucide-react'

const menuItems = [
  {
    title: '대시보드',
    href: '/dashboard',
    icon: Home
  },
  {
    title: '쿠폰 관리',
    href: '/coupons',
    icon: Ticket
  },
  {
    title: '사용자 관리',
    href: '/users',
    icon: Users
  },
  {
    title: '통계',
    href: '/analytics',
    icon: BarChart3
  },
  {
    title: '설정',
    href: '/settings',
    icon: Settings
  }
]

export function Sidebar() {
  const router = useRouterState()
  const currentPath = router.location.pathname

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen">
      <div className="p-6">
        <Link to="/">
        <h1 className="text-2xl font-bold text-gray-900">Joy Studio</h1>
        <p className="text-sm text-gray-500 mt-1">관리자 페이지</p>
        </Link>
      </div>
      
      <nav className="mt-6">
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = currentPath === item.href
            
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}