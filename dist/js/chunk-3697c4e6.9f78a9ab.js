(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3697c4e6"],{"5fb3":function(e,n,t){"use strict";t.r(n);var a=t("7a23");const c={class:"dashboard"};function r(e,n,t,r,o,s){const l=Object(a["resolveComponent"])("SidebarComponent");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[Object(a["createVNode"])(l,{menuItems:e.menuItems},null,8,["menuItems"]),n[0]||(n[0]=Object(a["createElementVNode"])("main",{class:"client-container"},null,-1))])}var o=t("e4c3"),s=t("8c07"),l=t("6605"),i=t("dfd5"),u=Object(a["defineComponent"])({name:"ProfileManager",components:{ButtonComponent:o["a"],SidebarComponent:s["a"]},data(){return{menuItems:[{name:"Tableau de Bord",link:"/dashboardManager",active:!1},{name:"Liste User",link:"/listUsersManager",active:!1},{name:"Profil d'utilisateur",link:"/profileManager",active:!0}]}},setup(){const e=Object(a["ref"])([]);Object(l["d"])();Object(a["onMounted"])(async()=>{try{const n=await Object(i["f"])();console.log(n),n&&Array.isArray(n.data)?e.value=n.data:console.warn("Aucune donnée reçue pour la liste des clients.")}catch(n){console.error("Une erreur est survenue lors de l'inscription. Veuillez réessayer.",n)}});const n=()=>{console.log("Profil sauvegardé:")};return{users:e,saveProfile:n}}}),d=t("6b0d"),m=t.n(d);const b=m()(u,[["render",r]]);n["default"]=b},"8c07":function(e,n,t){"use strict";var a=t("7a23");const c={class:"sidebar"},r=["href"];function o(e,n,t,o,s,l){return Object(a["openBlock"])(),Object(a["createElementBlock"])("aside",c,[Object(a["createElementVNode"])("nav",null,[Object(a["createElementVNode"])("ul",null,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.menuItems,e=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{key:e.name,class:Object(a["normalizeClass"])({active:e.active})},[Object(a["createElementVNode"])("a",{href:e.link},Object(a["toDisplayString"])(e.name),9,r)],2))),128))])])])}var s=Object(a["defineComponent"])({name:"SidebarComponent",props:{menuItems:{type:Array,required:!0}}}),l=(t("9261"),t("6b0d")),i=t.n(l);const u=i()(s,[["render",o],["__scopeId","data-v-74b7da77"]]);n["a"]=u},9261:function(e,n,t){"use strict";t("d558")},d558:function(e,n,t){}}]);
//# sourceMappingURL=chunk-3697c4e6.9f78a9ab.js.map