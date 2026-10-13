import React, { useEffect, useRef, useState } from "react";
import { projects } from "../projects.js";

export default function ProjectModal({ projectId, onSelect, onClosed }) {
  const dialog = useRef(null),
    closeButton = useRef(null),
    timer = useRef(null);
  const [closing, setClosing] = useState(false);
  const p = projects[projectId],
    ids = Object.keys(projects);
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    dialog.current.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(timer.current);
      document.body.style.overflow = previousOverflow;
    };
  }, []);
  useEffect(() => {
    dialog.current.scrollTop = 0;
    closeButton.current.focus({ preventScroll: true });
  }, [projectId]);
  function close() {
    if (closing) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      dialog.current.close();
      return;
    }
    setClosing(true);
    timer.current = setTimeout(() => dialog.current?.close(), 180);
  }
  function backdrop(event) {
    if (event.target !== dialog.current) return;
    const r = dialog.current.getBoundingClientRect();
    if (
      event.clientX < r.left ||
      event.clientX > r.right ||
      event.clientY < r.top ||
      event.clientY > r.bottom
    )
      close();
  }
  return (
    <dialog
      ref={dialog}
      id="project-dialog"
      className={closing ? "is-closing" : ""}
      aria-labelledby="modal-title"
      onCancel={(e) => {
        e.preventDefault();
        close();
      }}
      onClose={onClosed}
      onClick={backdrop}
    >
      <button
        ref={closeButton}
        className="close"
        aria-label="상세 화면 닫기"
        onClick={close}
      >
        닫기 <span aria-hidden="true">×</span>
      </button>
      <div id="modal-content">
        <span className="modal-eyebrow">{p.category}</span>
        <h2 id="modal-title">{p.name}</h2>
        <p className="modal-description">{p.description}</p>
        <dl className="facts modal-facts">
          {p.facts.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        {p.image && (
          <div className="modal-image">
            <img
              src={p.image}
              decoding="async"
              alt={p.name + " 실제 서비스 화면"}
            />
          </div>
        )}
        {p.proposal && (
          <div className="modal-proposal">
            <h3>운영 업무 활용 아이디어</h3>
            <p>{p.proposal}</p>
          </div>
        )}
        <div className="modal-actions">
          <a
            className="button"
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {projectId === "performance"
              ? "개발용 링크 열기 (권한 필요)"
              : "실제 사이트 방문"}
          </a>
          <button
            onClick={() =>
              onSelect(ids[(ids.indexOf(projectId) + 1) % ids.length])
            }
            disabled={closing}
          >
            다음 작업 보기
          </button>
        </div>
        <p className="modal-notice">
          {p.notice ||
            "화면은 기존 배포 사이트의 캡처입니다. 팀 프로젝트의 화면은 공동 결과물이며, 위에 기재한 내 역할과 구분됩니다. 업무 활용 아이디어는 개인 제안입니다."}
        </p>
      </div>
    </dialog>
  );
}
