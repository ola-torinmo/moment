"use strict";(self.webpackChunkmoment=self.webpackChunkmoment||[]).push([[544],{8948:function(n,r,e){var t=function(n){return function(n){return!!n&&"object"===typeof n}(n)&&!function(n){var r=Object.prototype.toString.call(n);return"[object RegExp]"===r||"[object Date]"===r||function(n){return n.$$typeof===o}(n)}(n)};var o="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function u(n,r){return!1!==r.clone&&r.isMergeableObject(n)?a((e=n,Array.isArray(e)?[]:{}),n,r):n;var e}function i(n,r,e){return n.concat(r).map((function(n){return u(n,e)}))}function a(n,r,e){(e=e||{}).arrayMerge=e.arrayMerge||i,e.isMergeableObject=e.isMergeableObject||t;var o=Array.isArray(r);return o===Array.isArray(n)?o?e.arrayMerge(n,r,e):function(n,r,e){var t={};return e.isMergeableObject(n)&&Object.keys(n).forEach((function(r){t[r]=u(n[r],e)})),Object.keys(r).forEach((function(o){e.isMergeableObject(r[o])&&n[o]?t[o]=a(n[o],r[o],e):t[o]=u(r[o],e)})),t}(n,r,e):u(r,e)}a.all=function(n,r){if(!Array.isArray(n))throw new Error("first argument should be an array");return n.reduce((function(n,e){return a(n,e,r)}),{})};var c=e(7294),f=e(9590),l=e.n(f),s=e(5298),p=e(2346),h=e(3210),d=(e(8679),e(8652));function v(){return v=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}return n},v.apply(this,arguments)}function y(n,r){n.prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r}function m(n,r){if(null==n)return{};var e,t,o={},u=Object.keys(n);for(t=0;t<u.length;t++)e=u[t],r.indexOf(e)>=0||(o[e]=n[e]);return o}function b(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}var A=(0,c.createContext)(void 0);A.displayName="FormikContext";A.Provider,A.Consumer;function g(){var n=(0,c.useContext)(A);return n||(0,s.Z)(!1),n}var w=function(n){return Array.isArray(n)&&0===n.length},O=function(n){return"function"===typeof n},j=function(n){return null!==n&&"object"===typeof n},k=function(n){return String(Math.floor(Number(n)))===n},F=function(n){return 0===c.Children.count(n)};function C(n,r,e,t){void 0===t&&(t=0);for(var o=(0,h.Z)(r);n&&t<o.length;)n=n[o[t++]];return t===o.length||n?void 0===n?e:n:e}function M(n,r,e){for(var t=(0,p.Z)(n),o=t,u=0,i=(0,h.Z)(r);u<i.length-1;u++){var a=i[u],c=C(n,i.slice(0,u+1));if(c&&(j(c)||Array.isArray(c)))o=o[a]=(0,p.Z)(c);else{var f=i[u+1];o=o[a]=k(f)&&Number(f)>=0?[]:{}}}return(0===u?n:o)[i[u]]===e?n:(void 0===e?delete o[i[u]]:o[i[u]]=e,0===u&&void 0===e&&delete t[i[u]],t)}"undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?c.useLayoutEffect:c.useEffect;(0,c.forwardRef)((function(n,r){var e=n.action,t=m(n,["action"]),o=null!=e?e:"#",u=g(),i=u.handleReset,a=u.handleSubmit;return(0,c.createElement)("form",v({onSubmit:a,ref:r,onReset:i,action:o},t))})).displayName="Form";var S=function(n,r,e){var t=R(n);return t.splice(r,0,e),t},R=function(n){if(n){if(Array.isArray(n))return[].concat(n);var r=Object.keys(n).map((function(n){return parseInt(n)})).reduce((function(n,r){return r>n?r:n}),0);return Array.from(v({},n,{length:r+1}))}return[]},E=function(n,r){var e="function"===typeof n?n:r;return function(n){if(Array.isArray(n)||j(n)){var r=R(n);return e(r)}return n}},P=function(n){function r(r){var e;return(e=n.call(this,r)||this).updateArrayField=function(n,r,t){var o=e.props,u=o.name;(0,o.formik.setFormikState)((function(e){var o=E(t,n),i=E(r,n),a=M(e.values,u,n(C(e.values,u))),c=t?o(C(e.errors,u)):void 0,f=r?i(C(e.touched,u)):void 0;return w(c)&&(c=void 0),w(f)&&(f=void 0),v({},e,{values:a,errors:t?M(e.errors,u,c):e.errors,touched:r?M(e.touched,u,f):e.touched})}))},e.push=function(n){return e.updateArrayField((function(r){return[].concat(R(r),[(0,d.Z)(n)])}),!1,!1)},e.handlePush=function(n){return function(){return e.push(n)}},e.swap=function(n,r){return e.updateArrayField((function(e){return function(n,r,e){var t=R(n),o=t[r];return t[r]=t[e],t[e]=o,t}(e,n,r)}),!0,!0)},e.handleSwap=function(n,r){return function(){return e.swap(n,r)}},e.move=function(n,r){return e.updateArrayField((function(e){return function(n,r,e){var t=R(n),o=t[r];return t.splice(r,1),t.splice(e,0,o),t}(e,n,r)}),!0,!0)},e.handleMove=function(n,r){return function(){return e.move(n,r)}},e.insert=function(n,r){return e.updateArrayField((function(e){return S(e,n,r)}),(function(r){return S(r,n,null)}),(function(r){return S(r,n,null)}))},e.handleInsert=function(n,r){return function(){return e.insert(n,r)}},e.replace=function(n,r){return e.updateArrayField((function(e){return function(n,r,e){var t=R(n);return t[r]=e,t}(e,n,r)}),!1,!1)},e.handleReplace=function(n,r){return function(){return e.replace(n,r)}},e.unshift=function(n){var r=-1;return e.updateArrayField((function(e){var t=e?[n].concat(e):[n];return r=t.length,t}),(function(n){return n?[null].concat(n):[null]}),(function(n){return n?[null].concat(n):[null]})),r},e.handleUnshift=function(n){return function(){return e.unshift(n)}},e.handleRemove=function(n){return function(){return e.remove(n)}},e.handlePop=function(){return function(){return e.pop()}},e.remove=e.remove.bind(b(e)),e.pop=e.pop.bind(b(e)),e}y(r,n);var e=r.prototype;return e.componentDidUpdate=function(n){this.props.validateOnChange&&this.props.formik.validateOnChange&&!l()(C(n.formik.values,n.name),C(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},e.remove=function(n){var r;return this.updateArrayField((function(e){var t=e?R(e):[];return r||(r=t[n]),O(t.splice)&&t.splice(n,1),O(t.every)&&t.every((function(n){return void 0===n}))?[]:t}),!0,!0),r},e.pop=function(){var n;return this.updateArrayField((function(r){var e=r.slice();return n||(n=e&&e.pop&&e.pop()),e}),!0,!0),n},e.render=function(){var n={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},r=this.props,e=r.component,t=r.render,o=r.children,u=r.name,i=v({},n,{form:m(r.formik,["validate","validationSchema"]),name:u});return e?(0,c.createElement)(e,i):t?t(i):o?"function"===typeof o?o(i):F(o)?null:c.Children.only(o):null},r}(c.Component);P.defaultProps={validateOnChange:!0}}}]);