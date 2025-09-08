import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle, Clock, MapPin, AlertCircle } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-dark mb-4">상담 및 문의</h2>
            <div className="w-32 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Phone Consultation Card */}
            <Card className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:scale-105 hover:-translate-y-1">
              <CardHeader className="text-center bg-light rounded-t-lg">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-dark">
                  전화 상담
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xl font-bold text-dark">1577-6421</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-dark/10 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary-dark" />
                  </div>
                  <span className="text-dark">평일 09:00-18:00</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-dark">긴급시 24시간</span>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 transition-all duration-300 hover:scale-105">
                  전화상담 신청
                </Button>
              </CardContent>
            </Card>
            
            {/* Online Consultation Card */}
            <Card className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100 hover:scale-105 hover:-translate-y-1">
              <CardHeader className="text-center bg-light rounded-t-lg">
                <div className="w-16 h-16 bg-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-dark">
                  온라인 상담
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-dark">카카오톡 상담</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-dark">
                    jk.jung@<br />
                    hwaumlaw.com
                  </div>
                </div>
                
                <div className="h-6"></div>
                
                <Button className="w-full bg-primary-dark hover:bg-accent text-white font-semibold py-3 transition-all duration-300 hover:scale-105">
                  온라인 상담
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Location Information */}
          <Card className="bg-white shadow-lg border-0">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 text-center md:text-left">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg text-dark">
                  <strong>오시는 길:</strong> 서울 강남구 논현로71길 10, 써밋빌딩 4층 (역삼역 2번출구)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
