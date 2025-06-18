import { Layout } from '@/shared/ui/layout/layout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Layout title="설정" description="설정 페이지">
    Settings Page
  </Layout>
}
