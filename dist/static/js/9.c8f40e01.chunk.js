(this.webpackJsonpmarioplan=this.webpackJsonpmarioplan||[]).push([[9],{410:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(54),l=a(29),i=a(20),s=a(21),o=a(409),m=a.n(o);t.default=Object(i.d)(Object(r.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}})),Object(l.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?t?c.a.createElement("div",{className:"container section project-details"},c.a.createElement("div",{className:"card z-depth-0"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title"},t.title),c.a.createElement("p",null,t.content)),c.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},c.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName),c.a.createElement("div",null,m()(t.createdAt.toDate()).calendar())))):c.a.createElement("div",{className:"container center"},c.a.createElement("p",null,"Loading project...")):c.a.createElement(s.a,{to:"/signin"})}))}}]);
//# sourceMappingURL=9.c8f40e01.chunk.js.map