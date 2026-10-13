const dialog=document.querySelector('#project-dialog');
const content=document.querySelector('#dialog-content');
let lastTrigger, closeTimer;
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
function openProject(id){
 const p=projects[id]; if(!p)return;
 clearTimeout(closeTimer);dialog.classList.remove('is-closing');
 const keys=Object.keys(projects),next=keys[(keys.indexOf(id)+1)%keys.length];
 content.innerHTML='<span class="modal-category">'+p.category+'</span><h2 class="modal-title" id="modal-title">'+p.name+'</h2><p class="modal-description">'+p.description+'</p>'+
 '<dl class="project-facts">'+p.facts.map(([k,v])=>'<div><dt>'+k+'</dt><dd>'+v+'</dd></div>').join('')+'</dl>'+
 (id==='performance'?performanceFlow:'')+
 (p.image?'<div class="modal-preview"><img src="'+p.image+'" alt="'+p.name+' 실제 서비스 화면"></div>':'')+
 '<div class="modal-actions"><a class="visit" href="'+p.url+'" target="_blank" rel="noopener noreferrer">'+(id==='performance'?'개발용 링크 열기 (권한 필요)':'실제 사이트 방문 ↗')+'</a><button class="modal-next" data-project="'+next+'">다음 작업 →</button></div>'+
 '<p class="modal-note">'+(p.notice||'화면은 기존 사이트의 캡처입니다. 팀 프로젝트 화면은 공동 결과물이며, 직접 맡은 역할은 위에 표시했습니다.')+'</p>';
 if(!dialog.open)dialog.showModal();
 dialog.scrollTop=0;document.body.style.overflow='hidden';
 document.querySelector('.close-dialog').focus({preventScroll:true});
}
function closeProject(){
 if(!dialog.open||dialog.classList.contains('is-closing'))return;
 if(reducedMotion.matches){dialog.close();return;}
 dialog.classList.add('is-closing');closeTimer=setTimeout(()=>dialog.close(),180);
}
document.addEventListener('click',e=>{
 const trigger=e.target.closest('[data-project]');
 if(trigger){if(!dialog.open)lastTrigger=trigger;openProject(trigger.dataset.project);}
});
document.querySelector('.close-dialog').addEventListener('click',closeProject);
dialog.addEventListener('cancel',e=>{e.preventDefault();closeProject();});
dialog.addEventListener('click',e=>{
 if(e.target!==dialog)return;
 const r=dialog.getBoundingClientRect();
 if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeProject();
});
dialog.addEventListener('close',()=>{
 clearTimeout(closeTimer);dialog.classList.remove('is-closing');
 document.body.style.overflow='';lastTrigger?.focus({preventScroll:true});
});
let toastTimer;
document.querySelector('.copy-link').onclick=async()=>{
 const toast=document.querySelector('.toast');
 try{await navigator.clipboard.writeText(location.href.split('#')[0]);toast.textContent='페이지 주소를 복사했어요.';}
 catch{toast.textContent='브라우저 주소창에서 주소를 복사해 주세요.';}
 toast.classList.add('show');clearTimeout(toastTimer);
 toastTimer=setTimeout(()=>toast.classList.remove('show'),2500);
};
