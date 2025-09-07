import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileSearch, Scale, Gavel, UserCheck } from "lucide-react"

const services = [
  {
    icon: FileSearch,
    title: "사전검토",
    subtitle: "특별평가 단계",
    description: "전문 컨설팅",
    color: "bg-primary"
  },
  {
    icon: Scale,
    title: "이의신청",
    subtitle: "재검토 요청",
    description: "전문 대응",
    color: "bg-primary-dark"
  },
  {
    icon: Gavel,
    title: "소송대리",
    subtitle: "취소소송",
    description: "집행정지",
    color: "bg-accent"
  },
  {
    icon: UserCheck,
    title: "사후관리",
    subtitle: "권익 보호",
    description: "지속 지원",
    color: "bg-dark"
  }
]

export default function ServiceOverview() {
  return (
    <section className="py-16 bg-gradient-to-br from-light via-white to-light/80">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card 
                key={index} 
                className="bg-white/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border border-gray-100 shadow-md hover:scale-105 hover:-translate-y-1 hover:border-primary/30"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`mb-4 p-4 rounded-full ${service.color} inline-block mx-auto`}>
                    <IconComponent className="w-12 h-12 mx-auto text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-dark mt-4">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <div className="space-y-2">
                    <p className="text-base font-semibold text-dark/80">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-dark/60">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
