(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-337273da"],{"50d5":function(e,t,o){e.exports=o.p+"img/wadoria.673e5e7d.png"},8192:function(e,t,o){"use strict";var r=o("7a23");const l={class:"input-field"},a=["for"],n=["id","type","value","placeholder","disabled","maxlength","minlength"],c={key:1,class:"error-message"};function d(e,t,o,d,s,i){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",l,[e.label?(Object(r["openBlock"])(),Object(r["createElementBlock"])("label",{key:0,for:e.id,class:"input-label"},Object(r["toDisplayString"])(e.label),9,a)):Object(r["createCommentVNode"])("",!0),Object(r["createElementVNode"])("input",{id:e.id,type:e.type,value:e.modelValue,placeholder:e.placeholder,disabled:e.disabled,maxlength:e.maxlength,minlength:e.minlength,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value)),class:"input"},null,40,n),e.errorMessage?(Object(r["openBlock"])(),Object(r["createElementBlock"])("p",c,Object(r["toDisplayString"])(e.errorMessage),1)):Object(r["createCommentVNode"])("",!0)])}var s=Object(r["defineComponent"])({name:"InputField",props:{id:{type:String,required:!0},label:{type:String,required:!0},type:{type:String,default:"text"},modelValue:{type:String,required:!0},placeholder:{type:String,required:!0},disabled:{type:Boolean,required:!1,default:!1},maxlength:{type:Number,required:!1},minlength:{type:Number,required:!1},errorMessage:{type:String,required:!1}}}),i=(o("be8d"),o("6b0d")),u=o.n(i);const m=u()(s,[["render",d],["__scopeId","data-v-424e3b7f"]]);t["a"]=m},a55b:function(e,t,o){"use strict";o.r(t);var r=o("7a23"),l=o("50d5"),a=o.n(l);const n={class:"login-container"},c={class:"form-group"},d={key:0,class:"error"};function s(e,t,o,l,s,i){const u=Object(r["resolveComponent"])("InputField"),m=Object(r["resolveComponent"])("ButtonComponent"),p=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",n,[t[4]||(t[4]=Object(r["createElementVNode"])("img",{src:a.a,alt:"Logo",class:"logo"},null,-1)),t[5]||(t[5]=Object(r["createElementVNode"])("h1",null,"Connexion",-1)),Object(r["createElementVNode"])("form",{onSubmit:t[2]||(t[2]=Object(r["withModifiers"])((...t)=>e.handleLogin&&e.handleLogin(...t),["prevent"]))},[Object(r["createElementVNode"])("div",c,[Object(r["createVNode"])(u,{type:"email",id:"email",modelValue:e.form.email,"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.email=t),label:"Email","error-message":e.emailError,placeholder:"Entrez votre email",required:""},null,8,["modelValue","error-message"]),Object(r["createVNode"])(u,{type:"password",id:"password",modelValue:e.form.password,"onUpdate:modelValue":t[1]||(t[1]=t=>e.form.password=t),label:"Mot de passe","error-message":e.passwordError,placeholder:"Entrez votre mot de passe",required:""},null,8,["modelValue","error-message"])]),Object(r["createVNode"])(m,{type:"submit",class:"btn-primary",disabled:e.loading},{default:Object(r["withCtx"])(()=>[e.loading?(Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],{key:0},[Object(r["createTextVNode"])("Chargement...")],64)):(Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],{key:1},[Object(r["createTextVNode"])("Se connecter")],64))]),_:1},8,["disabled"]),e.apiError?(Object(r["openBlock"])(),Object(r["createElementBlock"])("p",d,Object(r["toDisplayString"])(e.apiError),1)):Object(r["createCommentVNode"])("",!0)],32),Object(r["createElementVNode"])("p",null,[Object(r["createVNode"])(p,{to:"/requestPasswordReset"},{default:Object(r["withCtx"])(()=>t[3]||(t[3]=[Object(r["createTextVNode"])("Mot de passe oublié ?")])),_:1})]),t[6]||(t[6]=Object(r["createElementVNode"])("p",null,null,-1))])}var i=o("6605"),u=o("dfd5"),m=o("e4c3"),p=o("8192"),b=Object(r["defineComponent"])({name:"Login",components:{ButtonComponent:m["a"],InputField:p["a"]},setup(){const e=Object(i["c"])(),t=Object(r["reactive"])({email:"",password:""}),o=Object(r["ref"])(""),l=Object(r["ref"])(""),a=Object(r["ref"])(""),n=Object(r["ref"])(!1),c=async()=>{if(n.value=!0,o.value="",l.value="",a.value="",!d(t.email))return o.value="Veuillez entrer une adresse email valide.",void(n.value=!1);if(t.password.length<6)return l.value="Le mot de passe doit contenir au moins 6 caractères.",void(n.value=!1);try{const o=await Object(u["d"])(t);console.log("valide ",o.message),o.token&&(localStorage.setItem("token",o.token),localStorage.setItem("name",o.userInfo.name),localStorage.setItem("id",o.userInfo.id),localStorage.setItem("role",o.userInfo.role),console.log("login",o.userInfo),o.userInfo.role?e.push({path:"/dashboard",query:{username:o.userInfo.username}}):(a.value="Role non reconnu.",console.log("Role non reconnu.")))}catch(r){console.error(r),console.log(t),a.value=r.message}finally{n.value=!1}},d=e=>{const t=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;return t.test(e)};return{form:t,emailError:o,passwordError:l,apiError:a,handleLogin:c,loading:n}}}),g=o("6b0d"),j=o.n(g);const O=j()(b,[["render",s]]);t["default"]=O},be8d:function(e,t,o){"use strict";o("d2e2")},d2e2:function(e,t,o){}}]);
//# sourceMappingURL=chunk-337273da.31a546c3.js.map