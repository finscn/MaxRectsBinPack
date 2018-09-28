/**
 * MaxRectsBinPack 0.1.0
 * Copyright (c) 2017-present @06wj
 * @license MIT
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.MaxRectsBinPack=t():e.MaxRectsBinPack=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var h=t[n]={i:n,l:!1,exports:{}};return e[n].call(h.exports,h,h.exports,i),h.l=!0,h.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var h in e)i.d(n,h,function(t){return e[t]}.bind(null,h));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){e.exports=i(1)},function(e,t,i){"use strict";function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}i.r(t);var h=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,h=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=t,this.y=i,this.width=n,this.height=h}return function(e,t,i){t&&n(e.prototype,t),i&&n(e,i)}(e,[{key:"clone",value:function(){return new e(this.x,this.y,this.width,this.height)}},{key:"isContainedIn",value:function(e){return this.x>=e.x&&this.y>=e.y&&this.x+this.width<=e.x+e.width&&this.y+this.height<=e.y+e.height}}],[{key:"isContainedIn",value:function(e,t){return e.isContainedIn(t)}}]),e}();function a(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}i.d(t,"MaxRectsBinPack",function(){return c}),i.d(t,"BestShortSideFit",function(){return o}),i.d(t,"BestLongSideFit",function(){return r}),i.d(t,"BestAreaFit",function(){return u}),i.d(t,"BottomLeftRule",function(){return s}),i.d(t,"ContactPointRule",function(){return l}),i.d(t,"Rect",function(){return h});var o=0,r=1,u=2,s=3,l=4,c=function(){function e(t,i,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.binWidth=0,this.binHeight=0,this.allowRotate=!1,this.usedRectangles=[],this.freeRectangles=[],this.init(t,i,n)}return function(e,t,i){t&&a(e.prototype,t),i&&a(e,i)}(e,[{key:"init",value:function(e,t,i){this.binWidth=e,this.binHeight=t,this.allowRotate=i||!1,this.usedRectangles.length=0,this.freeRectangles.length=0,this.freeRectangles.push(new h(0,0,e,t))}},{key:"insert",value:function(e,t,i){var n=new h,a={value:0},c={value:0};switch(i=i||0){case o:n=this._findPositionForNewNodeBestShortSideFit(e,t,a,c);break;case s:n=this._findPositionForNewNodeBottomLeft(e,t,a,c);break;case l:n=this._findPositionForNewNodeContactPoint(e,t,a);break;case r:n=this._findPositionForNewNodeBestLongSideFit(e,t,c,a);break;case u:n=this._findPositionForNewNodeBestAreaFit(e,t,a,c)}return 0===n.height?n:(this._placeRectangle(n),n)}},{key:"insert2",value:function(e,t){for(var i=[];e.length>0;){for(var n=1/0,a=1/0,o=-1,r=new h,u=0;u<e.length;u++){var s={value:0},l={value:0},c=this._scoreRectangle(e[u].width,e[u].height,t,s,l);(s.value<n||s.value===n&&l.value<a)&&(n=s.value,a=l.value,r=c,o=u)}if(-1===o)return i;this._placeRectangle(r);var d=e.splice(o,1)[0];d.x=r.x,d.y=r.y,i.push(d)}return i}},{key:"_placeRectangle",value:function(e){for(var t=this.freeRectangles.length,i=0;i<t;i++)this._splitFreeNode(this.freeRectangles[i],e)&&(this.freeRectangles.splice(i,1),i--,t--);this._pruneFreeList(),this.usedRectangles.push(e)}},{key:"_scoreRectangle",value:function(e,t,i,n,a){var c=new h;switch(n.value=1/0,a.value=1/0,i){case o:c=this._findPositionForNewNodeBestShortSideFit(e,t,n,a);break;case s:c=this._findPositionForNewNodeBottomLeft(e,t,n,a);break;case l:c=this._findPositionForNewNodeContactPoint(e,t,n),n=-n;break;case r:c=this._findPositionForNewNodeBestLongSideFit(e,t,a,n);break;case u:c=this._findPositionForNewNodeBestAreaFit(e,t,n,a)}return 0===c.height&&(n.value=1/0,a.value=1/0),c}},{key:"_occupancy",value:function(){for(var e=this.usedRectangles,t=0,i=0;i<e.length;i++)t+=e[i].width*e[i].height;return t/(this.binWidth*this.binHeight)}},{key:"_findPositionForNewNodeBottomLeft",value:function(e,t,i,n){var a,o,r=this.freeRectangles,u=new h;i.value=1/0;for(var s=0;s<r.length;s++)(a=r[s]).width>=e&&a.height>=t&&((o=a.y+t)<i.value||o===i.value&&a.x<n.value)&&(u.x=a.x,u.y=a.y,u.width=e,u.height=t,i.value=o,n.value=a.x),this.allowRotate&&a.width>=t&&a.height>=e&&((o=a.y+e)<i.value||o===i.value&&a.x<n.value)&&(u.x=a.x,u.y=a.y,u.width=t,u.height=e,i.value=o,n.value=a.x);return u}},{key:"_findPositionForNewNodeBestShortSideFit",value:function(e,t,i,n){var a,o,r,u,s,l=this.freeRectangles,c=new h;i.value=1/0;for(var d=0;d<l.length;d++){(a=l[d]).width>=e&&a.height>=t&&(o=Math.abs(a.width-e),r=Math.abs(a.height-t),u=Math.min(o,r),s=Math.max(o,r),(u<i.value||u===i.value&&s<n.value)&&(c.x=a.x,c.y=a.y,c.width=e,c.height=t,i.value=u,n.value=s));var f=void 0,v=void 0,g=void 0,y=void 0;this.allowRotate&&a.width>=t&&a.height>=e&&(f=Math.abs(a.width-t),v=Math.abs(a.height-e),g=Math.min(f,v),y=Math.max(f,v),(g<i.value||g===i.value&&y<n.value)&&(c.x=a.x,c.y=a.y,c.width=t,c.height=e,i.value=g,n.value=y))}return c}},{key:"_findPositionForNewNodeBestLongSideFit",value:function(e,t,i,n){var a,o,r,u,s,l=this.freeRectangles,c=new h;n.value=1/0;for(var d=0;d<l.length;d++)(a=l[d]).width>=e&&a.height>=t&&(o=Math.abs(a.width-e),r=Math.abs(a.height-t),u=Math.min(o,r),((s=Math.max(o,r))<n.value||s===n.value&&u<i.value)&&(c.x=a.x,c.y=a.y,c.width=e,c.height=t,i.value=u,n.value=s)),this.allowRotate&&a.width>=t&&a.height>=e&&(o=Math.abs(a.width-t),r=Math.abs(a.height-e),u=Math.min(o,r),((s=Math.max(o,r))<n.value||s===n.value&&u<i.value)&&(c.x=a.x,c.y=a.y,c.width=t,c.height=e,i.value=u,n.value=s));return c}},{key:"_findPositionForNewNodeBestAreaFit",value:function(e,t,i,n){var a,o,r,u,s,l=this.freeRectangles,c=new h;i.value=1/0;for(var d=0;d<l.length;d++)s=(a=l[d]).width*a.height-e*t,a.width>=e&&a.height>=t&&(o=Math.abs(a.width-e),r=Math.abs(a.height-t),u=Math.min(o,r),(s<i.value||s===i.value&&u<n.value)&&(c.x=a.x,c.y=a.y,c.width=e,c.height=t,n.value=u,i=s)),this.allowRotate&&a.width>=t&&a.height>=e&&(o=Math.abs(a.width-t),r=Math.abs(a.height-e),u=Math.min(o,r),(s<i.value||s===i.value&&u<n.value)&&(c.x=a.x,c.y=a.y,c.width=t,c.height=e,n.value=u,i.value=s));return c}},{key:"_commonIntervalLength",value:function(e,t,i,n){return t<i||n<e?0:Math.min(t,n)-Math.max(e,i)}},{key:"_contactPointScoreNode",value:function(e,t,i,n){var h,a=this.usedRectangles,o=0;0!==e&&e+i!==this.binWidth||(o+=n),0!==t&&t+n!==this.binHeight||(o+=i);for(var r=0;r<a.length;r++)(h=a[r]).x!==e+i&&h.x+h.width!==e||(o+=this._commonIntervalLength(h.y,h.y+h.height,t,t+n)),h.y!==t+n&&h.y+h.height!==t||(o+=this._commonIntervalLength(h.x,h.x+h.width,e,e+i));return o}},{key:"_findPositionForNewNodeContactPoint",value:function(e,t,i){var n,a,o=this.freeRectangles,r=new h;i.value=-1;for(var u=0;u<o.length;u++)(n=o[u]).width>=e&&n.height>=t&&(a=this._contactPointScoreNode(n.x,n.y,e,t))>i.value&&(r.x=n.x,r.y=n.y,r.width=e,r.height=t,i=a),this.allowRotate&&n.width>=t&&n.height>=e&&(a=this._contactPointScoreNode(n.x,n.y,t,e))>i.value&&(r.x=n.x,r.y=n.y,r.width=t,r.height=e,i.value=a);return r}},{key:"_splitFreeNode",value:function(e,t){var i,n=this.freeRectangles;return!(t.x>=e.x+e.width||t.x+t.width<=e.x||t.y>=e.y+e.height||t.y+t.height<=e.y)&&(t.x<e.x+e.width&&t.x+t.width>e.x&&(t.y>e.y&&t.y<e.y+e.height&&((i=e.clone()).height=t.y-i.y,n.push(i)),t.y+t.height<e.y+e.height&&((i=e.clone()).y=t.y+t.height,i.height=e.y+e.height-(t.y+t.height),n.push(i))),t.y<e.y+e.height&&t.y+t.height>e.y&&(t.x>e.x&&t.x<e.x+e.width&&((i=e.clone()).width=t.x-i.x,n.push(i)),t.x+t.width<e.x+e.width&&((i=e.clone()).x=t.x+t.width,i.width=e.x+e.width-(t.x+t.width),n.push(i))),!0)}},{key:"_pruneFreeList",value:function(){for(var e=this.freeRectangles,t=0;t<e.length;t++)for(var i=t+1;i<e.length;i++){if(h.isContainedIn(e[t],e[i])){e.splice(t,1);break}h.isContainedIn(e[i],e[t])&&e.splice(i,1)}}}]),e}()}])});