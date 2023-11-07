/*! For license information please see UI-KIT-Input-Input-stories.4457fa6e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkfront_main=self.webpackChunkfront_main||[]).push([[520],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}})},"./src/UI-KIT/Input/Input.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ActiveInput:function(){return ActiveInput},InputOnly:function(){return InputOnly},InputWithErrorAndLabel:function(){return InputWithErrorAndLabel},InputWithFill:function(){return InputWithFill},InputWithHelp:function(){return InputWithHelp},InputWithIcon:function(){return InputWithIcon},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Input_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["label","icon","extClassNameLabel","type","name","id","onChange","value","extClassNameInput","required","placeholder","error","onlyInput"];function Input_Input(_ref){var label=_ref.label,icon=_ref.icon,extClassNameLabel=_ref.extClassNameLabel,type=_ref.type,name=_ref.name,id=_ref.id,onChange=_ref.onChange,value=_ref.value,extClassNameInput=_ref.extClassNameInput,required=_ref.required,placeholder=_ref.placeholder,error=_ref.error,onlyInput=_ref.onlyInput,props=(0,objectWithoutProperties.Z)(_ref,_excluded);var inputField=(0,jsx_runtime.jsx)("input",(0,objectSpread2.Z)({type:type,name:name,id:id,className:"input__field ".concat(function errorStyle(){return error?"input__field-error":""}()," ").concat(function inputWithIconStyle(){return icon?"input__field_icon":""}()," ").concat(extClassNameInput),required:required,placeholder:placeholder,onChange:onChange,value:value},props)),inputIcon=(0,jsx_runtime.jsx)("div",{className:"input__field-icon",children:icon});return(0,jsx_runtime.jsx)("div",{className:"input",children:onlyInput?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[inputIcon,inputField]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("label",{className:"input__label ".concat(extClassNameLabel),htmlFor:id,children:label}),(0,jsx_runtime.jsxs)("div",{className:"input__container",children:[inputIcon,inputField]}),(0,jsx_runtime.jsx)("span",{className:"input__error-text",children:error})]})})}Input_Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},icon:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},extClassNameLabel:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},type:{defaultValue:{value:'"text"',computed:!1},description:"",type:{name:"string"},required:!1},extClassNameInput:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},placeholder:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},value:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},error:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},onlyInput:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},name:{description:"",type:{name:"string"},required:!0},id:{description:"",type:{name:"string"},required:!0},onChange:{description:"",type:{name:"func"},required:!0}}};var UI_KIT_Input_Input=Input_Input;Input_Input.defaultProps={label:null,icon:null,extClassNameLabel:"",type:"text",extClassNameInput:"",required:!1,placeholder:"",value:null,error:null,onlyInput:!1};var _InputWithFill$parame,_InputWithFill$parame2,_InputWithFill$parame3,_ActiveInput$paramete,_ActiveInput$paramete2,_ActiveInput$paramete3,_InputWithHelp$parame,_InputWithHelp$parame2,_InputWithHelp$parame3,_InputWithIcon$parame,_InputWithIcon$parame2,_InputWithIcon$parame3,_InputWithErrorAndLab,_InputWithErrorAndLab2,_InputWithErrorAndLab3,_InputOnly$parameters,_InputOnly$parameters2,_InputOnly$parameters3,Icons=__webpack_require__("./src/UI-KIT/Icons/index.js"),Input_stories={title:"UI-KIT/Input",component:UI_KIT_Input_Input,tags:["autodocs"],parameters:{docs:{description:{component:"Универсальное поле ввода"}}},argTypes:{icon:{description:"Необязательный параметр для добавления icon в поле input",options:["24px"]},label:{description:"Необязательный параметр с указанием названия поля ввода."},extClassNameLabel:{description:"Необязательный параметр для добавления дополнительных стилей заголовку поля ввода"},type:{description:"Необязательный параметр с указанием типа поля ввода. Может принимать в себя значения text | password | email",options:["text","password","email"]},name:{description:"Обязательный параметр c указанием названия поля ввода"},id:{description:"Обязательный параметр. Идентификатор для связи с названием поля"},onChange:{description:"Обязательный параметр. Используется для передачи внутрь функции"},value:{description:"Не обязательное поле, отвечает за передачу значения"},extClassNameInput:{description:"Необязательный параметр. Отвечает за дополнительный стили поля / форматирования текста поля"},required:{description:"Необязательный параметр. Указывает на обязательность заполнения поля",options:[!0,!1]},placeholder:{description:"Необязательный параметр. Для передачи дефорлтного значения поля"},error:{description:"Необязательный параметр. Для передачи ошибки (например, валидации)"}}},InputWithFill={args:{value:"Василий Пупкин",onlyInput:!0}},ActiveInput={args:{onlyInput:!0}},InputWithHelp={args:{placeholder:"Василий Пупкин",onlyInput:!0}},InputWithIcon={args:{value:"Вася Пупкин",icon:(0,jsx_runtime.jsx)(Icons.Z,{icon:"IconAccount",size:"24",color:"#4E4CBF"}),onlyInput:!0}},InputWithErrorAndLabel={args:{label:"E-mail",value:"@mail.ru",error:"Ошибка"}},InputOnly={args:{onlyInput:!0}};InputWithFill.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},InputWithFill.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_InputWithFill$parame=InputWithFill.parameters)||void 0===_InputWithFill$parame?void 0:_InputWithFill$parame.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    value: "Василий Пупкин",\n    onlyInput: true\n  }\n}'},null===(_InputWithFill$parame2=InputWithFill.parameters)||void 0===_InputWithFill$parame2||null===(_InputWithFill$parame3=_InputWithFill$parame2.docs)||void 0===_InputWithFill$parame3?void 0:_InputWithFill$parame3.source)})}),ActiveInput.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},ActiveInput.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_ActiveInput$paramete=ActiveInput.parameters)||void 0===_ActiveInput$paramete?void 0:_ActiveInput$paramete.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    onlyInput: true\n  }\n}"},null===(_ActiveInput$paramete2=ActiveInput.parameters)||void 0===_ActiveInput$paramete2||null===(_ActiveInput$paramete3=_ActiveInput$paramete2.docs)||void 0===_ActiveInput$paramete3?void 0:_ActiveInput$paramete3.source)})}),InputWithHelp.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},InputWithHelp.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_InputWithHelp$parame=InputWithHelp.parameters)||void 0===_InputWithHelp$parame?void 0:_InputWithHelp$parame.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    placeholder: "Василий Пупкин",\n    onlyInput: true\n  }\n}'},null===(_InputWithHelp$parame2=InputWithHelp.parameters)||void 0===_InputWithHelp$parame2||null===(_InputWithHelp$parame3=_InputWithHelp$parame2.docs)||void 0===_InputWithHelp$parame3?void 0:_InputWithHelp$parame3.source)})}),InputWithIcon.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},InputWithIcon.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_InputWithIcon$parame=InputWithIcon.parameters)||void 0===_InputWithIcon$parame?void 0:_InputWithIcon$parame.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    value: "Вася Пупкин",\n    icon: <Icon icon="IconAccount" size="24" color="#4E4CBF" />,\n    onlyInput: true\n  }\n}'},null===(_InputWithIcon$parame2=InputWithIcon.parameters)||void 0===_InputWithIcon$parame2||null===(_InputWithIcon$parame3=_InputWithIcon$parame2.docs)||void 0===_InputWithIcon$parame3?void 0:_InputWithIcon$parame3.source)})}),InputWithErrorAndLabel.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},InputWithErrorAndLabel.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_InputWithErrorAndLab=InputWithErrorAndLabel.parameters)||void 0===_InputWithErrorAndLab?void 0:_InputWithErrorAndLab.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    label: "E-mail",\n    value: "@mail.ru",\n    error: "Ошибка"\n  }\n}'},null===(_InputWithErrorAndLab2=InputWithErrorAndLabel.parameters)||void 0===_InputWithErrorAndLab2||null===(_InputWithErrorAndLab3=_InputWithErrorAndLab2.docs)||void 0===_InputWithErrorAndLab3?void 0:_InputWithErrorAndLab3.source)})}),InputOnly.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},InputOnly.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_InputOnly$parameters=InputOnly.parameters)||void 0===_InputOnly$parameters?void 0:_InputOnly$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    onlyInput: true\n  }\n}"},null===(_InputOnly$parameters2=InputOnly.parameters)||void 0===_InputOnly$parameters2||null===(_InputOnly$parameters3=_InputOnly$parameters2.docs)||void 0===_InputOnly$parameters3?void 0:_InputOnly$parameters3.source)})});var __namedExportsOrder=["InputWithFill","ActiveInput","InputWithHelp","InputWithIcon","InputWithErrorAndLabel","InputOnly"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);