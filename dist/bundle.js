!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){(function(e){var n=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];window.errorFields=[];for(var t=n.slice(0),r=0,i=n.length;r<i;r++)t[r]=n[r].slice();window.isInputBoardVisible=!0,e.handleChange=function(){var e=Number(event.target.value),n=Number(event.target.id),r=n%10,i=(n-r)/10,o=[i,r,3*Math.floor(i/3),3*Math.floor(r/3)];if(a(i,r),0===e)d(t,i,r,0),document.getElementById(n).value="";else if(f(e,1,9)&&v(t,o,e)){for(var u=0;u<window.errorFields.length;u++)errorFields[u]===n&&window.errorFields.splice(u,1);c(i,r),d(t,i,r,e)}else-1===errorFields.indexOf(n)&&errorFields.push(n),s(i,r),d(t,i,r,0)},e.handleClear=function(){event.preventDefault();for(var e=0,r=n.length;e<r;e++){t[e]=n[e].slice();for(var i=0;i<n[e].length;i++)a(e,i)}l(window.isInputBoardVisible),o()};var o=function(){for(var e=document.getElementsByTagName("input"),n=0;n<e.length;n++)e[n].value=""},a=function(e,n){var t="".concat(e).concat(n),r=document.getElementById(t).parentElement,i=document.getElementById("s"+t);r.classList.contains("input--err")&&r.classList.remove("input--err"),r.classList.contains("input--succ")&&r.classList.remove("input--succ"),i.classList.contains("input--given")&&i.classList.remove("input--given")},c=function(e,n){var t="".concat(e).concat(n),r="s"+t;document.getElementById(t).parentElement.classList.add("input--succ"),document.getElementById(r).classList.add("input--given")},s=function(e,n){var t="".concat(e).concat(n);document.getElementById(t).parentElement.classList.add("input--err")};e.handleClick=function(){event.preventDefault();var e=document.getElementById("alert");0===errorFields.length?(l(isInputBoardVisible),u(m(t)),e.classList.contains("hidden")||e.classList.add("hidden")):e.classList.contains("hidden")&&(e.classList.remove("hidden"),e.innerText="Invalid values detected. Fix values in the red fields.")};var u=function(e){for(var n=0;n<e.length;n++)for(var t=0;t<e[n].length;t++){var r="s".concat(n).concat(t);document.getElementById(r).innerText=e[n][t]}},l=function(e){var n=document.getElementById("container"),t=document.getElementById("container-solved");e?(n.classList.add("hidden"),t.classList.remove("hidden")):(n.classList.remove("hidden"),t.classList.add("hidden")),window.isInputBoardVisible=!e},d=function(e,n,t,r){return e[n][t]=r},f=function(e,n,t){return e>=n&&e<=t},v=function(e,n,t){return!function(e,n,t){for(var r=n[2],i=n[3],o=0;o<3;o++)for(var a=e[r+o],c=0;c<3;c++)if(a[i+c]===t)return!0;return!1}(e,n,t)&&!function(e,n,t){for(var r=n[0],i=0;i<9;i++)if(e[r][i]===t)return!0;return!1}(e,n,t)&&!function(e,n,t){for(var r=n[1],i=0;i<9;i++)if(e[i][r]===t)return!0;return!1}(e,n,t)},m=function(e){var n=function(e){for(var n=[],t=0;t<e.length;t++)for(var r=0;r<e.length;r++)if(0===e[t][r]){var i=3*Math.floor(t/3),o=3*Math.floor(r/3);n.push([t,r,i,o])}return n}(e);e:for(var t=0;t<n.length;){for(var r=n[t],i=r[0],o=r[1],a=e[i][o]+1;a<=9;){if(v(e,r,a)){e[i][o]=a,t++;continue e}a++}if(e[i][o]=0,0===t){var c=document.getElementById("alert");c.classList.contains("hidden")&&(c.classList.remove("hidden"),c.innerText="Sudoku cannot be solved")}t--}return e}}).call(this,t(1))},function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t}]);