(this["webpackJsonpsimple-trello-clone"]=this["webpackJsonpsimple-trello-clone"]||[]).push([[0],{20:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(11),o=c.n(n),d=(c(20),c(3)),i=c(0),r=Object(s.createContext)(),j=function(e){var t=Object(s.useState)(""),c=Object(d.a)(t,2),a=c[0],n=c[1];return Object(s.useEffect)((function(){var e=setInterval((function(){var e=new Date,t=e.getHours(),c=e.getMinutes(),s=e.getSeconds(),a="AM",o=(new Date).toLocaleDateString("en-US",{weekday:"short",year:"numeric",month:"short",day:"numeric"});0==t&&(t=12),t>12&&(t-=12,a="PM"),n(o+" "+(t=t<10?"0"+t:t)+":"+(c=c<10?"0"+c:c)+":"+(s=s<10?"0"+s:s)+" "+a)}),1e3);return function(){clearInterval(e)}}),[]),Object(i.jsx)(r.Provider,{value:{time:a},children:e.children})},l=c(4),b=c.n(l);b.a.setAppElement("#root");var O=function(e){var t=Object(s.useState)(""),c=Object(d.a)(t,2),a=c[0],n=c[1],o=Object(s.useState)(""),r=Object(d.a)(o,2),j=r[0],l=r[1];return Object(i.jsxs)(b.a,{isOpen:e.isOpen,onRequestClose:e.onRequestClose,className:"addprojectmodal",children:[Object(i.jsx)("h1",{children:"Add New Project"}),Object(i.jsxs)("form",{onSubmit:function(t){e.handleAdd(t,a,j),n(""),l("")},children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"Project Name:"}),Object(i.jsx)("input",{type:"text",value:a,name:"name",onChange:function(e){n(e.target.value)},required:!0,maxlength:"15"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"Project Description:"}),Object(i.jsx)("textarea",{value:j,name:"desc",onChange:function(e){l(e.target.value)},required:!0})]}),Object(i.jsxs)("button",{type:"submit",children:[Object(i.jsx)("i",{className:"bx bx-chevron-right-square ",id:"addlogo"}),"Add Project"]})]})]})};b.a.setAppElement("#root");var u=function(e){return Object(i.jsx)(b.a,{isOpen:e.isOpen,onRequestClose:e.onRequestClose,children:Object(i.jsx)("h1",{children:"Help"})})};b.a.setAppElement("#root");var m=function(e){return Object(i.jsx)(b.a,{isOpen:e.isOpen,onRequestClose:e.onRequestClose,children:Object(i.jsx)("h1",{children:"SETTINGS"})})},x=function(e,t){switch(t.type){case"SHOW_MODAL":return e.map((function(e){return e.id===t.id?Object.assign({},e,{display:!e.display}):e}))}},p=Object(s.createContext)(),h=function(e){var t=Object(s.useReducer)(x,[{id:"addmodal",display:!1},{id:"helpmodal",display:!1},{id:"settingsmodal",display:!1},{id:"addtodomodal",display:!1}]),c=Object(d.a)(t,2),a=c[0],n=c[1];return Object(i.jsx)(p.Provider,{value:{modals:a,dispatch:n},children:e.children})},v=c(6),f=c(5),C=c(2),y=c(35),g=function(e,t){switch(t.type){case"ADD_PROJECT":return Object(C.a)(Object(C.a)({},e),{},{projects:Object(C.a)(Object(C.a)({},e.projects),{},Object(f.a)({},t.name,{id:t.name,title:t.name,desc:t.desc,tasks:[]})),projectList:[].concat(Object(v.a)(e.projectList),[[t.name]]),displayedProject:t.name});case"ADD_TASK":console.log(t.project);var c=t.project,s=Object(y.a)();return Object(C.a)(Object(C.a)({},e),{},{projects:Object(C.a)(Object(C.a)({},e.projects),{},Object(f.a)({},c,Object(C.a)(Object(C.a)({},e.projects[c]),{},{tasks:[].concat(Object(v.a)(e.projects[c].tasks),[s])}))),columns:Object(C.a)(Object(C.a)({},e.columns),{},Object(f.a)({},s,{id:s,name:t.name,todoIds:[]})),columnOrder:[].concat(Object(v.a)(e.columnOrder),[s])});case"CHANGE_SELECTED_TASK":return Object(C.a)(Object(C.a)({},e),{},{selectedTask:t.ids});case"ADD_TODO":var a=Object(y.a)();return console.log(e),Object(C.a)(Object(C.a)({},e),{},{columns:Object(C.a)(Object(C.a)({},e.columns),{},Object(f.a)({},t.columnname,Object(C.a)(Object(C.a)({},e.columns[t.columnname]),{},{todoIds:[].concat(Object(v.a)(e.columns[t.columnname].todoIds),[a])}))),todos:Object(C.a)(Object(C.a)({},e.todos),{},Object(f.a)({},a,{id:a,name:t.name,desc:t.desc}))});case"CHANGE_PROJECT":return Object(C.a)(Object(C.a)({},e),{},{columnOrder:Object(v.a)(e.projects[t.selected].tasks),displayedProject:t.selected})}},N=Object(s.createContext)(),k=function(e){var t=Object(s.useReducer)(g,{projects:{},columns:{},todos:{},columnOrder:[],projectList:[],displayedProject:"",selectedTask:"heyasgsgagasgas"}),c=Object(d.a)(t,2),a=c[0],n=c[1];return Object(i.jsx)(N.Provider,{value:{items:a,itemDispatch:n},children:e.children})},A=function(){var e=Object(s.useContext)(r).time,t=Object(s.useContext)(p),c=t.modals,a=t.dispatch,n=Object(s.useContext)(N),o=n.items,j=n.itemDispatch,l=Object(s.useState)(""),b=Object(d.a)(l,2),x=b[0],h=b[1];function v(e){return function(){return a({type:"SHOW_MODAL",id:e})}}function f(e){h(e),j({type:"CHANGE_PROJECT",selected:e})}return Object(i.jsxs)("header",{children:[Object(i.jsxs)("div",{className:"organizer",children:[Object(i.jsx)("select",{name:"projects",id:"projects",onChange:function(e){return f(e.target.value)},value:x,children:0!==Object.keys(o.projects).length?Object.keys(o.projects).map((function(e){return Object(i.jsx)("option",{value:e,children:e},e)})):Object(i.jsx)("option",{children:"Create new project"})}),Object(i.jsx)("i",{className:"bx bx-book-add bx-tada-hover",id:"add",onClick:v("addmodal")}),Object(i.jsxs)("div",{className:"search",children:[Object(i.jsx)("i",{className:"bx bx-search-alt-2",id:"searchlogo"}),Object(i.jsx)("input",{type:"text",placeholder:"Search"})]})]}),Object(i.jsx)("div",{className:"title",children:Object(i.jsx)("a",{children:"Project To Note"})}),Object(i.jsxs)("div",{className:"information",children:[Object(i.jsx)("i",{className:"bx bxs-wrench",id:"settings",onClick:v("settingsmodal")}),Object(i.jsx)("i",{className:"bx bxs-help-circle",id:"help",onClick:v("helpmodal")}),Object(i.jsx)("a",{children:e})]}),Object(i.jsx)(O,{isOpen:c[0].display,onRequestClose:v("addmodal"),handleAdd:function(e,t,c){j({type:"ADD_PROJECT",name:t,desc:c}),a({type:"SHOW_MODAL",id:"addmodal"}),f(t),e.preventDefault()}}),Object(i.jsx)(u,{isOpen:c[1].display,onRequestClose:v("helpmodal")}),Object(i.jsx)(m,{isOpen:c[2].display,onRequestClose:v("settingsmodal")})]})},D=function(e){return Object(i.jsxs)("div",{className:"todo-item",children:[Object(i.jsx)("div",{className:"dragicon",children:Object(i.jsx)("i",{className:"bx bx-grid-small bx-tada-hover",id:"addtask"})}),Object(i.jsx)("div",{children:Object(i.jsx)("h4",{children:e.todoName})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("i",{className:"bx bx-task bx-tada-hover",id:"addtask"}),Object(i.jsx)("i",{className:"bx bx-task-x bx-tada-hover",id:"addtask"})]})]})};b.a.setAppElement("#root");var S=function(e){var t=Object(s.useState)(""),c=Object(d.a)(t,2),a=c[0],n=c[1],o=Object(s.useState)(""),r=Object(d.a)(o,2),j=r[0],l=r[1];return Object(i.jsxs)(b.a,{isOpen:e.isOpen,onRequestClose:e.onRequestClose,className:"addtaskmodal",children:[Object(i.jsx)("h1",{children:"Add Task"}),Object(i.jsxs)("form",{onSubmit:function(t){e.passTodo(t,a,j),n(""),l("")},children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"Task Name:"}),Object(i.jsx)("input",{type:"text",onChange:function(e){n(e.target.value)},required:!0,maxlength:"25"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"Task Description:"}),Object(i.jsx)("textarea",{required:!0,onChange:function(e){l(e.target.value)}})]}),Object(i.jsx)("button",{children:"Add task"})]})]})},T=function(e){var t,c=Object(s.useContext)(p),a=c.modals,n=c.dispatch,o=Object(s.useContext)(N),r=o.items,j=o.itemDispatch,l=Object(s.useState)(e.columnname.id),b=Object(d.a)(l,2),O=b[0];b[1];return Object(i.jsxs)("div",{className:"task-container",children:[Object(i.jsxs)("div",{className:"top",children:[Object(i.jsx)("div",{className:"dragicon"}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{style:{display:"inline-block"},children:[e.taskName," "]}),Object(i.jsx)("i",{className:"bx bx-edit bx-tada-hover",id:"edit"})]}),Object(i.jsx)("i",{className:"bx bx-add-to-queue bx-tada-hover",onClick:function(){j({type:"CHANGE_SELECTED_TASK",ids:O}),n({type:"SHOW_MODAL",id:"addtodomodal"})}})]}),Object(i.jsx)("div",{className:"todo-container",children:r.columns[e.columnname.id].todoIds.map((function(e){var t=r.todos[e].name;return Object(i.jsx)(D,{todoName:t})}))}),Object(i.jsx)(S,{isOpen:a[3].display,onRequestClose:(t="addtodomodal",function(){return n({type:"SHOW_MODAL",id:t})}),passTodo:function(e,t,c){!function(e,t,c,s){j({type:"ADD_TODO",name:t,desc:c,columnname:s}),n({type:"SHOW_MODAL",id:"addtodomodal"}),e.preventDefault()}(e,t,c,r.selectedTask)}})]})},E=function(){var e=Object(s.useContext)(N),t=e.items,c=e.itemDispatch,a=Object(s.useState)(""),n=Object(d.a)(a,2),o=n[0],r=n[1];return Object(i.jsxs)("div",{className:"main-container",children:[t.columnOrder.map((function(e){var c=t.columns[e],s=c.name;return Object(i.jsx)(T,{taskName:s,columnname:c})})),0!==Object.keys(t.projects).length&&Object(i.jsxs)("div",{className:"addtask",children:[Object(i.jsx)("input",{type:"text",onChange:function(e){r(e.target.value)},value:o,placeholder:"Enter Task Name"}),Object(i.jsx)("button",{onClick:function(){return function(e,t){0===e.length?alert("Enter Task Name!"):(r(""),c({type:"ADD_TASK",name:e,project:t}))}(o,t.displayedProject)},children:"Add new Task"})]})]})},R=function(e,t){t.type},q=Object(s.createContext)(),P=function(e){var t=Object(s.useReducer)(R,[]),c=Object(d.a)(t,2),a=c[0],n=c[1];return Object(i.jsx)(q.Provider,{value:{projects:a,dispatch:n},children:e.children})};var _=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(k,{children:Object(i.jsx)(h,{children:Object(i.jsx)(P,{children:Object(i.jsxs)(j,{children:[Object(i.jsx)(A,{}),Object(i.jsx)(E,{})]})})})})})};o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(_,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.2efc078f.chunk.js.map