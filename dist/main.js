(()=>{"use strict";const e=e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");(()=>{let s=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,hours:Math.floor(t/3600),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();t.textContent=s.hours,n.textContent=s.minutes,o.textContent=s.seconds,s.timeRemaining>0?(s.hours<10&&(t.textContent="0"+s.hours),s.minutes<10&&(n.textContent="0"+s.minutes),s.seconds<10&&(o.textContent="0"+s.seconds)):(t.textContent="00",n.textContent="00",o.textContent="00")})()};setInterval(e,1e3,"30 october 2021"),e("30 october 2021"),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul > li > a"),s=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",s),n.addEventListener("click",s),o.forEach((e=>e.addEventListener("click",s)))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close"),o=e.querySelector(".popup-content");o.style.opacity="0",t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",setTimeout((()=>{o.style.transition="0.5s",o.style.opacity="1"}),200)}))})),n.addEventListener("click",(()=>{o.style.transition="1s",o.style.opacity="0",setTimeout((()=>{e.style.display="none"}),500)})),document.documentElement.clientWidth<769&&(t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",o.style.transition="",o.style.opacity=""}))})),n.addEventListener("click",(()=>{e.style.display="none",o.style.transition="",o.style.opacity=""})))})()})();