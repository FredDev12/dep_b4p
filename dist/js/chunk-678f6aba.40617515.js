(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-678f6aba"],{"5d04":function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));var n=o("be92"),c=o("3a50");const l=Object(n["b"])({id:"auth",state:()=>({token:localStorage.getItem("token")||null,userProfile:null,users:[],userList:[],listClients:[],listManagers:[],listUtilisateurs:[],isAuthenticated:!!localStorage.getItem("token")}),actions:{async performLogin(e,t){try{const o=await Object(c["d"])(e,t),n=o.token,l=o.role;this.token=n,localStorage.setItem("token",n),localStorage.setItem("role",l),this.isAuthenticated=!0,await this.fetchUserProfile(n),await this.fetchUsers(l,n)}catch(o){throw console.error("Authentication failed:",o),new Error("Login failed")}},async fetchUserProfile(e){if(e)try{const t=await Object(c["a"])(e);this.userProfile=t,this.isAuthenticated=!0}catch(t){console.error("Failed to fetch user profile:",t),this.isAuthenticated=!1}else console.error("No token provided")},async fetchUsers(e,t){if(t)try{const o=await Object(c["c"])(e,t);console.log("storage",o),this.users=o,console.log(this.users)}catch(o){console.error("Failed to fetch user:",o),this.isAuthenticated=!1}else console.error("No token provided")},async fetchUsersBY(e,t){if(t)try{const o=await Object(c["b"])(e,t);console.log("storage",o),this.userList=o,console.log("liste ",this.userList)}catch(o){console.error("Failed to fetch user:",o),this.isAuthenticated=!1}else console.error("No token provided")},async performLogout(){if(this.token)try{await Object(c["e"])(this.token),this.isAuthenticated=!1,this.userProfile=null,localStorage.removeItem("token"),localStorage.removeItem("role")}catch(e){console.error("Failed to logout:",e)}else console.error("No token provided")},async addUser(e){},async fetchUsersByRole(e){if(this.token)try{const t=await Object(c["c"])(e,this.token);"client"===e?this.listClients=t:"manager"===e?this.listManagers=t:this.listUtilisateurs=t}catch(t){console.error(`Failed to fetch ${e}s:`,t)}else console.error("No token provided")}}})},"8c07":function(e,t,o){"use strict";var n=o("7a23");const c={class:"sidebar"},l=["href"];function r(e,t,o,r,a,i){return Object(n["openBlock"])(),Object(n["createElementBlock"])("aside",c,[Object(n["createElementVNode"])("nav",null,[Object(n["createElementVNode"])("ul",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.menuItems,e=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:e.name,class:Object(n["normalizeClass"])({active:e.active})},[Object(n["createElementVNode"])("a",{href:e.link},Object(n["toDisplayString"])(e.name),9,l)],2))),128))])])])}var a=Object(n["defineComponent"])({name:"SidebarComponent",props:{menuItems:{type:Array,required:!0}}}),i=(o("9261"),o("6b0d")),s=o.n(i);const d=s()(a,[["render",r],["__scopeId","data-v-74b7da77"]]);t["a"]=d},9261:function(e,t,o){"use strict";o("d558")},d000:function(e,t,o){"use strict";var n=o("7a23"),c=o("fd5a"),l=o.n(c);const r={class:"navbar"},a={class:"action-bubble"},i={key:0,class:"dropdown-menu"};function s(e,t,o,c,s,d){const u=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createElementVNode"])("header",r,[t[4]||(t[4]=Object(n["createElementVNode"])("div",{class:"logo"},[Object(n["createElementVNode"])("a",{href:"/"},"MonLogo")],-1)),Object(n["createElementVNode"])("div",{class:Object(n["normalizeClass"])(["menu",{active:e.isMenuOpen}])},[Object(n["createElementVNode"])("ul",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.menuItems,e=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:e.name,class:Object(n["normalizeClass"])({active:e.active})},[Object(n["createVNode"])(u,{class:"link",to:e.link},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.name),1)]),_:2},1032,["to"])],2))),128))])],2),Object(n["createElementVNode"])("div",a,[Object(n["createElementVNode"])("button",{onClick:t[0]||(t[0]=(...t)=>e.toggleDropdown&&e.toggleDropdown(...t)),class:"action-button"},t[3]||(t[3]=[Object(n["createElementVNode"])("img",{src:l.a,alt:"Profile",class:"profile-picture"},null,-1)])),e.isDropdownOpen?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",i,[Object(n["createElementVNode"])("ul",null,[Object(n["createElementVNode"])("li",null,[Object(n["createElementVNode"])("a",{href:"#",onClick:t[1]||(t[1]=Object(n["withModifiers"])((...t)=>e.profil&&e.profil(...t),["prevent"]))},"Mon profil")]),Object(n["createElementVNode"])("li",null,[Object(n["createElementVNode"])("a",{href:"#",onClick:t[2]||(t[2]=Object(n["withModifiers"])((...t)=>e.logout&&e.logout(...t),["prevent"]))},"Se déconnecter")])])])):Object(n["createCommentVNode"])("",!0)])])])}var d=o("6605"),u=Object(n["defineComponent"])({name:"NavbarComponent",props:{menuItems:{type:Array,required:!0}},setup(){const e=Object(d["c"])(),t=()=>{localStorage.removeItem("token"),localStorage.removeItem("username"),localStorage.removeItem("role"),e.push("/")},o=()=>{e.push({name:"profile"})};return{logout:t,profil:o}},data(){return{isMenuOpen:!1,isDropdownOpen:!1}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen},toggleDropdown(){this.isDropdownOpen=!this.isDropdownOpen}}}),b=o("6b0d"),m=o.n(b);const O=m()(u,[["render",s]]);t["a"]=O},d558:function(e,t,o){},f6e6:function(e,t,o){"use strict";o.r(t);var n=o("7a23");const c={class:"dashboard"},l={class:"table-container"},r={key:0,class:"client-table"},a=["onClick"],i=["onClick"],s={key:1};function d(e,t,o,d,u,b){const m=Object(n["resolveComponent"])("NavBar"),O=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",c,[Object(n["createVNode"])(m,{menuItems:e.filteredMenuItems},null,8,["menuItems"]),Object(n["createElementVNode"])("main",l,[t[4]||(t[4]=Object(n["createElementVNode"])("h1",null,"Liste des Utilisateurs",-1)),Object(n["createElementVNode"])("button",{class:"add-button",onClick:t[0]||(t[0]=t=>e.addUser())},"Ajouter"),e.entities.length>0?(Object(n["openBlock"])(),Object(n["createElementBlock"])("table",r,[t[1]||(t[1]=Object(n["createElementVNode"])("thead",null,[Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("th",null,"Nom complet"),Object(n["createElementVNode"])("th",null,"Email"),Object(n["createElementVNode"])("th",null,"Tache"),Object(n["createElementVNode"])("th",null,"Status"),Object(n["createElementVNode"])("th",null,"Rôle"),Object(n["createElementVNode"])("th",null,"Actions")])],-1)),Object(n["createElementVNode"])("tbody",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.entities,t=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{key:t.id},[Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.name),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.email),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.task),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.status),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.role),1),Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("button",{onClick:o=>e.editEntity(t.id),class:"edit-button"},"Éditer",8,a),Object(n["createElementVNode"])("button",{onClick:o=>e.deleteEntity(t.id),class:"delete-button"},"Supprimer",8,i)])]))),128))])])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("p",s,[Object(n["createTextVNode"])("Aucun "+Object(n["toDisplayString"])(e.entityTitle.toLowerCase())+" trouvé ",1),Object(n["createVNode"])(O,{to:"/addUser"},{default:Object(n["withCtx"])(()=>t[2]||(t[2]=[Object(n["createTextVNode"])("Ajouter ici")])),_:1}),t[3]||(t[3]=Object(n["createTextVNode"])("."))]))])])}var u=o("e4c3"),b=o("8c07"),m=o("d000"),O=o("6605"),j=o("3a50"),p=o("5d04"),h=Object(n["defineComponent"])({name:"List",components:{ButtonComponent:u["a"],SidebarComponent:b["a"],NavBar:m["a"]},setup(){Object(p["a"])();const e=Object(n["ref"])([]),t=Object(n["ref"])(""),o=localStorage.getItem("role")||"Utilisateur",c=localStorage.getItem("token"),l=Object(n["ref"])([{name:"Tableau de Bord",link:"/dashboard",active:!1,visibleTo:["Admin","Client","Manager","Utilisateur"]},{name:"Liste des Utilisateurs",link:"/liste",active:!1,visibleTo:["Admin","Client","Manager"]},{name:"Mon Profil",link:"/profile",active:!0,visibleTo:["Admin","Client","Manager","Utilisateur"]}]),r=l.value.filter(e=>e.visibleTo.includes(o)),a=Object(O["c"])();Object(n["onMounted"])(async()=>{try{const n=o;switch(n){case"Admin":t.value="Admin";break;case"Client":t.value="Client";break;case"Manager":t.value="Manager";break;case"Utilisateur":t.value="Utilisateur";break;default:return void console.warn("Type d'entité inconnu: "+n)}if(console.log(t.value),c){const t=await Object(j["b"])(o,c);console.log(o),e.value=t}else console.error("authentication token is missing")}catch(n){console.error("Une erreur est survenue lors de la récupération des données.",n)}});const i=e=>{console.log("Edit entity:",e)},s=e=>{console.log("Delete entity with ID:",e)},d=()=>{a.push("/addUser")};return{entities:e,entityTitle:t,menuItems:l,editEntity:i,deleteEntity:s,addUser:d,filteredMenuItems:r,role:o}}}),k=o("6b0d"),f=o.n(k);const g=f()(h,[["render",d]]);t["default"]=g},fd5a:function(e,t,o){e.exports=o.p+"img/user1.399c5f70.png"}}]);
//# sourceMappingURL=chunk-678f6aba.40617515.js.map