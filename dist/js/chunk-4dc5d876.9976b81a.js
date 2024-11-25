(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4dc5d876"],{"0da1":function(e,t,l){"use strict";l("7233")},"14f4":function(e,t,l){},3724:function(e,t,l){"use strict";var o=l("7a23");const r={for:"select",class:"select-label"},a=["id"],n=["value"];function d(e,t,l,d,c,i){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["createElementVNode"])("label",r,Object(o["toDisplayString"])(e.label),1),Object(o["withDirectives"])(Object(o["createElementVNode"])("select",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.selectedOption=t),class:"gender-select",id:e.uniqueId},[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.options,e=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("option",{key:e.value,value:e.value},Object(o["toDisplayString"])(e.label),9,n))),128))],8,a),[[o["vModelSelect"],e.selectedOption]])])}var c=Object(o["defineComponent"])({name:"SelectComponent",props:{modelValue:{type:String,required:!1},options:{type:Array,required:!0},label:{type:String,default:"Sélectionnez une option"},id:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:t}){const l=Object(o["computed"])(()=>e.id||"select-"+Math.random().toString(36).substr(2,9)),r=Object(o["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",e)});return{selectedOption:r,options:e.options,uniqueId:l}}}),i=(l("0da1"),l("6b0d")),s=l.n(i);const u=s()(c,[["render",d],["__scopeId","data-v-657b3cd4"]]);t["a"]=u},7233:function(e,t,l){},8192:function(e,t,l){"use strict";var o=l("7a23");const r={class:"input-field"},a=["for"],n=["id","type","value","placeholder","disabled","maxlength","minlength"],d={key:1,class:"error-message"};function c(e,t,l,c,i,s){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,[e.label?(Object(o["openBlock"])(),Object(o["createElementBlock"])("label",{key:0,for:e.id,class:"input-label"},Object(o["toDisplayString"])(e.label),9,a)):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("input",{id:e.id,type:e.type,value:e.modelValue,placeholder:e.placeholder,disabled:e.disabled,maxlength:e.maxlength,minlength:e.minlength,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value)),class:"input"},null,40,n),e.errorMessage?(Object(o["openBlock"])(),Object(o["createElementBlock"])("p",d,Object(o["toDisplayString"])(e.errorMessage),1)):Object(o["createCommentVNode"])("",!0)])}var i=Object(o["defineComponent"])({name:"InputField",props:{id:{type:String,required:!0},label:{type:String,required:!0},type:{type:String,default:"text"},modelValue:{type:String,required:!0},placeholder:{type:String,required:!0},disabled:{type:Boolean,required:!1,default:!1},maxlength:{type:Number,required:!1},minlength:{type:Number,required:!1},errorMessage:{type:String,required:!1}}}),s=(l("be8d"),l("6b0d")),u=l.n(s);const m=u()(i,[["render",c],["__scopeId","data-v-424e3b7f"]]);t["a"]=m},"8b2b":function(e,t,l){"use strict";l("14f4")},"935e":function(e,t,l){"use strict";l.r(t);var o=l("7a23");const r={class:"register"},a={class:"form-group"},n={key:0,class:"error"};function d(e,t,l,d,c,i){const s=Object(o["resolveComponent"])("InputField"),u=Object(o["resolveComponent"])("SelectComponent"),m=Object(o["resolveComponent"])("ImageUpload"),p=Object(o["resolveComponent"])("ButtonComponent"),b=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,[t[12]||(t[12]=Object(o["createElementVNode"])("h1",null,"Inscription",-1)),Object(o["createElementVNode"])("form",{onSubmit:t[8]||(t[8]=Object(o["withModifiers"])((...t)=>e.handleRegister&&e.handleRegister(...t),["prevent"]))},[Object(o["createElementVNode"])("div",a,[Object(o["createVNode"])(s,{id:"name",label:"Nom",modelValue:e.form.fullName,"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.fullName=t),type:"text",placeholder:"Nom",required:""},null,8,["modelValue"]),Object(o["createVNode"])(s,{id:"username",label:"Nom d'utilisateur",modelValue:e.form.username,"onUpdate:modelValue":t[1]||(t[1]=t=>e.form.username=t),type:"text",placeholder:"Nom d'utilisateur",required:""},null,8,["modelValue"]),Object(o["createVNode"])(s,{id:"email",label:"Email",modelValue:e.form.email,"onUpdate:modelValue":t[2]||(t[2]=t=>e.form.email=t),type:"email",placeholder:"Votre email","error-message":e.emailError,required:""},null,8,["modelValue","error-message"]),Object(o["createVNode"])(s,{id:"password",label:"Mot de passe",modelValue:e.form.password,"onUpdate:modelValue":t[3]||(t[3]=t=>e.form.password=t),type:"password",placeholder:"Votre mot de passe","error-message":e.passwordError,required:""},null,8,["modelValue","error-message"]),Object(o["createVNode"])(s,{id:"birthDate",label:"Date de naissance",modelValue:e.form.birthDate,"onUpdate:modelValue":t[4]||(t[4]=t=>e.form.birthDate=t),type:"date",placeholder:"Votre date de naissance",required:""},null,8,["modelValue"]),Object(o["createVNode"])(s,{id:"phoneNumber",label:"Téléphone",modelValue:e.form.phoneNumber,"onUpdate:modelValue":t[5]||(t[5]=t=>e.form.phoneNumber=t),type:"number",placeholder:"Votre numéro de téléphone",required:""},null,8,["modelValue"]),Object(o["createVNode"])(u,{id:"gender",modelValue:e.form.gender,"onUpdate:modelValue":t[6]||(t[6]=t=>e.form.gender=t),options:e.genderOptions,label:"Genre",required:""},null,8,["modelValue","options"]),Object(o["createVNode"])(s,{id:"address",label:"Adresse",modelValue:e.form.address,"onUpdate:modelValue":t[7]||(t[7]=t=>e.form.address=t),type:"text",placeholder:"Votre adresse",required:""},null,8,["modelValue"]),Object(o["createVNode"])(m,{"onUpdate:file":e.handleFile,required:""},null,8,["onUpdate:file"])]),Object(o["createVNode"])(p,{type:"submit",class:"btn-primary",disabled:e.loading},{default:Object(o["withCtx"])(()=>[e.loading?(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],{key:0},[Object(o["createTextVNode"])("Chargement...")],64)):(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],{key:1},[Object(o["createTextVNode"])("S'inscrire")],64))]),_:1},8,["disabled"]),e.apiError?(Object(o["openBlock"])(),Object(o["createElementBlock"])("p",n,Object(o["toDisplayString"])(e.apiError),1)):Object(o["createCommentVNode"])("",!0)],32),Object(o["createElementVNode"])("p",null,[t[10]||(t[10]=Object(o["createTextVNode"])(" Vous avez déjà un compte ? ")),Object(o["createVNode"])(b,{to:"/"},{default:Object(o["withCtx"])(()=>t[9]||(t[9]=[Object(o["createTextVNode"])("Connectez-vous ici")])),_:1}),t[11]||(t[11]=Object(o["createTextVNode"])(". "))])])}var c=l("6605"),i=l("dfd5"),s=l("e4c3"),u=l("8192"),m=l("3724"),p=l("9529"),b=Object(o["defineComponent"])({name:"Register",components:{ButtonComponent:s["a"],InputField:u["a"],SelectComponent:m["a"],ImageUpload:p["a"]},setup(){const e=Object(c["d"])(),t=Object(o["reactive"])({fullName:"",username:"",email:"",password:"",birthDate:"",phoneNumber:"",gender:"",address:"",file:null,role:"admin"}),l=Object(o["ref"])("Homme"),r=Object(o["ref"])([{value:"Homme",label:"Homme"},{value:"Femme",label:"Femme"}]),a=e=>{t.file=e},n=Object(o["ref"])(""),d=Object(o["ref"])(""),s=Object(o["ref"])(""),u=Object(o["ref"])(!1),m=async()=>{if(console.log(t.file),u.value=!0,n.value="",d.value="",s.value="",!p(t.email))return n.value="Veuillez entrer une adresse email valide.",void(u.value=!1);if(t.password.length<6)return d.value="Le mot de passe doit contenir au moins 6 caractères.",void(u.value=!1);try{console.log(t),await Object(i["h"])(t),e.push("/")}catch(l){s.value="Une erreur est survenue lors de l'inscription. Veuillez réessayer."}finally{u.value=!1}},p=e=>{const t=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;return t.test(e.trim())};return{handleRegister:m,form:t,emailError:n,handleFile:a,passwordError:d,apiError:s,loading:u,genderOptions:r,selectedGender:l}}}),O=l("6b0d"),j=l.n(O);const f=j()(b,[["render",d]]);t["default"]=f},9529:function(e,t,l){"use strict";var o=l("7a23");const r={class:"image-upload-container"};function a(e,t,l,a,n,d){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,[Object(o["createElementVNode"])("input",{type:"file",onChange:t[0]||(t[0]=(...t)=>e.handleFileUpload&&e.handleFileUpload(...t)),accept:".png, .jpg, .jpeg, .csv",class:"file-input"},null,32)])}var n=Object(o["defineComponent"])({name:"ImageUpload",emits:["update:file"],setup(e,{emit:t}){const l=e=>{const l=e.target,o=l.files,r=o&&o[0];r&&t("update:file",r)};return{handleFileUpload:l}}}),d=(l("8b2b"),l("6b0d")),c=l.n(d);const i=c()(n,[["render",a],["__scopeId","data-v-923aba26"]]);t["a"]=i},be8d:function(e,t,l){"use strict";l("d2e2")},d2e2:function(e,t,l){}}]);
//# sourceMappingURL=chunk-4dc5d876.9976b81a.js.map