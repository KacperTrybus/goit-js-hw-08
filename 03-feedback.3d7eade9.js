var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,l=u||f||Function("return this")(),c=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return l.Date.now()};function v(e,t,n){var o,i,r,a,u,f,l=0,c=!1,v=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function w(e){return l=e,u=setTimeout(h,t),c?b(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||v&&e-l>=r}function h(){var e=m();if(S(e))return j(e);u=setTimeout(h,function(e){var n=t-(e-f);return v?d(n,r-(e-l)):n}(e))}function j(e){return u=void 0,y&&o?b(e):(o=i=void 0,a)}function E(){var e=m(),n=S(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return w(f);if(v)return u=setTimeout(h,t),b(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=p(t)||0,g(n)&&(c=!!n.leading,r=(v="maxWait"in n)?s(p(n.maxWait)||0,t):r,y="trailing"in n?!!n.trailing:y),E.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=i=u=void 0},E.flush=function(){return void 0===u?a:j(m())},E}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=i.test(e);return u||r.test(e)?a(e.slice(2),u?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:o,maxWait:t,trailing:i})};let y=document.querySelector('input[name="email"]'),b=document.querySelector('textarea[name="message"]');const w=document.querySelector(".feedback-form"),S=(w.lastElementChild,t((function(){const e={email:y.value,message:b.value};localStorage.setItem("feedback-form-state",JSON.stringify(e)),console.log(e)}),500));y.addEventListener("input",S),b.addEventListener("input",S),console.log(localStorage.getItem("feedback-form-state")),window.addEventListener("load",(function(){const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);y.value=t.email,b.value=t.message}})),w.addEventListener("submit",(function(e){e.preventDefault(),console.log(y.value),console.log(b.value),w.reset(),localStorage.clear()}));
//# sourceMappingURL=03-feedback.3d7eade9.js.map