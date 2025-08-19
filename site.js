
(function(){const p=(location.pathname.split('/').pop()||'index.html');document.querySelectorAll('.nav a').forEach(a=>{if(a.getAttribute('href')===p)a.classList.add('active')})})();
const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.18});
window.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('.reveal').forEach(el=>io.observe(el))});
