#!/bin/bash

# R&D 관련 Hero 이미지 전환 스크립트
# 사용법: ./update-rd-hero.sh 1 (옵션 1), ./update-rd-hero.sh 2 (옵션 2), ./update-rd-hero.sh 3 (옵션 3)

case $1 in
  1)
    echo "R&D 옵션 1: 현대적인 연구실 환경 적용 중..."
    sed -i 's|src="https://images.unsplash.com/.*"|src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3\&auto=format\&fit=crop\&w=2340\&q=80"|' src/components/hero-section.tsx
    ;;
  2)
    echo "R&D 옵션 2: 첨단 기술 연구 적용 중..."
    sed -i 's|src="https://images.unsplash.com/.*"|src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3\&auto=format\&fit=crop\&w=2340\&q=80"|' src/components/hero-section.tsx
    ;;
  3)
    echo "R&D 옵션 3: 생명과학 연구실 적용 중..."
    sed -i 's|src="https://images.unsplash.com/.*"|src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3\&auto=format\&fit=crop\&w=2340\&q=80"|' src/components/hero-section.tsx
    ;;
  *)
    echo "R&D Hero 이미지 전환 도구"
    echo "사용법: $0 [1|2|3]"
    echo ""
    echo "1: 현대적인 연구실 환경 (현재 적용됨)"
    echo "2: 첨단 기술 연구"
    echo "3: 생명과학 연구실"
    echo ""
    echo "각 이미지는 국가연구개발사업 제재처분 전문성을 나타냅니다."
    ;;
esac
