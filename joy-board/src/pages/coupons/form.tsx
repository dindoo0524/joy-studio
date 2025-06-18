import { createFileRoute, Link } from '@tanstack/react-router'
import { Layout } from '@/shared/ui/layout/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowLeft, Save } from 'lucide-react'

export const Route = createFileRoute('/coupons/form')({
  component: CouponForm,
  validateSearch: (search: Record<string, unknown>) => ({
    id: search.id === undefined ? undefined : Number(search.id),
  }),
})

function CouponForm() {
  const { id } = Route.useSearch()
  const isEdit = !!id

  return (
    <Layout 
      title={isEdit ? '쿠폰 수정' : '새 쿠폰 만들기'} 
      description={isEdit ? '쿠폰 정보를 수정하세요' : '새로운 쿠폰을 생성하세요'}
    >
      <div className="mb-6">
        <Link to="/coupons">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            쿠폰 목록으로 돌아가기
          </Button>
        </Link>
      </div>

      <div className="max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>{isEdit ? '쿠폰 정보 수정' : '쿠폰 정보 입력'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="couponName">쿠폰명</Label>
                <Input 
                  id="couponName" 
                  placeholder="예: 신규 가입 할인"
                  defaultValue={isEdit ? "신규 가입 할인" : ""}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="couponCode">쿠폰 코드</Label>
                <Input 
                  id="couponCode" 
                  placeholder="예: WELCOME10"
                  defaultValue={isEdit ? "WELCOME10" : ""}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">설명</Label>
              <Textarea 
                id="description" 
                placeholder="쿠폰에 대한 설명을 입력하세요"
                defaultValue={isEdit ? "신규 가입 고객을 위한 할인 쿠폰입니다." : ""}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="discountType">할인 유형</Label>
                <Select defaultValue={isEdit ? "percentage" : ""}>
                  <SelectTrigger>
                    <SelectValue placeholder="할인 유형 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="percentage">퍼센트 할인</SelectItem>
                    <SelectItem value="fixed">고정 금액 할인</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="discountValue">할인 값</Label>
                <Input 
                  id="discountValue" 
                  type="number" 
                  placeholder="10"
                  defaultValue={isEdit ? "10" : ""}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="maxDiscount">최대 할인 금액</Label>
                <Input 
                  id="maxDiscount" 
                  type="number" 
                  placeholder="50000"
                  defaultValue={isEdit ? "50000" : ""}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="totalCount">총 발행 수량</Label>
                <Input 
                  id="totalCount" 
                  type="number" 
                  placeholder="100"
                  defaultValue={isEdit ? "100" : ""}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="minOrderAmount">최소 주문 금액</Label>
                <Input 
                  id="minOrderAmount" 
                  type="number" 
                  placeholder="10000"
                  defaultValue={isEdit ? "10000" : ""}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startDate">시작일</Label>
                <Input 
                  id="startDate" 
                  type="date"
                  defaultValue={isEdit ? "2024-06-01" : ""}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="endDate">만료일</Label>
                <Input 
                  id="endDate" 
                  type="date"
                  defaultValue={isEdit ? "2024-12-31" : ""}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">상태</Label>
              <Select defaultValue={isEdit ? "active" : "draft"}>
                <SelectTrigger>
                  <SelectValue placeholder="상태 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">임시저장</SelectItem>
                  <SelectItem value="active">활성화</SelectItem>
                  <SelectItem value="inactive">비활성화</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-3 pt-4">
              <Button className="flex-1">
                <Save className="w-4 h-4 mr-2" />
                {isEdit ? '수정하기' : '생성하기'}
              </Button>
              <Link to="/coupons">
                <Button variant="outline">
                  취소
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}