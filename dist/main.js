(()=>{"use strict";const e=e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds");(()=>{let a=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,hours:Math.floor(t/3600),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();t.textContent=a.hours,o.textContent=a.minutes,n.textContent=a.seconds,a.timeRemaining>0?(a.hours<10&&(t.textContent="0"+a.hours),a.minutes<10&&(o.textContent="0"+a.minutes),a.seconds<10&&(n.textContent="0"+a.seconds)):(t.textContent="00",o.textContent="00",n.textContent="00")})()};function t({timing:e,draw:t,duration:o}){let n=performance.now();requestAnimationFrame((function a(c){let l=(c-n)/o;l>1&&(l=1);let r=e(l);t(r),l<1&&requestAnimationFrame(a)}))}setInterval(e,1e3,"16 december 2021"),e("30 october 2021"),(()=>{const e=document.querySelector("menu");document.querySelector("body").addEventListener("click",(t=>{t.target.closest(".menu")?e.classList.add("active-menu"):(!t.target.closest("menu")||t.target.closest("ul > li > a")||t.target.closest(".close-btn"))&&e.classList.remove("active-menu")}))})(),(()=>{const e=document.querySelector(".popup"),o=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-content");function a(){document.documentElement.clientWidth>=769?(o.forEach((o=>{o.addEventListener("click",(()=>{t({duration:1e3,timing:e=>e,draw(t){e.style.display="block",n.style.transition="0.2s",n.style.opacity=t}})}))})),e.addEventListener("click",(o=>{o.target.closest(".popup-content")&&!o.target.classList.contains("popup-close")||t({duration:1e3,timing:e=>e,draw(t){n.style.transition="0.2s",n.style.opacity=t,setTimeout((()=>{e.style.display="none"}),500)}})}))):(o.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",n.style.transition="",n.style.opacity=""}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none",n.style.transition="",n.style.opacity="")})))}window.addEventListener("resize",a),a()})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),a=document.querySelector(".calc-count"),c=document.querySelector(".calc-day"),l=document.getElementById("total");document.querySelectorAll(".calc-block > input").forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^\d]/,"")}))})),t.addEventListener("input",(t=>{t.target!==o&&t.target!==n&&t.target!==a&&t.target!==c||(()=>{const t=+o.options[o.selectedIndex].value,r=n.value;let s=0,i=1,d=1;a.value>1&&(i+=a.value/10),c.value&&c.value<5?d=2:c.value&&c.value<10&&(d=1.5),s=o.value&&n.value?e*t*r*i*d:0,l.textContent=s})()}))})(100),(()=>{let e=document.getElementById("form1-name"),t=document.getElementById("form2-name"),o=document.getElementById("form3-name"),n=document.getElementById("form2-message"),a=document.querySelectorAll(".form-phone"),c=document.querySelectorAll(".form-email");e.addEventListener("input",(()=>{e.value=e.value.replace(/[^а-яА-ЯёЁ\-\ ]/g,"")})),t.addEventListener("input",(()=>{t.value=t.value.replace(/[^а-яА-ЯёЁ\-\ ]/g,"")})),o.addEventListener("input",(()=>{o.value=o.value.replace(/[^а-яА-ЯёЁ\-\ ]/g,"")})),n.addEventListener("input",(()=>{n.value=n.value.replace(/[^а-яА-ЯёЁ\-\ ]/g,"")})),a.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^\d\-\(\)]/,"")}))})),c.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^A-Za-z\@\-\_\.\!\~\*\']/,"")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const n=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===n?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");let n,a=document.querySelectorAll(".dot"),c=0;const l=(e,t,o)=>{e[t].classList.remove(o)},r=(e,t,o)=>{e[t].classList.add(o)},s=()=>{l(t,c,"portfolio-item-active"),l(a,c,"dot-active"),c++,c>=t.length&&(c=0),r(t,c,"portfolio-item-active"),r(a,c,"dot-active")},i=(e=1500)=>{n=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(l(t,c,"portfolio-item-active"),l(a,c,"dot-active"),e.target.matches("#arrow-right")?c++:e.target.matches("#arrow-left")?c--:e.target.classList.contains("dot")&&a.forEach(((t,o)=>{e.target===t&&(c=o)})),c>=t.length&&(c=0),c<0&&(c=t.length-1),r(t,c,"portfolio-item-active"),r(a,c,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(n)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i(2e3)}),!0),((e=0)=>{do{let t=document.createElement("li");t.classList.add("dot"),o.appendChild(t),a=document.querySelectorAll(".dot"),0===e&&t.classList.add("dot-active"),e++}while(e<=t.length-1)})(),i(2e3)})()})();