"use strict";(self.webpackChunkmoment=self.webpackChunkmoment||[]).push([[901],{9590:function(e){var r=Array.isArray,t=Object.keys,n=Object.prototype.hasOwnProperty,f="undefined"!==typeof Element;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){var a,c,u,s=r(e),m=r(o);if(s&&m){if((c=e.length)!=o.length)return!1;for(a=c;0!==a--;)if(!i(e[a],o[a]))return!1;return!0}if(s!=m)return!1;var g=e instanceof Date,l=o instanceof Date;if(g!=l)return!1;if(g&&l)return e.getTime()==o.getTime();var p=e instanceof RegExp,h=o instanceof RegExp;if(p!=h)return!1;if(p&&h)return e.toString()==o.toString();var y=t(e);if((c=y.length)!==t(o).length)return!1;for(a=c;0!==a--;)if(!n.call(o,y[a]))return!1;if(f&&e instanceof Element&&o instanceof Element)return e===o;for(a=c;0!==a--;)if(("_owner"!==(u=y[a])||!e.$$typeof)&&!i(e[u],o[u]))return!1;return!0}return e!==e&&o!==o}e.exports=function(e,r){try{return i(e,r)}catch(t){if(t.message&&t.message.match(/stack|recursion/i)||-2146828260===t.number)return console.warn("Warning: react-fast-compare does not handle circular references.",t.name,t.message),!1;throw t}}}}]);