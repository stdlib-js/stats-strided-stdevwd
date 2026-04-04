"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=s(function(g,u){
var y=require('@stdlib/stats-strided-variancewd/dist').ndarray,f=require('@stdlib/math-base-special-sqrt/dist');function p(e,r,a,t,o){return f(y(e,r,a,t,o))}u.exports=p
});var d=s(function(h,n){
var w=require('@stdlib/strided-base-stride2offset/dist'),x=i();function l(e,r,a,t){return x(e,r,a,t,w(e,t))}n.exports=l
});var c=s(function(j,q){
var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=d(),O=i();m(v,"ndarray",O);q.exports=v
});var R=c();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
