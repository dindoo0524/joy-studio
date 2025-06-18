import { Layout } from '@/shared/ui/layout/layout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/analytics')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Layout title="통계" description="통계 페이지">
    Analyrics Page
  </Layout>
}
