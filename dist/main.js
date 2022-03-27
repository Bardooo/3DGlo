(()=>{"use strict";const e=e=>{const t=document.getElementById("timer-hours"),l=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");(()=>{let a=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,hours:Math.floor(t/3600),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();t.textContent=a.hours,l.textContent=a.minutes,o.textContent=a.seconds,a.timeRemaining>0?(a.hours<10&&(t.textContent="0"+a.hours),a.minutes<10&&(l.textContent="0"+a.minutes),a.seconds<10&&(o.textContent="0"+a.seconds)):(t.textContent="00",l.textContent="00",o.textContent="00")})()};function t({timing:e,draw:t,duration:l}){let o=performance.now();requestAnimationFrame((function a(n){let r=(n-o)/l;r>1&&(r=1);let c=e(r);t(c),r<1&&requestAnimationFrame(a)}))}setInterval(e,1e3,"16 december 2021"),e("30 october 2021"),(()=>{const e=document.querySelector("menu");document.querySelector("body").addEventListener("click",(t=>{t.target.closest(".menu")?e.classList.add("active-menu"):(!t.target.closest("menu")||t.target.closest("ul > li > a")||t.target.closest(".close-btn"))&&e.classList.remove("active-menu")}))})(),(()=>{const e=document.querySelector(".popup"),l=document.querySelectorAll(".popup-btn"),o=e.querySelector(".popup-content");function a(){document.documentElement.clientWidth>=769?(l.forEach((l=>{l.addEventListener("click",(()=>{t({duration:200,timing:e=>e,draw(t){e.style.display="block",o.style.opacity=t}})}))})),e.addEventListener("click",(l=>{l.target.closest(".popup-content")&&!l.target.classList.contains("popup-close")||t({duration:200,timing:e=>e,draw(t){o.style.opacity="0",setTimeout((()=>{e.style.display="none"}),300)}})}))):(l.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",o.style.transition="",o.style.opacity=""}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none",o.style.transition="",o.style.opacity="")})))}window.addEventListener("resize",a),o.style.transition="1s",a()})(),((e=100)=>{const t=document.querySelector(".calc-block"),l=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),a=document.querySelector(".calc-count"),n=document.querySelector(".calc-day"),r=document.getElementById("total");document.querySelectorAll(".calc-block > input").forEach((e=>{e.onblur=()=>{e.value!==/[\d]/g&&(e.value=e.value.replace(/[^\d]/g,""))}}));t.addEventListener("input",(t=>{(t.target===o||t.target===a||t.target===n||t.target===l)&&(()=>{const t=+l.options[l.selectedIndex].value,c=o.value;let u=0,s=1,d=1;a.value>1&&(s+=a.value/10),n.value&&n.value<5?d=2:n.value&&n.value<10&&(d=1.5),u=l.value&&o.value?e*t*c*s*d:0,(e=>{let t=0,l=Math.round(20/(e/10));if(0===e)return;let o=setInterval((()=>{t+=10,t==e&&clearInterval(o),r.textContent=t}),l)})(u)})()}))})(100),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),l=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const o=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===o?(e.classList.add("active"),l[t].classList.remove("d-none")):(e.classList.remove("active"),l[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),l=document.querySelector(".portfolio-dots");let o,a=document.querySelectorAll(".dot"),n=0;const r=(e,t,l)=>{e[t].classList.remove(l)},c=(e,t,l)=>{e[t].classList.add(l)},u=()=>{r(t,n,"portfolio-item-active"),r(a,n,"dot-active"),n++,n>=t.length&&(n=0),c(t,n,"portfolio-item-active"),c(a,n,"dot-active")},s=(e=1500)=>{o=setInterval(u,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(r(t,n,"portfolio-item-active"),r(a,n,"dot-active"),e.target.matches("#arrow-right")?n++:e.target.matches("#arrow-left")?n--:e.target.classList.contains("dot")&&a.forEach(((t,l)=>{e.target===t&&(n=l)})),n>=t.length&&(n=0),n<0&&(n=t.length-1),c(t,n,"portfolio-item-active"),c(a,n,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(o)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&s(2e3)}),!0),((e=0)=>{do{let t=document.createElement("li");t.classList.add("dot"),l.appendChild(t),a=document.querySelectorAll(".dot"),0===e&&t.classList.add("dot-active"),e++}while(e<=t.length-1)})(),s(2e3)})(),(({firstFormId:e,secondFormId:t,thiedFormId:l,someElem:o=[]})=>{document.querySelectorAll(".form-btn");const a=document.getElementById(e),n=document.getElementById(t),r=document.getElementById(l);let c=document.getElementById("form1-name"),u=document.getElementById("form2-name"),s=document.getElementById("form3-name"),d=document.getElementById("form2-message"),i=document.querySelectorAll(".form-phone"),m=document.querySelectorAll(".form-email"),v=document.querySelector("#form1-email"),p=document.querySelector("#form2-email"),g=document.querySelector("#form3-email");const y=()=>{setTimeout((()=>{c.value="",u.value="",s.value="",d.value="",i.forEach((e=>{e.value=""})),m.forEach((e=>{e.value=""}))}),200)},f=(e={})=>fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json"}}).then((e=>e.json()));a.addEventListener("submit",(e=>{e.preventDefault();const t=new FormData(a),l={};t.forEach(((e,t)=>{l[t]=e})),o.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?l[e.id]=t.textContent:l[e.id]=t.value})),""===v.value?alert("введите почту"):(f(l).then((e=>console.log(e))),y())})),n.addEventListener("submit",(e=>{e.preventDefault();const t=new FormData(n),l={};t.forEach(((e,t)=>{l[t]=e})),o.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?l[e.id]=t.textContent:l[e.id]=t.value})),""===p.value?alert("введите почту"):(f(l).then((e=>console.log(e))),y())})),r.addEventListener("submit",(e=>{e.preventDefault();const t=new FormData(r),l={};t.forEach(((e,t)=>{l[t]=e})),o.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?l[e.id]=t.textContent:l[e.id]=t.value})),""===g.value?alert("введите почту"):(f(l).then((e=>console.log(e))),y())}))})({firstFormId:"form1",secondFormId:"form2",thiedFormId:"form3",someElem:[{type:"block",id:"total"}]}),(()=>{let e=document.getElementById("form1-name"),t=document.getElementById("form2-name"),l=document.getElementById("form3-name"),o=document.getElementById("form2-message"),a=document.querySelectorAll(".form-phone"),n=document.querySelectorAll(".form-email");e.onblur=()=>{e.value=e.value.replace(/-+/g,"-"),e.value=e.value.replace(/^\s|\s$/g,""),e.value=e.value.replace(/^-|-$/g,""),e.value=e.value.replace(/\s+/g," "),e.value=e.value[0].toUpperCase()+e.value.slice(1).toLowerCase(),e.value!==/[а-яА-ЯёЁ\-\ ]/g&&(e.value=e.value.replace(/[^а-яА-ЯёЁ\-\ ]/g,""))},t.onblur=()=>{t.value=t.value.replace(/-+/g,"-"),t.value=t.value.replace(/^\s|\s$/g,""),t.value=t.value.replace(/^-|-$/g,""),t.value=t.value.replace(/\s+/g," "),t.value=t.value[0].toUpperCase()+t.value.slice(1).toLowerCase(),t.value=t.value[0].toUpperCase()+t.value.slice(1).toLowerCase(),t.value!==/[а-яА-ЯёЁ\-\ ]/g&&(t.value=t.value.replace(/[^а-яА-ЯёЁ\-\ ]/g,""))},l.onblur=()=>{l.value=l.value.replace(/-+/g,"-"),l.value=l.value.replace(/^\s|\s$/g,""),l.value=l.value.replace(/^-|-$/g,""),l.value=l.value.replace(/\s+/g," "),l.value=l.value[0].toUpperCase()+l.value.slice(1).toLowerCase(),l.value=l.value[0].toUpperCase()+l.value.slice(1).toLowerCase(),l.value!==/[а-яА-ЯёЁ\-\ ]/g&&(l.value=l.value.replace(/[^а-яА-ЯёЁ\-\ ]/g,""))},o.onblur=()=>{o.value=o.value.replace(/-+/g,"-"),o.value=o.value.replace(/^\s|\s$/g,""),o.value=o.value.replace(/^-|-$/g,""),o.value=o.value.replace(/\s+/g," "),o.value=o.value[0].toUpperCase()+o.value.slice(1).toLowerCase(),o.value=o.value[0].toUpperCase()+o.value.slice(1).toLowerCase(),o.value!==/[.,!?а-яА-ЯёЁ\d\ ]/g&&(o.value=o.value.replace(/[^.,!?а-яА-ЯёЁ\d\ ]/g,""))},a.forEach((e=>{e.onblur=()=>{e.value=e.value.replace(/-+/g,"-"),e.value=e.value.replace(/^\s|\s$/g,""),e.value=e.value.replace(/^-|-$/g,""),e.value=e.value.replace(/\s+/g," "),e.value!==/[\d\-\(\)\+]/g&&(e.value=e.value.replace(/[^\d\-\(\)\+]/g,""))}})),n.forEach((e=>{e.onblur=()=>{e.value=e.value.replace(/-+/g,"-"),e.value=e.value.replace(/^\s|\s$/g,""),e.value=e.value.replace(/^-|-$/g,""),e.value=e.value.replace(/\s+/g," "),e.value!==/[A-Za-z\@\-\_\.\!\~\*\']/g&&(e.value=e.value.replace(/[^A-Za-z\@\-\_\.\!\~\*\']/g,""))}}))})(),(()=>{const e=document.getElementById("scroll-btn");document.getElementById("modal-links").addEventListener("click",(e=>{if(e.preventDefault(),e.target.classList.contains("modal-link")){const t=e.target.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth"})}})),e.addEventListener("click",(function(t){t.preventDefault();const l=e.getAttribute("href");document.querySelector(l).scrollIntoView({behavior:"smooth"})}))})()})();