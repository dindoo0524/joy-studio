import type { ReactNode } from 'react'
import { Sidebar } from './sidebar'
import { Header } from './header'

interface LayoutProps {
  children: ReactNode
  title: string
  description?: string
}

export function Layout({ children, title, description }: LayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={title} description={description} />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}