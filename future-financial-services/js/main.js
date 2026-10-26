(function(){
var mb=document.querySelector(".menu"),nav=document.getElementById("nav");
if(mb)mb.addEventListener("click",function(){var o=nav.classList.toggle("open");mb.setAttribute("aria-expanded",o)});
var a=document.getElementById("amt");
if(a){var r=document.getElementById("rate"),y=document.getElementById("yrs");
function f(v){return isFinite(v)?"₹"+Math.round(v).toLocaleString("en-IN"):"–"}
function calc(){var P=+a.value,i=+r.value/1200,n=+y.value*12,e=i?P*i*Math.pow(1+i,n)/(Math.pow(1+i,n)-1):P/n;
document.getElementById("emi").textContent=f(e);document.getElementById("tot").textContent=f(e*n);document.getElementById("int").textContent=f(e*n-P)}
[a,r,y].forEach(function(x){x.addEventListener("input",calc)});calc()}
var cf=document.getElementById("cf");
if(cf)cf.addEventListener("submit",function(e){e.preventDefault();var d=new FormData(cf);
var t="Hello Future Financial Services,%0AName: "+encodeURIComponent(d.get("name"))+"%0APhone: "+encodeURIComponent(d.get("phone"))+"%0AEmail: "+encodeURIComponent(d.get("email")||"-")+"%0AInterested in: "+encodeURIComponent(d.get("topic"))+"%0AMessage: "+encodeURIComponent(d.get("msg")||"-");
document.getElementById("ok").textContent="Opening WhatsApp with your details...";
window.open("https://wa.me/918750498759?text="+t,"_blank","noopener")});
})();
