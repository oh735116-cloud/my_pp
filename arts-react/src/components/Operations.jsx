import React,{useState,useRef} from 'react';
import {phases} from '../operations.js';
export default function Operations(){
 const [active,setActive]=useState(0);
 const [checked,setChecked]=useState(()=>Object.fromEntries(phases.map(p=>[p.id,[]])));
 const tabs=useRef([]);
 const phase=phases[active],selected=checked[phase.id];
 function tabKey(event,index){
  let next;
  if(event.key==='ArrowRight')next=(index+1)%phases.length;
  else if(event.key==='ArrowLeft')next=(index+phases.length-1)%phases.length;
  else if(event.key==='Home')next=0;
  else if(event.key==='End')next=phases.length-1;
  else return;
  event.preventDefault();setActive(next);tabs.current[next].focus();
 }
 function toggle(index){setChecked(prev=>({...prev,[phase.id]:prev[phase.id].includes(index)?prev[phase.id].filter(i=>i!==index):[...prev[phase.id],index]}));}
 return <section className="operations" id="operations"><div className="section operations-inner">
  <div className="operations-copy"><span className="eyebrow">OPERATIONS / SAMPLE</span><h2>공연 운영<br/>체크리스트</h2><div className="operation-stages"><span>준비</span><i>→</i><span>진행</span><i>→</i><span>정리</span></div><span className="proposal-label">개인 제안 · 실제 운영 실적이 아닌 예시</span></div>
  <div className="cue-sheet"><div className="cue-top"><span>OPERATIONS NOTE</span><span>공연 단계별 확인</span></div>
   <div className="tabs" role="tablist" aria-label="공연 운영 단계">{phases.map((p,i)=><button ref={el=>{tabs.current[i]=el;}} key={p.id} id={'tab-'+p.id} role="tab" aria-selected={active===i} aria-controls="cue-panel" tabIndex={active===i?0:-1} onClick={()=>setActive(i)} onKeyDown={e=>tabKey(e,i)}>{p.label}</button>)}</div>
   <div id="cue-panel" role="tabpanel" aria-labelledby={'tab-'+phase.id} tabIndex={0}>{phase.items.map((label,index)=><label className="cue-item" key={phase.id+index}><input type="checkbox" checked={selected.includes(index)} onChange={()=>toggle(index)}/><span>{label}</span></label>)}</div>
   <div className="cue-bottom"><span id="cue-progress" aria-live="polite">{selected.length} / {phase.items.length} 확인</span><button id="reset-cues" onClick={()=>setChecked(prev=>({...prev,[phase.id]:[]}))}>체크 초기화</button></div>
  </div>
 </div></section>;
}
