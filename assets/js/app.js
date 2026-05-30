(function(){
  const data = window.CORRE4;
  const $ = (s)=>document.querySelector(s);
  const $$ = (s)=>Array.from(document.querySelectorAll(s));
  if(!data) return;

  if($('#title')) $('#title').textContent = data.produto;
  if($('#subtitle')) $('#subtitle').textContent = data.subtitulo;

  const metricGrid = $('#metricGrid');
  if(metricGrid){
    metricGrid.innerHTML = data.ficha.slice(0,8).map(([k,v])=>`<div class="metric"><small>${k}</small><strong>${v}</strong></div>`).join('');
  }

  const fichaBody = $('#fichaBody');
  if(fichaBody){
    fichaBody.innerHTML = data.ficha.map(([k,v])=>`<tr><td>${k}</td><td>${v}</td></tr>`).join('');
  }

  const resumo = $('#resumoProduto');
  if(resumo) resumo.textContent = data.resumo;

  const techKeys = Object.keys(data.tecnologias);
  const tabs = $('#tabs');
  const partInfo = $('#partInfo');
  function selectPart(key){
    const item = data.tecnologias[key];
    if(!item) return;
    $$('.tab').forEach(b=>b.classList.toggle('active', b.dataset.part===key));
    $$('.hotspot').forEach(h=>h.classList.toggle('active', h.dataset.part===key));
    if(partInfo){
      partInfo.innerHTML = `<h3>${item.titulo}</h3><p>${item.texto}</p><p><strong>Como vender:</strong> ${item.venda}</p>`;
    }
  }
  if(tabs){
    tabs.innerHTML = techKeys.map((k,i)=>`<button class="tab ${i===0?'active':''}" data-part="${k}">${data.tecnologias[k].titulo.split('•')[0].trim()}</button>`).join('');
    $$('.tab').forEach(btn=>btn.addEventListener('click',()=>selectPart(btn.dataset.part)));
    selectPart(techKeys[0]);
  }
  $$('.hotspot').forEach(h=>h.addEventListener('click',()=>selectPart(h.dataset.part)));

  const acc = $('#accordionInfo');
  if(acc){
    acc.innerHTML = [
      ['Indicações', `<ul>${data.indicacoes.map(i=>`<li>${i}</li>`).join('')}</ul>`],
      ['Observações técnicas', `<ul>${data.observacoes.map(i=>`<li>${i}</li>`).join('')}</ul>`],
      ['Estratégia comercial', 'A ideia comercial fica mais forte quando o GLB profissional substituir o modelo temporário e quando o módulo de medição por régua/QR entrar. O sistema já separa visualização, comparação e provador para virar um produto vendável.']
    ].map(([t,b],i)=>`<details class="acc" ${i===0?'open':''}><summary>${t}</summary><div class="acc-body">${b}</div></details>`).join('');
  }

  const thumbs = $('#thumbs');
  if(thumbs){
    const imgs = [
      ['assets/img/lateral-externa.jpg','Lateral externa'],
      ['assets/img/traseira.jpg','Traseira'],
      ['assets/img/topo.jpg','Topo'],
      ['assets/img/solado.jpg','Solado'],
      ['assets/img/lateral-interna.jpg','Lateral interna']
    ];
    thumbs.innerHTML = imgs.map((im,i)=>`<div class="thumb ${i===0?'active':''}" title="${im[1]}"><img src="${im[0]}" alt="${im[1]}"></div>`).join('');
  }

  const sources = $('#sources');
  if(sources){
    sources.innerHTML = data.sources.map(s=>`<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`).join('');
  }

  const viewer = $('#shoeViewer');
  $('#resetView')?.addEventListener('click',()=>{ viewer?.resetTurntableRotation?.(); viewer?.jumpCameraToGoal?.(); });
  $('#arBtn')?.addEventListener('click',()=>viewer?.activateAR?.());
  $('#arBtn2')?.addEventListener('click',()=>viewer?.activateAR?.());

  $('#speakBtn')?.addEventListener('click',()=>{
    const txt = `${data.produto}. ${data.resumo}. Categoria ${data.ficha.find(x=>x[0]==='Categoria')?.[1]}. Drop ${data.ficha.find(x=>x[0]==='Drop')?.[1]}. Cabedal ${data.ficha.find(x=>x[0]==='Cabedal')?.[1]}. Entressola ${data.ficha.find(x=>x[0]==='Entressola')?.[1]}.`;
    if(!('speechSynthesis' in window)) return alert('Este navegador não tem leitura por voz.');
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(txt); u.lang='pt-BR'; u.rate=.95; speechSynthesis.speak(u);
  });
})();
