export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "법률사무소 화음",
    "alternateName": "화음 법률사무소",
    "description": "국가연구개발사업 제재처분 분쟁 전문 법률사무소. 10년 이상 경험의 전문 변호사가 연구자의 권익을 보호합니다.",
    "url": "https://hwaum-law-website.vercel.app",
    "logo": "https://hwaum-law-website.vercel.app/lawyer-profile.jpg",
    "image": "https://hwaum-law-website.vercel.app/og-image.jpg",
    "telephone": "+82-1577-6421",
    "email": "jk.jung@hwaumlaw.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "논현로71길 10, 써밋빌딩 4층",
      "addressLocality": "강남구",
      "addressRegion": "서울특별시",
      "addressCountry": "KR",
      "postalCode": "06295"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.4993,
      "longitude": 127.0361
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "South Korea"
    },
    "areaServed": "KR",
    "priceRange": "$$$$",
    "currenciesAccepted": "KRW",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "founder": {
      "@type": "Person",
      "name": "정재권",
      "jobTitle": "대표변호사",
      "worksFor": {
        "@type": "LegalService",
        "name": "법률사무소 화음"
      }
    },
    "employee": [
      {
        "@type": "Person",
        "name": "정재권",
        "jobTitle": "대표변호사",
        "description": "과학기술정보통신부 고문변호사, 제재처분위원회 위원, 연구자권익보호위원회 위원, 국가연구개발 분야 10년+ 경험"
      }
    ],
    "serviceType": [
      "국가연구개발사업 제재처분 분쟁",
      "이의신청 대리",
      "소송대리",
      "집행정지 신청",
      "연구자 권익보호"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "법률 서비스",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "사전검토",
            "description": "특별평가 단계에서의 전문 컨설팅"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "이의신청",
            "description": "재검토 요청 전문 대응"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "소송대리",
            "description": "취소소송 및 집행정지"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "사후관리", 
            "description": "권익 보호 지속 지원"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "연구자 A"
        },
        "reviewBody": "국가연구개발사업 제재처분으로 어려움을 겪고 있을 때 화음 법률사무소의 도움을 받았습니다. 전문적이고 신속한 대응으로 문제를 해결할 수 있었습니다."
      }
    ],
    "sameAs": [
      "https://github.com/VibeJK/hwaum-law-website"
    ]
  };

  const webPageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "화음 법률사무소 | 국가연구개발사업 제재처분 분쟁 전담센터",
    "description": "국가연구개발사업 제재처분 분쟁 전문 법률사무소 화음. 10년+ 경험의 전문 변호사가 연구자의 권익을 보호합니다.",
    "url": "https://hwaum-law-website.vercel.app",
    "mainEntity": organizationData,
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "홈",
          "item": "https://hwaum-law-website.vercel.app"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageData)
        }}
      />
    </>
  );
}