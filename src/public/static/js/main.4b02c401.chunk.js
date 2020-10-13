(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{35:function(e,t,a){e.exports=a(60)},45:function(e,t,a){},46:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),o=a(6),s=a(9),i=a(5),m=a(1),u=a.n(m),d=a(7),p="https://react-unsplash-images.herokuapp.com/api",f=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(p,"/").concat(e);return"GET"===a?fetch(n):fetch(n,{method:a,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})},g=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(p,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===a?fetch(n,{method:a,headers:{"x-token":r}}):fetch(n,{method:a,headers:{"Content-Type":"application/json","x-token":r},body:JSON.stringify(t)})},b=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(p,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===a?fetch(n,{method:a,headers:{"x-token":r}}):fetch(n,{method:a,headers:{"x-token":r},body:t})},x="[UI] Set Error Form",E="[UI] Remove Error Form",v="[UI] Set Loading",h="[UI] Remove Loading",y="[AUTH] finish checking login state",N="[AUTH] login",w="[AUTH] logout",j="[IMG] Start uploading image loading",O="[IMG] Image deleted",k="[IMG] uploaded",_="[IMG] Get Images",S="[IMG] Apply Filter",I="[IMG] Logout Images",T=function(e){return{type:x,payload:e}},A=function(){return{type:v}},C=function(){return{type:h}},L=function(){return{type:E}},G=function(){return{type:j}},U=function(e){return{type:k,payload:e}},D=function(e){return{type:_,payload:e}},F=function(e){return{type:O,payload:e}},q=function(){return function(e){localStorage.clear(),e(Z()),e({type:I})}},P=function(){return{type:y}},M=function(e){return{type:N,payload:e}},Z=function(){return{type:w}},R=(a(45),function(){return r.a.createElement("div",{className:"container-loader"},r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"box box-1"}),r.a.createElement("div",{className:"box box-2"}),r.a.createElement("div",{className:"box box-3"}),r.a.createElement("div",{className:"box box-4"}),r.a.createElement("div",{className:"box box-5"}),r.a.createElement("div",{className:"box box-6"}),r.a.createElement("div",{className:"box box-7"}),r.a.createElement("div",{className:"box box-8"}),r.a.createElement("div",{className:"box box-9"})))}),J=a(12),H=(a(46),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.images})).images_filtered,a=Object(n.useState)(null),c=Object(J.a)(a,2),l=c[0],i=c[1];Object(n.useEffect)((function(){e(function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("img/");case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent).ok?t(D(n.images)):console.log(n.msg);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]);var m=function(){var t;e((t=l,function(){var e=Object(d.a)(u.a.mark((function e(a){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("img/".concat(t),{},"DELETE");case 2:return n=e.sent,e.next=5,n.json();case 5:(r=e.sent).ok?a(F(t)):alert(r.msg);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))};return r.a.createElement("div",{className:"w-full flex py-24 mx-auto px-2 md:px-12"},r.a.createElement("div",{className:"masonry-gallery mx-auto "},t.map((function(e){return r.a.createElement("div",{key:e.asset_id,className:"masonry-gallery-item relative",onClick:function(){return t=e._id,void i(l&&l===t?null:t);var t}},r.a.createElement("img",{src:e.img_path,alt:e.title,className:"rounded  ".concat(l===e._id&&"is-selected")}),l&&e._id===l&&r.a.createElement("button",{className:"bg-red-600 text-white h-8 w-8 absolute rounded-full cursor-pointer focus:outline-none",style:{top:"2%",right:"2%"},onClick:m},r.a.createElement("i",{className:"fas fa-trash"})))}))),r.a.createElement(s.b,{to:"/upload",className:"bg-red-500  fixed bottom-0 delete-btn"},r.a.createElement("i",{className:"fas fa-plus"})))}),z=a(23),B=a(18),W=function(e){var t=e.text,a=Object(B.a)(e,["text"]);return r.a.createElement("button",Object.assign({className:"py-3 bg-green-500 text-white w-full hover:bg-green-600 cursor-pointer rounded outline-none"},a),t)},X=function(){var e=Object(o.c)((function(e){return e.ui})),t=e.errorForm,a=e.loading,n=Object(o.b)(),c=Object(z.a)(),l=c.register,i=c.handleSubmit,m=c.errors;return r.a.createElement("div",{className:"w-full h-screen flex bg-gray-400 "},r.a.createElement("div",{className:"container mx-auto p-2 my-24"},r.a.createElement("div",{className:"max-w-sm mx-auto bg-white px-5 py-10 rounded shadow-xl animate__animated animate__fadeInDown"},r.a.createElement("div",{className:"text-center mb-8"},r.a.createElement("h1",{className:"font-bold text-2xl"},"Welcome to ",r.a.createElement("span",{className:"text-green-500"}," Login App ")," "),t.ok&&r.a.createElement("p",{className:"text-red-400"}," ",t.msg," ")),r.a.createElement("form",{onSubmit:i((function(e){a||(console.log("loading..."),n(A()),n(function(e){var t=e.email,a=e.password;return function(){var e=Object(d.a)(u.a.mark((function e(n){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("user/login",{email:t,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),n(M({uid:c.uid,name:c.name})),n(L())):n(T({errorForm:{ok:!0,msg:c.msg}})),n(C());case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(e)))}))},r.a.createElement("div",{className:"mt-5"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",className:"block w-full p-2 border rounded border-gray-500 outline-none",placeholder:"example@emal.com",autoComplete:"off",name:"email",ref:l({required:!0,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"invalid email address"}})}),r.a.createElement("p",{className:"text-red-500"},m.email&&"invalid email address")),r.a.createElement("div",{className:"mt-5"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",placeholder:"********",className:"block w-full p-2 border rounded border-gray-500 outline-none",name:"password",ref:l({required:!0,minLength:6})}),r.a.createElement("p",{className:"text-red-500"},m.password&&"Password must be at least 6 characters")),r.a.createElement("div",{className:"mt-10 text-center"},r.a.createElement(W,{text:"Login"}),a&&r.a.createElement("i",{className:"fas fa-spinner fa-spin mt-2"})),r.a.createElement("div",{className:"mt-5"},r.a.createElement("p",{className:"text-gray-600"},"Don't have an account?",r.a.createElement(s.b,{to:"/register",className:"text-green-400"}," Sign up here ")))))))},$=function(){var e=Object(o.c)((function(e){return e.ui})),t=e.errorForm,a=e.loading,n=Object(o.b)(),c=Object(z.a)(),l=c.register,i=c.handleSubmit,m=c.errors;return r.a.createElement("div",{className:"h-full  flex bg-gray-400 "},r.a.createElement("div",{className:"container mx-auto p-2 my-20 "},r.a.createElement("div",{className:"max-w-sm mx-auto bg-white px-5 py-10 rounded shadow-xl animate__animated animate__fadeInDown "},r.a.createElement("div",{className:"text-center mb-8"},r.a.createElement("h1",{className:"font-bold text-2xl"},"Welcome to ",r.a.createElement("span",{className:"text-green-500"}," Login App ")," "),t.ok&&r.a.createElement("p",{className:"text-red-400"}," ",t.msg," ")),r.a.createElement("form",{onSubmit:i((function(e){console.log("submit"),a||(n(A()),n(function(e){var t=e.name,a=e.email,n=e.password;return function(){var e=Object(d.a)(u.a.mark((function e(r){var c,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("user/new",{name:t,email:a,password:n},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(l=e.sent).ok?(localStorage.setItem("token",l.token),localStorage.setItem("token-init-date",(new Date).getTime()),r(M({uid:l.uid,name:l.name})),r(L())):r(T({errorForm:{ok:!0,msg:l.msg}})),r(C());case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(e)))}))},r.a.createElement("div",{className:"mt-5"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",className:"block w-full p-2 border rounded border-gray-500 outline-none",placeholder:"Name",autoComplete:"off",name:"name",ref:l({required:!0})}),r.a.createElement("p",{className:"text-red-500"},m.name&&"The name is required")),r.a.createElement("div",{className:"mt-5"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",className:"block w-full p-2 border rounded border-gray-500 outline-none",placeholder:"example@emal.com",autoComplete:"off",name:"email",ref:l({required:!0,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"invalid email address"}})}),r.a.createElement("p",{className:"text-red-500"},m.email&&"invalid email address")),r.a.createElement("div",{className:"mt-5"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",placeholder:"********",className:"block w-full p-2 border rounded border-gray-500 outline-none",name:"password",ref:l({required:!0,minLength:6})}),r.a.createElement("p",{className:"text-red-500"},m.password&&"Password must be at least 6 characters")),r.a.createElement("div",{className:"mt-10 text-center"},r.a.createElement(W,{text:"Sign Up"}),a&&r.a.createElement("i",{className:"fas fa-spinner fa-spin mt-2"})),r.a.createElement("div",{className:"mt-5"},r.a.createElement("p",{className:"text-gray-600"},"Already have an account? ",r.a.createElement(s.b,{to:"/login",className:"text-green-400"}," Login ")))))))},V=a(33),K=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).loading,a=Object(o.c)((function(e){return e.images})).redirect,c=Object(n.useState)(null),l=Object(J.a)(c,2),s=l[0],m=l[1],p=Object(V.useForm)(),f=p.register,g=p.handleSubmit,x=p.errors;return a?r.a.createElement(i.a,{to:a}):r.a.createElement("div",{className:"w-full py-24 mx-auto px-1 md:px-12"},r.a.createElement("div",{className:"flex flex-col md:flex-row "},r.a.createElement("div",{className:"px-4 py-2 m-2 flex-1"},!s&&r.a.createElement("div",{className:"w-full h-full bg-gray-200 text-gray-600 flex flex-col justify-center items-center"},r.a.createElement("i",{className:"fas fa-upload fa-3x cursor-pointer",onClick:function(){document.getElementById("imgage_field").click()}}),r.a.createElement("p",{className:"pt-2"},"Upload an image")),!!s&&r.a.createElement("div",{className:"relative"},r.a.createElement("img",{src:s,alt:"",className:"rounded shadow"}),r.a.createElement("button",{className:"bg-red-600 text-white h-8 w-8 absolute rounded-full cursor-pointer focus:outline-none",style:{top:"-2%",right:"-2%"},onClick:function(){return!t&&m(null)}},r.a.createElement("i",{className:"fas fa-times"})))),r.a.createElement("div",{className:"m-2 flex-1 "},r.a.createElement("form",{onSubmit:g((function(a){!t&&s&&(e(A()),e(function(e){var t=e.img,a=e.title,n=e.description,r=void 0===n?"":n;return function(){var e=Object(d.a)(u.a.mark((function e(n,c){var l,o,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(G()),(l=new FormData).append("img",t[0]),l.append("title",a),l.append("description",r),e.next=7,b("img/new",l,"POST");case 7:return o=e.sent,e.next=10,o.json();case 10:(s=e.sent).ok?n(U(s.image)):alert(s.msg),n(C());case 13:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}(a)))}))},r.a.createElement("div",{className:"w-full px-3 py-2"},r.a.createElement("input",{type:"file",className:"hidden",id:"imgage_field",accept:"image/*",onChange:function(e){var t=e.target.files[0];t&&m(window.URL.createObjectURL(t))},name:"img",ref:f({required:!0})}),r.a.createElement("p",{className:"text-red-500"},x.img&&"The image is required")),r.a.createElement("div",{className:"w-full px-3 py-2"},r.a.createElement("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"},"Title"),r.a.createElement("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text",autoComplete:"off",placeholder:"Title",name:"title",ref:f({required:!0})}),r.a.createElement("p",{className:"text-red-500"},x.title&&"Title is required")),r.a.createElement("div",{className:"w-full px-3 py-2"},r.a.createElement("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"},"Description"),r.a.createElement("textarea",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",name:"description",ref:f()})),r.a.createElement("div",{className:"w-full px-3 py-2 text-center"},r.a.createElement(W,{text:"Upload Image"}),t&&r.a.createElement("i",{className:"fas fa-spinner fa-spin mt-2"}))))))},Q=function(){var e=Object(o.b)();return r.a.createElement("nav",{className:"flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center",style:{zIndex:"100"}},r.a.createElement("div",{className:"w-full max-w-screen-xl relative mx-auto px-6"},r.a.createElement("div",{className:"flex items-center -mx-6"},r.a.createElement("div",{className:"lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(s.b,{to:"/",className:"block lg:mr-4 font-bold"},"Images App"))),r.a.createElement("div",{className:"flex flex-grow min-w-0 lg:2-3/4 xl:2-4/5"},r.a.createElement("div",{className:"w-full min-w-0 lg:px-6 xl:w-3/4 xl:px-12"},r.a.createElement("div",{className:"relative"},r.a.createElement("input",{type:"text",className:"transition-colors duration-100 ease-in-out text-gray-600 py-2 pr-4 pl-10 block w-full appearence-none leading-normal border boder-transparent rounded-log focus:outline-none text-left select-none truncate focus:bg-white focus:border-gray-300 bg-gray-200",placeholder:"Search",onChange:function(t){var a=t.target.value;e({type:S,payload:a})}}),r.a.createElement("div",{className:"pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center"},r.a.createElement("i",{className:"fas fa-search text-gray-600"})))),r.a.createElement("div",{className:"lg:flex lg:items-center lg:justify-between xl:w-1/4 px-6"},r.a.createElement("div",{className:"relative mr-4"},r.a.createElement("button",{onClick:function(){e(q())},className:"block lg:mr-4 text-red-600"},"Logout")))))))},Y=function(e){var t=e.isAuth,a=e.component,n=Object(B.a)(e,["isAuth","component"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null),r.a.createElement(i.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(i.a,{to:"/login"})}})))},ee=function(e){var t=e.isAuth,a=e.component,n=Object(B.a)(e,["isAuth","component"]);return r.a.createElement(i.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(i.a,{to:"/"}):r.a.createElement(a,e)}}))},te=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),a=t.checking,c=t.uid;return Object(n.useEffect)((function(){e(function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("user/renew");case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent).ok?(localStorage.setItem("token",n.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(M({uid:n.uid,name:n.name}))):t(P());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),a?r.a.createElement(R,null):r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(i.d,null,r.a.createElement(ee,{exct:!0,path:"/login",component:X,isAuth:!!c}),r.a.createElement(ee,{exct:!0,path:"/register",component:$,isAuth:!!c}),r.a.createElement(Y,{exact:!0,path:"/",component:H,isAuth:!!c}),r.a.createElement(Y,{exact:!0,path:"/upload",component:K,isAuth:!!c}),r.a.createElement(i.a,{to:"/"}))))},ae=a(15),ne=a(34),re=a(4),ce={checking:!0},le=a(3),oe={images:[],images_filtered:[],uploading:!1,redirect:null},se={errorForm:{ok:!1,msg:null},loading:!1},ie=Object(ae.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(re.a)(Object(re.a)({},e),{},{checking:!1},t.payload);case w:return{checking:!1};case y:return Object(re.a)(Object(re.a)({},e),{},{checking:!1});default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(re.a)(Object(re.a)({},e),t.payload);case E:return se;case v:return Object(re.a)(Object(re.a)({},e),{},{loading:!0});case h:return Object(re.a)(Object(re.a)({},e),{},{loading:!1});default:return e}},images:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(re.a)(Object(re.a)({},e),{},{uploading:!0});case k:return Object(re.a)(Object(re.a)({},e),{},{images:[].concat(Object(le.a)(e.images),[t.payload]),images_filtered:[].concat(Object(le.a)(e.images),[t.payload]),uploading:!1,redirect:"/"});case O:return Object(re.a)(Object(re.a)({},e),{},{images:e.images.filter((function(e){return e._id!==t.payload})),images_filtered:e.images_filtered.filter((function(e){return e._id!==t.payload}))});case _:return Object(re.a)(Object(re.a)({},e),{},{images:Object(le.a)(t.payload),images_filtered:Object(le.a)(t.payload),redirect:null});case S:var a=t.payload.toLowerCase(),n=e.images.filter((function(e){return e.title.toLowerCase().includes(a)}));return Object(re.a)(Object(re.a)({},e),{},{images_filtered:n});case I:return oe;default:return e}}}),me="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ae.d,ue=Object(ae.e)(ie,me(Object(ae.a)(ne.a))),de=function(){return r.a.createElement(o.a,{store:ue},r.a.createElement(te,null))};l.a.render(r.a.createElement(de,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.4b02c401.chunk.js.map