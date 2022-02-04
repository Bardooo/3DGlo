(()=>{"use strict";const e=e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds");(()=>{let l=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,hours:Math.floor(t/3600),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();t.textContent=l.hours,o.textContent=l.minutes,n.textContent=l.seconds,l.timeRemaining>0?(l.hours<10&&(t.textContent="0"+l.hours),l.minutes<10&&(o.textContent="0"+l.minutes),l.seconds<10&&(n.textContent="0"+l.seconds)):(t.textContent="00",o.textContent="00",n.textContent="00")})()};function t({timing:e,draw:t,duration:o}){let n=performance.now();requestAnimationFrame((function l(c){let r=(c-n)/o;r>1&&(r=1);let a=e(r);t(a),r<1&&requestAnimationFrame(l)}))}setInterval(e,1e3,"16 december 2021"),e("30 october 2021"),(()=>{const e=document.querySelector("menu");document.querySelector("body").addEventListener("click",(t=>{t.target.closest(".menu")?e.classList.add("active-menu"):(!t.target.closest("menu")||t.target.closest("ul > li > a")||t.target.closest(".close-btn"))&&e.classList.remove("active-menu")}))})(),(()=>{const e=document.querySelector(".popup"),o=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-content");function l(){document.documentElement.clientWidth>=769?(o.forEach((o=>{o.addEventListener("click",(()=>{t({duration:200,timing:e=>e,draw(t){e.style.display="block",n.style.opacity=t}})}))})),e.addEventListener("click",(o=>{o.target.closest(".popup-content")&&!o.target.classList.contains("popup-close")||t({duration:200,timing:e=>e,draw(t){n.style.opacity="0",setTimeout((()=>{e.style.display="none"}),300)}})}))):(o.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",n.style.transition="",n.style.opacity=""}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none",n.style.transition="",n.style.opacity="")})))}window.addEventListener("resize",l),n.style.transition="1s",l()})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),l=document.querySelector(".calc-count"),c=document.querySelector(".calc-day"),r=document.getElementById("total");document.querySelectorAll(".calc-block > input").forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^\d]/,"")}))})),t.addEventListener("input",(t=>{t.target!==o&&t.target!==n&&t.target!==l&&t.target!==c||(()=>{const t=+o.options[o.selectedIndex].value,a=n.value;let d=0,s=1,u=1;l.value>1&&(s+=l.value/10),c.value&&c.value<5?u=2:c.value&&c.value<10&&(u=1.5),d=o.value&&n.value?e*t*a*s*u:0,r.textContent=d})()}))})(100),(()=>{let e=document.getElementById("form1-name"),t=document.getElementById("form2-name"),o=document.getElementById("form3-name"),n=document.querySelectorAll(".form-phone"),l=document.querySelectorAll(".form-email");e.addEventListener("input",(()=>{e.value=e.value.replace(/[^а-яА-ЯёЁ\-\ ]/g,"")})),t.addEventListener("input",(()=>{t.value=t.value.replace(/[^а-яА-ЯёЁ\-\ ]/g,"")})),o.addEventListener("input",(()=>{o.value=o.value.replace(/[^а-яА-ЯёЁ\-\ ]/g,"")})),n.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^\d\-\(\)]/,"")}))})),l.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^A-Za-z\@\-\_\.\!\~\*\']/,"")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const n=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===n?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");let n,l=document.querySelectorAll(".dot"),c=0;const r=(e,t,o)=>{e[t].classList.remove(o)},a=(e,t,o)=>{e[t].classList.add(o)},d=()=>{r(t,c,"portfolio-item-active"),r(l,c,"dot-active"),c++,c>=t.length&&(c=0),a(t,c,"portfolio-item-active"),a(l,c,"dot-active")},s=(e=1500)=>{n=setInterval(d,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(r(t,c,"portfolio-item-active"),r(l,c,"dot-active"),e.target.matches("#arrow-right")?c++:e.target.matches("#arrow-left")?c--:e.target.classList.contains("dot")&&l.forEach(((t,o)=>{e.target===t&&(c=o)})),c>=t.length&&(c=0),c<0&&(c=t.length-1),a(t,c,"portfolio-item-active"),a(l,c,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(n)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&s(2e3)}),!0),((e=0)=>{do{let t=document.createElement("li");t.classList.add("dot"),o.appendChild(t),l=document.querySelectorAll(".dot"),0===e&&t.classList.add("dot-active"),e++}while(e<=t.length-1)})(),s(2e3)})(),(({firstFormId:e,secondFormId:t,thiedFormId:o,someElem:n=[]})=>{document.querySelectorAll(".form-btn");const l=document.getElementById(e),c=document.getElementById(t),r=document.getElementById(o);let a=document.getElementById("form1-name"),d=document.getElementById("form2-name"),s=document.getElementById("form3-name"),u=document.getElementById("form2-message"),i=document.querySelectorAll(".form-phone"),m=document.querySelectorAll(".form-email"),v=document.querySelector("#form1-email"),p=document.querySelector("#form2-email"),y=document.querySelector("#form3-email");const f=()=>{setTimeout((()=>{a.value="",d.value="",s.value="",u.value="",i.forEach((e=>{e.value=""})),m.forEach((e=>{e.value=""}))}),200)},g=(e={})=>fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json"}}).then((e=>e.json()));l.addEventListener("submit",(e=>{e.preventDefault();const t=new FormData(l),o={};t.forEach(((e,t)=>{o[t]=e})),n.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?o[e.id]=t.textContent:o[e.id]=t.value})),""===v.value?alert("введите почту"):(g(o).then((e=>console.log(e))),f())})),c.addEventListener("submit",(e=>{e.preventDefault();const t=new FormData(c),o={};t.forEach(((e,t)=>{o[t]=e})),n.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?o[e.id]=t.textContent:o[e.id]=t.value})),""===p.value?alert("введите почту"):(g(o).then((e=>console.log(e))),f())})),r.addEventListener("submit",(e=>{e.preventDefault();const t=new FormData(r),o={};t.forEach(((e,t)=>{o[t]=e})),n.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?o[e.id]=t.textContent:o[e.id]=t.value})),""===y.value?alert("введите почту"):(g(o).then((e=>console.log(e))),f())}))})({firstFormId:"form1",secondFormId:"form2",thiedFormId:"form3",someElem:[{type:"block",id:"total"}]}),(()=>{let e=document.getElementById("form1-name"),t=document.getElementById("form2-name"),o=document.getElementById("form3-name"),n=document.getElementById("form2-message"),l=document.querySelectorAll(".form-phone");e.addEventListener("input",(()=>{e.value=e.value.replace(/[^а-яА-ЯёЁ\ ]/g,"")})),t.addEventListener("input",(()=>{t.value=t.value.replace(/[^а-яА-ЯёЁ\ ]/g,"")})),o.addEventListener("input",(()=>{o.value=o.value.replace(/[^а-яА-ЯёЁ\ ]/g,"")})),n.addEventListener("input",(()=>{n.value=n.value.replace(/[^.,!?а-яА-ЯёЁ\d\ ]/g,"")})),l.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^\d\-\(\)\+]/,"")}))}))})(),(()=>{const e=document.getElementById("scroll-btn");document.querySelectorAll("#modal-link").forEach((e=>{e.addEventListener("click",(function(t){t.preventDefault();const o=e.getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth"})}))})),e.addEventListener("click",(function(t){t.preventDefault();const o=e.getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth"})}))})()})();