import { createRootRoute, Outlet } from '@tanstack/react-router'

const Root = () => (
  <div className="app">
    <Outlet />
  </div>
)

export const Route = createRootRoute({
  component: Root,
})