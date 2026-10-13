# 공연예술 포트폴리오 (React + Vite)

공개 주소: https://oh735116-cloud.github.io/my_pp/arts/

## 실행

Node.js 24를 설치하고 이 폴더에서 실행합니다.

```sh
npm ci
npm run dev
```

개발 주소는 http://127.0.0.1:4177/ 입니다.

## 수정할 파일

| 내용 | 파일 |
| --- | --- |
| 프로젝트 상세 설명, 담당 역할, 링크 | src/projects.js |
| 첫 화면 문구, 작업 카드 제목과 배치, 헤더·푸터 | src/components/PageSections.jsx |
| 공연 체크리스트 항목 | src/operations.js |
| 체크리스트 동작 | src/components/Operations.jsx |
| 모달 내용·열기·닫기 | src/components/ProjectModal.jsx |
| 색상, 글꼴, 반응형 레이아웃 | src/styles/style.css, src/styles/redesign.css |
| 모달 애니메이션 | src/styles/modal-motion.css |
| 이미지·아이콘 파일 | public/assets/, public/favicon.svg |

카드의 짧은 소개는 PageSections.jsx에, 상세 설명은 projects.js에 있습니다.
사진을 교체할 때 두 파일의 이미지 경로도 확인하세요. public/ 아래 파일은 배포 시 최상위로 복사됩니다.
문자열에 HTML을 넣지 않아도 React가 안전하게 텍스트를 표시합니다.

## 빌드·배포

```sh
npm run build
npm run preview
```

빌드 결과는 상위 arts/ 폴더에 만들어집니다. 본문을 HTML로 미리 렌더링하고 React가 모달·체크리스트 등의 동작을 연결합니다.
이미지는 WebP이며 외부 글꼴이 늦어져도 기본 글꼴로 먼저 표시합니다.

이 저장소의 main 브랜치에 변경 사항을 push하면 .github/workflows/pages.yml이 자동으로 빌드해 배포합니다.
GitHub Actions의 Publish portfolios 실행 결과에서 배포 완료 여부를 확인할 수 있습니다.
빌드 결과나 node_modules는 커밋하지 않습니다.
같은 배포에 기존 루트 포트폴리오(/my_pp/)도 포함하여 함께 유지합니다.
기존 chatgpt.site 주소는 자동으로 갱신되지 않습니다.
