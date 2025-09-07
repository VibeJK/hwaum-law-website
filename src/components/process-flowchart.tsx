import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const topSteps = [
  {
    number: "1",
    title: "조사 검증",
    description: "기관 내부조사"
  },
  {
    number: "2", 
    title: "평가 단계",
    description: "평가단 구성"
  },
  {
    number: "3",
    title: "통지 단계", 
    description: "사전통지 발송"
  },
  {
    number: "4",
    title: "이의 신청",
    description: "20일 내 신청"
  }
]

const bottomSteps = [
  {
    number: "5",
    title: "확정 통보",
    description: "30일 내 결정"
  },
  {
    number: "6",
    title: "등록 공개",
    description: "통합시스템 등록"
  },
  {
    number: "7",
    title: "납부 독촉",
    description: "강제징수 절차"
  },
  {
    number: "8", 
    title: "소송 대응",
    description: "집행정지 신청"
  }
]

export default function ProcessFlowchart() {
  return (
    <section id="process" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-dark mb-4">제재처분 및 이의신청 절차</h2>
            <div className="w-32 h-1 bg-primary mx-auto"></div>
          </div>
          
          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {topSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-white/90 backdrop-blur-sm border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-primary/40">
                  <CardHeader className="text-center pb-2">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>
                    <CardTitle className="text-lg font-bold text-dark">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="text-sm text-dark/70 font-medium">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Arrow to next step */}
                {index < topSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
                
                {/* Vertical arrow down */}
                {index < topSteps.length && (
                  <div className="flex justify-center mt-4">
                    <div className="w-px h-8 bg-primary/30"></div>
                    <div className="absolute mt-6">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {bottomSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-white/90 backdrop-blur-sm border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-primary-dark/40">
                  <CardHeader className="text-center pb-2">
                    <div className="w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>
                    <CardTitle className="text-lg font-bold text-dark">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="text-sm text-dark/70 font-medium">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Arrow to next step (going right from step 5-7) */}
                {index < bottomSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary-dark" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
