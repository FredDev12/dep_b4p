(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d56180d"],{"45f6":function(e,t,r){},"50d5":function(e,t,r){e.exports=r.p+"img/wadoria.673e5e7d.png"},8192:function(e,t,r){"use strict";var o=r("7a23");const a={class:"input-field"},n=["for"],l=["id","type","value","placeholder","disabled","maxlength","minlength"],c={key:1,class:"error-message"};function d(e,t,r,d,i,s){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[e.label?(Object(o["openBlock"])(),Object(o["createElementBlock"])("label",{key:0,for:e.id,class:"input-label"},Object(o["toDisplayString"])(e.label),9,n)):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("input",{id:e.id,type:e.type,value:e.modelValue,placeholder:e.placeholder,disabled:e.disabled,maxlength:e.maxlength,minlength:e.minlength,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value)),class:"input"},null,40,l),e.errorMessage?(Object(o["openBlock"])(),Object(o["createElementBlock"])("p",c,Object(o["toDisplayString"])(e.errorMessage),1)):Object(o["createCommentVNode"])("",!0)])}var i=Object(o["defineComponent"])({name:"InputField",props:{id:{type:String,required:!0},label:{type:String,required:!0},type:{type:String,default:"text"},modelValue:{type:String,required:!0},placeholder:{type:String,required:!0},disabled:{type:Boolean,required:!1,default:!1},maxlength:{type:Number,required:!1},minlength:{type:Number,required:!1},errorMessage:{type:String,required:!1}}}),s=(r("be8d"),r("6b0d")),u=r.n(s);const p=u()(i,[["render",d],["__scopeId","data-v-424e3b7f"]]);t["a"]=p},a3f3:function(e,t,r){"use strict";r("45f6")},a55b:function(e,t,r){"use strict";r.r(t);var o=r("7a23"),a=r("50d5"),n=r.n(a);const l={class:"login-container"},c={class:"form-group"},d={key:0,class:"error"};function i(e,t,r,a,i,s){const u=Object(o["resolveComponent"])("InputField"),p=Object(o["resolveComponent"])("ButtonComponent"),b=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",l,[t[4]||(t[4]=Object(o["createElementVNode"])("img",{src:n.a,alt:"Logo",class:"logo"},null,-1)),t[5]||(t[5]=Object(o["createElementVNode"])("h1",null,"Connexion",-1)),Object(o["createElementVNode"])("form",{onSubmit:t[2]||(t[2]=Object(o["withModifiers"])((...t)=>e.handleLogin&&e.handleLogin(...t),["prevent"]))},[Object(o["createElementVNode"])("div",c,[Object(o["createVNode"])(u,{type:"email",id:"email",modelValue:e.email,"onUpdate:modelValue":t[0]||(t[0]=t=>e.email=t),label:"Email","error-message":e.emailError,placeholder:"Entrez votre email",required:""},null,8,["modelValue","error-message"]),Object(o["createVNode"])(u,{type:"password",id:"password",modelValue:e.password,"onUpdate:modelValue":t[1]||(t[1]=t=>e.password=t),label:"Mot de passe","error-message":e.passwordError,placeholder:"Entrez votre mot de passe",required:""},null,8,["modelValue","error-message"])]),Object(o["createVNode"])(p,{type:"submit",class:"btn-primary",disabled:e.loading},{default:Object(o["withCtx"])(()=>[e.loading?(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],{key:0},[Object(o["createTextVNode"])("Chargement...")],64)):(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],{key:1},[Object(o["createTextVNode"])("Se connecter")],64))]),_:1},8,["disabled"]),e.apiError?(Object(o["openBlock"])(),Object(o["createElementBlock"])("p",d,Object(o["toDisplayString"])(e.apiError),1)):Object(o["createCommentVNode"])("",!0)],32),Object(o["createElementVNode"])("p",null,[Object(o["createVNode"])(b,{to:"/requestPasswordReset"},{default:Object(o["withCtx"])(()=>t[3]||(t[3]=[Object(o["createTextVNode"])("Mot de passe oublié ?")])),_:1})])])}var s=r("6605"),u=r("5d04"),p=r("e4c3"),b=r("8192"),m=Object(o["defineComponent"])({name:"Login",components:{ButtonComponent:p["a"],InputField:b["a"]},setup(){const e=Object(s["c"])(),t=Object(u["a"])(),r=Object(o["ref"])(""),a=Object(o["ref"])(""),n=Object(o["ref"])(""),l=Object(o["ref"])(""),c=Object(o["ref"])(""),d=Object(o["ref"])(!1),i=async()=>{if(d.value=!0,n.value="",l.value="",c.value="",!p(r.value))return n.value="Veuillez entrer une adresse email valide.",void(d.value=!1);if(a.value.length<6)return l.value="Le mot de passe doit contenir au moins 6 caractères.",void(d.value=!1);try{await t.performLogin(r.value,a.value),e.push({name:"Dashboard"})}catch(o){console.error(o),c.value=o.message||"Role non reconnu."}finally{d.value=!1}},p=e=>{const t=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;return t.test(e)};return{email:r,password:a,emailError:n,passwordError:l,apiError:c,handleLogin:i,loading:d}}}),j=r("6b0d"),O=r.n(j);const g=O()(m,[["render",i]]);t["default"]=g},be8d:function(e,t,r){"use strict";r("d2e2")},d2e2:function(e,t,r){},e4c3:function(e,t,r){"use strict";var o=r("7a23");const a=["type","disabled"];function n(e,t,r,n,l,c){return Object(o["openBlock"])(),Object(o["createElementBlock"])("button",{type:e.type,disabled:e.disabled,onClick:t[0]||(t[0]=(...t)=>e.onClick&&e.onClick(...t)),class:Object(o["normalizeClass"])(["button",{"button--disabled":e.disabled}])},[Object(o["renderSlot"])(e.$slots,"default",{},void 0,!0)],10,a)}var l=Object(o["defineComponent"])({name:"Button",props:{type:{type:String,required:!1,default:"button"},disabled:{type:Boolean,required:!1,default:!1}},emits:["click"],methods:{onClick(e){this.disabled||this.$emit("click",e)}}}),c=(r("a3f3"),r("6b0d")),d=r.n(c);const i=d()(l,[["render",n],["__scopeId","data-v-5b505ce3"]]);t["a"]=i}}]);
//# sourceMappingURL=chunk-2d56180d.ff4f8ba1.js.map