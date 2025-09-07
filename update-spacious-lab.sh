#!/bin/bash

# 깨끗하고 현대적이며 넓은 실험실 배경 이미지 변경 스크립트

case "$1" in
  1)
    echo "옵션 1: 매우 깨끗한 현대식 연구실로 변경중..."
    sed -i 's|src="https://images.unsplash.com/[^"]*"|src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"|' src/components/hero-section.tsx
    sed -i 's|alt="[^"]*"|alt="매우 깨끗한 현대식 연구실"|' src/components/hero-section.tsx
    ;;
  2)
    echo "옵션 2: 미니멀한 첨단 연구소로 변경중..."
    sed -i 's|src="https://images.unsplash.com/[^"]*"|src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"|' src/components/hero-section.tsx
    sed -i 's|alt="[^"]*"|alt="미니멀한 첨단 연구소"|' src/components/hero-section.tsx
    ;;
  3)
    echo "옵션 3: 밝고 개방적인 실험실로 변경중..."
    sed -i 's|src="https://images.unsplash.com/[^"]*"|src="https://images.unsplash.com/photo-1582719470001-f4ca8a2cd2e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"|' src/components/hero-section.tsx
    sed -i 's|alt="[^"]*"|alt="밝고 개방적인 실험실"|' src/components/hero-section.tsx
    ;;
  *)
    echo "사용법: ./update-spacious-lab.sh [1|2|3]"
    echo "1 = 매우 깨끗한 현대식 연구실"
    echo "2 = 미니멀한 첨단 연구소" 
    echo "3 = 밝고 개방적인 실험실"
    exit 1
    ;;
esac

echo "배경 이미지가 변경되었습니다. 브라우저를 새로고침하세요."