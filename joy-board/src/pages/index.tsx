import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        {/* 헤더 섹션 */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <span className="text-3xl">✨</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Joy's Studio
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            창의적인 아이디어를 현실로 만드는 공간에 오신 것을 환영합니다
          </p>
        </div>

        {/* 네비게이션 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <CardTitle className="text-xl">대시보드</CardTitle>
              <CardDescription>
                프로젝트 현황과 통계를 한눈에 확인하세요
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                <Link to="/dashboard">대시보드 보기</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <CardTitle className="text-xl">쿠폰 관리</CardTitle>
              <CardDescription>
                쿠폰 목록을 확인하고 새로운 쿠폰을 생성하세요
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                <Link to="/coupons">쿠폰 목록</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <CardTitle className="text-xl">쿠폰 생성</CardTitle>
              <CardDescription>
                새로운 쿠폰을 만들고 설정을 관리하세요
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
                <Link to="/coupons/form" search={{ id: undefined }}>쿠폰 만들기</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* 추가 기능 링크들 */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button variant="outline" asChild className="border-gray-300 hover:bg-gray-50">
            <Link to="/users">사용자 관리</Link>
          </Button>
          <Button variant="outline" asChild className="border-gray-300 hover:bg-gray-50">
            <Link to="/analytics">분석</Link>
          </Button>
          <Button variant="outline" asChild className="border-gray-300 hover:bg-gray-50">
            <Link to="/settings">설정</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}