const t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};let e;function n(){t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.btnStop.setAttribute("disabled",!0),t.btnStart.addEventListener("click",(function(){e=setInterval(n,1e3),t.btnStart.setAttribute("disabled",!0),t.btnStop.removeAttribute("disabled")})),t.btnStop.addEventListener("click",(function(){t.btnStart.removeAttribute("disabled"),t.btnStop.setAttribute("disabled",!0),clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.ecd43704.js.map