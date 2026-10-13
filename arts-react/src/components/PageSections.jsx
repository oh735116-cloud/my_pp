import React from "react";

export function Header({ onOpen, onShare }) {
  return (
    <header className="header">
      <a href="#main" className="brand" aria-label="Hg 포트폴리오 첫 화면">
        Hg<span>PORTFOLIO</span>
      </a>
      <nav aria-label="주 메뉴">
        <a href="#work">작업</a>
        <a href="#operations">운영 시안</a>
      </nav>
      <button className="share" onClick={onShare}>
        링크 복사
      </button>
    </header>
  );
}

export function Hero({ onOpen, onShare }) {
  return (
    <section className="hero">
      <div className="hero-main">
        <span className="hero-kicker">HG · ARTS PORTFOLIO</span>
        <h1>
          공연 운영과
          <br />
          아트앤컬처를 위한
          <br />
          <em>포트폴리오.</em>
        </h1>
        <div className="hero-roles">
          <span>오케스트라 운영</span>
          <span>공연지원</span>
          <span>아트앤컬처 운영</span>
        </div>
        <a className="button light" href="#work">
          작업 보기 <span aria-hidden="true">↗</span>
        </a>
        <span className="hero-foot">하트하트오케스트라 지원 · 2026</span>
      </div>
      <aside className="hero-side" aria-label="비워 둔 이미지 영역">
        <span className="side-label">APPLICATION PORTFOLIO / 2026</span>
        <div className="empty-visual" aria-hidden="true"></div>
        <div className="side-bottom">
          <span>HG</span>
          <span>PERFORMING ARTS</span>
        </div>
      </aside>
    </section>
  );
}

export function Work({ onOpen, onShare }) {
  return (
    <section className="work section" id="work">
      <div className="section-heading">
        <div>
          <span className="eyebrow">SELECTED WORK / 05</span>
          <h2>작업</h2>
        </div>
        <p>상세 내용은 프로젝트를 눌러 확인할 수 있습니다.</p>
      </div>
      <article className="performance-project">
        <div className="performance-copy">
          <span className="project-type">01 · 송암전 출품</span>
          <h3>공연 추천 웹 앱</h3>
          <div className="simple-tags">
            <span>Google Apps Script</span>
            <span>Gemini API</span>
            <span>공공 API</span>
          </div>
          <button
            className="text-button"
            data-project="performance"
            onClick={(event) => onOpen("performance", event.currentTarget)}
          >
            역할과 기능 보기 <span aria-hidden="true">↗</span>
          </button>
        </div>
        <div className="performance-flow">
          <span>기능 흐름</span>
          <div className="flow-steps">
            <div>
              <b>01</b>
              <strong>공공 API</strong>
            </div>
            <i aria-hidden="true">→</i>
            <div>
              <b>02</b>
              <strong>Gemini API</strong>
            </div>
            <i aria-hidden="true">→</i>
            <div>
              <b>03</b>
              <strong>공연 추천</strong>
            </div>
          </div>
        </div>
      </article>
      <article className="lead-project">
        <button
          className="lead-screen"
          data-project="outing"
          onClick={(event) => onOpen("outing", event.currentTarget)}
          aria-label="나들플랜 상세 보기"
        >
          <div className="window-bar">
            <span className="window-dots" aria-hidden="true">
              ● ● ●
            </span>
            <span>나들플랜</span>
            <span>WEB</span>
          </div>
          <img
            src="assets/outing.webp"
            alt="나들플랜 서비스 화면"
            width="1440"
            height="1000"
            decoding="async"
            loading="lazy"
          />
        </button>
        <div className="lead-copy">
          <span className="project-type">02 · 팀 3명 · 1개월</span>
          <h3>나들플랜</h3>
          <div className="simple-tags">
            <span>백엔드</span>
            <span>팀장 지원</span>
          </div>
          <p className="compact-desc">나들이 정보·장소·문화행사 탐색</p>
          <button
            className="text-button"
            data-project="outing"
            onClick={(event) => onOpen("outing", event.currentTarget)}
          >
            역할과 기능 보기 <span aria-hidden="true">↗</span>
          </button>
        </div>
      </article>
      <div className="work-grid">
        <article className="work-card">
          <button
            className="screen cafe-screen"
            data-project="cafe"
            onClick={(event) => onOpen("cafe", event.currentTarget)}
            aria-label="카페온 상세 보기"
          >
            <img
              src="assets/cafe.webp"
              alt="카페온 지도 서비스 화면"
              loading="lazy"
              width="1440"
              height="1000"
              decoding="async"
            />
          </button>
          <div className="card-meta">
            <span>03 · 팀 3명 · 1개월</span>
            <span>BACKEND</span>
          </div>
          <h3>
            카페온 <small>CafeOn</small>
          </h3>
          <div className="simple-tags">
            <span>기능 구현</span>
            <span>데이터 관리 흐름</span>
          </div>
          <button
            className="text-button"
            data-project="cafe"
            onClick={(event) => onOpen("cafe", event.currentTarget)}
          >
            역할과 기능 보기 ↗
          </button>
        </article>
        <article className="work-card offset">
          <button
            className="screen movie-screen"
            data-project="movie"
            onClick={(event) => onOpen("movie", event.currentTarget)}
            aria-label="Movie Pick 상세 보기"
          >
            <img
              src="assets/movie.webp"
              alt="Movie Pick 서비스 화면"
              loading="lazy"
              width="1440"
              height="1000"
              decoding="async"
            />
          </button>
          <div className="card-meta">
            <span>04 · 1인 작업</span>
            <span>NEXT.JS</span>
          </div>
          <h3>Movie Pick</h3>
          <div className="simple-tags">
            <span>API · JSON</span>
            <span>Vercel 배포</span>
          </div>
          <button
            className="text-button"
            data-project="movie"
            onClick={(event) => onOpen("movie", event.currentTarget)}
          >
            역할과 기능 보기 ↗
          </button>
        </article>
      </div>
      <article className="blog-row">
        <button
          className="blog-image"
          data-project="blog"
          onClick={(event) => onOpen("blog", event.currentTarget)}
          aria-label="아방로그 상세 보기"
        >
          <img
            src="assets/blog.webp"
            alt="아방로그 블로그 화면"
            loading="lazy"
            width="1440"
            height="1000"
            decoding="async"
          />
        </button>
        <div>
          <span className="project-type">05 · 개인 학습</span>
          <h3>아방로그</h3>
          <div className="simple-tags">
            <span>PHP</span>
            <span>블로그 제작</span>
          </div>
          <button
            className="text-button"
            data-project="blog"
            onClick={(event) => onOpen("blog", event.currentTarget)}
          >
            역할과 기능 보기 ↗
          </button>
        </div>
      </article>
    </section>
  );
}

export function Closing({ onOpen, onShare }) {
  return (
    <section className="closing">
      <span className="eyebrow">HG / ARTS PORTFOLIO</span>
      <div>
        <a className="button light" href="#work">
          작업 다시 보기
        </a>
        <button className="button outline print" onClick={() => window.print()}>
          인쇄 / PDF 저장
        </button>
      </div>
    </section>
  );
}

export function Footer({ onOpen, onShare }) {
  return (
    <footer>
      <a href="#main" className="brand">
        Hg<span>PORTFOLIO</span>
      </a>
      <p>
        하트하트오케스트라 지원용 개인 포트폴리오
        <br />
        <span>재단·오케스트라의 공식 웹사이트가 아닙니다.</span>
      </p>
      <span>2026</span>
    </footer>
  );
}
