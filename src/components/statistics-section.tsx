import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users, Clock, Shield } from "lucide-react"

const stats = [
  {
    icon: Award,
    number: "10년+",
    title: "전문경력",
    description: "풍부한 노하우"
  },
  {
    icon: Users,
    number: "500+", 
    title: "고객수",
    description: "풍부한 경험"
  },
  {
    icon: Clock,
    number: "24시간",
    title: "긴급대응", 
    description: "신속한 대응"
  },
  {
    icon: Shield,
    number: "100%",
    title: "기밀보장",
    description: "완전한 보안"
  }
]

export default function StatisticsSection() {
  return (
    <section className="py-16 bg-dark text-light">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4 text-light">화음의 성과</h2>
            <div className="w-32 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index} className="bg-primary-dark/20 backdrop-blur-sm border-primary-dark/30 hover:bg-primary-dark/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-4xl font-bold text-light mb-2">
                      {stat.number}
                    </CardTitle>
                    <h3 className="text-xl font-semibold text-light">
                      {stat.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="text-light/80 font-medium">
                      {stat.description}
                    </p>
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
