(this.webpackJsonpmarioplan=this.webpackJsonpmarioplan||[]).push([[1],{208:function(e,t,n){e.exports=n(403)},213:function(e,t,n){},403:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(80),c=n.n(o),l=(n(213),n(131)),i=n(21),s=n(54),u=n(29),d=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,413))})),b=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,410))})),h=Object(a.lazy)((function(){return n.e(4).then(n.bind(null,411))})),p=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,412))})),m=Object(a.lazy)((function(){return n.e(7).then(n.bind(null,415))})),g=Object(a.lazy)((function(){return n.e(8).then(n.bind(null,414))}));function E(e){var t=e.children,n=Object(s.c)((function(e){return e.firebase.auth}));return Object(u.isLoaded)(n)?t:r.a.createElement("div",null,"Loading screen...")}var f=function(){return r.a.createElement(l.a,null,r.a.createElement(E,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(g,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:d}),r.a.createElement(i.b,{path:"/project/:id",component:b}),r.a.createElement(i.b,{path:"/signin",component:h}),r.a.createElement(i.b,{path:"/signup",component:p}),r.a.createElement(i.b,{path:"/create",component:m})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=n(20),j=n(52),S={authError:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("Login failed"),Object(j.a)({},e,{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("Login success"),Object(j.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("Sing out success"),e;case"SIGNUP_SUCCESS":return console.log("Sign up success"),Object(j.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("Sign up error"),Object(j.a)({},e,{authError:t.err.message});default:return e}},R={projects:[{id:"1",title:"help me find peach",content:"blah blah blah"},{id:"2",title:"collect all the stars",content:"blah blah blah"},{id:"3",title:"egg hunt with yoshi",content:"blah blah blah"}]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log(t.project),e;case"CREATE_PROJECT_ERROR":return console.log("Create project error: ".concat(t.err)),e;default:return e}},y=n(40),I=Object(O.c)({auth:v,project:w,firestore:y.firestoreReducer,firebase:u.firebaseReducer}),C=n(207),P=n(53),F=n.n(P);n(398),n(401);F.a.initializeApp({apiKey:"AIzaSyBmPEoLrcYxnrjMda6cGP_kK1hsFfk73pQ",authDomain:"marioplan-dd8b7.firebaseapp.com",databaseURL:"https://marioplan-dd8b7.firebaseio.com",projectId:"marioplan-dd8b7",storageBucket:"marioplan-dd8b7.appspot.com",messagingSenderId:"28148187580",appId:"1:28148187580:web:a2eed6a29d6c16022cebb9",measurementId:"G-ETC2V2NPJT"});var L=F.a,_=C.a.withExtraArgument({getFirebase:u.getFirebase,getFirestore:y.getFirestore}),k=Object(O.e)(I,Object(O.d)(Object(O.a)(_),Object(y.reduxFirestore)(L))),z={firebase:F.a,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:k.dispatch,createFirestoreInstance:y.createFirestoreInstance};c.a.render(r.a.createElement(s.a,{store:k},r.a.createElement(u.ReactReduxFirebaseProvider,z,r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[208,2,3]]]);
//# sourceMappingURL=main.3711be21.chunk.js.map