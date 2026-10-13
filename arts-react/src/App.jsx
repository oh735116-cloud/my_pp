import React, { useState, useRef, useEffect } from "react";
import {
  Header,
  Hero,
  Work,
  Closing,
  Footer,
} from "./components/PageSections.jsx";
import Operations from "./components/Operations.jsx";
import ProjectModal from "./components/ProjectModal.jsx";

export default function App() {
  const [selected, setSelected] = useState(null);
  const [toast, setToast] = useState("");
  const trigger = useRef(null),
    toastTimer = useRef(null);
  useEffect(() => () => clearTimeout(toastTimer.current), []);
  function openProject(id, element) {
    trigger.current = element;
    setSelected(id);
  }
  function finishClose() {
    setSelected(null);
    trigger.current?.focus({ preventScroll: true });
  }
  async function share() {
    try {
      await navigator.clipboard.writeText(location.href.split("#")[0]);
      setToast("포트폴리오 주소를 복사했습니다.");
    } catch {
      setToast("브라우저 주소창에서 주소를 복사해 주세요.");
    }
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2500);
  }
  return (
    <>
      <a className="skip" href="#main">
        본문 바로가기
      </a>
      <Header onShare={share} />
      <main id="main">
        <Hero />
        <Work onOpen={openProject} />
        <Operations />
        <Closing />
      </main>
      <Footer />
      {selected && (
        <ProjectModal
          projectId={selected}
          onSelect={setSelected}
          onClosed={finishClose}
        />
      )}
      <div
        className={"toast" + (toast ? " show" : "")}
        role="status"
        aria-live="polite"
      >
        {toast}
      </div>
    </>
  );
}
