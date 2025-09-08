import { Button } from "@/components/ui/button"
import { Scale, Phone } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
          alt="모던 건축물 배경"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-dark/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Scale className="w-20 h-20 mx-auto mb-6 text-accent drop-shadow-lg" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white drop-shadow-2xl whitespace-nowrap" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)'}}>
              <span className="block sm:inline">국가연구개발사업 제재처분 분쟁</span>{' '}
              <span className="block sm:inline whitespace-nowrap">전담센터</span>
            </h1>
            
            <div className="w-32 h-1 bg-accent mx-auto mb-6 shadow-lg"></div>
            
            <p className="text-xl md:text-2xl font-light mb-10 text-white drop-shadow-2xl max-w-3xl mx-auto" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)'}}>
              법률사무소 화음이 전문성과 신뢰로 연구자의 권익을 보호합니다
            </p>
            
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold border-2 border-accent transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                전화 상담: 1577-6421
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-light/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-light/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
