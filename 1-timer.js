import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                         */import{f as y,i}from"./assets/vendor-BbbuE1sJ.js";const s=document.querySelector("#datetime-picker"),n=document.querySelector(".js-button-timer"),p=document.querySelector(".js-timer_days"),S=document.querySelector(".js-timer_hours"),b=document.querySelector(".js-timer_minutes"),C=document.querySelector(".js-timer_seconds");let d=null,a=null;n.disabled=!0;const D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(i.error({title:"Error",message:"Please choose a date in the future"}),n.disabled=!0):(d=t,n.disabled=!1)}};y(s,D);function r(e){return String(e).padStart(2,"0")}function q(e){const l=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:f,seconds:h}}function u({days:e,hours:t,minutes:o,seconds:c}){p.textContent=r(e),S.textContent=r(t),b.textContent=r(o),C.textContent=r(c)}n.addEventListener("click",()=>{n.disabled=!0,s.disabled=!0,a=setInterval(()=>{const t=d-new Date;if(t<=0){clearInterval(a),u({days:0,hours:0,minutes:0,seconds:0}),s.disabled=!1,i.success({title:"Completed",message:"Countdown finished!"});return}const o=q(t);u(o)},1e3)});
//# sourceMappingURL=1-timer.js.map
