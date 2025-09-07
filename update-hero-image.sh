#!/bin/bash

# 사용법: ./update-hero-image.sh 1 (옵션 1), ./update-hero-image.sh 2 (옵션 2), ./update-hero-image.sh 3 (옵션 3)

case $1 in
  1)
    echo "옵션 1: 도시 스카이라인 적용 중..."
    sed -i 's|src="https://images.unsplash.com/.*"|src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3\&auto=format\&fit=crop\&w=2340\&q=80"|' src/components/hero-section.tsx
    ;;
  2)
    echo "옵션 2: 모던 건축물 적용 중..."
    sed -i 's|src="https://images.unsplash.com/.*"|src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3\&auto=format\&fit=crop\&w=2340\&q=80"|' src/components/hero-section.tsx
    ;;
  3)
    echo "옵션 3: 전문 사무공간 적용 중..."
    sed -i 's|src="https://images.unsplash.com/.*"|src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3\&auto=format\&fit=crop\&w=2340\&q=80"|' src/components/hero-section.tsx
    ;;
  *)
    echo "사용법: $0 [1|2|3]"
    echo "1: 도시 스카이라인"
    echo "2: 모던 건축물"
    echo "3: 전문 사무공간"
    ;;
esac
