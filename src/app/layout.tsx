import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "화음 법무법인 | 국가연구개발사업 제재처분 분쟁 전담센터",
    template: "%s | 화음 법무법인"
  },
  description: "국가연구개발사업 제재처분 분쟁 전문 법무법인 화음. 10년+ 경험의 전문 변호사가 연구자의 권익을 보호합니다. 이의신청, 소송대리, 집행정지까지 원스톱 서비스 제공.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.svg',
  },
  keywords: [
    "국가연구개발사업",
    "제재처분",
    "분쟁",
    "법무법인",
    "화음",
    "이의신청",
    "소송대리",
    "집행정지",
    "연구개발",
    "R&D",
    "과학기술정보통신부",
    "제재처분위원회",
    "연구자권익보호",
    "참여제한",
    "제재부가금",
    "정재권변호사"
  ],
  authors: [{ name: "법무법인 화음" }],
  creator: "법무법인 화음",
  publisher: "법무법인 화음",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://hwaum-law-website.vercel.app',
    siteName: '화음 법무법인',
    title: '화음 법무법인 | 국가연구개발사업 제재처분 분쟁 전담센터',
    description: '국가연구개발사업 제재처분 분쟁 전문 법무법인 화음. 10년+ 경험의 전문 변호사가 연구자의 권익을 보호합니다.',
    images: [
      {
        url: 'https://hwaum-law-website.vercel.app/og-image.jpg',
        width: 1200,
        height: 1200,
        alt: '화음 법무법인 - 국가연구개발사업 제재처분 분쟁 전담센터',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '화음 법무법인 | 국가연구개발사업 제재처분 분쟁 전담센터',
    description: '국가연구개발사업 제재처분 분쟁 전문 법무법인 화음. 10년+ 경험의 전문 변호사가 연구자의 권익을 보호합니다.',
    images: ['https://hwaum-law-website.vercel.app/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
    other: {
      'naver-site-verification': 'naver-verification-code',
    },
  },
  alternates: {
    canonical: 'https://hwaum-law-website.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
