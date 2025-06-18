import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './app/index'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

// 라우터 초기화
await router.load()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <TanStackRouterDevtools router={router} />
  </StrictMode>,
)
