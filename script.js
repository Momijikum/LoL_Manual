// --- 検索・ハイライト ---
const search = document.getElementById('search');
function escapeReg(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}
search.addEventListener('input', ()=>{
  const q = search.value.trim();
  document.querySelectorAll('mark').forEach(m=>{m.replaceWith(document.createTextNode(m.textContent))});
  if(!q) return;
  const re = new RegExp(escapeReg(q),'ig');
  const areas = document.querySelectorAll('.content .card p, .content .card li, .role');
  areas.forEach(el=>{el.innerHTML = el.textContent.replace(re, s => `<mark>${s}</mark>`)});
});

// --- ダーク／ライト切替 ---
document.getElementById('toggleTheme').addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
});
