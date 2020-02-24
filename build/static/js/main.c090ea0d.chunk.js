(this.webpackJsonpmicroblog_frontend=this.webpackJsonpmicroblog_frontend||[]).push([[0],{263:function(e,t,n){e.exports=n(453)},272:function(e,t,n){},453:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(50),o=n.n(c),i=n(20),u=n(21),l=n(60),s=(n(272),n(8)),m=n.n(s),p=n(16),f=n(472),d=n(473),g=n(465),E=n(471),h=n(469),v=n(468),b=n(34),w=function(e,t){var n=Object(a.useState)(t||""),r=Object(b.a)(n,2),c=r[0],o=r[1];return{type:e,value:c,onChange:function(e){o(e.target.value)},clear:function(){o("")}}},O=n(36),x=n(37),y=n.n(x),j=null,N=function(){return{headers:{Authorization:j}}},k={uploadFile:function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post("".concat("/api/utils","/upload"),t,N());case 2:return n=e.sent,console.log("return",n.data),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){j="bearer ".concat(e)},destroyToken:function(){j=null}},I=function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post("".concat("/api/user","/isExist"),{userName:t});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("".concat("/api/user","/").concat(t),N());case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U={checkUserNameExisted:I,register:function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post("".concat("/api/user","/register"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),login:function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post("".concat("/api/user","/login"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),changeBasicInfo:function(){var e=Object(p.a)(m.a.mark((function e(t,n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.patch("".concat("/api/user","/changeInfo/").concat(t),n,N());case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),changePwd:function(){var e=Object(p.a)(m.a.mark((function e(t,n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.patch("".concat("/api/user","/changePwd/").concat(t),n,N());case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),getUserInfo:S};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C="loggedInUser",T={userNameExisted:!1},A=function(e){window.localStorage.setItem(C,JSON.stringify(e)),k.setToken(e.token)},B=function(e){return function(){var t=Object(p.a)(m.a.mark((function t(n){var a,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.checkUserNameExisted(e);case 2:a=t.sent,r=!!a.data,n({type:"USERNAME_EXISTED",userNameExisted:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},L=function(){return function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k.destroyToken(),window.localStorage.removeItem(C),t({type:"CLEAR_USER"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER":return T;case"USERNAME_EXISTED":return R({},e,{userNameExisted:t.userNameExisted});case"SET_USER":return t.loggedInUser;case"CLEAR_USER":return T;case"UPDATE_USER_INFO":return t.updatedUser;default:return e}},F=function(e){var t=e.message,n=e.error,a=void 0!==n&&n,r=e.timeout,c=void 0===r?5e3:r,o={message:t,error:a};return function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"SET_NOTIFICATION",content:o}),setTimeout((function(){t({type:"CLEAR_NOTIFICATION"})}),c);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIFICATION":return t.content;case"CLEAR_NOTIFICATION":return{};default:return e}},M={login:function(e){return function(){var t=Object(p.a)(m.a.mark((function t(n){var a,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.login(e);case 2:a=t.sent,r=a.data,A(r),n({type:"SET_USER",loggedInUser:r});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setNotification:F},z=Object(l.g)(Object(i.b)((function(e){return{user:e.user}}),M)((function(e){var t=w("text"),n=w("password"),a=0===t.value.length||0===n.value.length,c=function(){var a=Object(p.a)(m.a.mark((function a(r){var c;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.preventDefault(),c={userName:t.value,password:n.value},a.prev=2,a.next=5,e.login(c);case 5:a.next=10;break;case 7:a.prev=7,a.t0=a.catch(2),e.setNotification({message:"Login failed, wrong username or password",error:!0});case 10:case"end":return a.stop()}}),a,null,[[2,7]])})));return function(e){return a.apply(this,arguments)}}(),o=(e.location.state||{from:{pathname:"/home"}}).from;return e.user.token?(e.setNotification({message:"You have logged in",error:!1}),r.a.createElement("div",{className:"redirect"},r.a.createElement(l.a,{to:o}))):r.a.createElement("div",null,r.a.createElement(f.a,{textAlign:"center",style:{height:"100vh"},verticalAlign:"middle"},r.a.createElement(f.a.Column,{style:{maxWidth:450}},r.a.createElement(d.a,{id:"loginHeader",as:"h2",color:"teal",textAlign:"center"},"Log in to your account"),r.a.createElement(g.a,{size:"large",onSubmit:c},r.a.createElement(E.a,{stacked:!0},r.a.createElement(g.a.Input,Object.assign({id:"userName",fluid:!0,icon:"user",iconPosition:"left",placeholder:"User Name"},t,{required:!0})),r.a.createElement(g.a.Input,Object.assign({id:"pwd",fluid:!0,icon:"lock",placeholder:"Password"},n,{required:!0})),r.a.createElement(h.a,{id:"loginButton",type:"submit",color:"teal",fluid:!0,size:"large",disabled:a},"Login"))),r.a.createElement(v.a,null,"New to us? ",r.a.createElement(u.b,{to:"/register"},"Sign Up")))))}))),G=function(e,t){var n=Object(a.useState)(e),r=Object(b.a)(n,2),c=r[0],o=r[1];return Object(a.useEffect)((function(){var n=setTimeout((function(){o(e)}),t);return function(){clearTimeout(n)}}),[e,t]),c},q=function(e){var t=e.fieldName,n=e.input,a=e.minLength,c=e.maxLength,o=e.extraRequirement,i=e.extraErrorMessage;return n?a&&c&&(n.length<a||n.length>c)?r.a.createElement("p",{style:{color:"red"}},t," should be between ",a," and ",c," characters"):!1===o?r.a.createElement("p",{style:{color:"red"}},i):r.a.createElement("p",{style:{color:"green"}},"Valid ",t):null},Y=function(){return r.a.createElement("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}},r.a.createElement("h3",null,"You have already logged in, please go to the",r.a.createElement(u.b,{to:"/home"}," main page")," directly"))},J={checkUserNameExisted:B,register:function(e){return function(){var t=Object(p.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.register(e);case 2:n({type:"REGISTER"});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setNotification:F},W=Object(l.g)(Object(i.b)((function(e){return{user:e.user,file:e.file}}),J)((function(e){var t=Object(a.useState)(!1),n=Object(b.a)(t,2),c=n[0],o=n[1],i=w("text"),s=w("password"),O=w("password"),x=G(i.value,500);Object(a.useEffect)((function(){x&&function(){var t=Object(p.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.checkUserNameExisted(x);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[x]);var y=e.user.userNameExisted||i.value.length<3||i.value.length>255||s.value.length<3||s.value.length>255||s.value!==O.value,j=function(){var t=Object(p.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a={userName:i.value,password:O.value},t.prev=2,t.next=5,e.register(a);case 5:o(!0),e.setNotification({message:"Register succeeded, please log in",error:!1}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),e.setNotification({message:"Register failed",error:!0});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}();return c?r.a.createElement("div",{className:"redirect"},r.a.createElement(l.a,{to:"/login"})):e.user.token?r.a.createElement(Y,null):r.a.createElement("div",null,r.a.createElement(f.a,{textAlign:"center",style:{height:"100vh"},verticalAlign:"middle"},r.a.createElement(f.a.Column,{style:{maxWidth:450}},r.a.createElement(d.a,{id:"signUp",as:"h2",color:"teal",textAlign:"center"},"Sign Up"),r.a.createElement(g.a,{size:"large",onSubmit:j},r.a.createElement(E.a,{stacked:!0},r.a.createElement(g.a.Input,Object.assign({id:"userName",fluid:!0,icon:"user",iconPosition:"left",placeholder:"Username (between 3 and 255 characters)"},i,{required:!0})),r.a.createElement(q,{fieldName:"Username",input:i.value,minLength:3,maxLength:255,extraRequirement:!e.user.userNameExisted,extraErrorMessage:"User name is already existed"}),r.a.createElement(g.a.Input,Object.assign({id:"pwd",fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password (between 3 and 255 characters)"},s,{required:!0})),r.a.createElement(q,{fieldName:"Password",input:s.value,minLength:3,maxLength:255}),r.a.createElement(g.a.Input,Object.assign({id:"pwdConfirm",fluid:!0,placeholder:"Confirm Your Password"},O,{required:!0})),r.a.createElement(q,{fieldName:"Password confirmation",input:O.value,extraRequirement:s.value===O.value,extraErrorMessage:"Confirmation does not match the password"}),r.a.createElement(h.a,{id:"register",color:"teal",fluid:!0,size:"large",disabled:y},"Sign Up"))),r.a.createElement(v.a,null,"Already have an account? ",r.a.createElement(u.b,{to:"/login"},"Back to login")))))}))),H=n(474),X=Object(i.b)((function(e){return{notification:e.notification}}))((function(e){var t=e.notification,n=t.message,a=t.error;return n?r.a.createElement(H.a,{visible:!!n,animation:"fly down",duration:250},r.a.createElement("div",{style:{position:"fixed !important",top:"32px",right:"0",left:"0",textAlign:"center",zIndex:"10000"}},a?r.a.createElement(v.a,{floating:!0,color:"red",size:"large"},n):r.a.createElement(v.a,{floating:!0,color:"green",size:"large"},n))):null})),V=n(159),K=n(462),Q=n(81),Z=n(464),$=n(255),ee=function(e){var t=e.image,n=e.toUpload,a=e.removeImage;return t?r.a.createElement("div",{id:"image"},r.a.createElement(Z.a,{key:t,trigger:r.a.createElement($.a,{src:t,size:"medium"})},r.a.createElement(Z.a.Content,{image:!0},r.a.createElement($.a,{wrapped:!0,src:t}))),n&&r.a.createElement(Q.a,{name:"delete",onClick:a})):null},te=function(e){var t=Object(a.useState)([]),n=Object(b.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)([]),u=Object(b.a)(i,2),l=u[0],s=u[1],d=w("text"),E=Object(a.useState)(0),v=Object(b.a)(E,2),O=v[0],x=v[1],y=function(){var t=Object(p.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=null,c.length>0&&(a=new FormData,c.map((function(e){return a.append("file",e.fileContent)}))),t.next=5,e.createBlog(e.userId,d.value,a);case 5:o([]),s([]),x(0),d.clear(),e.setNotification({message:"You created a blog",error:!1});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=r.a.createRef();return r.a.createElement("div",null,r.a.createElement(g.a,{onSubmit:y},r.a.createElement(g.a.Field,null,r.a.createElement(K.a,Object.assign({id:"blogTextField",placeholder:"new blog..."},d,{style:{minHeight:100},clear:"clear"})),r.a.createElement(h.a,{id:"insertImageButton",type:"button",onClick:function(){j.current.click()}},r.a.createElement(Q.a,{name:"picture"}),"insert an image (max 3)"),r.a.createElement("input",{id:"fileInput",type:"file",accept:"image/*",ref:j,onChange:function(t){if(3!==c.length){x(O+1);var n={fileContent:t.target.files[0],id:O},a={urlContent:URL.createObjectURL(n.fileContent),id:O};o([].concat(Object(V.a)(c),[n])),s([].concat(Object(V.a)(l),[a]))}else e.setNotification({message:"You can upload max 3 images",error:!0})},style:{display:"none"}})),c.length>0&&r.a.createElement(f.a,{style:{height:"33%",width:"33%"}},r.a.createElement(f.a.Row,{columns:3},l.map((function(e){return r.a.createElement(f.a.Column,{key:e.id},r.a.createElement(ee,{image:e.urlContent,toUpload:!0,removeImage:function(){return function(e){o(c.filter((function(t){return t.id!==e}))),s(l.filter((function(t){return t.id!==e})))}(l.find((function(t){return t.urlContent===e.urlContent})).id)}}))})))),r.a.createElement(h.a,{id:"publishBlogButton",color:"green"},"Publish your microblog")))},ne={createBlog:function(){var e=Object(p.a)(m.a.mark((function e(t,n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post("".concat("/api/blog","/create/").concat(t),n,N());case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),getBlogsByUser:function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a,r=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:0,e.next=3,y.a.get("".concat("/api/blog","/profile/").concat(t,"/").concat(n),N());case 3:return a=e.sent,console.log("service res",a.data),e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_BLOG":return t.publishedBlog;case"GET_BLOGS_BY_USER":return t.blogList;default:return e}},oe={createBlog:function(e,t,n){return function(){var a=Object(p.a)(m.a.mark((function a(r){var c,o,i,u,l;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(c={content:t},null===n){a.next=7;break}return a.next=4,k.uploadFile(n);case 4:o=a.sent,i=o.data,c=re({},c,{urls:i});case 7:return a.next=9,ne.createBlog(e,c);case 9:u=a.sent,l=u.data,r({type:"CREATE_BLOG",publishedBlog:l});case 12:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},setNotification:F},ie=Object(i.b)((function(e){return{user:e.user,blog:e.blog}}),oe)((function(e){return r.a.createElement("div",null,r.a.createElement(te,{userId:e.user.id,createBlog:e.createBlog,setNotification:e.setNotification}))})),ue=n(250),le=Object(l.g)(Object(i.b)((function(e){return{user:e.user}}))((function(e){var t=!!e.user.token,n=e.component,a=Object(ue.a)(e,["component"]);return r.a.createElement(l.b,Object.assign({},a,{render:function(e){return t?r.a.createElement(n,e):r.a.createElement(l.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}))),se=function(){return r.a.createElement("div",null,"The page cannot be found...")},me=n(470),pe=n(467),fe={logout:L},de=Object(l.g)(Object(i.b)((function(e){return{user:e.user}}),fe)((function(e){var t="/login"==e.location.pathname,n="/register"==e.location.pathname,a="/home"==e.location.pathname,c=e.location.pathname.includes("/profile"),o="/discover"==e.location.pathname;return e.user.token?r.a.createElement(me.a,{tabular:!0},r.a.createElement(me.a.Item,{id:"homeMenu",name:"Home",active:a,as:u.b,to:"/home"}),r.a.createElement(me.a.Item,{id:"profileMenu",name:"Profile",active:c,as:u.b,to:"/profile/".concat(e.user.id,"/0")}),r.a.createElement(me.a.Item,{name:"Discover",active:o,as:u.b,to:"/discover"}),r.a.createElement(me.a.Menu,{position:"right"},r.a.createElement(pe.a,{id:"settingDropdown",item:!0,text:"Setting"},r.a.createElement(pe.a.Menu,null,r.a.createElement(pe.a.Item,{id:"accountSettingItem",as:u.b,to:"/setting"},"Account setting"),r.a.createElement(pe.a.Item,null,r.a.createElement(h.a,{id:"logoutButton",onClick:e.logout},r.a.createElement(u.b,{to:"/login"},"Logout"))))))):r.a.createElement(me.a,{tabular:!0},r.a.createElement(me.a.Item,{id:"loginMenu",name:"Login",active:t,as:u.b,to:"/login"}),r.a.createElement(me.a.Item,{id:"registerMenu",name:"Register",active:n,as:u.b,to:"/register"}))}))),ge={checkUserNameExisted:B,changeBasicInfo:function(e,t,n){return function(){var a=Object(p.a)(m.a.mark((function a(r){var c,o,i,u,l;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(c={newUserName:t},null===n){a.next=8;break}return a.next=4,k.uploadFile(n);case 4:o=a.sent,i=o.data[0],console.log("suc model",o.data[0]),c=R({},c,{newPicture:i});case 8:return a.next=10,U.changeBasicInfo(e,c);case 10:u=a.sent,l=u.data,A(l),r({type:"UPDATE_USER_INFO",updatedUser:l});case 14:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},changePwd:function(e,t,n){return function(){var a=Object(p.a)(m.a.mark((function a(r){var c,o,i;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c={pwd:t,newPwd:n},a.next=3,U.changePwd(e,c);case 3:o=a.sent,i=o.data,A(i),r({type:"UPDATE_USER_INFO",updatedUser:i});case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},setNotification:F},Ee=Object(i.b)((function(e){return{user:e.user}}),ge)((function(e){var t=w("text",e.user.userName),n=G(t.value,500),c=w("password"),o=w("password"),i=w("password"),u=Object(a.useState)(null),l=Object(b.a)(u,2),s=l[0],E=l[1],v=Object(a.useState)(""),O=Object(b.a)(v,2),x=O[0],y=O[1];Object(a.useEffect)((function(){n&&function(){var t=Object(p.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.checkUserNameExisted(n);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[n]);var j=function(){var n=Object(p.a)(m.a.mark((function n(a){var r;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),r=null,null!==s&&(r=new FormData).append("file",s),n.prev=3,n.next=6,e.changeBasicInfo(e.user.id,t.value,r);case 6:e.setNotification({message:"You have changed your basic information",error:!1}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(3),e.setNotification({message:"Fail to change basic information",error:!0});case 12:case"end":return n.stop()}}),n,null,[[3,9]])})));return function(e){return n.apply(this,arguments)}}(),N=function(){var t=Object(p.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,e.changePwd(e.user.id,c.value,o.value);case 4:e.setNotification({message:"You have changed your password",error:!1}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),e.setNotification({message:"Fail to change password, please make sure that your old password is correct",error:!0});case 10:c.clear(),o.clear(),i.clear();case 13:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}(),k=e.user.userNameExisted&&t.value!==e.user.userName||t.value.length<3||t.value.length>255,I=o.value.length<3||o.value.length>255||o.value!==i.value;return r.a.createElement(f.a,{textAlign:"center",style:{height:"100vh"},verticalAlign:"middle"},r.a.createElement(f.a.Column,{style:{maxWidth:450}},r.a.createElement(d.a,{as:"h2",color:"teal",textAlign:"center"},"Account Setting"),r.a.createElement(d.a,{as:"h3",color:"teal",textAlign:"center"},"Basic information"),r.a.createElement(g.a,{onSubmit:j},r.a.createElement(g.a.Field,null,r.a.createElement("label",null,"User name"),r.a.createElement("input",Object.assign({id:"newUserNameField"},t,{clear:"clear"})),r.a.createElement(q,{fieldName:"Username",input:t.value,minLength:3,maxLength:255,extraRequirement:!e.user.userNameExisted||t.value===e.user.userName,extraErrorMessage:"User name is already existed"})),r.a.createElement(g.a.Field,null,r.a.createElement("label",null,"Change head portrait"),r.a.createElement(g.a.Input,{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0];E(t),y(URL.createObjectURL(t))}}),r.a.createElement($.a,{src:""!==x?x:e.user.picture,size:"small"})),r.a.createElement(h.a,{id:"saveBIChangeButton",color:"teal",fluid:!0,size:"large",disabled:k},"Save basic information changes")),r.a.createElement(d.a,{as:"h3",color:"teal",textAlign:"center"},"Password"),r.a.createElement(g.a,{onSubmit:N},r.a.createElement(g.a.Field,null,r.a.createElement("label",null,"Current password"),r.a.createElement("input",Object.assign({id:"oldPwdField",placeholder:"current password"},c,{clear:"clear"}))),r.a.createElement(g.a.Field,null,r.a.createElement("label",null,"New password"),r.a.createElement("input",Object.assign({id:"newPwdField",placeholder:"new password"},o,{clear:"clear"})),r.a.createElement(q,{fieldName:"Password",input:o.value,minLength:3,maxLength:255})),r.a.createElement(g.a.Field,null,r.a.createElement("label",null,"Confirm new password"),r.a.createElement("input",Object.assign({id:"pwdConfirmField",placeholder:"new password confirmation"},i,{clear:"clear"}))),r.a.createElement(q,{fieldName:"Password confirmation",input:i.value,extraRequirement:o.value===i.value,extraErrorMessage:"Confirmation does not match the password"}),r.a.createElement(h.a,{id:"pwdSaveButton",color:"teal",fluid:!0,size:"large",disabled:I},"Save new password"))))})),he=n(463),ve={},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER_INFO":return t.checkedUser;default:return e}},we=n(466),Oe=function(e){return r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement(f.a.Row,{columns:3},e.images.map((function(e){return r.a.createElement(f.a.Column,{key:e},r.a.createElement(ee,{image:e}))})))))},xe=function(e){var t=e.blog,n=t.images.map((function(e){return e.url}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(we.a,null,r.a.createElement(we.a.Avatar,{src:t.user.picture,style:{marginGight:"0px"}}),r.a.createElement(we.a.Author,null,r.a.createElement(u.b,{to:"/profile/".concat(t.userId,"/0")},t.user.userName)),r.a.createElement(we.a.Content,null,r.a.createElement(we.a.Metadata,null,r.a.createElement("div",null,t.createdAt)),r.a.createElement(we.a.Text,null,t.content,r.a.createElement(Oe,{images:n})))))},ye=function(e){return r.a.createElement("div",null,r.a.createElement(we.a.Group,null,e.blogList.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(xe,{blog:e}))}))))},je={getBlogsByUser:function(e,t){return function(){var n=Object(p.a)(m.a.mark((function n(a){var r,c;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ne.getBlogsByUser(e,t);case 2:r=n.sent,c=r.data,console.log("blogList",c),a({type:"GET_BLOGS_BY_USER",blogList:c});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},getUserInfo:function(e){return function(){var t=Object(p.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.getUserInfo(e);case 2:a=t.sent,n({type:"GET_USER_INFO",checkedUser:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},Ne=Object(i.b)((function(e){return{user:e.user,blog:e.blog,users:e.users}}),je)((function(e){var t=e.userId,n=e.isMe,c=function(){var n=Object(p.a)(m.a.mark((function n(){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.getBlogsByUser(t,0);case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=Object(p.a)(m.a.mark((function n(){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.getUserInfo(t);case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){c(),o()}),[t]),e.blog.blogList?r.a.createElement("div",null,r.a.createElement("div",{style:{float:"left",width:"100%",marginRight:"-300px"}},0===e.blog.blogList.length?r.a.createElement("div",null,"No blog",r.a.createElement(he.a,null)):r.a.createElement(ye,{blogList:e.blog.blogList})),r.a.createElement("div",{style:{float:"right"}},r.a.createElement("div",null," ",r.a.createElement("span",null,r.a.createElement($.a,{src:e.users.picture,verticalAlign:"middle",size:"tiny"}),r.a.createElement("h2",{style:{display:"inline"}},n?r.a.createElement("span",null,"Me"):r.a.createElement("span",null,e.users.userName)))),r.a.createElement(E.a.Group,{compact:!0},n&&r.a.createElement(E.a,null,"@Me ()"),r.a.createElement(E.a,null,r.a.createElement("h3",null,"Follower"),r.a.createElement("p",null,"follower1"),r.a.createElement("p",null,"follower2")),r.a.createElement(E.a,null,r.a.createElement("h3",null,"Follow"),r.a.createElement("p",null,"aaa"),r.a.createElement("p",null,"bbb"))))):null})),ke=Object(i.b)((function(e){return{user:e.user}}))((function(e){return e.user.token?r.a.createElement(l.a,{to:"/home"}):r.a.createElement("h1",null,"Welcome to our Microblog Platform!")})),Ie={initUser:function(){return function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=window.localStorage.getItem(C))&&(a=JSON.parse(n),k.setToken(a.token),t({type:"SET_USER",loggedInUser:a}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},Se=Object(i.b)((function(e){return{user:e.user}}),Ie)((function(e){return Object(a.useEffect)((function(){e.initUser()}),[]),r.a.createElement("div",{className:"App",style:{textAlign:"left"}},r.a.createElement(X,null),r.a.createElement(u.a,null,r.a.createElement(de,null),r.a.createElement(l.d,null,r.a.createElement(le,{path:"/home",component:ie}),r.a.createElement(le,{path:"/profile/:userId/:pageIndex",component:function(t){var n=t.match;return r.a.createElement(Ne,{userId:n.params.userId,isMe:e.user.id===Number(n.params.userId)})}}),r.a.createElement(le,{path:"/setting",component:Ee}),r.a.createElement(l.b,{exact:!0,path:"/",render:function(){return r.a.createElement(ke,null)}}),r.a.createElement(l.b,{path:"/login",render:function(e){return r.a.createElement("div",null,r.a.createElement(z,{history:e}))}}),r.a.createElement(l.b,{path:"/register",render:function(e){return r.a.createElement("div",null,r.a.createElement(W,{history:e}))}}),r.a.createElement(l.b,{component:se}))))})),Ue=(n(450),n(69)),Pe=n(252),Re=n(253),Ce=n(254),Te=n.n(Ce),Ae=Object(Ue.combineReducers)({user:_,notification:D,blog:ce,users:be}),Be=Object(Ue.createStore)(Ae,Object(Re.composeWithDevTools)(Object(Ue.applyMiddleware)(Pe.a,(function(e){return function(t){return function(n){var a=localStorage.getItem(C)&&JSON.parse(localStorage.getItem(C))&&JSON.parse(localStorage.getItem(C)).token;a&&Te()(a).exp<Date.now()/1e3&&(e.dispatch(L()),window.alert("Your session expired, please login again")),t(n)}}}))));o.a.render(r.a.createElement(i.a,{store:Be},r.a.createElement(Se,null)),document.getElementById("root"))}},[[263,1,2]]]);
//# sourceMappingURL=main.c090ea0d.chunk.js.map