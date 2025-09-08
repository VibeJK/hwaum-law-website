"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const expertiseItems = [
  "과학기술정보통신부 고문변호사",
  "제재처분위원회 위원",
  "연구자권익보호위원회 위원",
  "국가연구개발 분야 10년+ 경험"
]

export default function ExpertiseSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="expertise" className="py-16 bg-gradient-to-br from-white to-slate-50">
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
                      &ldquo;제재처분으로 인하여 큰 곤란에 빠진 연구자분들 위해<br />
                      법률사무소 화음이 최선을 다해 도와드리겠습니다.&rdquo;
                    </p>
                    <footer className="text-right">
                      <span className="text-lg text-dark leading-relaxed italic">
                        - 대표변호사 정재권 -
                      </span>
                    </footer>
                  </blockquote>
                </div>
              </div>
              
              {/* 자세히 보기 Button */}
              <div className="mt-6 text-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  자세히 보기
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-dark">인사말</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Lawyer Profile Image */}
                <div className="flex-shrink-0 text-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-primary/20 mx-auto">
                    <Image
                      src="/lawyer-profile.jpg"
                      alt="대표변호사 정재권"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="prose max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                      국가연구개발사업이란 국가연구개발혁신법에 따라 중앙행정기관이 연구개발을 위하여 예산 또는 기금으로 지원하는 사업을 말합니다.
                    </p>
                    
                    <p className="text-lg leading-relaxed mb-6">
                      국가연구개발사업은 민간기업, 공공연구기관 및 대학 등 수 많은 기관에서 매우 다양한 형태로 수행하고 있습니다. 이러한 국가연구개발사업을 수행을 하면서 법령이 정하는 부정행위를 하게 되면 중앙행정기관의 장은 연구자, 연구개발기관에게 연구개발비 환수뿐 아니라 참여제한, 제재부가금의 제재처분을 부과할 수 있습니다.
                    </p>
                    
                    <p className="text-lg leading-relaxed mb-6">
                      이러한 제재처분이 부적법하거나 부당하다고 판단되는 경우 제재처분 대상자(연구자 또는 연구개발기관등)은 제재처분이 부과되기 전이라면 연구자권익보호위원회에 이의신청을 할 수 있고, 제재처분이 부과되었다면 행정법원에 집행정지 신청 및 취소소송을 제기할 수 있습니다.
                    </p>
                    
                    <p className="text-lg leading-relaxed mb-6">
                      법률사무소 화음은 국가연구개발사업 제재처분 분쟁 전담센터를 설치하여 제재처분이 부과되기 전의 특별평가 단계부터 제재처분 사전통지, 이의신청 및 법원 소송 단계까지 모든 단계에서 연구자의 권익 보호를 위한 법률서비스를 제공하고 있습니다.
                    </p>
                    
                    <p className="text-lg leading-relaxed mb-6">
                      법률사무소 화음의 국가연구개발사업 제재처분 분쟁 전담센터는 과학기술정보통신부 고문변호사이자 제재처분위원회의 위원 및 국가연구개발혁신법상의 연구자권익보호위원회의 위원으로서 활동하고 있는 대표변호사를 포함하여 해당 분야에서 많은 경험을 쌓아온 변호사들로 구성되어 있습니다.
                    </p>
                    
                    <p className="text-lg leading-relaxed mb-6">
                      너무나도 복잡한 국가연구개발 법령, 이 때문에 연구수행에 어려움을 겪고 있는 연구자들과 제재처분으로 인하여 큰 곤란에 빠진 연구자분들 위해 저희 법률사무소 화음이 최선을 다해 도와드리겠습니다.
                    </p>
                    
                    <p className="text-right text-lg leading-relaxed mt-8">
                      - 대표변호사 정재권 올림 -
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
