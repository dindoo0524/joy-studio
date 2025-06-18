import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { Layout } from '@/shared/ui/layout/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Plus, Edit, Copy, Eye } from 'lucide-react'

export const Route = createFileRoute('/coupons/')({
  component: CouponList,
})

const mockCoupons = [
  {
    id: 1,
    name: '신규 가입 할인',
    code: 'WELCOME10',
    discount: '10%',
    status: 'active',
    usedCount: 45,
    totalCount: 100,
    expiryDate: '2024-12-31'
  },
  {
    id: 2,
    name: '여름 시즌 특가',
    code: 'SUMMER20',
    discount: '20%',
    status: 'active',
    usedCount: 23,
    totalCount: 50,
    expiryDate: '2024-08-31'
  },
  {
    id: 3,
    name: '첫 구매 혜택',
    code: 'FIRST15',
    discount: '15%',
    status: 'expired',
    usedCount: 89,
    totalCount: 100,
    expiryDate: '2024-05-31'
  }
]

function CouponList() {
  return (
    <>
      <Layout title="쿠폰 관리" description="쿠폰을 생성하고 관리하세요">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold">쿠폰 목록</h2>
            <p className="text-sm text-gray-500">총 {mockCoupons.length}개의 쿠폰</p>
          </div>
          <Link to="/coupons/form" search={{ id: undefined }}>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              새 쿠폰 만들기
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCoupons.map((coupon) => (
            <Card key={coupon.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{coupon.name}</CardTitle>
                    <CardDescription className="mt-1">
                      코드: {coupon.code}
                    </CardDescription>
                  </div>
                  <Badge 
                    variant={coupon.status === 'active' ? 'default' : 'secondary'}
                  >
                    {coupon.status === 'active' ? '활성' : '만료'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">할인율</span>
                    <span className="font-semibold text-blue-600">{coupon.discount}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">사용량</span>
                    <span className="text-sm">
                      {coupon.usedCount} / {coupon.totalCount}
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${(coupon.usedCount / coupon.totalCount) * 100}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">만료일</span>
                    <span className="text-sm">{coupon.expiryDate}</span>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <Link to="/coupons/$couponId" params={{ couponId: coupon.id.toString() }}>
                      <Button variant="outline" size="sm">
                        <Eye className="w-3 h-3 mr-1" />
                        보기
                      </Button>
                    </Link>
                    <Link to="/coupons/form" search={{ id: coupon.id }}>
                      <Button variant="outline" size="sm">
                        <Edit className="w-3 h-3 mr-1" />
                        수정
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      <Copy className="w-3 h-3 mr-1" />
                      복사
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Layout>
      <Outlet />
    </>
  )
} 