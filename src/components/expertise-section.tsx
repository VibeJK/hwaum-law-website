import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

const expertiseItems = [
  "과학기술정보통신부 고문변호사",
  "제재처분위원회 위원",
  "연구자권익보호위원회 위원",
  "국가연구개발 분야 10년+ 경험"
]

export default function ExpertiseSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-dark mb-4">화음의 전문성</h2>
            <div className="w-32 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {expertiseItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105 border border-gray-100">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg text-dark font-medium">{item}</span>
              </div>
            ))}
          </div>
          
          <Card className="bg-light border-l-4 border-l-accent shadow-xl">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Lawyer Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg border-4 border-primary/20">
                    <Image
                      src="/lawyer-profile.jpg"
                      alt="대표변호사 정재권"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
                
                {/* Quote Content */}
                <div className="flex-1">
                  <blockquote className="text-center md:text-left">
                    <p className="text-lg text-dark leading-relaxed mb-6 italic">
                      &ldquo;복잡한 국가연구개발 법령으로 어려움을 겪는 연구자들을 위해<br />
                      법률사무소 화음이 최선을 다해 도와드리겠습니다.&rdquo;
                    </p>
                    <footer className="text-right">
                      <Badge variant="secondary" className="text-base px-6 py-3 bg-accent text-white font-semibold">
                        - 대표변호사 정재권 -
                      </Badge>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
