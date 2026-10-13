const projects={
  "performance": {
    "name": "공연 추천 웹 앱",
    "category": "송암전 출품작 · 첫 Google Apps Script 작업",
    "description": "처음으로 Google Apps Script를 사용해 만든 웹 앱으로, 학원 송암전에 출품한 작품입니다. Gemini API를 활용해 공연을 추천받는 기능을 구현하고, 여러 공공 API의 데이터를 받아와 페이지에 표시했습니다.",
    "facts": [
      [
        "작업 도구",
        "Google Apps Script · Gemini API · 공공 API"
      ],
      [
        "구현한 기능",
        "Gemini API 기반 공연 추천, 공공 API 데이터 수집·화면 표시"
      ],
      [
        "출품",
        "학원 송암전"
      ]
    ],
    "notice": "현재 /dev 링크는 스크립트 편집 권한이 필요한 개발용 주소입니다. 공개 실행 화면은 제공되지 않으며, 아래 버튼으로 이동하면 접근이 제한될 수 있습니다.",
    "url": "https://script.google.com/macros/s/AKfycbxqy34KSV9NANe2b9LFfYUOrryuXoT44LO1YNdGf3A/dev"
  },
  "outing": {
    "name": "나들플랜",
    "category": "팀 프로젝트 · 3명 · 1개월",
    "image": "assets/outing.jpg",
    "description": "지역·날씨에 맞는 나들이 정보와 장소·문화행사를 탐색하는 팀 프로젝트입니다. 3명이 1개월 동안 진행했으며, 저는 백엔드를 맡아 팀장을 서포트하는 역할을 담당했습니다.",
    "facts": [
      [
        "제작 기간",
        "1개월"
      ],
      [
        "팀 구성",
        "3명"
      ],
      [
        "내 역할",
        "백엔드 개발 · 팀장 서포트"
      ]
    ],
    "url": "https://wa26bteam02.yjjob.kr/"
  },
  "cafe": {
    "name": "카페온 · CafeOn",
    "category": "팀 프로젝트 · 3명 · 1개월",
    "image": "assets/cafe-phone.jpg",
    "description": "카페의 위치와 혼잡도를 확인하는 지도 서비스입니다. 3명이 1개월 동안 함께 만들었으며, 저는 백엔드의 기능 동작을 구현하고 데이터 관리 흐름을 설계했습니다.",
    "facts": [
      [
        "제작 기간",
        "1개월"
      ],
      [
        "팀 구성",
        "3명"
      ],
      [
        "내 역할",
        "백엔드 기능 구현 · 데이터 관리 흐름 설계"
      ]
    ],
    "url": "https://team-project-five-pink.vercel.app/map"
  },
  "movie": {
    "name": "Movie Pick",
    "category": "개인 프로젝트 · React / Next.js",
    "image": "assets/movie.jpg",
    "description": "React와 Next.js를 기반으로 혼자 제작하고 Vercel 배포까지 진행한 웹페이지입니다. API를 통해 JSON 데이터를 불러와 다루고, 받아온 정보를 페이지에 표시하는 과정을 연습했습니다.",
    "facts": [
      [
        "제작 방식",
        "1인 작업"
      ],
      [
        "작업 도구",
        "React · Next.js · API · JSON · Vercel"
      ],
      [
        "직접 작업",
        "페이지 제작 · API 데이터 처리와 화면 표시 · 배포"
      ]
    ],
    "url": "https://for-js-practice-ad3d.vercel.app/"
  },
  "blog": {
    "name": "아방로그",
    "category": "PHP 기반 블로그 · 학습 프로젝트",
    "image": "assets/blog.jpg",
    "description": "PHP로 설계한 블로그입니다. 프런트엔드와 백엔드의 개념을 익히던 초기 단계에서 시작해, 구현 과정에서 여러 문제에 부딪히고 해결하며 배운 프로젝트입니다.",
    "facts": [
      [
        "작업 도구",
        "PHP"
      ],
      [
        "학습 과정",
        "블로그를 직접 만들며 화면과 서버의 역할을 이해"
      ],
      [
        "작업의 의미",
        "구현 중 마주친 문제를 해결하며 학습한 경험"
      ]
    ],
    "url": "https://cafeon.dothome.co.kr/"
  }
};
const performanceFlow="<div class=\"function-flow\" aria-label=\"공공 API에서 데이터를 받아 Gemini API로 공연 추천\"><div><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"/><path d=\"M3 5V19A9 3 0 0 0 21 19V5\"/><path d=\"M3 12A9 3 0 0 0 21 12\"/></svg><span>공공 API</span></div><b aria-hidden=\"true\">→</b><div><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z\"/><path d=\"M20 2v4\"/><path d=\"M22 4h-4\"/><circle cx=\"4\" cy=\"20\" r=\"2\"/></svg><span>Gemini API</span></div><b aria-hidden=\"true\">→</b><div><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8\"/><path d=\"M6 10V8\"/><path d=\"M6 14v1\"/><path d=\"M6 19v2\"/><rect x=\"2\" y=\"8\" width=\"20\" height=\"13\" rx=\"2\"/></svg><span>공연 추천</span></div></div>";
