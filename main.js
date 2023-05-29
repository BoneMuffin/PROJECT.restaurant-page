(()=>{"use strict";const e=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home");const t=document.createElement("div");t.classList.add("home-hero"),e.appendChild(t);const n=document.createElement("p");n.classList.add("subtitle"),n.textContent="This is",t.appendChild(n);const a=document.createElement("h1");a.classList.add("hero-title"),a.textContent="Gourmet Madness",t.appendChild(a);const d=document.createElement("hr");d.classList.add("line"),t.appendChild(d);const c=document.createElement("p");c.classList.add("title-subtext"),c.textContent="Elevate your palate",t.appendChild(c);const o=document.createElement("div");o.classList.add("btn-container"),t.appendChild(o);const s=document.createElement("button");return s.classList.add("btn-hero"),s.textContent="Begin",o.appendChild(s),e}())};class t{constructor(e,t,n){this.title=e,this.price=t,this.description=n}}const n=[new t("Carbonara","$30","spaghetti + bacon + garlic + eggs + Parmesan"),new t("Simple Lamb Ragù","$24","ground lamb + red wine  + thyme + rosemary + pappardelle"),new t("Antipasto Salad","$25","cured meat + marinated vegetables + cheese"),new t("Wedding Soup","$28","umini chicken meatballs + little pasta nuggets + vegetables"),new t("Concord Grape Granita","$12","Concord grape juice + sugar + water"),new t("Tiramisu Icebox Pie","$15","ladyfingers + coffee + mascarpone"),new t("Campari","$7","pink grapefruit juice + blood orange slice + herbs"),new t("Bellini","$10","puréed white peaches + Prosecco")],a=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu"),n.forEach((t=>{const n=document.createElement("div");n.classList.add("menu-section"),e.appendChild(n);const a=document.createElement("div");a.classList.add("menu-item"),n.appendChild(a);const d=document.createElement("span");d.classList.add("item-name"),a.appendChild(d);const c=document.createElement("span");c.classList.add("item-deco"),d.appendChild(c);const o=document.createElement("span");o.classList.add("price"),o.textContent=t.price,d.appendChild(o);const s=document.createElement("p");s.classList.add("description"),s.textContent=t.description,a.appendChild(s)})),e}())},d=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("h3");t.classList.add("h-medium"),t.textContent="Location",e.appendChild(t);const n=document.createElement("p");n.textContent="678 Phony Ave, Bologna",e.appendChild(n);const a=document.createElement("h3");a.classList.add("h-medium"),a.textContent="Opening hours",e.appendChild(a);const d=document.createElement("p");d.textContent="Monday - Saturday",e.appendChild(d);const c=document.createElement("p");c.textContent="10am - 4 pm | 6pm - 11pm",e.appendChild(c);const o=document.createElement("h3");o.classList.add("h-medium"),o.textContent="Contact",e.appendChild(o);const s=document.createElement("p");s.textContent="(333)-444 555",e.appendChild(s);const i=document.createElement("p");return i.textContent="sorrynotreal@hotdog.com",e.appendChild(i),e}())},c=document.getElementById("content");function o(e){document.querySelectorAll(".btn-nav").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}console.log("yello"),c.appendChild(function(){const t=document.createElement("header");t.classList.add("header");const n=document.createElement("h1");return n.classList.add("header-title"),n.textContent="Gourmet Madness",t.appendChild(n),t.appendChild(function(){const t=document.createElement("nav"),n=document.createElement("button");n.classList.add("btn-nav"),n.textContent="Home",n.addEventListener("click",(t=>{t.target.classList.contains("active")||(o(n),e())}));const c=document.createElement("button");c.classList.add("btn-nav"),c.textContent="Menu",c.addEventListener("click",(e=>{e.target.classList.contains("active")||(o(c),a())}));const s=document.createElement("button");return s.classList.add("btn-nav"),s.textContent="Contact",s.addEventListener("click",(e=>{e.target.classList.contains("active")||(o(s),d())})),t.appendChild(n),t.appendChild(c),t.appendChild(s),t}()),t}()),c.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e.setAttribute("id","main"),e}()),c.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p"),n=document.createTextNode("Built by "),a=document.createTextNode("BoneMuffin"),d=document.createElement("a");return d.classList.add("footer-link"),d.target="_blank",d.setAttribute("href","https://github.com/BoneMuffin"),d.appendChild(a),t.appendChild(n),t.appendChild(d),e.appendChild(t),e}()),o(document.querySelector(".btn-nav")),e(),function(){const t=document.getElementById("home"),n=document.getElementById("menu"),c=document.getElementById("contact");t.addEventListener("click",e),n.addEventListener("click",a),c.addEventListener("click",d)}()})();