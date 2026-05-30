(function(){
 const data=window.CORRE4; const $=s=>document.querySelector(s);
 function setViewer(id,src,status){const v=$(id), st=$(status); if(v) v.src=src||'models/corre4.glb'; if(st) st.textContent=src||'models/corre4.glb';}
 function apply(side){ const url=$('#url'+side)?.value.trim(); const file=$('#file'+side)?.files?.[0]; if(file){ setViewer('#viewer'+side, URL.createObjectURL(file), '#status'+side); return; } setViewer('#viewer'+side, url||'models/corre4.glb', '#status'+side); }
 $('#applyA')?.addEventListener('click',()=>apply('A')); $('#applyB')?.addEventListener('click',()=>apply('B'));
 $('#arA')?.addEventListener('click',()=>$('#viewerA')?.activateAR?.()); $('#arB')?.addEventListener('click',()=>$('#viewerB')?.activateAR?.());
 if(data){
  $('#fichaBody').innerHTML=data.ficha.map(([k,v])=>`<tr><td>${k}</td><td>${v}</td></tr>`).join('');
  const tech=Object.values(data.tecnologias);
  $('#sellInfo').innerHTML=tech.map((t,i)=>`<details class="acc" ${i===0?'open':''}><summary>${t.titulo}</summary><div class="acc-body"><p>${t.texto}</p><p><strong>Como vender:</strong> ${t.venda}</p></div></details>`).join('');
 }
 const speech=()=>{const txt=`Olympikus Corre 4. ${data.resumo}. Tecnologias principais: Oxitec 2.0 no cabedal, Eleva Pro 2.0 na entressola e Gripper Plus no solado. Indicado para rodagem, treinos regulares e longões.`; if(!('speechSynthesis' in window)) return alert('Sem voz neste navegador.'); speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(txt); u.lang='pt-BR'; u.rate=.95; speechSynthesis.speak(u);};
 $('#speakBtn')?.addEventListener('click',speech);
 $('#scriptBtn')?.addEventListener('click',()=>alert('Fala sugerida:\n\nEsse é o Olympikus Corre 4, um tênis de rodagem versátil. Ele combina cabedal Oxitec 2.0 para leveza e respirabilidade, entressola Eleva Pro 2.0 para conforto e resposta, e solado Gripper Plus para aderência e durabilidade. É uma opção segura para treinos diários, longões e provas.'));
})();
