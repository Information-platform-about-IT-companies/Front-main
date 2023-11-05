/*! For license information please see UI-KIT-Label-Label-stories.61dfb11d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkfront_main=self.webpackChunkfront_main||[]).push([[117],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}})},"./src/UI-KIT/Label/Label.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultLabel:function(){return DefaultLabel},__namedExportsOrder:function(){return __namedExportsOrder}});var _DefaultLabel$paramet,_DefaultLabel$paramet2,_DefaultLabel$paramet3,_Users_violetta_WebstormProjects_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Label__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/UI-KIT/Label/Label.jsx"),meta=(__webpack_require__("./src/UI-KIT/Label/Label.scss"),{title:"UI-KIT/Label",component:_Label__WEBPACK_IMPORTED_MODULE_0__._,tags:["autodocs"],parameters:{docs:{description:{component:"Лейбел для услуг или отраслей"}}},argTypes:{title:{description:"Обязательный параметр. Используйте для title"},extClassName:{description:"Необязательный параметр. Для дополнительных стилей"}}});__webpack_exports__.default=meta;var DefaultLabel={args:{title:"Разработка мобильных приложений"}};DefaultLabel.parameters=(0,_Users_violetta_WebstormProjects_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_Users_violetta_WebstormProjects_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},DefaultLabel.parameters),{},{docs:(0,_Users_violetta_WebstormProjects_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_Users_violetta_WebstormProjects_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},null===(_DefaultLabel$paramet=DefaultLabel.parameters)||void 0===_DefaultLabel$paramet?void 0:_DefaultLabel$paramet.docs),{},{source:(0,_Users_violetta_WebstormProjects_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({originalSource:'{\n  args: {\n    title: "Разработка мобильных приложений"\n  }\n}'},null===(_DefaultLabel$paramet2=DefaultLabel.parameters)||void 0===_DefaultLabel$paramet2||null===(_DefaultLabel$paramet3=_DefaultLabel$paramet2.docs)||void 0===_DefaultLabel$paramet3?void 0:_DefaultLabel$paramet3.source)})});var __namedExportsOrder=["DefaultLabel"]},"./src/UI-KIT/Label/Label.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{_:function(){return Label}});__webpack_require__("./src/UI-KIT/Label/Label.scss");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Label(_ref){var title=_ref.title,extClassName=_ref.extClassName;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"label ".concat(extClassName),children:title})}Label.defaultProps={extClassName:null},Label.__docgenInfo={description:"",methods:[],displayName:"Label",props:{extClassName:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!0}}}},"./src/UI-KIT/Label/Label.scss":function(){},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);