(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6212b2a5"],{"0da1":function(e,t,o){"use strict";o("7233")},"14f4":function(e,t,o){},3724:function(e,t,o){"use strict";var l=o("7a23");const n={for:"select",class:"select-label"},a=["id"],r=["value"];function c(e,t,o,c,i,s){return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",null,[Object(l["createElementVNode"])("label",n,Object(l["toDisplayString"])(e.label),1),Object(l["withDirectives"])(Object(l["createElementVNode"])("select",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.selectedOption=t),class:"gender-select",id:e.uniqueId},[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.options,e=>(Object(l["openBlock"])(),Object(l["createElementBlock"])("option",{key:e.value,value:e.value},Object(l["toDisplayString"])(e.label),9,r))),128))],8,a),[[l["vModelSelect"],e.selectedOption]])])}var i=Object(l["defineComponent"])({name:"SelectComponent",props:{modelValue:{type:String,required:!1},options:{type:Array,required:!0},label:{type:String,default:"Sélectionnez une option"},id:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:t}){const o=Object(l["computed"])(()=>e.id||"select-"+Math.random().toString(36).substr(2,9)),n=Object(l["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",e)});return{selectedOption:n,options:e.options,uniqueId:o}}}),s=(o("0da1"),o("6b0d")),d=o.n(s);const u=d()(i,[["render",c],["__scopeId","data-v-657b3cd4"]]);t["a"]=u},"45f6":function(e,t,o){},7233:function(e,t,o){},8192:function(e,t,o){"use strict";var l=o("7a23");const n={class:"input-field"},a=["for"],r=["id","type","value","placeholder","disabled","maxlength","minlength"],c={key:1,class:"error-message"};function i(e,t,o,i,s,d){return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",n,[e.label?(Object(l["openBlock"])(),Object(l["createElementBlock"])("label",{key:0,for:e.id,class:"input-label"},Object(l["toDisplayString"])(e.label),9,a)):Object(l["createCommentVNode"])("",!0),Object(l["createElementVNode"])("input",{id:e.id,type:e.type,value:e.modelValue,placeholder:e.placeholder,disabled:e.disabled,maxlength:e.maxlength,minlength:e.minlength,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value)),class:"input"},null,40,r),e.errorMessage?(Object(l["openBlock"])(),Object(l["createElementBlock"])("p",c,Object(l["toDisplayString"])(e.errorMessage),1)):Object(l["createCommentVNode"])("",!0)])}var s=Object(l["defineComponent"])({name:"InputField",props:{id:{type:String,required:!0},label:{type:String,required:!0},type:{type:String,default:"text"},modelValue:{type:String,required:!0},placeholder:{type:String,required:!0},disabled:{type:Boolean,required:!1,default:!1},maxlength:{type:Number,required:!1},minlength:{type:Number,required:!1},errorMessage:{type:String,required:!1}}}),d=(o("be8d"),o("6b0d")),u=o.n(d);const m=u()(s,[["render",i],["__scopeId","data-v-424e3b7f"]]);t["a"]=m},"8b2b":function(e,t,o){"use strict";o("14f4")},"8c07":function(e,t,o){"use strict";var l=o("7a23");const n={class:"sidebar"},a=["href"];function r(e,t,o,r,c,i){return Object(l["openBlock"])(),Object(l["createElementBlock"])("aside",n,[Object(l["createElementVNode"])("nav",null,[Object(l["createElementVNode"])("ul",null,[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.menuItems,e=>(Object(l["openBlock"])(),Object(l["createElementBlock"])("li",{key:e.name,class:Object(l["normalizeClass"])({active:e.active})},[Object(l["createElementVNode"])("a",{href:e.link},Object(l["toDisplayString"])(e.name),9,a)],2))),128))])])])}var c=Object(l["defineComponent"])({name:"SidebarComponent",props:{menuItems:{type:Array,required:!0}}}),i=(o("9261"),o("6b0d")),s=o.n(i);const d=s()(c,[["render",r],["__scopeId","data-v-74b7da77"]]);t["a"]=d},9261:function(e,t,o){"use strict";o("d558")},9529:function(e,t,o){"use strict";var l=o("7a23");const n={class:"image-upload-container"};function a(e,t,o,a,r,c){return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",n,[Object(l["createElementVNode"])("input",{type:"file",onChange:t[0]||(t[0]=(...t)=>e.handleFileUpload&&e.handleFileUpload(...t)),accept:".png, .jpg, .jpeg, .csv",class:"file-input"},null,32)])}var r=Object(l["defineComponent"])({name:"ImageUpload",emits:["update:file"],setup(e,{emit:t}){const o=e=>{const o=e.target,l=o.files,n=l&&l[0];n&&t("update:file",n)};return{handleFileUpload:o}}}),c=(o("8b2b"),o("6b0d")),i=o.n(c);const s=i()(r,[["render",a],["__scopeId","data-v-923aba26"]]);t["a"]=s},a3f3:function(e,t,o){"use strict";o("45f6")},b3b1:function(e,t,o){"use strict";o.r(t);var l=o("7a23"),n=o("c121"),a=o.n(n);const r={key:0,class:"profile"},c={class:"profile-container"},i={key:0,src:a.a,alt:"Profile Image",class:"profile-image"},s={class:"form-group"},d={key:1,class:"error"},u={key:1,class:"profile"};function m(e,t,o,n,a,m){const p=Object(l["resolveComponent"])("NavBar"),b=Object(l["resolveComponent"])("InputField"),O=Object(l["resolveComponent"])("ButtonComponent");return Object(l["openBlock"])(),Object(l["createElementBlock"])(l["Fragment"],null,[Object(l["createVNode"])(p,{menuItems:e.filteredMenuItems},null,8,["menuItems"]),e.isAuthenticated?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",r,[Object(l["createElementVNode"])("main",c,[Object(l["createElementVNode"])("form",{class:"profile-form",onSubmit:t[6]||(t[6]=Object(l["withModifiers"])((...t)=>e.updateProfile&&e.updateProfile(...t),["prevent"]))},[e.imageUrl||e.defaultImage?(Object(l["openBlock"])(),Object(l["createElementBlock"])("img",i)):Object(l["createCommentVNode"])("",!0),Object(l["createElementVNode"])("button",{class:"btn",onChange:t[0]||(t[0]=(...t)=>e.changePicture&&e.changePicture(...t))},"changer la photo",32),Object(l["createElementVNode"])("div",s,[Object(l["createVNode"])(b,{id:"name",label:"Nom",modelValue:e.form.name,"onUpdate:modelValue":t[1]||(t[1]=t=>e.form.name=t),type:"text",placeholder:"Nom",disabled:"",required:""},null,8,["modelValue"]),Object(l["createVNode"])(b,{id:"email",label:"Email",modelValue:e.form.email,"onUpdate:modelValue":t[2]||(t[2]=t=>e.form.email=t),type:"email",placeholder:"Votre email","error-message":e.emailError,disabled:"",required:""},null,8,["modelValue","error-message"]),Object(l["createVNode"])(b,{id:"password",label:"Mot de passe",modelValue:e.form.password,"onUpdate:modelValue":t[3]||(t[3]=t=>e.form.password=t),type:"password",placeholder:"Votre mot de passe","error-message":e.passwordError,disabled:"",required:""},null,8,["modelValue","error-message"]),Object(l["createVNode"])(b,{id:"confirmpassword",label:"Confirmez le mot de passe",modelValue:e.form.confirmPassword,"onUpdate:modelValue":t[4]||(t[4]=t=>e.form.confirmPassword=t),type:"password",placeholder:"Confirmez votre mot de passe",disabled:"",required:""},null,8,["modelValue"]),Object(l["createVNode"])(b,{id:"role",label:"role",modelValue:e.form.role,"onUpdate:modelValue":t[5]||(t[5]=t=>e.form.role=t),type:"text",placeholder:"Votre role",disabled:"",required:""},null,8,["modelValue"])]),Object(l["createVNode"])(O,{type:"submit",class:"btn-primary",disabled:e.loading},{default:Object(l["withCtx"])(()=>[e.loading?(Object(l["openBlock"])(),Object(l["createElementBlock"])(l["Fragment"],{key:0},[Object(l["createTextVNode"])("Chargement...")],64)):(Object(l["openBlock"])(),Object(l["createElementBlock"])(l["Fragment"],{key:1},[Object(l["createTextVNode"])("Update")],64))]),_:1},8,["disabled"]),e.apiError?(Object(l["openBlock"])(),Object(l["createElementBlock"])("p",d,Object(l["toDisplayString"])(e.apiError),1)):Object(l["createCommentVNode"])("",!0)],32)])])):(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",u,t[7]||(t[7]=[Object(l["createElementVNode"])("p",null,"Veuillez vous connecter pour modifier votre profil.",-1)])))],64)}var p=o("8c07"),b=o("e4c3"),O=o("d000"),f=o("8192"),j=o("3724"),g=o("9529"),k=o("6605"),v=o("5d04"),V=o("3a50"),y=Object(l["defineComponent"])({name:"Profile",components:{SidebarComponent:p["a"],ButtonComponent:b["a"],InputField:f["a"],SelectComponent:j["a"],ImageUpload:g["a"],NavBar:O["a"]},props:{entityType:{type:String,required:!0}},setup(e){const t=Object(v["a"])(),o=localStorage.getItem("role")||"Utilisateur",n=localStorage.getItem("token"),a=Object(l["ref"])([]),r=Object(l["ref"])([]),c=(Object(k["c"])(),Object(l["reactive"])({name:t.userProfile.name,email:t.userProfile.email,password:"",confirmPassword:"",file:null,role:o})),i=t.isAuthenticated,s=Object(l["ref"])(""),d=Object(l["ref"])("../assets/user.png"),u=null,m=Object(l["ref"])("../assets/user.png"),p=e=>{c.file=e},b=Object(l["ref"])(""),O=Object(l["ref"])(""),f=Object(l["ref"])(""),j=Object(l["ref"])(!1);async function g(e){const t=e.target.files[0],o=new FormData;o.append("photo",t);try{Object(V["f"])(o)}catch(l){console.error("Error uploading file:",l)}}function y(){console.log("Form submitted")}Object(l["onMounted"])(async()=>{if(n){const e=await Object(V["a"])(n);a.value=e,console.log(a.value)}else console.error("Authentication token is missing")});const h=()=>{if(t.token)try{alert("Profile updated successfully!")}catch(e){console.error("Failed to update profile:",e),alert("Failed to update profile.")}else console.error("Authentication token is missing")},E=()=>{console.log("Change profile picture")},B=Object(l["ref"])([{name:"Tableau de Bord",link:"/dashboard",active:!1,visibleTo:["Admin","Client","Manager","Utilisateur"]},{name:"Liste des Utilisateurs",link:"/liste",active:!1,visibleTo:["Admin","Client","Manager"]},{name:"Mon Profil",link:"/profile",active:!0,visibleTo:["Admin","Client","Manager","Utilisateur"]}]),C=B.value.filter(e=>e.visibleTo.includes(o));return{role:o,changePicture:E,isAuthenticated:i,menuItems:B,users:r,form:c,updateProfile:h,emailError:b,handleFile:p,passwordError:O,apiError:f,loading:j,previewImage:u,defaultImage:m,filteredMenuItems:C,handleFileUpload:g,imageUrl:s,submitForm:y,defaultImageUrl:d}}}),h=o("6b0d"),E=o.n(h);const B=E()(y,[["render",m]]);t["default"]=B},be8d:function(e,t,o){"use strict";o("d2e2")},c121:function(e,t,o){e.exports=o.p+"img/user.399c5f70.png"},d000:function(e,t,o){"use strict";var l=o("7a23");const n={class:"navbar"};function a(e,t,o,a,r,c){const i=Object(l["resolveComponent"])("router-link");return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",null,[Object(l["createElementVNode"])("header",n,[t[1]||(t[1]=Object(l["createElementVNode"])("div",{class:"logo"},[Object(l["createElementVNode"])("a",{href:"/"},"MonLogo")],-1)),Object(l["createElementVNode"])("div",{class:Object(l["normalizeClass"])(["menu",{active:e.isMenuOpen}])},[Object(l["createElementVNode"])("ul",null,[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.menuItems,e=>(Object(l["openBlock"])(),Object(l["createElementBlock"])("li",{key:e.name,class:Object(l["normalizeClass"])({active:e.active})},[Object(l["createVNode"])(i,{class:"link",to:e.link},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.name),1)]),_:2},1032,["to"])],2))),128))])],2),Object(l["createElementVNode"])("div",{class:Object(l["normalizeClass"])(["menu",{active:e.isMenuOpen}])},[Object(l["createElementVNode"])("ul",null,[Object(l["createElementVNode"])("li",null,[Object(l["createElementVNode"])("a",{href:"#",onClick:t[0]||(t[0]=Object(l["withModifiers"])((...t)=>e.logout&&e.logout(...t),["prevent"]))},"Déconnexion")])])],2)])])}var r=o("6605"),c=Object(l["defineComponent"])({name:"NavbarComponent",props:{menuItems:{type:Array,required:!0}},setup(){const e=Object(r["c"])(),t=()=>{localStorage.removeItem("token"),localStorage.removeItem("username"),localStorage.removeItem("role"),e.push("/")};return{logout:t}},data(){return{isMenuOpen:!1}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen}}}),i=o("6b0d"),s=o.n(i);const d=s()(c,[["render",a]]);t["a"]=d},d2e2:function(e,t,o){},d558:function(e,t,o){},e4c3:function(e,t,o){"use strict";var l=o("7a23");const n=["type","disabled"];function a(e,t,o,a,r,c){return Object(l["openBlock"])(),Object(l["createElementBlock"])("button",{type:e.type,disabled:e.disabled,onClick:t[0]||(t[0]=(...t)=>e.onClick&&e.onClick(...t)),class:Object(l["normalizeClass"])(["button",{"button--disabled":e.disabled}])},[Object(l["renderSlot"])(e.$slots,"default",{},void 0,!0)],10,n)}var r=Object(l["defineComponent"])({name:"Button",props:{type:{type:String,required:!1,default:"button"},disabled:{type:Boolean,required:!1,default:!1}},emits:["click"],methods:{onClick(e){this.disabled||this.$emit("click",e)}}}),c=(o("a3f3"),o("6b0d")),i=o.n(c);const s=i()(r,[["render",a],["__scopeId","data-v-5b505ce3"]]);t["a"]=s}}]);
//# sourceMappingURL=chunk-6212b2a5.e2f82c77.js.map