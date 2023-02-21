let hamburger=document.querySelector(".hamburger"),menu=document.querySelector(".navmenu");hamburger.onclick=function(){menu.classList.toggle("active-burger")};const headerSection=document.querySelector(".header-section");let lastScrollTop=0;function menuBackground(){let e=window.pageYOffset||document.documentElement.scrollTop;e>lastScrollTop?headerSection.classList.add("header-hidden"):(headerSection.classList.remove("header-hidden"),menu.classList.remove("active-burger")),lastScrollTop=e<=0?0:e,window.pageYOffset>window.innerHeight/4?headerSection.style.backgroundColor="#2c2f3f":headerSection.style.backgroundColor="transparent"}window.addEventListener("scroll",menuBackground);const a=document.querySelectorAll('a[href^="#"]');for(let e of a)e.addEventListener("click",(function(o){o.preventDefault();let t=e.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth"})}));window.addEventListener("scroll",(function(){let e=document.getElementById("scrolTop");window.pageYOffset>600?e.classList.add("show"):e.classList.remove("show")})),document.getElementById("scrolTop").addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}));
function createScale(e,t){const c=document.getElementById(e),n=c.getContext("2d"),o=c.width/2,a=c.height/2,i=c.width/2-10,s=-Math.PI/2,l=s+t/100*2*Math.PI,d=s,u=d+0*Math.PI;let h=0,r=u,f=d;const g=e=>{const t=(e-h)/60,s=(l-r)/60;n.clearRect(0,0,c.width,c.height),n.beginPath(),n.arc(o,a,i,d,r),n.strokeStyle="#2c2f3f",n.lineWidth=10,n.stroke();const u=h.toFixed()+"%";n.font="35px Roboto";const w=n.measureText(u).width;n.fillStyle="#000",n.fillText(u,o-w/2,a+7),h>=e||(r+=s,h+=t,f+=s,setTimeout((()=>g(e)),1e3/60))};g(t)}const canvasEls=document.querySelectorAll(".progress-item canvas");function adaptCanvas(e){const t=window.devicePixelRatio||1,c=e.clientWidth*t,n=e.clientHeight*t;e.width=c,e.height=n}canvasEls.forEach(adaptCanvas);let isFunctionExecuted=!1,sectionCanvas=document.querySelector(".my-skills"),targetLocation=sectionCanvas.getBoundingClientRect().top+window.pageYOffset;function checkIfFunctionShouldBeExecuted(){!isFunctionExecuted&&window.pageYOffset>=targetLocation-600&&(isFunctionExecuted=!0,createScale("html-css",90),createScale("pug-sass",90),createScale("js",60),createScale("bootstrap",70),createScale("git",60))}checkIfFunctionShouldBeExecuted(),window.addEventListener("scroll",checkIfFunctionShouldBeExecuted);