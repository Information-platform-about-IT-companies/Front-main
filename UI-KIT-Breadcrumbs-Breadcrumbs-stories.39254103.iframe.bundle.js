"use strict";(self.webpackChunkfront_main=self.webpackChunkfront_main||[]).push([[723],{"./src/UI-KIT/Breadcrumbs/Breadcrumbs.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BreadcrumbsExample:function(){return BreadcrumbsExample},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Breadcrumbs_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Breadcrumbs_Breadcrumbs(){var location=(0,dist.TH)(),currentLink="",crumbs=location.pathname.split("/").filter((function(crumb){return""!==crumb})).map((function(crumb){return currentLink+="/".concat(crumb),(0,jsx_runtime.jsx)("li",{className:"breadcrumbs__element",children:(0,jsx_runtime.jsx)(react_router_dom_dist.rU,{to:currentLink,className:"breadcrumbs__link",children:crumb})},crumb)}));if("/"!==location.pathname)return(0,jsx_runtime.jsxs)("ul",{className:"breadcrumbs",children:[(0,jsx_runtime.jsx)("li",{className:"breadcrumbs__element",children:(0,jsx_runtime.jsx)(react_router_dom_dist.rU,{to:"/",className:"breadcrumbs__link",children:"Главная"})},"main"),crumbs]})}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Breadcrumbs_Breadcrumbs.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs"};var react=__webpack_require__("./node_modules/react/index.js"),Input=__webpack_require__("./src/UI-KIT/Input/Input.jsx"),Button=__webpack_require__("./src/UI-KIT/Button/Button.jsx"),Icons=__webpack_require__("./src/UI-KIT/Icons/index.js");function Search_Search(){var _React$useState2=_slicedToArray(react.useState(!0),2),isButtonDisabled=_React$useState2[0],_React$useState4=(_React$useState2[1],_slicedToArray(react.useState(!0),2)),isStartHint=_React$useState4[0],_React$useState6=(_React$useState4[1],_slicedToArray(react.useState(""),2)),_React$useState8=(_React$useState6[0],_React$useState6[1],_slicedToArray(react.useState([]),2)),response=_React$useState8[0],setResponse=_React$useState8[1],_React$useState10=_slicedToArray(react.useState(!1),2),responseNotFound=_React$useState10[0];_React$useState10[1];react.useEffect((function(){setResponse([{title:"company",element:[{name:"Mentalstack",link:"/"},{name:"Mentalist",link:"/"}]},{title:"city",element:[{name:"Menesota",link:"/"}]}])}),[]);var hint=response.map((function(ul){var label,li=ul.element.map((function(e){return(0,jsx_runtime.jsx)("li",{className:"search__hint-list-element",children:(0,jsx_runtime.jsx)(react_router_dom_dist.rU,{to:"e.link",className:"search__hint-link",children:e.name})},e.name)}));switch(ul.title){case"company":label="компаниях";break;case"city":label="городах";break;case"service":label="услугах";break;default:label=ul.title}return(0,jsx_runtime.jsxs)("div",{className:"search__hint-container",children:[(0,jsx_runtime.jsxs)("div",{className:"search__hint-header",children:["Найдено в ",label]},ul.title),(0,jsx_runtime.jsx)("ul",{className:"search__hint-list",children:li})]})}));return(0,jsx_runtime.jsxs)("div",{className:"search",children:[(0,jsx_runtime.jsx)(Input.Z,{icon:(0,jsx_runtime.jsx)(Icons.Z,{icon:"IconSearch",color:"#4e4cbf",size:"24"}),extClassNameInput:"search__input",extClassNameLabel:"search__input-label",name:"search",id:"search",required:"false",placeholder:"Название компании или услуга",onChange:function onChange(){return console.log("изменение инпута name")},onlyInput:!0}),(0,jsx_runtime.jsx)(Input.Z,{icon:(0,jsx_runtime.jsx)(Icons.Z,{icon:"IconPin",color:"#4e4cbf",size:"24"}),extClassNameInput:"search__input",extClassNameLabel:"search__input-label",name:"city",id:"city",required:"false",placeholder:"Город",onChange:function onChange(){return console.log("изменение инпута city")},onlyInput:!0}),(0,jsx_runtime.jsx)(Button.z,{extClassName:"search__input-button",size:"medium",title:"Поиск",fill:"true",onClick:function onClick(){return console.log("нажата кнопка поиска")},disabled:isButtonDisabled}),isStartHint&&!responseNotFound?(0,jsx_runtime.jsx)("div",{className:"search__hint",children:hint}):(0,jsx_runtime.jsx)("div",{className:"search__hint",children:(0,jsx_runtime.jsx)("div",{className:"search__hint-container",children:(0,jsx_runtime.jsx)("div",{className:"search__hint-header search__hint-header_no-found",children:"По вашему запросу ничего не найдено"})})})]})}Search_Search.__docgenInfo={description:"",methods:[],displayName:"Search"};var Category=__webpack_require__("./src/components/Category/Category.jsx");function Main_Main(){var hardcode={requests:["Веб-дизайн","Разработка для Android","Москва"],companies:[{title:"Веб-разработка",comp:[{title:"Бла-бла-бла-1",link:"/bla-1"},{title:"Бла-бла-бла-1",link:"/bla-1"},{title:"Бла-бла-бла-2",link:"/bla-2"},{title:"Бла-бла-бла-3",link:"/bla-3"},{title:"Бла-бла-бла-4",link:"/bla-4"},{title:"Бла-бла-бла-5",link:"/bla-5"}]},{title:"Разработка ПО",comp:[{title:"Бу-бу-бу-1",link:"/boo-1"},{title:"Бу-бу-бу-2",link:"/boo-2"},{title:"Бу-бу-бу-3",link:"/boo-3"},{title:"Бу-бу-бу-4",link:"/boo-4"},{title:"Бу-бу-бу-5",link:"/boo-5"},{title:"Бу-бу-бу-6",link:"/boo-6"}]},{title:"Дизайн",comp:[{title:"Бу-бу-бу-1",link:"/boo-1"},{title:"Бу-бу-бу-2",link:"/boo-2"},{title:"Бу-бу-бу-3",link:"/boo-3"},{title:"Бу-бу-бу-4",link:"/boo-4"},{title:"Бу-бу-бу-5",link:"/boo-5"},{title:"Бу-бу-бу-6",link:"/boo-6"}]},{title:"Маркетинг",comp:[{title:"Бла-бла-бла-1",link:"/bla-1"},{title:"Бла-бла-бла-1",link:"/bla-1"},{title:"Бла-бла-бла-2",link:"/bla-2"},{title:"Бла-бла-бла-3",link:"/bla-3"},{title:"Бла-бла-бла-4",link:"/bla-4"},{title:"Бла-бла-бла-5",link:"/bla-5"}]}]};return(0,jsx_runtime.jsxs)("main",{className:"mainPage",children:[(0,jsx_runtime.jsxs)("section",{className:"intro",children:[(0,jsx_runtime.jsx)("h1",{className:"intro__title",children:"Найдите подходящие для вас IT-компании в России"}),(0,jsx_runtime.jsx)(Search_Search,{}),(0,jsx_runtime.jsxs)("div",{className:"intro__popular-search",children:[(0,jsx_runtime.jsx)("span",{children:"Самые популярные запросы в этом месяце: "}),(0,jsx_runtime.jsx)("ul",{className:"intro__search-list",children:hardcode.requests.map((function(req,i,arr){return(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsxs)(react_router_dom_dist.rU,{className:"intro__search-list-item",to:"/",children:[req,i<arr.length-1&&", "]})})}))})]})]}),(0,jsx_runtime.jsxs)("section",{className:"companies",children:[(0,jsx_runtime.jsx)("h2",{className:"companies__subtitle",children:"Найдите компанию, которая Вам нужна"}),(0,jsx_runtime.jsxs)("p",{className:"companies__text",children:["Мы разбили все компании на основные ",(0,jsx_runtime.jsx)("span",{children:"4 категории"})," для вашего удобства"]}),(0,jsx_runtime.jsx)("ul",{className:"companies__list",children:hardcode.companies.map((function(company){return(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(Category.W,{categoryTitle:company.title,categories:company.comp,icon:(0,jsx_runtime.jsx)(Icons.Z,{color:"#4E4CBF",extClassName:"category_icon",icon:"IconRound",size:"32",symbol:company.title[0]})})})}))}),(0,jsx_runtime.jsx)(Button.z,{size:"standard",fill:!0,title:"Посмотреть все компании"})]})]})}Main_Main.__docgenInfo={description:"",methods:[],displayName:"Main"};var _BreadcrumbsExample$p,_BreadcrumbsExample$p2,_BreadcrumbsExample$p3,components_Main_Main=Main_Main,Breadcrumbs_stories={title:"UI-KIT/Breadcrumbs",component:Breadcrumbs_Breadcrumbs,tags:["autodocs"],parameters:{docs:{description:{component:"Хлебные крошки"}}},decorators:[function(Story){return(0,jsx_runtime.jsxs)(dist.VA,{initialEntries:["/home"],children:[(0,jsx_runtime.jsx)(Story,{}),(0,jsx_runtime.jsx)(dist.Z5,{children:(0,jsx_runtime.jsx)(dist.AW,{path:"home",element:(0,jsx_runtime.jsx)(components_Main_Main,{})})})]})}]},BreadcrumbsExample={args:{}};BreadcrumbsExample.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},BreadcrumbsExample.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_BreadcrumbsExample$p=BreadcrumbsExample.parameters)||void 0===_BreadcrumbsExample$p?void 0:_BreadcrumbsExample$p.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {}\n}"},null===(_BreadcrumbsExample$p2=BreadcrumbsExample.parameters)||void 0===_BreadcrumbsExample$p2||null===(_BreadcrumbsExample$p3=_BreadcrumbsExample$p2.docs)||void 0===_BreadcrumbsExample$p3?void 0:_BreadcrumbsExample$p3.source)})});var __namedExportsOrder=["BreadcrumbsExample"]},"./src/UI-KIT/Button/Button.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{z:function(){return Button}});var _Users_violetta_WebstormProjects_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Users_violetta_WebstormProjects_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/UI-KIT/Button/Button.scss"),__webpack_require__("./node_modules/react-router-dom/dist/index.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["size","fill","title","linkType","url","onClick","extClassName"];function Button(_ref){var size=_ref.size,fill=_ref.fill,title=_ref.title,linkType=_ref.linkType,url=_ref.url,onClick=_ref.onClick,extClassName=_ref.extClassName,props=(0,_Users_violetta_WebstormProjects_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);if(url){var isLink="link"===linkType,isNavLink="navlink"===linkType,link=isLink&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.rU,(0,_Users_violetta_WebstormProjects_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_Users_violetta_WebstormProjects_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({to:url,className:fill?"button button_style_fill button_size_".concat(size," ").concat(extClassName):"button button_style_outline button_size_".concat(size," ").concat(extClassName)},props),{},{children:title})),navlink=isNavLink&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.OL,(0,_Users_violetta_WebstormProjects_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_Users_violetta_WebstormProjects_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({to:url,className:fill?"button button_style_fill button_size_".concat(size," ").concat(extClassName):"button button_style_outline button_size_".concat(size," ").concat(extClassName)},props),{},{children:title}));return isLink?link:navlink}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",(0,_Users_violetta_WebstormProjects_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_Users_violetta_WebstormProjects_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({onClick:onClick,className:fill?"button button_style_fill button_size_".concat(size," ").concat(extClassName):"button button_style_outline button_size_".concat(size," ").concat(extClassName)},props),{},{children:title}))}Button.defaultProps={linkType:null,onClick:null,url:null,extClassName:""},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{linkType:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},url:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},extClassName:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},size:{description:"",type:{name:"string"},required:!0},fill:{description:"",type:{name:"bool"},required:!0},title:{description:"",type:{name:"string"},required:!0}}}},"./src/UI-KIT/CategoryTitle/CategoryTitle.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{g:function(){return CategoryTitle}});__webpack_require__("./src/UI-KIT/CategoryTitle/CategoryTitle.scss");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function CategoryTitle(_ref){var title=_ref.title,icon=_ref.icon;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span",{className:"category_title",children:[icon,title]})}CategoryTitle.__docgenInfo={description:"",methods:[],displayName:"CategoryTitle",props:{title:{description:"",type:{name:"string"},required:!0},icon:{description:"",type:{name:"node"},required:!0}}}},"./src/UI-KIT/Link/LinkItem.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{n:function(){return LinkItem_LinkItem}});var dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function LinkItem_LinkItem(_ref){var url=_ref.url,title=_ref.title,withBullet=_ref.withBullet;return(0,jsx_runtime.jsx)(dist.rU,{className:withBullet?"link link_style_list":"link",to:url,children:title})}LinkItem_LinkItem.defaultProps={withBullet:!1},LinkItem_LinkItem.__docgenInfo={description:"",methods:[],displayName:"LinkItem",props:{withBullet:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},url:{description:"",type:{name:"string"},required:!0},title:{description:"",type:{name:"string"},required:!0}}}},"./src/components/Category/Category.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{W:function(){return Category_Category}});var CategoryTitle=__webpack_require__("./src/UI-KIT/CategoryTitle/CategoryTitle.jsx"),LinkItem=__webpack_require__("./src/UI-KIT/Link/LinkItem.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Category_Category(_ref){var categories=_ref.categories,categoryTitle=_ref.categoryTitle,icon=_ref.icon;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(CategoryTitle.g,{title:categoryTitle,icon:icon}),(0,jsx_runtime.jsx)("ul",{className:"category",children:categories.map((function(category){return(0,jsx_runtime.jsx)("li",{className:"category_link",children:(0,jsx_runtime.jsx)(LinkItem.n,{title:category.title,withBullet:!1,url:category.link})},category.title)}))})]})}Category_Category.__docgenInfo={description:"",methods:[],displayName:"Category",props:{categoryTitle:{description:"",type:{name:"string"},required:!0},icon:{description:"",type:{name:"node"},required:!0},categories:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!0}}}},required:!0}}}},"./src/UI-KIT/Button/Button.scss":function(){},"./src/UI-KIT/CategoryTitle/CategoryTitle.scss":function(){}}]);