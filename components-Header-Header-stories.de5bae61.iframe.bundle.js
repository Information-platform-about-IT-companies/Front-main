"use strict";(self.webpackChunkfront_main=self.webpackChunkfront_main||[]).push([[314],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./src/components/Header/Header.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HeaderWithAuth:function(){return HeaderWithAuth},HeaderWithoutAuth:function(){return HeaderWithoutAuth},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Header_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),Button=__webpack_require__("./src/UI-KIT/Button/Button.jsx"),react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),Icons=__webpack_require__("./src/UI-KIT/Icons/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Header_Header(_ref){var loggedIn=_ref.loggedIn,userData=_ref.userData;return(0,jsx_runtime.jsxs)("header",{className:"header",children:[(0,jsx_runtime.jsx)(react_router_dom_dist.rU,{to:"/",className:"header__logo"}),(0,jsx_runtime.jsx)("nav",{className:"header__navigation",children:loggedIn?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["dsds",(0,jsx_runtime.jsxs)(react_router_dom_dist.rU,{to:"/profile",className:"header__userdata",children:[(0,jsx_runtime.jsx)(Icons.Z,{icon:"IconAccount",size:"32",color:"#4E4CBF"}),(0,jsx_runtime.jsx)("span",{className:"header__user",children:userData})]}),(0,jsx_runtime.jsx)(Button.z,{size:"standard",fill:!1,title:"Выйти"})]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.z,{size:"standard",fill:!1,title:"Войти",url:"/signin",linkType:"link"}),(0,jsx_runtime.jsx)(Button.z,{size:"standard",fill:!0,title:"Зарегистрироваться",url:"signup",linkType:"link"})]})})]})}Header_Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{userData:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!0}}};var _HeaderWithAuth$param,_HeaderWithAuth$param2,_HeaderWithAuth$param3,_HeaderWithoutAuth$pa,_HeaderWithoutAuth$pa2,_HeaderWithoutAuth$pa3,components_Header_Header=Header_Header;Header_Header.defaultProps={userData:""};var Header_stories={title:"UI-KIT/Header",component:components_Header_Header,tags:["autodocs"],parameters:{docs:{description:{component:"Шапка сайта"}}},argTypes:{loggedIn:{description:"Признак авторизован пользователь или нет",options:[!0,!1]},userData:{description:"Пользовательские данные - имя и фамилия"}},decorators:[function(Story){return(0,jsx_runtime.jsx)(dist.VA,{children:(0,jsx_runtime.jsx)(Story,{})})}]},HeaderWithAuth={args:{loggedIn:!0,userData:"Вася Пупкин"}},HeaderWithoutAuth={args:{loggedIn:!1}};HeaderWithAuth.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},HeaderWithAuth.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_HeaderWithAuth$param=HeaderWithAuth.parameters)||void 0===_HeaderWithAuth$param?void 0:_HeaderWithAuth$param.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    loggedIn: true,\n    userData: "Вася Пупкин"\n  }\n}'},null===(_HeaderWithAuth$param2=HeaderWithAuth.parameters)||void 0===_HeaderWithAuth$param2||null===(_HeaderWithAuth$param3=_HeaderWithAuth$param2.docs)||void 0===_HeaderWithAuth$param3?void 0:_HeaderWithAuth$param3.source)})}),HeaderWithoutAuth.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},HeaderWithoutAuth.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_HeaderWithoutAuth$pa=HeaderWithoutAuth.parameters)||void 0===_HeaderWithoutAuth$pa?void 0:_HeaderWithoutAuth$pa.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    loggedIn: false\n  }\n}"},null===(_HeaderWithoutAuth$pa2=HeaderWithoutAuth.parameters)||void 0===_HeaderWithoutAuth$pa2||null===(_HeaderWithoutAuth$pa3=_HeaderWithoutAuth$pa2.docs)||void 0===_HeaderWithoutAuth$pa3?void 0:_HeaderWithoutAuth$pa3.source)})});var __namedExportsOrder=["HeaderWithAuth","HeaderWithoutAuth"]},"./src/UI-KIT/Button/Button.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{z:function(){return Button}});var _Users_violetta_WebstormProjects_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Users_violetta_WebstormProjects_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/UI-KIT/Button/Button.scss"),__webpack_require__("./node_modules/react-router-dom/dist/index.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["size","fill","title","linkType","url","onClick","extClassName"];function Button(_ref){var size=_ref.size,fill=_ref.fill,title=_ref.title,linkType=_ref.linkType,url=_ref.url,onClick=_ref.onClick,extClassName=_ref.extClassName,props=(0,_Users_violetta_WebstormProjects_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);if(url){var isLink="link"===linkType,isNavLink="navlink"===linkType,link=isLink&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.rU,(0,_Users_violetta_WebstormProjects_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_Users_violetta_WebstormProjects_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({to:url,className:fill?"button button_style_fill button_size_".concat(size," ").concat(extClassName):"button button_style_outline button_size_".concat(size," ").concat(extClassName)},props),{},{children:title})),navlink=isNavLink&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.OL,(0,_Users_violetta_WebstormProjects_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_Users_violetta_WebstormProjects_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({to:url,className:fill?"button button_style_fill button_size_".concat(size," ").concat(extClassName):"button button_style_outline button_size_".concat(size," ").concat(extClassName)},props),{},{children:title}));return isLink?link:navlink}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",(0,_Users_violetta_WebstormProjects_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_Users_violetta_WebstormProjects_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({onClick:onClick,className:fill?"button button_style_fill button_size_".concat(size," ").concat(extClassName):"button button_style_outline button_size_".concat(size," ").concat(extClassName)},props),{},{children:title}))}Button.defaultProps={linkType:null,onClick:null,url:null,extClassName:""},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{linkType:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},url:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},extClassName:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},size:{description:"",type:{name:"string"},required:!0},fill:{description:"",type:{name:"bool"},required:!0},title:{description:"",type:{name:"string"},required:!0}}}},"./src/UI-KIT/Icons/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Icon}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function IconAccount(_ref){var size=_ref.size,color=_ref.color,extClassName=_ref.extClassName;return(0,jsx_runtime.jsxs)("svg",{width:size,height:size,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:extClassName,children:[(0,jsx_runtime.jsx)("path",{d:"M15.9998 3.16669C8.63984 3.16669 2.6665 9.14002 2.6665 16.5C2.6665 23.86 8.63984 29.8334 15.9998 29.8334C23.3598 29.8334 29.3332 23.86 29.3332 16.5C29.3332 9.14002 23.3598 3.16669 15.9998 3.16669ZM9.79984 25.1667C11.5465 23.9134 13.6798 23.1667 15.9998 23.1667C18.3198 23.1667 20.4532 23.9134 22.1998 25.1667C20.4532 26.42 18.3198 27.1667 15.9998 27.1667C13.6798 27.1667 11.5465 26.42 9.79984 25.1667ZM24.1865 23.3267C21.851 21.4943 18.9683 20.4984 15.9998 20.4984C13.0313 20.4984 10.1486 21.4943 7.81317 23.3267C6.20907 21.4138 5.3309 18.9965 5.33317 16.5C5.33317 10.6067 10.1065 5.83335 15.9998 5.83335C21.8932 5.83335 26.6665 10.6067 26.6665 16.5C26.6665 19.1 25.7332 21.4734 24.1865 23.3267Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"M16.0002 8.5C13.4268 8.5 11.3335 10.5933 11.3335 13.1667C11.3335 15.74 13.4268 17.8333 16.0002 17.8333C18.5735 17.8333 20.6668 15.74 20.6668 13.1667C20.6668 10.5933 18.5735 8.5 16.0002 8.5ZM16.0002 15.1667C14.8935 15.1667 14.0002 14.2733 14.0002 13.1667C14.0002 12.06 14.8935 11.1667 16.0002 11.1667C17.1068 11.1667 18.0002 12.06 18.0002 13.1667C18.0002 14.2733 17.1068 15.1667 16.0002 15.1667Z",fill:color})]})}function IconArrow(_ref){var angle,size=_ref.size,color=_ref.color,extClassName=_ref.extClassName;switch(_ref.direction){case"up":default:angle=0;break;case"right":angle=90;break;case"down":angle=180;break;case"left":angle=270}return(0,jsx_runtime.jsx)("svg",{width:size,height:size,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:extClassName,children:(0,jsx_runtime.jsx)("path",{d:"m 15.529297,13.029297 -5,5 a 0.66666502,0.66666502 0 0 0 0,0.941406 0.66666502,0.66666502 0 0 0 0.941406,0 L 16,14.441406 l 4.529297,4.529297 a 0.66666502,0.66666502 0 0 0 0.941406,0 0.66666502,0.66666502 0 0 0 0,-0.941406 l -5,-5 a 0.66673168,0.66673168 0 0 0 -0.941406,0 z",fill:color,transform:"rotate(".concat(angle," 16 16)")})})}function IconFilter(_ref){var size=_ref.size,color=_ref.color,extClassName=_ref.extClassName;return(0,jsx_runtime.jsx)("svg",{width:size,height:size,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:extClassName,children:(0,jsx_runtime.jsx)("path",{d:"M26.7434 12.964C28.0074 12.252 28.6407 11.896 28.986 11.3213C29.3327 10.748 29.3327 10.056 29.3327 8.672V7.752C29.3327 5.984 29.3327 5.09867 28.746 4.54933C28.162 4 27.2193 4 25.3327 4H6.66602C4.78068 4 3.83802 4 3.25268 4.54933C2.66602 5.09867 2.66602 5.984 2.66602 7.75333V8.67333C2.66602 10.056 2.66602 10.748 3.01268 11.3213C3.35935 11.8947 3.99002 12.252 5.25535 12.964L9.13935 15.1507C9.98735 15.628 10.4127 15.8667 10.7167 16.1307C11.3487 16.6787 11.738 17.324 11.914 18.1173C11.9993 18.496 11.9993 18.9413 11.9993 19.8307V23.3907C11.9993 24.6027 11.9993 25.2093 12.3353 25.6813C12.6713 26.1547 13.2687 26.388 14.4607 26.8547C16.966 27.8333 18.218 28.3227 19.1087 27.7653C19.9993 27.2093 19.9993 25.936 19.9993 23.3893V19.8293C19.9993 18.9413 19.9993 18.496 20.0847 18.116C20.2521 17.3389 20.6739 16.6398 21.2833 16.1293",stroke:color,strokeWidth:"2",strokeLinecap:"round"})})}function IconOctopusArrow(_ref){var size=_ref.size,color=_ref.color,extClassName=_ref.extClassName;return(0,jsx_runtime.jsx)("svg",{width:size,height:size,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:extClassName,children:(0,jsx_runtime.jsxs)("g",{fill:color,children:[(0,jsx_runtime.jsx)("path",{d:"M 16,-2.4346485e-6 C 9.6177068,-2.4346485e-6 4.4434458,3.4268516 4.4434458,9.8689642 c 0,2.2844098 0.654305,5.0212728 1.779284,7.6037968 0.07681,0.689089 0.04956,1.353336 -0.05273,1.973399 -0.395879,-0.127414 -0.750889,-0.175569 -1.060539,-0.161657 -1.674176,0.07522 -1.999755,1.951427 -0.03516,2.771828 -0.704916,0.879407 -1.637572,1.310714 -2.5742,0.995571 -2.66668397,-0.897197 -3.557305,1.793802 -0.890618,2.690998 1.052558,0.354151 2.58727,0.358536 4.249968,0.04535 0.437657,-0.840048 0.351818,-0.693617 0,0 -0.937771,1.67921 -2.23732,2.739409 -3.35935,2.36177 -2.66668697,-0.89725 -3.557307,2.690802 -0.890618,3.587999 2.666689,0.89725 7.387861,-0.561668 10.6678892,-3.587999 C 14.223148,26.355518 16,26.356021 16,26.356021 c 0,0 1.777758,-5.03e-4 3.722628,1.793999 3.280028,3.026331 8.0012,4.485249 10.667889,3.587999 2.666689,-0.897197 1.77607,-4.485249 -0.890619,-3.587999 -1.122019,0.377639 -2.421581,-0.68256 -3.359349,-2.36177 1.661943,0.312817 3.19587,0.308666 4.248015,-0.04535 2.666686,-0.897196 1.778021,-3.588195 -0.888666,-2.690998 -0.936627,0.315143 -1.869283,-0.116164 -2.574199,-0.995571 2.040413,-0.852066 1.610996,-2.84254 -0.234373,-2.771828 -0.259536,0.0099 -0.548777,0.06123 -0.861322,0.161657 -0.102298,-0.620063 -0.12954,-1.28431 -0.05273,-1.973399 1.124975,-2.582524 1.77733,-5.319387 1.77733,-7.6037968 0,-6.4421126 -5.17236,-9.8689666346485 -11.5546,-9.8689666346485 z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"m 15.99975,7.347911 c -0.204751,0 -0.409419,0.07819 -0.565635,0.2343789 l -5.091753,5.0907111 c -0.312432,0.312432 -0.312432,0.819879 0,1.132311 0.312432,0.312432 0.819879,0.312432 1.132311,0 l 3.725063,-3.726105 v 8.735565 c 0,0.44182 0.358193,0.800014 0.800014,0.800014 0.44182,0 0.800013,-0.358194 0.800013,-0.800014 v -8.735565 l 3.725063,3.726105 c 0.312432,0.312432 0.819879,0.312432 1.132311,0 0.312432,-0.312432 0.312432,-0.819879 0,-1.132311 L 16.565384,7.5822899 C 16.409168,7.4261006 16.2045,7.347911 15.99975,7.347911 Z",fill:"#ffffff"})]})})}function IconPin(_ref){var size=_ref.size,color=_ref.color,extClassName=_ref.extClassName;return(0,jsx_runtime.jsxs)("svg",{width:size,height:size,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:extClassName,children:[(0,jsx_runtime.jsx)("path",{d:"m 16,3.0007656 c -6.0416649,0 -10.9999999,4.734718 -10.9999999,10.5996094 0,3.27969 2.690162,6.842151 5.2382809,9.835937 2.54812,2.993786 5.089844,5.302735 5.089844,5.302735 a 1.0001,1.0001 0 0 0 1.345703,0 c 0,0 2.539771,-2.308949 5.087891,-5.302735 C 24.309839,20.442526 27,16.880065 27,13.600375 a 1,1 0 0 0 -1,-1 1,1 0 0 0 -1,1 c 0,2.022304 -2.309843,5.658354 -4.761719,8.539062 C 18.122013,24.625841 16.54126,26.056044 16,26.559359 15.458241,26.055567 13.877584,24.625367 11.761719,22.139437 9.309844,19.258729 7,15.622679 7,13.600375 7,8.8613976 10.995977,5.0007656 16,5.0007656 c 3.652913,0 6.500229,1.601965 8.03125,4.7695315 A 1,1 0 0 0 25.367188,10.23514 1,1 0 0 0 25.832031,8.8992036 C 23.979656,5.0667776 20.270479,3.0007666 16,3.0007656 Z",fill:color}),(0,jsx_runtime.jsx)("path",{d:"m 16,11.399203 c -1.209199,0 -2.25,0.975519 -2.25,2.201172 0,1.225663 1.040868,2.199219 2.25,2.199219 0.828143,0 1.573038,-0.44111 1.964844,-1.126954 C 18.145077,14.357136 18.25,13.986585 18.25,13.600375 18.25,12.374722 17.2092,11.399203 16,11.399203 Z",fill:color})]})}function IconRound(_ref){var size=_ref.size,color=_ref.color,extClassName=_ref.extClassName,symbol=_ref.symbol;return(0,jsx_runtime.jsxs)("svg",{width:size,height:size,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:extClassName,children:[(0,jsx_runtime.jsx)("text",{fontStyle:"normal",fontWeight:"normal",fontSize:"20px",fontFamily:"Roboto",fill:color,children:(0,jsx_runtime.jsx)("tspan",{textAnchor:"middle",x:"50%",y:"75%",children:symbol})}),(0,jsx_runtime.jsx)("path",{d:"M 16.559792,0.67855128 C 13.703554,0.57356628 10.873699,1.2707153 8.3918235,2.6883173 a 1,1 0 0 0 -0.373047,1.363281 1,1 0 0 0 1.365234,0.373047 c 2.1582185,-1.232735 4.6178055,-1.837388 7.1015625,-1.746094 2.483859,0.09128 4.893182,0.873871 6.955078,2.261719 2.061892,1.387845 3.693334,3.325069 4.712891,5.5917967 1.01954,2.266709 1.386321,4.772837 1.05664,7.236328 -0.329582,2.463543 -1.342211,4.786152 -2.921875,6.705078 -1.579655,1.918917 -3.663306,3.357447 -6.017578,4.154297 -2.354275,0.796852 -4.884288,0.920498 -7.304687,0.355469 -2.409882,-0.562482 -4.6126905,-1.788478 -6.3671875,-3.533203 -3.869038,-4.419609 -4.201522,-8.313011 -3.8125,-11.216797 0.388416,-2.899416 1.717164,-5.5892337 3.785156,-7.6582027 a 1,1 0 0 0 0,-1.414063 1,1 0 0 0 -1.414062,0 c -2.377803,2.378926 -3.906912,5.4728627 -4.35351603,8.8066407 -0.445188,3.323022 0.05953,7.990555 4.31054703,12.830078 a 1.0001,1.0001 0 0 0 0.04492,0.04687 c 2.021782,2.020295 4.568151,3.436271 7.3515625,4.085937 2.783395,0.64977 5.693071,0.508144 8.40039,-0.408203 2.707324,-0.916348 5.105334,-2.570664 6.921875,-4.777344 1.816534,-2.206669 2.980358,-4.877885 3.359375,-7.710937 0.379119,-2.832899 -0.04239,-5.715575 -1.214844,-8.3222607 -1.172441,-2.606627 -3.050771,-4.833715 -5.421875,-6.429687 -2.371099,-1.59597 -5.139757,-2.49854102 -7.996093,-2.60351602 z",fill:color})]})}function IconSearch(_ref){var size=_ref.size,color=_ref.color,extClassName=_ref.extClassName;return(0,jsx_runtime.jsx)("svg",{width:size,height:size,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:extClassName,children:(0,jsx_runtime.jsx)("path",{d:"M 17.023437,5.140625 C 14.538531,4.7250752 11.986031,5.2330681 9.8496094,6.5683594 7.713198,7.9036623 6.1391115,9.9749037 5.4238281,12.390625 c -0.7152823,2.415729 -0.5220284,5.011717 0.5429688,7.294922 1.0649888,2.283186 2.9296643,4.097246 5.2402341,5.101562 2.310571,1.004428 4.9087,1.130334 7.304688,0.351563 a 1,1 0 0 0 0.642578,-1.261719 1,1 0 0 0 -1.261719,-0.640625 C 15.96037,23.864356 13.867151,23.763095 12.003906,22.953125 10.140661,22.143243 8.6381261,20.681053 7.7792969,18.839844 6.920476,16.998652 6.7649805,14.907071 7.3417969,12.958984 7.9186122,11.01091 9.1873119,9.3424396 10.910156,8.265625 c 1.722855,-1.0768063 3.779315,-1.4874532 5.783203,-1.1523438 2.003884,0.3351176 3.815028,1.391916 5.09375,2.9707028 1.278797,1.578769 1.936048,3.569821 1.847657,5.59961 -0.08839,2.029758 -0.916972,3.95628 -2.328125,5.417968 a 1.0001,1.0001 0 0 0 -0.0059,1.382813 l 3.972656,4.203125 a 1,1 0 0 0 1.414063,0.03906 1,1 0 0 0 0.03906,-1.414062 l -3.4375,-3.636719 c 1.35126,-1.69927 2.248571,-3.718622 2.34375,-5.904297 C 25.74242,13.254498 24.927597,10.783959 23.341797,8.8261719 21.756122,6.8684026 19.508349,5.5561867 17.023437,5.140625 Z",fill:color})})}IconAccount.defaultProps={size:"32",extClassName:null},IconAccount.__docgenInfo={description:"",methods:[],displayName:"IconAccount",props:{size:{defaultValue:{value:'"32"',computed:!1},description:"",type:{name:"enum",value:[{value:'"24"',computed:!1},{value:'"32"',computed:!1},{value:'"60"',computed:!1}]},required:!1},extClassName:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},color:{description:"",type:{name:"string"},required:!0}}},IconArrow.defaultProps={size:"32",extClassName:null},IconArrow.__docgenInfo={description:"",methods:[],displayName:"IconArrow",props:{size:{defaultValue:{value:'"32"',computed:!1},description:"",type:{name:"enum",value:[{value:'"24"',computed:!1},{value:'"32"',computed:!1},{value:'"60"',computed:!1}]},required:!1},extClassName:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},color:{description:"",type:{name:"string"},required:!0},direction:{description:"",type:{name:"enum",value:[{value:'"up"',computed:!1},{value:'"left"',computed:!1},{value:'"down"',computed:!1},{value:'"right"',computed:!1}]},required:!0}}},IconFilter.defaultProps={size:"32",extClassName:null},IconFilter.__docgenInfo={description:"",methods:[],displayName:"IconFilter",props:{size:{defaultValue:{value:'"32"',computed:!1},description:"",type:{name:"enum",value:[{value:'"24"',computed:!1},{value:'"32"',computed:!1},{value:'"60"',computed:!1}]},required:!1},extClassName:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},color:{description:"",type:{name:"string"},required:!0}}},IconOctopusArrow.defaultProps={size:"60",extClassName:null},IconOctopusArrow.__docgenInfo={description:"",methods:[],displayName:"IconOctopusArrow",props:{size:{defaultValue:{value:'"60"',computed:!1},description:"",type:{name:"enum",value:[{value:'"24"',computed:!1},{value:'"32"',computed:!1},{value:'"60"',computed:!1}]},required:!1},extClassName:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},color:{description:"",type:{name:"string"},required:!0}}},IconPin.defaultProps={size:"32",extClassName:null},IconPin.__docgenInfo={description:"",methods:[],displayName:"IconPin",props:{size:{defaultValue:{value:'"32"',computed:!1},description:"",type:{name:"enum",value:[{value:'"24"',computed:!1},{value:'"32"',computed:!1},{value:'"60"',computed:!1}]},required:!1},extClassName:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},color:{description:"",type:{name:"string"},required:!0}}},IconRound.defaultProps={size:"32",extClassName:null},IconRound.__docgenInfo={description:"",methods:[],displayName:"IconRound",props:{size:{defaultValue:{value:'"32"',computed:!1},description:"",type:{name:"enum",value:[{value:'"24"',computed:!1},{value:'"32"',computed:!1},{value:'"60"',computed:!1}]},required:!1},extClassName:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},color:{description:"",type:{name:"string"},required:!0},symbol:{description:"",type:{name:"string"},required:!0}}},IconSearch.defaultProps={size:"32",extClassName:null},IconSearch.__docgenInfo={description:"",methods:[],displayName:"IconSearch",props:{size:{defaultValue:{value:'"32"',computed:!1},description:"",type:{name:"enum",value:[{value:'"24"',computed:!1},{value:'"32"',computed:!1},{value:'"60"',computed:!1}]},required:!1},extClassName:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},color:{description:"",type:{name:"string"},required:!0}}};var _excluded=["icon"],icons={IconAccount:IconAccount,IconArrow:IconArrow,IconFilter:IconFilter,IconOctopusArrow:IconOctopusArrow,IconPin:IconPin,IconRound:IconRound,IconSearch:IconSearch};function Icon(_ref){var icon=_ref.icon,props=(0,objectWithoutProperties.Z)(_ref,_excluded),RenderIcon=(0,react.useMemo)((function(){return icons[icon]}),[icon]);return(0,jsx_runtime.jsx)(RenderIcon,(0,objectSpread2.Z)({},props))}Icon.__docgenInfo={description:"",methods:[],displayName:"Icon"}},"./src/UI-KIT/Button/Button.scss":function(){}}]);