!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequire7bc7=o);var r=o("h6c0i"),i={form:document.querySelector(".form"),delay:document.querySelector('input[name = "delay"]'),delayStep:document.querySelector('input[name = "step"]'),amount:document.querySelector('input[name = "amount"]')};function u(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r&&t({position:e,delay:n}),o({position:e,delay:n})}),n)}))}i.form.addEventListener("submit",(function(e){e.preventDefault();for(var n=1;n<=i.amount.value;n+=1){var t=n,o=Number(i.delay.value)+Number(i.delayStep.value)*(n-1);u(t,o).then((function(e){var n=e.position,t=e.delay;return r.Notify.success("Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;return r.Notify.failure("Rejected promise ".concat(n," in ").concat(t,"ms"))}))}e.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.24103459.js.map
