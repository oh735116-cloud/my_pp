export const projects = {
  performance: {
    name: "공연 추천 웹 앱",
    category: "송암전 출품작 · 첫 Google Apps Script 작업",
    description:
      "처음으로 Google Apps Script를 사용해 만든 웹 앱으로, 학원 송암전에 출품한 작품입니다. Gemini API를 활용해 공연을 추천받는 기능을 구현하고, 여러 공공 API의 데이터를 받아와 페이지에 표시했습니다.",
    facts: [
      ["작업 도구", "Google Apps Script · Gemini API · 공공 API"],
      [
        "구현한 기능",
        "Gemini API 기반 공연 추천, 공공 API 데이터 수집·화면 표시",
      ],
      ["출품", "학원 송암전"],
    ],
    proposal:
      "공연 정보를 모아 전달하고, 추천을 통해 관심 있는 공연을 찾도록 돕는 경험입니다. 문화예술 운영에서 관객에게 필요한 정보를 정리하고 안내하는 일에 연결하고 싶습니다.",
    notice:
      "현재 /dev 링크는 스크립트 편집 권한이 필요한 개발용 주소입니다. 공개 실행 화면은 제공되지 않으며, 아래 버튼으로 이동하면 접근이 제한될 수 있습니다.",
    url: "https://script.google.com/macros/s/AKfycbxqy34KSV9NANe2b9LFfYUOrryuXoT44LO1YNdGf3A/dev",
  },
  outing: {
    name: "나들플랜",
    category: "팀 프로젝트 · 3명 · 1개월",
    image: "assets/outing.webp",
    description:
      "지역·날씨에 맞는 나들이 정보와 장소·문화행사를 탐색하는 팀 프로젝트입니다. 3명이 1개월 동안 진행했으며, 저는 백엔드를 맡아 팀장을 서포트하는 역할을 담당했습니다.",
    facts: [
      ["제작 기간", "1개월"],
      ["팀 구성", "3명"],
      ["내 역할", "백엔드 개발 · 팀장 서포트"],
    ],
    proposal:
      "공동 작업에서 기능 구현을 맡고 프로젝트 진행을 지원한 경험을, 여러 담당자와 함께 움직이는 운영 업무에 연결하고 싶습니다. 공연장과 주변 정보를 한곳에 모아 안내하는 방식도 생각해 볼 수 있습니다.",
    url: "https://wa26bteam02.yjjob.kr/",
  },
  cafe: {
    name: "카페온 · CafeOn",
    category: "팀 프로젝트 · 3명 · 1개월",
    image: "assets/cafe-phone.webp",
    description:
      "카페의 위치와 혼잡도를 확인하는 지도 서비스입니다. 3명이 1개월 동안 함께 만들었으며, 저는 백엔드의 기능 동작을 구현하고 데이터 관리 흐름을 설계했습니다.",
    facts: [
      ["제작 기간", "1개월"],
      ["팀 구성", "3명"],
      ["내 역할", "백엔드 기능 구현 · 데이터 관리 흐름 설계"],
    ],
    proposal:
      "데이터가 어떤 흐름으로 관리되어야 하는지 설계한 경험을, 공연 관련 정보와 운영 자료를 일관된 기준으로 정리하는 업무에 연결하고 싶습니다.",
    url: "https://team-project-five-pink.vercel.app/map",
  },
  movie: {
    name: "Movie Pick",
    category: "개인 프로젝트 · React / Next.js",
    image: "assets/movie.webp",
    description:
      "React와 Next.js를 기반으로 혼자 제작하고 Vercel 배포까지 진행한 웹페이지입니다. API를 통해 JSON 데이터를 불러와 다루고, 받아온 정보를 페이지에 표시하는 과정을 연습했습니다.",
    facts: [
      ["제작 방식", "1인 작업"],
      ["작업 도구", "React · Next.js · API · JSON · Vercel"],
      ["직접 작업", "페이지 제작 · API 데이터 처리와 화면 표시 · 배포"],
    ],
    proposal:
      "외부 데이터를 화면에서 읽기 쉬운 정보로 전달하는 경험을, 공연·행사 정보를 정리하고 안내하는 작업에 활용하고 싶습니다.",
    url: "https://for-js-practice-ad3d.vercel.app/",
  },
  blog: {
    name: "아방로그",
    category: "PHP 기반 블로그 · 학습 프로젝트",
    image: "assets/blog.webp",
    description:
      "PHP로 설계한 블로그입니다. 프런트엔드와 백엔드의 개념을 익히던 초기 단계에서 시작해, 구현 과정에서 여러 문제에 부딪히고 해결하며 배운 프로젝트입니다.",
    facts: [
      ["작업 도구", "PHP"],
      ["학습 과정", "블로그를 직접 만들며 화면과 서버의 역할을 이해"],
      ["작업의 의미", "구현 중 마주친 문제를 해결하며 학습한 경험"],
    ],
    proposal:
      "낯선 도구를 실제로 다루며 배운 경험을 바탕으로, 운영 업무에서도 필요한 도구와 절차를 익히고 기록하는 태도를 이어가고 싶습니다.",
    url: "https://cafeon.dothome.co.kr/",
  },
};
