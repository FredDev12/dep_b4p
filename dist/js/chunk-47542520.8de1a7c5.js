(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47542520"],{1944:function(e,t,n){"use strict";n.r(t);var c=n("7a23");const l={class:"dashboard"},o={class:"client-container"},a={key:0,class:"client-table"},r={key:1};function i(e,t,n,i,d,s){const b=Object(c["resolveComponent"])("SidebarComponent"),m=Object(c["resolveComponent"])("ButtonComponent"),u=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",l,[Object(c["createVNode"])(b,{menuItems:e.menuItems},null,8,["menuItems"]),Object(c["createElementVNode"])("main",o,[t[8]||(t[8]=Object(c["createElementVNode"])("h1",null,"Liste des Managers",-1)),Object(c["createVNode"])(m,{onClick:t[0]||(t[0]=t=>e.addUser())},{default:Object(c["withCtx"])(()=>t[1]||(t[1]=[Object(c["createTextVNode"])("Ajouter")])),_:1}),e.managers.length>0?(Object(c["openBlock"])(),Object(c["createElementBlock"])("table",a,[t[4]||(t[4]=Object(c["createElementVNode"])("thead",null,[Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("th",null,"Nom complet"),Object(c["createElementVNode"])("th",null,"Nom d'utilisateur"),Object(c["createElementVNode"])("th",null,"Email"),Object(c["createElementVNode"])("th",null,"Téléphone"),Object(c["createElementVNode"])("th",null,"Genre"),Object(c["createElementVNode"])("th",null,"Rôle"),Object(c["createElementVNode"])("th",null,"Actions")])],-1)),Object(c["createElementVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.managers,n=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",{key:n.id},[Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(n.fullName),1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(n.username),1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(n.email),1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(n.phoneNumber),1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(n.gender),1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(n.role),1),Object(c["createElementVNode"])("td",null,[Object(c["createVNode"])(m,{onClick:t=>e.editClient(n.id)},{default:Object(c["withCtx"])(()=>t[2]||(t[2]=[Object(c["createTextVNode"])("Éditer")])),_:2},1032,["onClick"]),Object(c["createVNode"])(m,{onClick:t=>e.deleteClient(n.id)},{default:Object(c["withCtx"])(()=>t[3]||(t[3]=[Object(c["createTextVNode"])("Supprimer")])),_:2},1032,["onClick"])])]))),128))])])):(Object(c["openBlock"])(),Object(c["createElementBlock"])("p",r,[t[6]||(t[6]=Object(c["createTextVNode"])("Aucun manager trouvé ")),Object(c["createVNode"])(u,{to:"/addUser"},{default:Object(c["withCtx"])(()=>t[5]||(t[5]=[Object(c["createTextVNode"])("Ajouter ici")])),_:1}),t[7]||(t[7]=Object(c["createTextVNode"])("."))]))])])}var d=n("e4c3"),s=n("8c07"),b=n("6605"),m=n("dfd5"),u=n("afbc"),j=Object(c["defineComponent"])({name:"ListManager",components:{ButtonComponent:d["a"],SidebarComponent:s["a"]},data(){return{menuItems:[{name:"Tableau de Bord",link:"/dashboardAdmin",active:!1},{name:"Liste Client",link:"/listClient",active:!1},{name:"Liste Manager",link:"/listManager",active:!0},{name:"Liste User",link:"/listUsers",active:!1},{name:"Profil d'utilisateur",link:"/profileAdmin",active:!1}]}},setup(){const e=Object(c["ref"])([]);Object(b["d"])();Object(c["onMounted"])(async()=>{try{const t=await Object(m["e"])();console.log(t),t&&Array.isArray(t)?e.value=t:console.warn("Aucune donnée reçue pour la liste des clients.")}catch(t){console.error("Une erreur est survenue lors de l'inscription. Veuillez réessayer.",t)}});const t=()=>{console.log("Profil sauvegardé:")};return{managers:e,saveProfile:t}},methods:{editClient(e){console.log("Edit client:",e)},deleteClient(e){console.log("Delete client with ID:",e)},addUser(){u["a"].push("/addUser")}}}),O=n("6b0d"),p=n.n(O);const N=p()(j,[["render",i]]);t["default"]=N},"8c07":function(e,t,n){"use strict";var c=n("7a23");const l={class:"sidebar"},o=["href"];function a(e,t,n,a,r,i){return Object(c["openBlock"])(),Object(c["createElementBlock"])("aside",l,[Object(c["createElementVNode"])("nav",null,[Object(c["createElementVNode"])("ul",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.menuItems,e=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{key:e.name,class:Object(c["normalizeClass"])({active:e.active})},[Object(c["createElementVNode"])("a",{href:e.link},Object(c["toDisplayString"])(e.name),9,o)],2))),128))])])])}var r=Object(c["defineComponent"])({name:"SidebarComponent",props:{menuItems:{type:Array,required:!0}}}),i=(n("9261"),n("6b0d")),d=n.n(i);const s=d()(r,[["render",a],["__scopeId","data-v-74b7da77"]]);t["a"]=s},9261:function(e,t,n){"use strict";n("d558")},d558:function(e,t,n){}}]);
//# sourceMappingURL=chunk-47542520.8de1a7c5.js.map