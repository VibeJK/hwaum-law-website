import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { XCircle, DollarSign } from "lucide-react"

const penaltyTypes = [
  {
    icon: XCircle,
    title: "참여제한",
    items: [
      "국가연구개발사업 참여금지",
      "최대 10년 이내 제한", 
      "모든 국가R&D 사업 배제"
    ],
    color: "bg-accent"
  },
  {
    icon: DollarSign,
    title: "제재부가금",
    items: [
      "연구개발비 부정사용 제재",
      "기지급 연구개발비의 배수",
      "국세 강제징수 가능"
    ],
    color: "bg-primary-dark"
  }
]

export default function PenaltyTypes() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-dark mb-4">제재처분의 종류</h2>
            <div className="w-32 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {penaltyTypes.map((penalty, index) => {
              const IconComponent = penalty.icon
              return (
                <Card key={index} className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:scale-105 hover:-translate-y-1">
                  <CardHeader className="text-center bg-light rounded-t-lg pb-6">
                    <div className={`w-16 h-16 ${penalty.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-dark">
                      {penalty.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      {penalty.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-dark text-base leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
