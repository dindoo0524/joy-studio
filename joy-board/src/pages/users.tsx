import { Layout } from '@/shared/ui/layout/layout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/users')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Layout title="사용자 관리" description="사용자 페이지">
    Users Page
  </Layout>
}
