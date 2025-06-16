import {
  createRouter,
  RouterProvider,
  Route,
  RootRoute,
} from '@tanstack/react-router'
import { lazy } from 'react'

const Root = () => <Outlet />

const rootRoute = new RootRoute({
  component: Root,
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <div>✨ Hello Joy's Studio!</div>,
})

const couponsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/coupons',
  component: lazy(() => import('@/pages/coupons/list')),
})

const routeTree = rootRoute.addChildren([indexRoute, couponsRoute])

export const router = createRouter({ routeTree })