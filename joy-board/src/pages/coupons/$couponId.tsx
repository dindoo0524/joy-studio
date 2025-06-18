import { createFileRoute, Link } from '@tanstack/react-router'
import { Layout } from '@/shared/ui/layout/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Edit, Copy, Trash2, Users, Calendar, Percent } from 'lucide-react'

export const Route = createFileRoute('/coupons/$couponId')({
  component: CouponDetail,
})

// Mock data - 실제로는 API에서 가져올 데이터
const mockCouponDetail = {
  id: 1,
  name: '신규 가입 할인',
  code: 'WELCOME10',
  description: '신규 가입 고객을 위한 특별 할인 쿠폰입니다. 첫 구매 시 10% 할인 혜택을 제공합니다.',
  discountType: 'percentage',
  discountValue: 10,
  maxDiscount: 50000,
  minOrderAmount: 10000,
  status: 'active',
  usedCount: 45,
  totalCount: 100,
  startDate: '2024-06-01',
  endDate: '2024-12-31',
  createdAt: '2024-06-01 10:30:00',
  updatedAt: '2024-06-18 14:20:00'
}

const recentUsages = [
  {
    id: 1,
    userId: 'user001',
    userName: '김철수',
    usedAt: '2024-06-18 10:30:00',
    orderAmount: 25000,
    discountAmount: 2500
  },
  {
    id: 2,
    userId: 'user002',
    userName: '이영희',
    usedAt: '2024-06-18 09:15:00',
    orderAmount: 45000,
    discountAmount: 4500
  },
  {
    id: 3,
    userId: 'user003',
    userName: '박민수',
    usedAt: '2024-06-17 18:45:00',
    orderAmount: 15000,
    discountAmount: 1500
  }
]

function CouponDetail() {
  const { couponId } = Route.useParams()
  const coupon = mockCouponDetail // 실제로는 couponId로 데이터 fetch

  const usagePercentage = (coupon.usedCount / coupon.totalCount) * 100

  return (
    <Layout 
      title="쿠폰 상세" 
      description={`${coupon.name} 쿠폰의 상세 정보입니다`}
    >
      <div className="mb-6">
        <Link to="/coupons">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            쿠폰 목록으로 돌아가기
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 기본 정보 */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">{coupon.name}</CardTitle>
                  <CardDescription className="text-lg mt-2">
                    코드: <span className="font-mono font-semibold">{coupon.code}</span>
                  </CardDescription>
                </div>
                <Badge 
                  variant={coupon.status === 'active' ? 'default' : 'secondary'}
                  className="text-sm px-3 py-1"
                >
                  {coupon.status === 'active' ? '활성' : '비활성'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">{coupon.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Percent className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-sm text-gray-500">할인 정보</p>
                      <p className="font-semibold">
                        {coupon.discountValue}% 할인 (최대 ₩{coupon.maxDiscount.toLocaleString()})
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-sm text-gray-500">사용 현황</p>
                      <p className="font-semibold">
                        {coupon.usedCount} / {coupon.totalCount} 사용
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="text-sm text-gray-500">유효 기간</p>
                      <p className="font-semibold">
                        {coupon.startDate} ~ {coupon.endDate}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500 mb-2">최소 주문 금액</p>
                    <p className="font-semibold">₩{coupon.minOrderAmount.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">사용률</span>
                  <span className="text-sm font-medium">{usagePercentage.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-blue-500 h-3 rounded-full transition-all duration-300" 
                    style={{ width: `${usagePercentage}%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 최근 사용 내역 */}
          <Card>
            <CardHeader>
              <CardTitle>최근 사용 내역</CardTitle>
              <CardDescription>최근 쿠폰을 사용한 고객들의 내역입니다</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUsages.map((usage) => (
                  <div key={usage.id} className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{usage.userName}</p>
                      <p className="text-sm text-gray-500">ID: {usage.userId}</p>
                      <p className="text-xs text-gray-400">{usage.usedAt}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">주문 금액</p>
                      <p className="font-semibold">₩{usage.orderAmount.toLocaleString()}</p>
                      <p className="text-sm text-blue-600">-₩{usage.discountAmount.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 액션 버튼들 */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>관리 작업</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/coupons/form" search={{ id: coupon.id }}>
                <Button className="w-full">
                  <Edit className="w-4 h-4 mr-2" />
                  쿠폰 수정
                </Button>
              </Link>
              
              <Button variant="outline" className="w-full">
                <Copy className="w-4 h-4 mr-2" />
                쿠폰 복사
              </Button>
              
              <Button variant="destructive" className="w-full">
                <Trash2 className="w-4 h-4 mr-2" />
                쿠폰 삭제
              </Button>
            </CardContent>
          </Card>

          {/* 통계 정보 */}
          <Card>
            <CardHeader>
              <CardTitle>상세 통계</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{coupon.usedCount}</p>
                <p className="text-sm text-gray-500">총 사용 횟수</p>
              </div>
              
              <Separator />
              
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">
                  ₩{(recentUsages.reduce((sum, usage) => sum + usage.discountAmount, 0)).toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">총 할인 금액</p>
              </div>
              
              <Separator />
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">생성일</span>
                  <span>{coupon.createdAt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">수정일</span>
                  <span>{coupon.updatedAt}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}